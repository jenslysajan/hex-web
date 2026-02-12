"use client";

import { useState } from "react";
import PlaceholderImage from "./PlaceholderImage";
import Button from "./Button";

const COLOR_OPTIONS = [
  { name: "Warm White", hex: "#FFD580" },
  { name: "Cool White", hex: "#E0E8FF" },
  { name: "RGB", hex: "#D92B2B" },
];

export default function ProductCard() {
  const [selectedColor, setSelectedColor] = useState(COLOR_OPTIONS[0].hex);

  return (
    <div className="border-hex-gray-800 bg-hex-gray-900 w-full max-w-sm rounded-2xl border p-6">
      <PlaceholderImage label="Hex LED Strip" mood="cool" className="w-full" />

      <div className="mt-5">
        <h3 className="font-heading text-xl font-bold text-white">Hex LED Strip</h3>
        <p className="text-hex-gray-400 mt-1 text-sm">
          5m &middot; Adhesive-backed &middot; App-controlled
        </p>
      </div>

      {/* Color swatches */}
      <div className="mt-4 flex items-center gap-2">
        {COLOR_OPTIONS.map((opt) => (
          <button
            key={opt.hex}
            onClick={() => setSelectedColor(opt.hex)}
            className="h-6 w-6 rounded-full border-2 transition-transform hover:scale-110"
            style={{
              backgroundColor: opt.hex,
              borderColor: selectedColor === opt.hex ? "white" : "transparent",
            }}
            aria-label={opt.name}
          />
        ))}
        <span className="text-hex-gray-400 ml-2 text-xs">
          {COLOR_OPTIONS.find((o) => o.hex === selectedColor)?.name}
        </span>
      </div>

      {/* Price */}
      <p className="font-heading mt-4 text-2xl font-bold text-white">
        &#x20B9;2,500 <span className="text-hex-gray-400 text-sm font-normal">— &#x20B9;4,000</span>
      </p>

      <Button disabled className="mt-5 w-full">
        Coming Soon
      </Button>
    </div>
  );
}
