import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hibachi Restaurant Insurance Coverage | General Liability, Workers Comp, Liquor Liability",
  description:
    "Complete coverage stack for hibachi restaurants and Japanese steakhouses: general liability, workers compensation, commercial property, liquor liability, and equipment breakdown — bundled for cost efficiency.",
  alternates: { canonical: "/coverage" },
  openGraph: {
    title: "Hibachi Restaurant Insurance Coverage Options",
    description:
      "General liability, workers comp, property, liquor liability, and equipment breakdown — purpose-built for hibachi and teppanyaki operations.",
    url: "/coverage",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hibachi Restaurant Insurance Coverage Options",
    description:
      "General liability, workers comp, property, liquor liability, and equipment breakdown — purpose-built for hibachi operations.",
  },
};

const coverages = [
  {
    title: "General Liability Insurance",
    desc: "The foundation of your protection. Covers bodily injury, property damage, and personal injury claims from customers, vendors, and third parties. Essential for any hibachi restaurant with foot traffic.",
    features: [
      "Customer slip-and-fall injuries",
      "Property damage to guest belongings",
      "Personal and advertising injury",
      "Legal defense costs",
      "Medical payments coverage",
    ],
  },
  {
    title: "Workers' Compensation",
    desc: "Hibachi cooking is physically demanding and carries real injury risks. Burns from open-flame grills, knife injuries, repetitive motion strains — your staff needs protection, and you need compliance.",
    features: [
      "Kitchen burn injuries",
      "Cuts and lacerations",
      "Slip-and-fall injuries for staff",
      "Disability and lost wages",
      "Employer liability coverage",
    ],
  },
  {
    title: "Commercial Auto Insurance",
    desc: "Whether you deliver ingredients, cater events, or your staff drives for business purposes, commercial auto coverage protects your vehicles and your liability on the road.",
    features: [
      "Delivery vehicle coverage",
      "Catering transportation",
      "Hired and non-owned auto",
      "Uninsured motorist protection",
      "Cargo and equipment coverage",
    ],
  },
  {
    title: "Property Insurance",
    desc: "Your hibachi grills, ventilation systems, dining furniture, and kitchen equipment represent a significant investment. Property insurance covers fire, theft, vandalism, and natural disasters.",
    features: [
      "Building and structure coverage",
      "Kitchen equipment and grills",
      "Furniture and fixtures",
      "Inventory and supplies",
      "Fire and smoke damage",
    ],
  },
  {
    title: "Liquor Liability Insurance",
    desc: "Most hibachi restaurants serve alcohol alongside the dining experience. Liquor liability protects you if a patron causes harm after being served at your establishment.",
    features: [
      "Dram shop liability protection",
      "Intoxicated patron incidents",
      "Assault and battery coverage",
      "Legal defense costs",
      "Fines and penalties coverage",
    ],
  },
  {
    title: "Food Contamination Insurance",
    desc: "Foodborne illness outbreaks, contamination events, or recalls can devastate a restaurant. This coverage addresses the unique risks of handling raw proteins and prepared foods.",
    features: [
      "Foodborne illness claims",
      "Contaminated product disposal",
      "Recall expense coverage",
      "Loss of income during investigation",
      "Brand rehabilitation costs",
    ],
  },
  {
    title: "Equipment Breakdown Coverage",
    desc: "When your commercial hibachi grill, exhaust hood, refrigeration, or POS system fails, it costs more than just repairs. Equipment breakdown covers replacement costs and lost income.",
    features: [
      "Mechanical and electrical breakdown",
      "Grill and cooking equipment",
      "HVAC and ventilation systems",
      "Refrigeration failure coverage",
      "Business income during repairs",
    ],
  },
  {
    title: "Business Interruption Insurance",
    desc: "If a fire, disaster, or covered event forces you to close temporarily, business interruption insurance replaces lost income and covers ongoing expenses so you can reopen stronger.",
    features: [
      "Lost income replacement",
      "Ongoing payroll coverage",
      "Rent and mortgage payments",
      "Temporary relocation costs",
      "Extended period of restoration",
    ],
  },
];

export default function CoveragePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a0a00] to-[#0a0a0a]" />
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber/8 rounded-full blur-[100px]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Coverage Built for{" "}
                <span className="text-amber">Hibachi Operations</span>
              </h1>
              <p className="text-lg text-[#9ca3af] mb-8 max-w-2xl leading-relaxed">
                Open-flame cooking, customer entertainment, food handling, and
                alcohol service — hibachi restaurants face a distinct set of
                risks that generic restaurant policies don&apos;t adequately cover.
              </p>
              <Link
                href="/quote"
                className="inline-flex bg-amber hover:bg-amber-dark text-black font-semibold px-8 py-3.5 rounded-lg transition-colors"
              >
                Get a Custom Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Coverage List */}
        <section className="bg-[#0a0a0a] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {coverages.map((c, i) => (
                <div
                  key={i}
                  className="bg-[#111827] border border-[#374151] rounded-xl p-8 md:p-10"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-amber/10 rounded-lg flex items-center justify-center text-amber text-xl font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                        {c.title}
                      </h2>
                      <p className="text-[#9ca3af] mb-5 leading-relaxed">
                        {c.desc}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {c.features.map((f, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-sm"
                          >
                            <svg
                              className="w-4 h-4 text-amber mt-0.5 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-[#9ca3af]">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0d1117] py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Not Sure What You Need?
            </h2>
            <p className="text-[#9ca3af] text-lg mb-8">
              We&apos;ll review your operation and recommend the right coverage
              combination. No sales pressure — just honest guidance from people
              who understand the restaurant business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-amber hover:bg-amber-dark text-black font-semibold px-8 py-3.5 rounded-lg transition-colors"
              >
                Request a Free Consultation
              </Link>
              <a
                href="tel:8449675247"
                className="border border-[#374151] hover:border-amber text-white font-semibold px-8 py-3.5 rounded-lg transition-colors"
              >
                Call 844-WORK-5247
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
