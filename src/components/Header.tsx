"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/coverage", label: "Coverage" },
    { href: "/quote", label: "Get a Quote" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur border-b border-[#374151]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber flex items-center justify-center">
              <span className="text-black font-bold text-xl">炎</span>
            </div>
            <div>
              <span className="text-white font-bold text-lg leading-tight block">
                Hibachi Insurance
              </span>
              <span className="text-[#9ca3af] text-xs">
                by Contractor&apos;s Choice Agency
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[#9ca3af] hover:text-white transition-colors text-sm font-medium"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:8449675247"
              className="bg-amber hover:bg-amber-dark text-black font-semibold px-4 py-2 rounded-lg transition-colors text-sm"
            >
              844-WORK-5247
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden border-t border-[#374151] bg-[#0a0a0a]">
          <nav className="flex flex-col px-4 py-4 gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[#9ca3af] hover:text-white transition-colors text-sm font-medium py-1"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:8449675247"
              className="bg-amber hover:bg-amber-dark text-black font-semibold px-4 py-2 rounded-lg transition-colors text-sm text-center mt-2"
            >
              844-WORK-5247
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
