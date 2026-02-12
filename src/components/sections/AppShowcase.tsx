"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ColorPicker from "@/components/ui/ColorPicker";

export default function AppShowcase() {
  const [color, setColor] = useState("#D92B2B");

  return (
    <section
      className="relative overflow-hidden px-6 py-24 md:px-10"
      style={{
        background: `radial-gradient(ellipse at 50% 80%, ${color}15 0%, #0A0A0A 70%)`,
      }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="font-heading text-center text-3xl font-bold text-white md:text-5xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          One app. Total control.
        </motion.h2>
        <p className="text-hex-gray-400 mx-auto mt-4 max-w-lg text-center">
          Pick a color, set the mood. The Hex app gives you full control over your lights — scenes,
          schedules, and music sync.
        </p>

        <div className="mt-16 flex flex-col items-center gap-10 md:flex-row md:justify-center md:gap-16">
          {/* Phone mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Ambient glow behind phone */}
            <div
              className="absolute -inset-8 rounded-[3rem] opacity-30 blur-3xl transition-colors duration-500"
              style={{ backgroundColor: color }}
            />

            {/* Phone frame */}
            <div className="border-hex-gray-700 bg-hex-gray-900 relative h-[520px] w-[260px] rounded-[2.5rem] border-2 p-3 shadow-2xl">
              {/* Screen */}
              <div className="bg-hex-black flex h-full flex-col overflow-hidden rounded-[2rem]">
                {/* Status bar */}
                <div className="flex items-center justify-between px-5 pt-3 pb-2">
                  <span className="text-hex-gray-400 font-mono text-[10px]">9:41</span>
                  <div className="flex gap-1">
                    <div className="bg-hex-gray-400 h-1.5 w-3 rounded-sm" />
                    <div className="bg-hex-gray-400 h-1.5 w-1.5 rounded-full" />
                  </div>
                </div>

                {/* App header */}
                <div className="px-5 pt-2 pb-4">
                  <p className="font-heading text-lg font-bold text-white">hex</p>
                  <p className="text-hex-gray-400 text-[11px]">Living Room &middot; 1 strip</p>
                </div>

                {/* Color preview */}
                <div
                  className="mx-5 flex flex-1 items-end rounded-2xl p-4 transition-colors duration-500"
                  style={{
                    background: `linear-gradient(180deg, ${color}40 0%, ${color}15 100%)`,
                  }}
                >
                  <div className="w-full">
                    <div
                      className="h-1.5 w-full rounded-full transition-colors duration-500"
                      style={{ backgroundColor: color }}
                    />
                    <div className="mt-3 flex justify-between">
                      <span className="text-hex-gray-300 text-[10px]">Brightness</span>
                      <span className="text-hex-gray-300 text-[10px]">85%</span>
                    </div>
                  </div>
                </div>

                {/* Bottom nav mock */}
                <div className="flex justify-around px-5 py-4">
                  {["Lights", "Scenes", "Music"].map((tab) => (
                    <span
                      key={tab}
                      className={`text-[10px] ${
                        tab === "Lights" ? "text-white" : "text-hex-gray-400"
                      }`}
                    >
                      {tab}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Color picker */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="font-heading text-xl font-semibold text-white">Pick a color</h3>
            <ColorPicker value={color} onChange={setColor} />
            <p className="text-hex-gray-400 max-w-xs text-sm">
              Try changing the color — watch the phone and ambient glow respond in real time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
