"use client";

import { motion } from "framer-motion";
import { Award, Zap, MapPin, Tag } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { whyReasons } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  award: <Award size={36} />,
  zap: <Zap size={36} />,
  "map-pin": <MapPin size={36} />,
  tag: <Tag size={36} />,
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-dark text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #CC0000 0, #CC0000 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Why Us" title="Why Clients Trust Us" dark centered />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyReasons.map((reason, i) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:border-primary/50 hover:bg-white/8 transition-all duration-300"
            >
              <div className="text-primary mb-4 flex justify-center">
                {iconMap[reason.icon]}
              </div>
              <h3 className="font-display font-semibold text-white text-lg mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
