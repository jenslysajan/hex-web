"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const LINES = [
  "We started Hex because Indian homes deserve better tech.",
  "Not the overpriced imports. Not the cheap stuff that dies in a month.",
  "Something in between — well-designed, reliable, and actually fun.",
  "We're a small team. We care about the details.",
  "LED strips are just the start.",
];

export default function Story() {
  return (
    <section className="scanlines relative px-6 py-24 md:px-10">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          className="font-heading text-hex-cream text-2xl font-bold md:text-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our story
        </motion.h2>

        <div className="mt-10 space-y-4">
          {LINES.map((line, i) => (
            <motion.p
              key={i}
              className="text-hex-cream-dark text-lg leading-relaxed md:text-xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.12,
                ease: "easeOut",
              }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Link
            href="/about"
            className="text-hex-red hover:text-hex-red-dark mt-10 inline-block text-sm font-semibold transition-colors"
          >
            Read more about us &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
