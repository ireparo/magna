"""
Optimitza una imatge per ús web: redimensiona i comprimeix.
Uso: python scripts/optimize-image.py <input> <output> [--width 1000]
"""
import sys
from pathlib import Path
from PIL import Image

def optimize(input_path: Path, output_path: Path, max_width: int = 1000, quality: int = 85):
    img = Image.open(input_path)
    print(f"Input: {img.size} {img.mode} ({input_path.stat().st_size:,} bytes)")

    if img.mode in ("RGBA", "LA", "P"):
        # Aplanar transparencia con fondo cream MAGNA
        bg = Image.new("RGB", img.size, (249, 242, 231))
        if img.mode == "P":
            img = img.convert("RGBA")
        bg.paste(img, mask=img.split()[-1] if img.mode in ("RGBA", "LA") else None)
        img = bg

    if img.width > max_width:
        ratio = max_width / img.width
        new_h = int(img.height * ratio)
        img = img.resize((max_width, new_h), Image.LANCZOS)

    output_path.parent.mkdir(parents=True, exist_ok=True)
    img.save(output_path, quality=quality, optimize=True, progressive=True)
    print(f"Output: {img.size} ({output_path.stat().st_size:,} bytes)")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Uso: python scripts/optimize-image.py <input> <output> [--width 1000]")
        sys.exit(1)
    inp = Path(sys.argv[1])
    out = Path(sys.argv[2])
    width = 1000
    if "--width" in sys.argv:
        width = int(sys.argv[sys.argv.index("--width") + 1])
    optimize(inp, out, max_width=width)
