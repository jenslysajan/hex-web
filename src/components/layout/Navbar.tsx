"use client";

import Link from "next/link";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [pastHero, setPastHero] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setPastHero(latest > window.innerHeight * 0.8);
  });

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-10"
      animate={{
        opacity: pastHero ? 1 : 0.15,
        backgroundColor: pastHero
          ? "rgba(10, 10, 10, 0.85)"
          : "rgba(10, 10, 10, 0)",
        backdropFilter: pastHero ? "blur(12px)" : "blur(0px)",
      }}
      transition={{ duration: 0.4 }}
    >
      <Link
        href="/"
        className="font-heading text-xl font-bold tracking-tight text-white"
      >
        hex
      </Link>
      <div className="flex items-center gap-6">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-body text-hex-gray-300 transition-colors hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
