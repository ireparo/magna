"""
Procesa el sello MAGNA (logo circular):
  1. Quita fondo blanco → transparente con anti-aliasing suave
  2. Recorta el bounding-box (trim whitespace)
  3. Genera 3 tamaños:
     - public/brand/magna-seal.png (600x600) decorativo
     - src/app/icon.png (32x32) favicon
     - src/app/apple-icon.png (180x180) Apple touch icon
"""
import sys
from pathlib import Path
from PIL import Image, ImageOps

SRC = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("C:/Users/Edgar/Downloads/WhatsApp Image 2026-04-27 at 17.29.01.jpeg")

img = Image.open(SRC).convert("RGBA")
print(f"Input: {img.size}")

# 1. Quitar fondo blanco con anti-aliasing suave
# Cada pixel: si es muy blanco, alpha=0; si es el color del sello, alpha=255; transición suave
data = img.getdata()
new = []
for r, g, b, a in data:
    # Luminancia perceptual
    lum = 0.299 * r + 0.587 * g + 0.114 * b
    if lum >= 245:
        # Casi blanco -> transparente
        new.append((r, g, b, 0))
    elif lum >= 200:
        # Borde anti-aliased -> alpha proporcional
        alpha = int(((245 - lum) / (245 - 200)) * 255)
        new.append((r, g, b, alpha))
    else:
        # Sólido -> 100%
        new.append((r, g, b, 255))
img.putdata(new)

# 2. Trim — encontrar bbox de pixeles no-transparentes
bbox = img.getbbox()
if bbox:
    img = img.crop(bbox)
    print(f"Trimmed: {img.size}")

# Margen perimetral 5% para que el círculo respire
pad = int(max(img.size) * 0.05)
img = ImageOps.expand(img, border=pad, fill=(0, 0, 0, 0))

def save_square(im: Image.Image, size: int, path: Path):
    """Cuadra y guarda a tamaño size×size con LANCZOS."""
    out = Image.new("RGBA", (max(im.size),) * 2, (0, 0, 0, 0))
    offset = ((max(im.size) - im.width) // 2, (max(im.size) - im.height) // 2)
    out.paste(im, offset, im)
    out = out.resize((size, size), Image.LANCZOS)
    path.parent.mkdir(parents=True, exist_ok=True)
    out.save(path, optimize=True)
    print(f"  {path}: {out.size} ({path.stat().st_size:,} bytes)")

print("Outputs:")
save_square(img, 600, Path("public/brand/magna-seal.png"))
save_square(img, 180, Path("src/app/apple-icon.png"))
save_square(img, 32, Path("src/app/icon.png"))
