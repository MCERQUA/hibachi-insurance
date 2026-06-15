import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Free Hibachi Insurance Quote | 15-Minute Response",
  description:
    "Request a free hibachi restaurant insurance quote. Single-location quotes returned in 15 minutes; multi-location and franchise quotes in 24–48 hours. Licensed in all 50 states.",
  alternates: { canonical: "/quote" },
  openGraph: {
    title: "Get a Free Hibachi Insurance Quote",
    description:
      "Free hibachi restaurant insurance quote — 15-minute response for single locations, 24–48 hours for franchises. All 50 states.",
    url: "/quote",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get a Free Hibachi Insurance Quote",
    description:
      "Free hibachi restaurant insurance quote — 15-minute response for single locations.",
  },
};

export default function QuoteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
