import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you're looking for doesn't exist. Browse our coverage options, request a quote, or learn about Contractor's Choice Agency.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a0a00] to-[#0a0a0a]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber/8 rounded-full blur-[100px]" />

          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 text-center">
            <p className="text-amber font-bold uppercase tracking-widest text-sm mb-6">
              404 — Off the Menu
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              This page is not on tonight&apos;s service.
            </h1>
            <p className="text-lg text-[#9ca3af] leading-relaxed mb-10 max-w-xl mx-auto">
              The URL you tried doesn&apos;t exist, has been retired, or was
              never here. Pick a destination below, or call us at{" "}
              <a href="tel:8449675247" className="text-amber font-semibold">
                844-967-5247
              </a>
              .
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center bg-amber text-black px-8 py-3.5 font-bold rounded-md hover:bg-amber/90 transition"
              >
                Home
              </Link>
              <Link
                href="/coverage"
                className="inline-flex items-center justify-center border border-amber/40 text-amber px-8 py-3.5 font-bold rounded-md hover:bg-amber/10 transition"
              >
                View Coverage
              </Link>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center border border-white/20 text-white px-8 py-3.5 font-bold rounded-md hover:bg-white/10 transition"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
