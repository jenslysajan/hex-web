import Link from "next/link";
import { BRAND, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-hex-gray-800 bg-hex-black px-6 py-12 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Logo + tagline */}
          <div>
            <Link
              href="/"
              className="font-heading text-2xl font-bold tracking-tight text-white"
            >
              hex
            </Link>
            <p className="mt-2 text-sm text-hex-gray-400">Built in India</p>
          </div>

          {/* Nav links */}
          <div className="flex gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-hex-gray-400 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex gap-6">
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-hex-gray-400 transition-colors hover:text-white"
            >
              Instagram
            </a>
            <a
              href={`mailto:${BRAND.email}`}
              className="text-sm text-hex-gray-400 transition-colors hover:text-white"
            >
              Email
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-hex-gray-800 pt-6">
          <p className="font-mono text-xs text-hex-gray-400">
            &copy; {new Date().getFullYear()} Hex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
