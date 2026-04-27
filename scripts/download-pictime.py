"""Descarga las URLs lowres extraídas del log de red de pic-time."""
import re
import sys
from pathlib import Path
from urllib.parse import urlparse
import urllib.request

LOG = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(
    "C:/Users/Edgar/.claude/projects/C--Users-Edgar-Documents-prueba-claude/cd776c41-78e5-4a74-8c34-44d3701b0a70/tool-results/mcp-plugin_playwright_playwright-browser_network_requests-1777319017655.txt"
)
OUT = Path("C:/Users/Edgar/Downloads/magna-pictime")
OUT.mkdir(exist_ok=True)

content = LOG.read_text(encoding="utf-8", errors="ignore")
urls = sorted(set(re.findall(r'https://[^"\s]+pictures/51/557[^"\s]+lowres[^"\s]+\.(?:jpe?g|png|webp)', content)))
print(f"Found {len(urls)} URLs")

ok = 0
fail = 0
for url in urls:
    name = urlparse(url).path.split("/")[-1]
    out = OUT / name
    if out.exists() and out.stat().st_size > 0:
        ok += 1
        continue
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=20) as resp:
            out.write_bytes(resp.read())
        ok += 1
    except Exception as e:
        print(f"FAIL {name}: {e}")
        fail += 1

print(f"\nDone: {ok} ok, {fail} failed.")
print(f"Saved to: {OUT}")
