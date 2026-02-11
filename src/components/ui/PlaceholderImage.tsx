"use client";

type Mood = "dark" | "warm" | "cool";

const gradients: Record<Mood, string> = {
  dark: "from-hex-gray-900 via-hex-gray-800 to-hex-black",
  warm: "from-amber-950 via-orange-950 to-hex-black",
  cool: "from-indigo-950 via-blue-950 to-hex-black",
};

interface PlaceholderImageProps {
  label?: string;
  mood?: Mood;
  className?: string;
  aspectRatio?: string;
}

export default function PlaceholderImage({
  label,
  mood = "dark",
  className = "",
  aspectRatio = "aspect-video",
}: PlaceholderImageProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${gradients[mood]} ${aspectRatio} ${className}`}
    >
      {label && (
        <span className="absolute inset-0 flex items-center justify-center text-sm text-hex-gray-400 font-mono">
          {label}
        </span>
      )}
    </div>
  );
}
