"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      const form = e.currentTarget;
      const data = new FormData(form);
      // Netlify form submission
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      // Webhook forwarding
      const payload: Record<string, string> = {};
      data.forEach((v, k) => { payload[k] = v as string; });
      await fetch(
        "https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=hibachi-insurance",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
    } catch {
      // Non-blocking: still show success to user
    }
    setLoading(false);
    setSubmitted(true);
  }

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
                Get Your <span className="text-amber">Free Quote</span>
              </h1>
              <p className="text-lg text-[#9ca3af] max-w-2xl leading-relaxed">
                Tell us about your hibachi restaurant and we&apos;ll provide
                competitive coverage options within 15 minutes. No obligations.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="bg-[#0a0a0a] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-[#111827] border border-[#374151] rounded-xl p-8">
                  {!submitted ? (
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-6"
                      name="quote"
                      data-netlify="true"
                      netlify-honeypot="bot-field"
                    >
                      <input type="hidden" name="form-name" value="quote" />
                      <input name="bot-field" type="hidden" className="hidden" />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Business Name */}
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="businessName"
                            className="block text-sm font-medium text-white mb-2"
                          >
                            Business Name <span className="text-amber">*</span>
                          </label>
                          <input
                            type="text"
                            id="businessName"
                            name="businessName"
                            required
                            placeholder="e.g. Sakura Hibachi & Steakhouse"
                            className="w-full bg-[#0a0a0a] border border-[#374151] rounded-lg px-4 py-3 text-white placeholder-[#9ca3af] focus:outline-none focus:border-amber transition-colors"
                          />
                        </div>

                        {/* Owner Name */}
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="ownerName"
                            className="block text-sm font-medium text-white mb-2"
                          >
                            Owner / Contact Name{" "}
                            <span className="text-amber">*</span>
                          </label>
                          <input
                            type="text"
                            id="ownerName"
                            name="ownerName"
                            required
                            placeholder="Full name"
                            className="w-full bg-[#0a0a0a] border border-[#374151] rounded-lg px-4 py-3 text-white placeholder-[#9ca3af] focus:outline-none focus:border-amber transition-colors"
                          />
                        </div>

                        {/* Phone */}
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-white mb-2"
                          >
                            Phone <span className="text-amber">*</span>
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            placeholder="(555) 123-4567"
                            className="w-full bg-[#0a0a0a] border border-[#374151] rounded-lg px-4 py-3 text-white placeholder-[#9ca3af] focus:outline-none focus:border-amber transition-colors"
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-white mb-2"
                          >
                            Email <span className="text-amber">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="owner@restaurant.com"
                            className="w-full bg-[#0a0a0a] border border-[#374151] rounded-lg px-4 py-3 text-white placeholder-[#9ca3af] focus:outline-none focus:border-amber transition-colors"
                          />
                        </div>

                        {/* Number of Locations */}
                        <div>
                          <label
                            htmlFor="locations"
                            className="block text-sm font-medium text-white mb-2"
                          >
                            Number of Locations
                          </label>
                          <select
                            id="locations"
                            name="locations"
                            className="w-full bg-[#0a0a0a] border border-[#374151] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber transition-colors"
                          >
                            <option value="1">1 location</option>
                            <option value="2-3">2-3 locations</option>
                            <option value="4-10">4-10 locations</option>
                            <option value="10+">10+ locations</option>
                          </select>
                        </div>

                        {/* Annual Revenue */}
                        <div>
                          <label
                            htmlFor="revenue"
                            className="block text-sm font-medium text-white mb-2"
                          >
                            Annual Revenue Range
                          </label>
                          <select
                            id="revenue"
                            name="revenue"
                            className="w-full bg-[#0a0a0a] border border-[#374151] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber transition-colors"
                          >
                            <option value="under-500k">Under $500,000</option>
                            <option value="500k-1m">$500,000 - $1M</option>
                            <option value="1m-3m">$1M - $3M</option>
                            <option value="3m-5m">$3M - $5M</option>
                            <option value="5m+">$5M+</option>
                          </select>
                        </div>

                        {/* Message */}
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-white mb-2"
                          >
                            Additional Details
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            placeholder="Tell us about your restaurant — number of seats, years in business, current coverage, specific concerns..."
                            className="w-full bg-[#0a0a0a] border border-[#374151] rounded-lg px-4 py-3 text-white placeholder-[#9ca3af] focus:outline-none focus:border-amber transition-colors resize-none"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-amber hover:bg-amber-dark text-black font-semibold px-8 py-3.5 rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {loading ? "Submitting..." : "Request Your Free Quote"}
                      </button>

                      <p className="text-[#9ca3af] text-xs text-center">
                        Your information is confidential. We&apos;ll respond within 15
                        minutes during business hours.
                      </p>
                    </form>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-amber/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg
                          className="w-8 h-8 text-amber"
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
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        Quote Request Received
                      </h3>
                      <p className="text-[#9ca3af] text-lg mb-6">
                        Thank you! Our team will review your information and
                        contact you within 15 minutes with competitive coverage
                        options.
                      </p>
                      <a
                        href="tel:8449675247"
                        className="text-amber hover:text-amber-light font-medium transition-colors"
                      >
                        Need it faster? Call 844-WORK-5247
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Phone CTA */}
                <div className="bg-[#111827] border border-[#374151] rounded-xl p-6">
                  <h3 className="text-white font-semibold mb-2">
                    Prefer to Talk?
                  </h3>
                  <p className="text-[#9ca3af] text-sm mb-4">
                    Call us directly for an immediate quote. We&apos;re available
                    during business hours.
                  </p>
                  <a
                    href="tel:8449675247"
                    className="block bg-amber hover:bg-amber-dark text-black font-semibold px-6 py-3 rounded-lg transition-colors text-center"
                  >
                    844-WORK-5247
                  </a>
                </div>

                {/* Response Time */}
                <div className="bg-[#111827] border border-[#374151] rounded-xl p-6">
                  <h3 className="text-white font-semibold mb-3">
                    What to Expect
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "15-minute quote turnaround",
                      "No obligation or pressure",
                      "Multiple carrier options",
                      "Customized for hibachi operations",
                      "Licensed in all 50 states",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-[#9ca3af]"
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
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Claims */}
                <div className="bg-gradient-to-br from-amber/10 to-transparent border border-amber/20 rounded-xl p-6">
                  <h3 className="text-white font-semibold mb-2">
                    24/7 Claims Reporting
                  </h3>
                  <p className="text-[#9ca3af] text-sm">
                    Claims happen at any hour. Report emergencies 24/7 and get a
                    response within 2 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
