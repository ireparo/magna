"""Genera un contact sheet numerado de todas las fotos descargadas."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

SRC = Path("C:/Users/Edgar/Downloads/magna-pictime")
OUT = Path("C:/Users/Edgar/Downloads/magna-pictime-contact-sheet.jpg")

files = sorted(SRC.glob("*.jpg"))
print(f"Fotos: {len(files)}")

cols = 8
rows = (len(files) + cols - 1) // cols
thumb_w, thumb_h = 220, 330  # 2:3 ratio
gap = 10
label_h = 30

W = cols * thumb_w + (cols + 1) * gap
H = rows * (thumb_h + label_h) + (rows + 1) * gap
print(f"Sheet: {W}x{H}")

sheet = Image.new("RGB", (W, H), (249, 242, 231))  # cream
draw = ImageDraw.Draw(sheet)
try:
    font = ImageFont.truetype("arial.ttf", 18)
except OSError:
    font = ImageFont.load_default()

for i, f in enumerate(files):
    img = Image.open(f).convert("RGB")
    img.thumbnail((thumb_w, thumb_h), Image.LANCZOS)
    col = i % cols
    row = i // cols
    x = gap + col * (thumb_w + gap) + (thumb_w - img.width) // 2
    y = gap + row * (thumb_h + label_h + gap) + (thumb_h - img.height) // 2
    sheet.paste(img, (x, y))
    # Número
    label_y = gap + row * (thumb_h + label_h + gap) + thumb_h + 4
    label_x = gap + col * (thumb_w + gap) + 4
    draw.text((label_x, label_y), f"{i+1:03d}  {f.stem}", fill=(74, 52, 38), font=font)

# Si el sheet es muy alto, lo reducimos manteniendo aspect (max altura 4000)
if sheet.height > 4000:
    ratio = 4000 / sheet.height
    sheet = sheet.resize((int(sheet.width * ratio), 4000), Image.LANCZOS)
sheet.save(OUT, quality=82, optimize=True)
print(f"Saved: {OUT} ({OUT.stat().st_size // 1024} KB)")
