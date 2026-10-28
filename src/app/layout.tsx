import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
const url = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.vercel.app";
export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: "Raza Ali — Cybersecurity & IT",
  description: "Portfolio of Raza Ali, BSc IT student at the University of Sindh focused on cybersecurity.",
  openGraph: { title: "Raza Ali — Cybersecurity & IT", description: "Engineering a more secure digital future.", type: "website", url },
  twitter: { card: "summary_large_image" },
};
export default function Root({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={inter.className}>{children}</body></html>;
}
