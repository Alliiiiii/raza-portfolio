import { ImageResponse } from "next/og";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Img() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "linear-gradient(135deg,#05070d,#0b1226)", color: "#eef2fa", fontSize: 96 }}>Raza Ali<div style={{ fontSize: 36, color: "#22e3ff", marginTop: 20 }}>Engineering a more secure digital future.</div></div>, size);
}
