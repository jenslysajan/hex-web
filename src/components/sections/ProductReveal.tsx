"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

export default function ProductReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    // Fade content in from black — starts as soon as section enters viewport
    gsap.fromTo(
      content,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: section,
          start: "top 90%",
          end: "top 30%",
          scrub: 0.3,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === section) t.kill();
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center bg-hex-black px-6 py-24 md:px-10 -mt-1"
    >
      <div ref={contentRef} className="mx-auto max-w-6xl w-full opacity-0">
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
    </section>
  );
}
