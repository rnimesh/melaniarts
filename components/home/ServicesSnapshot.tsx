"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  PenTool,
  Car,
  Printer,
  Copy,
  Coffee,
  Award,
  Layers,
  Lightbulb,
  Flag,
  Square,
  Image,
  CreditCard,
  FileText,
  Sparkles,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/lib/data";

const serviceIcons: Record<string, React.ReactNode> = {
  "digital-printing": <Printer size={28} />,
  "name-boards": <PenTool size={28} />,
  "light-boards": <Lightbulb size={28} />,
  stickers: <Layers size={28} />,
  "number-plates": <Car size={28} />,
  rollups: <Square size={28} />,
  "feather-flags": <Flag size={28} />,
  "one-way-visions": <Image size={28} />,
  "cross-banners": <Square size={28} />,
  "graphic-designing": <PenTool size={28} />,
  "business-cards": <CreditCard size={28} />,
  awards: <Award size={28} />,
  "mug-printing": <Coffee size={28} />,
  photocopy: <Copy size={28} />,
  laminating: <FileText size={28} />,
  "visiting-cards": <CreditCard size={28} />,
  "laser-cutting": <Sparkles size={28} />,
};

export default function ServicesSnapshot() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading label="What We Do" title="Our Services" centered />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group p-6 bg-gray-light rounded-xl border-t-4 border-transparent hover:border-primary transition-all duration-300 text-center cursor-default"
            >
              <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-200">
                {serviceIcons[service.id] || <Printer size={28} />}
              </div>
              <h3 className="font-display font-semibold text-dark text-sm md:text-base leading-snug">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-mid text-xs leading-relaxed line-clamp-2">
                {service.description.split(".")[0]}.
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3.5 rounded transition-all duration-200 hover:-translate-y-0.5"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
