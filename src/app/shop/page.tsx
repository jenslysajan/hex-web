import Link from "next/link";

export default function ShopPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <h1 className="font-heading text-4xl font-bold text-white">Shop</h1>
      <p className="mt-4 max-w-md text-center text-hex-gray-400">
        Our store is coming soon. Stay tuned.
      </p>
      <Link
        href="/"
        className="mt-8 text-sm text-hex-red hover:text-hex-red-dark transition-colors"
      >
        &larr; Back home
      </Link>
    </main>
  );
}
