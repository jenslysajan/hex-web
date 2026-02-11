"use client";

import { motion } from "framer-motion";
import ProductCard from "@/components/ui/ProductCard";

export default function BuySection() {
  return (
    <section className="px-6 py-24 md:px-10" id="buy">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="text-center font-heading text-3xl font-bold text-white md:text-5xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get yours
        </motion.h2>
        <p className="mx-auto mt-4 max-w-md text-center text-hex-gray-400">
          Our first product. Designed and assembled in India. Shipping soon.
        </p>

        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ProductCard />
        </motion.div>
      </div>
    </section>
  );
}
