import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const dynamic = "force-static";

export const alt =
  "MAGNA Fisioteràpia — Mou-te amb confiança. Centre de fisioteràpia i exercici terapèutic a Lleida.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// El logo es vector PDF→PNG embebido como data URL en build time
function loadLogoDataUrl(): string {
  const logoPath = path.join(process.cwd(), "public", "brand", "magna-logo.png");
  const buffer = fs.readFileSync(logoPath);
  return `data:image/png;base64,${buffer.toString("base64")}`;
}

export default async function OpengraphImage() {
  const logoSrc = loadLogoDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(ellipse 70% 45% at 15% 0%, rgba(217,196,173,0.65), transparent 65%), radial-gradient(ellipse 60% 45% at 90% 10%, rgba(201,154,138,0.40), transparent 65%), #F9F2E7",
          fontFamily: "Georgia, serif",
          color: "#2A1F18",
        }}
      >
        {/* Top eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            fontSize: "20px",
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#8B7A6B",
            fontFamily: "system-ui",
          }}
        >
          <span>Núm. 01</span>
          <span style={{ width: "60px", height: "1px", background: "rgba(74,52,38,0.25)" }} />
          <span>Lleida · 2026</span>
        </div>

        {/* Big serif headline + claim */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "128px",
              fontWeight: 500,
              letterSpacing: "-0.035em",
              lineHeight: 0.94,
              color: "#2A1F18",
            }}
          >
            <span>Mou-te</span>
            <span style={{ fontStyle: "italic", color: "#8B6F5A", whiteSpace: "nowrap" }}>amb confiança.</span>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: "30px",
              fontWeight: 400,
              lineHeight: 1.3,
              maxWidth: "900px",
              color: "rgba(74,52,38,0.85)",
              fontFamily: "system-ui",
            }}
          >
            Fisioteràpia i exercici terapèutic. Et tractem i t&apos;ensenyem a moure&apos;t millor.
          </div>
        </div>

        {/* Bottom: official MAGNA logo + domain */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            alt="MAGNA Fisioteràpia"
            width={380}
            style={{ display: "block" }}
          />

          <div
            style={{
              display: "flex",
              fontSize: "22px",
              fontFamily: "system-ui",
              color: "rgba(74,52,38,0.55)",
              letterSpacing: "0.05em",
            }}
          >
            magnafisio.cat
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
