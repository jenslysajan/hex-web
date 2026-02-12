import { Plus_Jakarta_Sans, JetBrains_Mono, Nunito } from "next/font/google";

export const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const plusJakartaHeading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["700", "800"],
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
