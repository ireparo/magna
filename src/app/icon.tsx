import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F9F2E7",
          color: "#4A3426",
          fontFamily: "Georgia, serif",
          fontSize: "26px",
          fontWeight: 600,
          fontStyle: "italic",
          letterSpacing: "-0.05em",
          borderRadius: "6px",
        }}
      >
        M
      </div>
    ),
    { ...size }
  );
}
