import type { Metadata } from "next";
import HeroBanner from "@/components/home/HeroBanner";
import ServicesSnapshot from "@/components/home/ServicesSnapshot";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import WorksPreview from "@/components/home/WorksPreview";
import ContactStrip from "@/components/home/ContactStrip";

export const metadata: Metadata = {
  title: "MelaniArts | Printing & Signage in Hambantota & Colombo",
  description:
    "MelaniArts offers premium printing and signage services in Sri Lanka — name boards, number plates, vehicle stickers, digital printing, mug printing, and awards.",
};

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
