import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Contractor's Choice Agency | 20+ Years Hibachi Insurance Expertise",
  description:
    "Founded by a former contractor, Contractor's Choice Agency has 20+ years of specialty restaurant insurance experience. Meet the team writing hibachi and teppanyaki coverage in all 50 states.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Contractor's Choice Agency | Hibachi Insurance",
    description:
      "20+ years of specialty restaurant insurance experience. Meet the team writing hibachi and teppanyaki coverage nationwide.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Contractor's Choice Agency | Hibachi Insurance",
    description:
      "20+ years of specialty restaurant insurance experience. Hibachi and teppanyaki coverage nationwide.",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a0a00] to-[#0a0a0a]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber/8 rounded-full blur-[100px]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About <span className="text-amber">Contractor&apos;s Choice Agency</span>
              </h1>
              <p className="text-lg text-[#9ca3af] max-w-2xl leading-relaxed">
                20+ years of specialized insurance expertise. Built by a former
                contractor who understands the unique risks that specialized
                businesses face.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="bg-[#0a0a0a] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Image placeholder */}
              <div className="bg-gradient-to-br from-[#111827] to-[#1a0a00] border border-[#374151] rounded-xl aspect-[4/3] flex items-center justify-center">
                <div className="text-center px-8">
                  <div className="w-20 h-20 bg-amber/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-10 h-10 text-amber"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <p className="text-white font-semibold">
                    Contractor&apos;s Choice Agency
                  </p>
                  <p className="text-[#9ca3af] text-sm mt-1">
                    Chandler, Arizona — Est. 2005
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Built From Industry Experience
                  </h2>
                  <div className="space-y-4 text-[#9ca3af] leading-relaxed">
                    <p>
                      Contractor&apos;s Choice Agency was founded in 2005 by Josh
                      Cotner, a former contractor turned insurance specialist.
                      After spending years working in the trades, Josh saw
                      firsthand how generic insurance policies failed to protect
                      specialized businesses.
                    </p>
                    <p>
                      That insider perspective became the foundation of everything
                      we do. We don&apos;t just sell insurance — we understand the
                      operations, the risks, and the daily realities of the
                      businesses we cover.
                    </p>
                    <p>
                      Today, CCA serves nearly 300 clients across industries
                      including spray foam insulation, roofing, HVAC, and
                      commercial construction. Our expansion into restaurant
                      insurance — including hibachi and Japanese steakhouse
                      coverage — is a natural extension of our specialized
                      approach.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-4">
                  {[
                    { number: "20+", label: "Years in Business" },
                    { number: "298+", label: "Active Clients" },
                    { number: "50", label: "States Licensed" },
                    { number: "765", label: "Domain Portfolio" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-[#111827] border border-[#374151] rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-amber">
                        {stat.number}
                      </div>
                      <div className="text-[#9ca3af] text-sm mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Josh */}
        <section className="bg-[#0d1117] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#111827] border border-[#374151] rounded-xl p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Avatar placeholder */}
                  <div className="flex-shrink-0 w-32 h-32 bg-gradient-to-br from-amber/20 to-[#111827] rounded-full flex items-center justify-center border-2 border-amber/30">
                    <span className="text-amber text-4xl font-bold">JC</span>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-1">
                      Josh Cotner
                    </h2>
                    <p className="text-amber font-medium mb-4">
                      Founder & Insurance Specialist
                    </p>
                    <div className="space-y-4 text-[#9ca3af] leading-relaxed">
                      <p>
                        With a background in construction and over two decades in
                        the insurance industry, Josh brings a practical,
                        no-nonsense approach to business insurance. He&apos;s
                        built CCA on the principle that specialized businesses
                        deserve specialized coverage — not one-size-fits-all
                        policies.
                      </p>
                      <p>
                        Josh leads the majority of business development, client
                        relationships, and niche strategy at CCA. His deep
                        understanding of contractor and restaurant operations
                        means clients get advice from someone who&apos;s been on
                        their side of the table.
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2 text-[#9ca3af]">
                        <svg className="w-4 h-4 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        844-WORK-5247
                      </div>
                      <div className="flex items-center gap-2 text-[#9ca3af]">
                        <svg className="w-4 h-4 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        josh@contractorschoiceagency.com
                      </div>
                      <div className="flex items-center gap-2 text-[#9ca3af]">
                        <svg className="w-4 h-4 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Chandler, AZ
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why CTA */}
        <section className="bg-[#0a0a0a] py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-[#9ca3af] text-lg mb-8">
              Whether you&apos;re a single-location hibachi restaurant or a growing
              chain, we&apos;ll build a coverage plan that fits your operation and
              your budget.
            </p>
            <Link
              href="/quote"
              className="inline-flex bg-amber hover:bg-amber-dark text-black font-semibold px-8 py-3.5 rounded-lg transition-colors"
            >
              Get Your Free Quote
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
