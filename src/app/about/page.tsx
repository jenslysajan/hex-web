import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <h1 className="font-heading text-4xl font-bold text-white">About Hex</h1>
      <p className="text-hex-gray-400 mt-4 max-w-md text-center">
        We&apos;re building cool tech for India. More coming soon.
      </p>
      <Link
        href="/"
        className="text-hex-red hover:text-hex-red-dark mt-8 text-sm transition-colors"
      >
        &larr; Back home
      </Link>
    </main>
  );
}
