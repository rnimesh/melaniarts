"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { portfolioItems } from "@/lib/data";

export default function WorksPreview() {
  const previewItems = portfolioItems.slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Work"
          title="A Glimpse of Our Work"
          centered
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {previewItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="relative aspect-square rounded-xl overflow-hidden group bg-gray-200"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.caption}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <span className="text-primary text-xs font-semibold uppercase tracking-wider block">
                    {item.category}
                  </span>
                  <p className="text-white text-sm font-medium mt-1">
                    {item.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/works"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3.5 rounded transition-all duration-200 hover:-translate-y-0.5"
          >
            See All Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}
