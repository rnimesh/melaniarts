"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { getQuoteMailtoUrl } from "@/lib/data";

export default function HeroBanner() {
  return (
    <section className="relative min-h-screen flex items-center bg-dark overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-primary/20" />

      {/* Diagonal red accent band */}
      <div
        className="absolute top-0 right-0 w-96 h-full bg-primary/10 hidden lg:block"
        style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)" }}
      />
      <div
        className="absolute top-0 right-0 w-64 h-full bg-primary/5 hidden lg:block"
        style={{ clipPath: "polygon(60% 0, 100% 0, 100% 100%, 30% 100%)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary font-semibold uppercase tracking-widest text-sm mb-4"
          >
            Hambantota &amp; Colombo, Sri Lanka
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight"
          >
            Your Vision.
            <br />
            <span className="text-primary">Printed to</span>
            <br />
            Perfection.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-gray-300 leading-relaxed max-w-xl"
          >
            We design and print name boards, number plates, vehicle stickers,
            mugs, awards, and more — serving businesses and individuals across
            Hambantota and Colombo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href={getQuoteMailtoUrl()}
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded transition-all duration-200 hover:-translate-y-0.5"
            >
              Get a Quote
            </a>
            <Link
              href="/works"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-dark font-semibold px-8 py-4 rounded transition-all duration-200 hover:-translate-y-0.5"
            >
              See Our Work
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 flex flex-wrap gap-8"
          >
            {[
              { value: "10+", label: "Services" },
              { value: "2", label: "Locations" },
              { value: "100%", label: "Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-display font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom section divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 bg-white"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
      />
    </section>
  );
}
