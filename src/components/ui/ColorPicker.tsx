"use client";

import { useState } from "react";

const SWATCHES = [
  { name: "Red", hex: "#D92B2B" },
  { name: "Blue", hex: "#2B6DD9" },
  { name: "Green", hex: "#2BD94B" },
  { name: "Purple", hex: "#8B2BD9" },
  { name: "Orange", hex: "#D9842B" },
  { name: "Cyan", hex: "#2BD9D9" },
];

interface ColorPickerProps {
  value: string;
  onChange: (color: string) => void;
}

export default function ColorPicker({ value, onChange }: ColorPickerProps) {
  const [hue, setHue] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {/* Preset swatches */}
      <div className="flex gap-2">
        {SWATCHES.map((swatch) => (
          <button
            key={swatch.hex}
            onClick={() => onChange(swatch.hex)}
            className="h-8 w-8 rounded-full border-2 transition-transform hover:scale-110"
            style={{
              backgroundColor: swatch.hex,
              borderColor:
                value === swatch.hex ? "white" : "transparent",
            }}
            aria-label={swatch.name}
          />
        ))}
      </div>

      {/* Hue slider */}
      <div className="flex items-center gap-3">
        <input
          type="range"
          min="0"
          max="360"
          value={hue}
          onChange={(e) => {
            const h = parseInt(e.target.value);
            setHue(h);
            onChange(`hsl(${h}, 80%, 55%)`);
          }}
          className="h-2 w-full cursor-pointer appearance-none rounded-full"
          style={{
            background:
              "linear-gradient(to right, hsl(0,80%,55%), hsl(60,80%,55%), hsl(120,80%,55%), hsl(180,80%,55%), hsl(240,80%,55%), hsl(300,80%,55%), hsl(360,80%,55%))",
          }}
          aria-label="Hue slider"
        />
      </div>
    </div>
  );
}
