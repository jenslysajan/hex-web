"use client";

import { motion } from "framer-motion";

const SHAPES = [
  { type: "hexagon", size: 80, x: "10%", y: "20%", delay: 0 },
  { type: "circle", size: 50, x: "80%", y: "15%", delay: 1.5 },
  { type: "hexagon", size: 60, x: "70%", y: "70%", delay: 3 },
  { type: "circle", size: 40, x: "20%", y: "75%", delay: 2 },
  { type: "hexagon", size: 45, x: "50%", y: "40%", delay: 0.8 },
];

function HexagonShape({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <polygon
        points="50,2 95,25 95,75 50,98 5,75 5,25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

const FUTURE_PRODUCTS = [
  { title: "Smart Panels", hint: "Wall-mounted ambient light panels" },
  { title: "Desk Lamp", hint: "Adaptive lighting for focus and chill" },
  { title: "Outdoor Strip", hint: "Weatherproof. Built for Indian monsoons." },
];

export default function WhatsComingSection() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-24 md:px-10">
      {/* Floating CSS shapes */}
      {SHAPES.map((shape, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute text-hex-gray-700"
          style={{ left: shape.x, top: shape.y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        >
          {shape.type === "hexagon" ? (
            <HexagonShape size={shape.size} />
          ) : (
            <div
              className="rounded-full border border-current"
              style={{ width: shape.size, height: shape.size }}
            />
          )}
        </motion.div>
      ))}

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.h2
          className="font-heading text-3xl font-bold text-white md:text-5xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          LED strips are just
          <br />
          <span className="text-hex-red">the beginning.</span>
        </motion.h2>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {FUTURE_PRODUCTS.map((product, i) => (
            <motion.div
              key={product.title}
              className="group rounded-2xl border border-hex-gray-800 bg-hex-gray-900/50 p-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Silhouette placeholder */}
              <div className="mx-auto mb-4 h-24 w-24 rounded-xl bg-hex-gray-800/80" />
              <h3 className="font-heading text-lg font-semibold text-white">
                {product.title}
              </h3>
              <p className="mt-1 text-sm text-hex-gray-400">{product.hint}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
