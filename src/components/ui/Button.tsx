"use client";

import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-heading font-semibold text-sm tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-hex-red/50 disabled:opacity-40 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-hex-red text-white hover:bg-hex-red-dark",
    outline: "border border-hex-gray-700 text-foreground hover:border-hex-red hover:text-hex-red",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
