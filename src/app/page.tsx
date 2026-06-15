import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background with fire/grill gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a0a00] to-[#0a0a0a]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a] opacity-60" />
      {/* Decorative fire glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-amber/10 border border-amber/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-amber rounded-full" />
            <span className="text-amber text-sm font-medium">
              Specialized Hibachi Restaurant Insurance
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Insurance Built for{" "}
            <span className="text-amber">Hibachi Restaurants</span>
          </h1>

          <p className="text-lg md:text-xl text-[#9ca3af] mb-8 max-w-2xl leading-relaxed">
            From open-flame cooking to guest entertainment, hibachi restaurants
            face unique risks. We provide specialized coverage that protects your
            kitchen, your staff, and your bottom line.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/quote"
              className="bg-amber hover:bg-amber-dark text-black font-semibold px-8 py-3.5 rounded-lg transition-colors text-center"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:8449675247"
              className="border border-[#374151] hover:border-amber text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-center"
            >
              Call 844-WORK-5247
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueProps() {
  const props = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "15-Minute Quote Turnaround",
      desc: "We understand restaurant operations don't slow down. Get competitive quotes fast so you can focus on your customers.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "2-Hour Claims Response",
      desc: "When something goes wrong, you need answers fast. Our guaranteed 2-hour claims response keeps your business moving.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Licensed in All 50 States",
      desc: "Whether you have one location or fifty, we can cover your hibachi restaurant anywhere in the country.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Industry Expertise",
      desc: "Built by a former contractor who understands specialized industries. We know the risks hibachi restaurants face because we've studied them.",
    },
  ];

  return (
    <section className="bg-[#0a0a0a] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Hibachi Restaurants Choose Us
          </h2>
          <p className="text-[#9ca3af] text-lg max-w-2xl mx-auto">
            We don&apos;t sell generic restaurant insurance. We provide coverage
            designed for the specific risks of hibachi and teppanyaki operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {props.map((p, i) => (
            <div
              key={i}
              className="bg-[#111827] border border-[#374151] rounded-xl p-6 hover:border-amber/40 transition-colors"
            >
              <div className="w-12 h-12 bg-amber/10 rounded-lg flex items-center justify-center text-amber mb-4">
                {p.icon}
              </div>
              <h3 className="text-white font-semibold mb-2">{p.title}</h3>
              <p className="text-[#9ca3af] text-sm leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoverageHighlights() {
  const items = [
    {
      title: "General Liability",
      desc: "Slip-and-fall protection, customer injury claims, and property damage coverage for your dining area and kitchen.",
    },
    {
      title: "Fire & Kitchen Coverage",
      desc: "Open-flame teppanyaki cooking carries elevated fire risk. Our property policies account for these specialized hazards.",
    },
    {
      title: "Liquor Liability",
      desc: "If you serve sake, beer, or cocktails alongside the hibachi experience, liquor liability coverage is essential.",
    },
    {
      title: "Workers' Compensation",
      desc: "Burns, cuts, and kitchen injuries are occupational realities. Protect your chefs and staff with proper workers comp.",
    },
    {
      title: "Equipment Breakdown",
      desc: "From commercial grills to ventilation systems, equipment failure can shut down operations. We cover replacement and lost income.",
    },
    {
      title: "Business Interruption",
      desc: "Fire, disaster, or equipment failure shouldn't mean lost revenue. Business interruption insurance keeps you whole during downtime.",
    },
  ];

  return (
    <section className="bg-[#0d1117] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Coverage That Fits Your Kitchen
            </h2>
            <p className="text-[#9ca3af] text-lg max-w-2xl">
              Every hibachi restaurant has different needs. We build policies that
              match your operation — from single-location independents to growing chains.
            </p>
          </div>
          <Link
            href="/coverage"
            className="text-amber hover:text-amber-light font-medium transition-colors whitespace-nowrap"
          >
            View all coverage options &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-[#111827] border border-[#374151] rounded-xl p-6"
            >
              <div className="w-1 h-8 bg-amber rounded-full mb-4" />
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-[#9ca3af] text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-amber/10 via-[#1a0a00] to-[#0a0a0a] border border-amber/20 rounded-2xl p-10 md:p-16 text-center overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber/5 rounded-full blur-[80px]" />

          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Protect Your Hibachi Restaurant?
            </h2>
            <p className="text-[#9ca3af] text-lg max-w-xl mx-auto mb-8">
              Get a competitive quote in 15 minutes. No obligations, no
              pressure — just straightforward coverage from people who understand
              your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-amber hover:bg-amber-dark text-black font-semibold px-8 py-3.5 rounded-lg transition-colors"
              >
                Get Your Free Quote
              </Link>
              <a
                href="tel:8449675247"
                className="border border-[#374151] hover:border-amber text-white font-semibold px-8 py-3.5 rounded-lg transition-colors"
              >
                Call 844-WORK-5247
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <CoverageHighlights />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
