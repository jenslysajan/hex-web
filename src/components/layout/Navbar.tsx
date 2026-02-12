"use client";

import Link from "next/link";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [pastHero, setPastHero] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show nav when product reveal is ~40% visible (70% of the 200vh hero scroll range)
    setPastHero(latest > window.innerHeight * 1.4);
  });

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-10"
      style={{ pointerEvents: pastHero ? "auto" : "none" }}
      animate={{ opacity: pastHero ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Link
        href="/"
        className="font-display text-xl font-black tracking-tight text-white"
      >
        HEX
      </Link>
    </motion.nav>
  );
}
