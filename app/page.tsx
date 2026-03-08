import type { Metadata } from "next";
import HeroBanner from "@/components/home/HeroBanner";
import ServicesSnapshot from "@/components/home/ServicesSnapshot";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import WorksPreview from "@/components/home/WorksPreview";
import ContactStrip from "@/components/home/ContactStrip";
import { createPageMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "MelaniArts | Printing & Signage in Hambantota & Colombo",
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <ServicesSnapshot />
      <WhyChooseUs />
      <WorksPreview />
      <ContactStrip />
    </>
  );
}
