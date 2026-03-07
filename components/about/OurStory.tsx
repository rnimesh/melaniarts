"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

export default function OurStory() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading label="Our Story" title="About MelaniArts" subtitle="Quality hits different here." />
            <div className="space-y-5 text-gray-mid leading-relaxed">
              <p>
                MelaniArts was founded in 1995 with a simple belief: that quality
                printing shouldn&apos;t be hard to find or expensive to afford.
                Starting from Hambantota, we&apos;ve grown to serve clients
                across Sri Lanka from local shop owners to corporate
                businesses in Colombo.
              </p>
              <p>
                We take pride in every product that leaves our hands  whether
                it&apos;s a single mug printed for a birthday gift or a full
                fleet of branded vehicles for a corporate client. Our team
                combines creativity with technical skill to deliver results that
                make our clients proud.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
              <Image
                src="/images/shop.png"
                alt="MelaniArts shop"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative accents */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-dark/5 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
