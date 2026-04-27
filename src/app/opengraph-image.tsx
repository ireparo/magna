import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt =
  "MAGNA Fisioteràpia — Mou-te amb confiança. Centre de fisioteràpia i exercici terapèutic a Lleida.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
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
        {/* Top: editorial eyebrow */}
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
          <span>Lleida · Fisioteràpia &amp; moviment</span>
        </div>

        {/* Middle: big serif headline + claim */}
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
            Fisioteràpia i exercici terapèutic. Et tractem i t'ensenyem a moure't millor.
          </div>
        </div>

        {/* Bottom: wordmark + tagline */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "56px",
                fontWeight: 500,
                letterSpacing: "-0.025em",
                color: "#2A1F18",
                lineHeight: 1,
              }}
            >
              <span>Magn</span>
              <span style={{ fontStyle: "italic", color: "#8B6F5A" }}>a</span>
            </div>
            <div
              style={{
                width: "1px",
                height: "32px",
                background: "rgba(74,52,38,0.30)",
              }}
            />
            <div
              style={{
                fontSize: "16px",
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#8B7A6B",
                fontFamily: "system-ui",
              }}
            >
              Fisioteràpia
            </div>
          </div>

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
