import type { Metadata } from "next";
import OurStory from "@/components/about/OurStory";
import MissionValues from "@/components/about/MissionValues";
import Locations from "@/components/about/Locations";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Us",
  description:
    "Learn about MelaniArts — our story, mission, values, and where to find us in Hambantota and Colombo, Sri Lanka.",
  path: "/about",
});

export default function AboutPage() {
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
            Who We Are
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white">
            About MelaniArts
          </h1>
        </div>
      </div>

      <OurStory />
      <MissionValues />
      <Locations />
    </>
  );
}
