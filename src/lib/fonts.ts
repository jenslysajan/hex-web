import { Space_Grotesk, Inter, JetBrains_Mono, Nunito } from "next/font/google";

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["900"],
  display: "swap",
});
