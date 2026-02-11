export const BRAND = {
  name: "Hex",
  tagline: "Cool tech for India. Built here, by us.",
  description:
    "Hex is an Indian creative tech brand. We make LED strips, smart lights, and ambient tech — designed and built in India.",
  email: "hello@hexlights.in",
  instagram: "https://instagram.com/hexlights.in",
  price: { min: 2500, max: 4000, currency: "INR" },
} as const;

export const NAV_LINKS = [
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
] as const;
