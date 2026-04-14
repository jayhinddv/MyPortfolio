import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f7f9fc",
          color: "#10141f",
          padding: 72,
          fontFamily: "Arial",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 28, fontWeight: 700 }}>{siteConfig.name}</div>
          <div style={{ fontSize: 22, color: "#1f6feb" }}>Node.js | React | PostgreSQL | Redis</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, lineHeight: 1.05, fontWeight: 800, letterSpacing: "-0.05em", maxWidth: 900 }}>
            Backend-heavy full-stack systems engineer.
          </div>
          <div style={{ marginTop: 30, fontSize: 28, lineHeight: 1.35, color: "#566174", maxWidth: 920 }}>
            APIs, real-time workflows, distributed jobs, Docker deployments, and production performance.
          </div>
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 22 }}>
          {["CRM systems", "Redis queues", "PostgreSQL performance", "Call center workflows"].map((item) => (
            <div key={item} style={{ border: "1px solid #d9e0ea", background: "white", borderRadius: 8, padding: "12px 18px" }}>
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
