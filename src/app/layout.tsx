import type { Metadata } from "next";
import { spaceGrotesk, inter, jetbrainsMono, nunito } from "@/lib/fonts";
import GSAPProvider from "@/components/animations/GSAPProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hex — Cool Tech for India",
  description:
    "Hex is an Indian creative tech brand. LED strips, smart lights, and ambient tech — designed and built in India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} ${nunito.variable}`}
    >
      <body className="bg-background text-foreground antialiased">
        <GSAPProvider>{children}</GSAPProvider>
      </body>
    </html>
  );
}
