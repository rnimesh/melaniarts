import type { Metadata } from "next";
import ServiceCard from "@/components/services/ServiceCard";
import { services } from "@/lib/data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description:
    "Explore MelaniArts' full range of printing and signage services — digital printing, name boards, light boards, stickers, rollups, feather flags, graphic design, business cards, awards, mug printing, and more.",
  path: "/services",
});

export default function ServicesPage() {
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
            What We Offer
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white">
            Everything We Create for You
          </h1>
          <p className="text-gray-300 mt-4 text-lg max-w-xl mx-auto px-4">
            From a single sticker to a full brand rollout — MelaniArts has you
            covered.
          </p>
        </div>
      </div>

      <div className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 lg:space-y-32">
          {services.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              reverse={i % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </>
  );
}
