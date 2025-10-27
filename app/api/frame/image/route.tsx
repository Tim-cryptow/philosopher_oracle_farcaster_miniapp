import React from "react";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const text = searchParams.get("text") || "Ask me anything.";

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          color: "white",
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px",
          textAlign: "center",
        }}
      >
        🌀 {text}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
