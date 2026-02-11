"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const membraneRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
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
    const glow = glowRef.current;
    const bar = barRef.current;
    const reveal = revealRef.current;
    const scrollHint = scrollHintRef.current;
    if (!hero || !membrane || !text || !glow || !bar || !reveal) return;

    // Text starts as color:#111 on bg:#0a0a0a — barely visible, just embossed shadows
    gsap.set(text, {
      color: "#111",
      textShadow:
        "-1px -1px 2px rgba(255,255,255,0.04), 1px 1px 3px rgba(0,0,0,0.8)",
    });
    gsap.set(glow, { opacity: 0 });
    gsap.set(bar, { opacity: 0, scaleX: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "+=250%",
        pin: true,
        scrub: 0.4,
        anticipatePin: 1,
      },
    });

    // Scroll hint fades out
    if (scrollHint) {
      tl.to(scrollHint, { opacity: 0, duration: 0.05, ease: "none" }, 0);
    }

    // Stage 1 (0 → 0.3): Text pushes through — shadow edges intensify
    tl.to(
      text,
      {
        textShadow:
          "-2px -2px 4px rgba(255,255,255,0.14), 2px 2px 6px rgba(0,0,0,0.9), 0 0 30px #00e5ff18, 0 0 30px #bf00ff15, 0 0 25px #ff003c12",
        scale: 1.03,
        duration: 0.3,
        ease: "power1.in",
      },
      0
    );

    // Stage 2 (0.3 → 0.45): Deeper shadows, neon glow appears
    tl.to(
      text,
      {
        textShadow:
          "-3px -3px 6px rgba(255,255,255,0.2), 4px 4px 10px rgba(0,0,0,0.95), 0 0 45px #00e5ff45, 0 0 50px #bf00ff40, 0 0 40px #ff003c30, 0 0 55px #00ff8830, 0 0 45px #ff00aa28",
        scale: 1.12,
        duration: 0.15,
        ease: "power2.in",
      },
      0.3
    );
    tl.to(
      glow,
      { opacity: 0.6, duration: 0.15, ease: "power1.in" },
      0.3
    );

    // Stage 3 (0.45 → 0.65): The center bar of E appears, expands to fill screen
    // First: fade out the text and glow
    tl.to(
      text,
      { opacity: 0, duration: 0.08, ease: "power1.in" },
      0.45
    );
    tl.to(
      glow,
      { opacity: 0, duration: 0.08, ease: "power1.in" },
      0.45
    );
    // Bar appears and stretches horizontally
    tl.to(
      bar,
      {
        opacity: 1,
        scaleX: 1,
        duration: 0.06,
        ease: "power2.out",
      },
      0.47
    );
    // Bar expands to fill the entire viewport
    tl.to(
      bar,
      {
        width: "100vw",
        height: "100vh",
        borderRadius: "0px",
        duration: 0.15,
        ease: "power2.in",
      },
      0.53
    );

    // Stage 4 (0.7 → 1.0): Bar dissolves, product reveal fades in
    tl.to(
      bar,
      { opacity: 0, duration: 0.15, ease: "power1.out" },
      0.7
    );
    tl.to(
      reveal,
      { opacity: 1, duration: 0.25, ease: "power1.out" },
      0.72
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section aria-label="Hero">
      <div ref={heroRef} className="relative h-screen w-full overflow-hidden bg-hex-black">
        {/* Membrane surface with embossed text */}
        <div
          ref={membraneRef}
          className="absolute inset-0 flex items-center justify-center"
          style={{ willChange: "transform" }}
        >
          {/* Subtle surface noise */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "128px 128px",
            }}
          />

          {/* Multi-color neon glow behind text */}
          <div
            ref={glowRef}
            className="absolute opacity-0"
            style={{
              width: "60vw",
              height: "30vw",
              background: `
                radial-gradient(ellipse at 20% 40%, #ff003c28 0%, transparent 45%),
                radial-gradient(ellipse at 80% 40%, #00e5ff40 0%, transparent 45%),
                radial-gradient(ellipse at 15% 70%, #bf00ff3a 0%, transparent 42%),
                radial-gradient(ellipse at 85% 65%, #00ff8838 0%, transparent 42%),
                radial-gradient(ellipse at 50% 25%, #ff6b0035 0%, transparent 40%),
                radial-gradient(ellipse at 50% 75%, #ff00aa38 0%, transparent 42%),
                radial-gradient(ellipse at 35% 50%, #4d00ff30 0%, transparent 40%)
              `,
              filter: "blur(30px)",
            }}
          />

          {/* "HEX" — starts as dark-on-dark embossed indent */}
          <h1
            ref={textRef}
            className="relative select-none font-display"
            style={{
              fontSize: "clamp(8rem, 22vw, 20rem)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              lineHeight: 1,
              color: "#111",
            }}
          >
            HEX
          </h1>

          {/* Center bar — positioned over the E's middle dash, expands to fill screen */}
          <div
            ref={barRef}
            className="absolute opacity-0"
            style={{
              width: "5.5vw",
              height: "clamp(0.9rem, 2.5vw, 2.2rem)",
              borderRadius: "2px",
              backgroundColor: "#111",
              willChange: "transform, width, height",
              /* Offset slightly right to align with E's center bar */
              marginLeft: "1.5vw",
            }}
          />
        </div>

        {/* Product reveal content */}
        <div
          ref={revealRef}
          className="absolute inset-0 flex items-center bg-hex-black px-6 opacity-0 md:px-10"
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
