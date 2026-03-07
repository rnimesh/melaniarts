"use client";

import { motion } from "framer-motion";
import { Wrench, Clock, Lightbulb, Heart } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const values = [
  {
    icon: <Wrench size={24} />,
    title: "Craftsmanship",
    description: "We never cut corners on quality.",
  },
  {
    icon: <Clock size={24} />,
    title: "Reliability",
    description: "Deadlines matter. We deliver on time.",
  },
  {
    icon: <Lightbulb size={24} />,
    title: "Creativity",
    description: "We bring fresh ideas to every project.",
  },
  {
    icon: <Heart size={24} />,
    title: "Community",
    description: "We support local businesses and events.",
  },
];

export default function MissionValues() {
  return (
    <section className="py-20 lg:py-28 bg-dark relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(#CC0000 1px, transparent 1px), linear-gradient(90deg, #CC0000 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="What We Stand For"
          title="Our Mission & Values"
          dark
          centered
        />

        {/* Mission & Vision cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {[
            {
              title: "Our Mission",
              text: "To deliver high-quality, affordable printing and design services that help businesses and individuals express their identity.",
            },
            {
              title: "Our Vision",
              text: "To be Sri Lanka's most trusted printing partner for every occasion.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-xl p-8"
            >
              <h3 className="font-display font-bold text-primary text-xl mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed italic">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Values grid */}
        <h3 className="font-display font-bold text-white text-2xl text-center mb-8">
          Our Core Values
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-primary/50 transition-colors duration-300"
            >
              <div className="text-primary flex justify-center mb-3">
                {value.icon}
              </div>
              <h4 className="font-display font-semibold text-white text-base mb-1">
                {value.title}
              </h4>
              <p className="text-gray-400 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
