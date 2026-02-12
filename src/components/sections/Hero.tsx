"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const membraneRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLHeadingElement>(null);
  const noiseRef = useRef<HTMLDivElement>(null);
  const blackoutRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const hero = heroRef.current;
    const membrane = membraneRef.current;
    const text = textRef.current;
    const reveal = revealRef.current;
    const blackout = blackoutRef.current;
    const scrollHint = scrollHintRef.current;
    if (!hero || !membrane || !text || !reveal || !blackout) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: 0.3,
        anticipatePin: 1,
      },
    });

    if (scrollHint) {
      tl.to(scrollHint, { opacity: 0, duration: 0.05, ease: "none" }, 0);
    }

    const glow = glowRef.current;
    const noise = noiseRef.current;

    // Stage 1 (0 → 0.20): Membrane push + glow intensifies
    tl.to(
      membrane,
      { scale: 1.15, duration: 0.20, ease: "power1.in", force3d: true },
      0
    );
    if (glow) {
      tl.to(
        glow,
        { opacity: 1, duration: 0.20, ease: "power2.in" },
        0
      );
    }

    // Stage 2 (0.20 → 0.65): Text keeps expanding — no fade out!
    // Noise fades early since it doesn't look good zoomed in
    if (noise) {
      tl.to(
        noise,
        { opacity: 0, duration: 0.08, ease: "none" },
        0.20
      );
    }
    // Membrane (with text inside) scales massively — text stays fully visible
    tl.to(
      membrane,
      { scale: 18, duration: 0.45, ease: "power2.in", force3d: true },
      0.20
    );

    // Stage 3 (0.40 → 0.58): Black overlay fades in once we see the middle bar of E
    tl.to(
      blackout,
      { opacity: 1, duration: 0.18, ease: "power2.in" },
      0.40
    );

    // Stage 4 (0.58 → 0.88): Product reveal fades in on top of the black layer
    tl.to(
      reveal,
      { opacity: 1, duration: 0.30, ease: "power2.out" },
      0.58
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section aria-label="Hero">
      <div ref={heroRef} className="relative h-screen w-full overflow-hidden bg-hex-black">
        <div
          ref={membraneRef}
          className="absolute inset-0 flex items-center justify-center"
          style={{ willChange: "transform", transformOrigin: "51% 48.75%" }}
        >
          {/* Surface noise */}
          <div
            ref={noiseRef}
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "128px 128px",
            }}
          />

          {/* "HEX" — embossed base + neon glow layer */}
          <div ref={textRef} className="relative select-none">
            {/* Base emboss — always visible */}
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(8rem, 22vw, 20rem)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                lineHeight: 1,
                color: "#111",
                textShadow:
                  "2px 2px 4px rgba(0,0,0,0.9), -2px -1px 6px #00e5ff35, 1px -2px 6px #bf00ff30, -1px 1px 5px #00ff8828",
              }}
            >
              HEX
            </h1>
            {/* Bright neon glow — fades in via opacity for the "intensify" effect */}
            <h1
              ref={glowRef}
              aria-hidden="true"
              className="absolute inset-0 font-display opacity-0"
              style={{
                fontSize: "clamp(8rem, 22vw, 20rem)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                lineHeight: 1,
                color: "#111",
                textShadow:
                  "3px 3px 5px rgba(0,0,0,0.95), -3px -2px 14px #00e5ff90, -3px 1px 14px #bf00ff85, 2px -2px 12px #00ff8880, 0px 3px 12px #ff00aa70",
              }}
            >
              HEX
            </h1>
          </div>
        </div>

        {/* Black overlay — fades in when zoomed to just the E middle bar */}
        <div
          ref={blackoutRef}
          className="absolute inset-0 bg-hex-black opacity-0"
          style={{ zIndex: 2 }}
        />

        {/* Product reveal */}
        <div
          ref={revealRef}
          className="absolute inset-0 flex items-center bg-hex-black px-6 md:px-10 opacity-0"
          style={{ zIndex: 3 }}
        >
          <div className="mx-auto max-w-6xl w-full">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <PlaceholderImage
                label="LED strip on gaming desk"
                mood="cool"
                className="w-full"
              />
              <div>
                <h2 className="font-heading text-3xl font-bold text-white md:text-5xl">
                  Cool tech for India.
                  <br />
                  <span className="text-hex-red">Built here, by us.</span>
                </h2>
                <p className="mt-6 max-w-md text-base leading-relaxed text-hex-gray-300">
                  We&apos;re not importing generic strips and slapping a logo on
                  them. Hex LED strips are designed for Indian homes, Indian
                  voltages, and Indian weather — with an app that actually works.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          ref={scrollHintRef}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-hex-gray-400 font-body">
            Scroll
          </span>
          <div className="h-8 w-px bg-hex-gray-400 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
