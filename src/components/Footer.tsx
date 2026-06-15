import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0d1117] border-t border-[#374151] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-amber flex items-center justify-center">
                <span className="text-black font-bold text-base">炎</span>
              </div>
              <span className="text-white font-bold text-lg">
                Hibachi Insurance
              </span>
            </div>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              Specialized insurance coverage for hibachi restaurants, Japanese
              steakhouses, and teppanyaki dining establishments nationwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/coverage", label: "Coverage Options" },
                { href: "/quote", label: "Get a Quote" },
                { href: "/about", label: "About Us" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[#9ca3af] hover:text-amber transition-colors text-sm"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:8449675247"
                  className="text-[#9ca3af] hover:text-amber transition-colors"
                >
                  844-WORK-5247 (844-967-5247)
                </a>
              </li>
              <li>
                <a
                  href="mailto:josh@contractorschoiceagency.com"
                  className="text-[#9ca3af] hover:text-amber transition-colors"
                >
                  josh@contractorschoiceagency.com
                </a>
              </li>
              <li className="text-[#9ca3af]">
                12220 E Riggs Rd, Chandler, AZ 85249
              </li>
              <li className="text-[#9ca3af]">Licensed in all 50 states</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#374151] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#9ca3af] text-xs">
            &copy; {new Date().getFullYear()} Contractor&apos;s Choice Agency.
            National Producer Number: 8608479
          </p>
          <p className="text-[#9ca3af] text-xs">
            Insurance coverage subject to underwriting approval. Not all
            coverages available in all states.
          </p>
        </div>
      </div>
    </footer>
  );
}
