"""
Selecciona 15 fotos del set descargado de pic-time, las optimitza y les
posa nom semàntic dins de magna/public/images/.

Mapping per índex (1-based, ordre alfabètic) cap a fitxer destí.
Si en alguna foto el contingut no encaixa, ajustar l'índex i tornar a executar.
"""
from pathlib import Path
from PIL import Image, ImageOps

SRC = Path("C:/Users/Edgar/Downloads/magna-pictime")
DST = Path("public/images")

# Index (1-based) → filename
PICKS = {
    # Hero principal — sessió de tractament
    53: "hero-treatment.jpg",          # sobreescriu el fiso3 actual

    # Equip — la fisio (única membre real coneguda)
    11: "team/jessica.jpg",

    # Service cards (6)
    47: "services/fisioterapia.jpg",      # mans tractant
    36: "services/exercici.jpg",          # demostració de moviment
    51: "services/puncio.jpg",
    49: "services/terapia-manual.jpg",
    65: "services/readaptacio.jpg",       # sala amb material
    12: "services/sol-pelvia.jpg",        # retrat discret

    # El centre — interiors
    60: "centre/sala-1.jpg",
    65: "centre/sala-2.jpg",
    67: "centre/sala-3.jpg",
    70: "centre/sala-4.jpg",

    # Footer
    86: "fachada.jpg",

    # Extras útils
    1: "centre/recepcio.jpg",             # Jessica davant logo de paret
    22: "team/jessica-portrait.jpg",      # retrat alternatiu
}

files = sorted(SRC.glob("*.jpg"))
print(f"Source: {len(files)} fotos")

for idx, name in PICKS.items():
    if idx > len(files):
        print(f"  SKIP {name}: index {idx} fora de rang")
        continue
    src = files[idx - 1]
    dst = DST / name
    dst.parent.mkdir(parents=True, exist_ok=True)

    img = Image.open(src).convert("RGB")
    img = ImageOps.exif_transpose(img)

    # Resize a max 1200 d'amplada (mantenint l'aspect)
    max_w = 1200
    if img.width > max_w:
        ratio = max_w / img.width
        img = img.resize((max_w, int(img.height * ratio)), Image.LANCZOS)

    img.save(dst, format="JPEG", quality=85, progressive=True, optimize=True)
    print(f"  {name:40s}  {img.size}  ({dst.stat().st_size // 1024}KB)  from #{idx:03d} {src.name}")

print("\nDone.")
