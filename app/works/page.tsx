import type { Metadata } from "next";
import PortfolioGrid from "@/components/works/PortfolioGrid";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Our Works",
  description:
    "Browse MelaniArts' portfolio — digital printing, name boards, light boards, stickers, rollups, feather flags, graphic design, business cards, awards, mug printing, and more across Sri Lanka.",
  path: "/works",
});

export default function WorksPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="bg-dark pt-32 pb-16 text-center relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-1/3 h-full bg-primary/10"
          style={{ clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />
        <div className="relative z-10">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">
            Portfolio
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white">
            Our Works
          </h1>
          <p className="text-gray-300 mt-4 text-lg max-w-xl mx-auto px-4">
            A showcase of what we&apos;ve created for clients across Sri Lanka.
          </p>
        </div>
      </div>

      <div className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PortfolioGrid />
        </div>
      </div>
    </>
  );
}
