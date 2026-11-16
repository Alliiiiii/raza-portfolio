import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono-var",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://raza-portfolio-lemon.vercel.app"),
  title: "Raza Ali — Cybersecurity & ML",
  description:
    "Portfolio of Raza Ali, Cybersecurity & ML enthusiast and Python developer. PhishLens, data tooling, and security projects.",
  keywords: ["Raza Ali", "Cybersecurity", "Machine Learning", "Python", "PhishLens"],
  authors: [{ name: "Raza Ali" }],
  openGraph: {
    title: "Raza Ali — Cybersecurity & ML",
    description: "Cybersecurity & ML enthusiast. Python developer. Builder of PhishLens.",
    type: "website",
    images: ["/screenshot.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raza Ali — Cybersecurity & ML",
    description: "Cybersecurity & ML enthusiast. Python developer. Builder of PhishLens.",
    images: ["/screenshot.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${space.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-bg text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
