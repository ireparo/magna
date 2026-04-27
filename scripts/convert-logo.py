"""
Convierte el PDF del logo a SVG (vector) y PNGs en distintos tamaños/colores.

Uso: python scripts/convert-logo.py
Salidas a public/brand/:
  magna-logo.svg          (vector, fill cocoa #2A1F18)
  magna-logo-cream.svg    (vector, fill cream #FFFCF6 — para fondos cocoa)
  magna-logo.png          (raster 1200px de ancho, transparente, cocoa)
  magna-logo-cream.png    (raster 1200px, cream)
  magna-logo-square.png   (raster 600x600 con padding, cocoa transparente)
"""
from pathlib import Path
import re

import fitz  # pymupdf

PDF = Path("public/brand/Logo_Magna_principal_negre_CMYK.pdf")
OUT = Path("public/brand")

# Colores oficiales (de la skill brand-guide)
COCOA = "#2A1F18"      # Deep Brown — texto principal
CREAM = "#FFFCF6"      # Warm Off-White — fondo primario

doc = fitz.open(PDF)
page = doc[0]
print(f"Page: {page.rect.width}x{page.rect.height}pt")

# 1) Extraer SVG vectorial
svg = page.get_svg_image(matrix=fitz.Identity)

# El logo es monocromo; cualquier fill explícito en el SVG corresponde al
# único color del logo. Lo sustituimos por `currentColor` para poder
# tematizar desde CSS (cocoa en fondo cream, cream en fondo cocoa).
def to_currentcolor(svg: str) -> str:
    # Cualquier fill="#xxxxxx" en hex pasa a currentColor (asumiendo logo monocromo)
    s = re.sub(r'fill="#[0-9a-fA-F]{3,6}"', 'fill="currentColor"', svg)
    s = re.sub(r"fill='#[0-9a-fA-F]{3,6}'", 'fill="currentColor"', s)
    s = re.sub(r'fill="black"', 'fill="currentColor"', s, flags=re.IGNORECASE)
    return s

svg_themed = to_currentcolor(svg)
(OUT / "magna-logo.svg").write_text(svg_themed, encoding="utf-8")
print(f"Wrote magna-logo.svg ({len(svg_themed):,} bytes) — uses currentColor")

# Generamos també variants amb fill explícit per usar via <img>
svg_cocoa = svg_themed.replace('fill="currentColor"', f'fill="{COCOA}"')
svg_cream = svg_themed.replace('fill="currentColor"', f'fill="{CREAM}"')
(OUT / "magna-logo-cocoa.svg").write_text(svg_cocoa, encoding="utf-8")
(OUT / "magna-logo-cream.svg").write_text(svg_cream, encoding="utf-8")
print(f"Wrote magna-logo-cocoa.svg + magna-logo-cream.svg")

# 2) Render PNG transparente a 1200px de ancho
target_width = 1200
zoom = target_width / page.rect.width
pix = page.get_pixmap(matrix=fitz.Matrix(zoom, zoom), alpha=True)
pix.save(str(OUT / "magna-logo.png"))
print(f"Wrote magna-logo.png ({pix.width}x{pix.height})")

# Para PNG cream renderizamos una página intermedia con fills cambiados.
# Truco: usamos el SVG cream como página vía fitz: lo metemos en un PDF temporal.
tmp_pdf = OUT / "_tmp_cream.pdf"
tmp_doc = fitz.open()
tmp_page = tmp_doc.new_page(width=page.rect.width, height=page.rect.height)
tmp_page.insert_text((0, 0), "")  # noop; we use show_pdf_page instead
# Insertamos como imagen vector reescalando: render a partir del SVG cream
import xml.etree.ElementTree as ET  # noqa
# Fallback simple: para la versión cream usamos PIL con sustitución de pixels
from PIL import Image
img = Image.open(str(OUT / "magna-logo.png")).convert("RGBA")
data = img.getdata()
new_data = []
cream_rgb = (0xFF, 0xFC, 0xF6)
for px in data:
    r, g, b, a = px
    if a > 0:
        # Si el pixel es coloreado (no totalmente transparente), aplicamos cream
        new_data.append((*cream_rgb, a))
    else:
        new_data.append(px)
img.putdata(new_data)
img.save(str(OUT / "magna-logo-cream.png"))
print(f"Wrote magna-logo-cream.png")
tmp_doc.close()
if tmp_pdf.exists():
    tmp_pdf.unlink()

# 3) PNG cuadrado 600x600 con padding (para favicon o avatares)
square = Image.new("RGBA", (600, 600), (0, 0, 0, 0))
src = Image.open(str(OUT / "magna-logo.png")).convert("RGBA")
# Escalar para que entre con margen 10% en el cuadrado
margin = 60
maxw, maxh = 600 - 2 * margin, 600 - 2 * margin
ratio = min(maxw / src.width, maxh / src.height)
new_w, new_h = int(src.width * ratio), int(src.height * ratio)
src_resized = src.resize((new_w, new_h), Image.LANCZOS)
square.paste(src_resized, ((600 - new_w) // 2, (600 - new_h) // 2), src_resized)
square.save(str(OUT / "magna-logo-square.png"))
print(f"Wrote magna-logo-square.png (600x600)")

print("\nDone.")
