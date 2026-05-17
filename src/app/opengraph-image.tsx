import { siteCopy } from "@/content/site-copy";
import {
  heroVisualOgBackground,
  heroVisualOgTextColor,
} from "@/lib/hero-styles";
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = siteCopy.hero.visual.alt;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  const { phrase } = siteCopy.hero.visual;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: heroVisualOgBackground,
          padding: 64,
        }}
      >
        <p
          style={{
            margin: 0,
            maxWidth: 900,
            fontSize: 56,
            fontWeight: 600,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            textAlign: "center",
            color: heroVisualOgTextColor,
          }}
        >
          {phrase}
        </p>
      </div>
    ),
    { ...size },
  );
}
