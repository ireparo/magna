import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * Favicon: "M" mayúscula serif cocoa sobre cream — siguiendo la marca MAGNA
 * (que usa serif all-caps). Para 32×32 el wordmark completo no es legible,
 * así que mostramos solo la inicial con un acento (rule fina) que evoca
 * el tagline subrayado del logo principal.
 */
export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1px",
          background: "#FFFCF6",
          color: "#2A1F18",
          fontFamily: "Georgia, serif",
          borderRadius: "5px",
        }}
      >
        <span
          style={{
            fontSize: "21px",
            fontWeight: 500,
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          M
        </span>
        <span
          style={{
            width: "10px",
            height: "1px",
            background: "#2A1F18",
            opacity: 0.6,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
