"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { portfolioItems } from "@/lib/data";

export default function PortfolioGrid() {
  return (
    <div>
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {portfolioItems.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="relative aspect-square rounded-xl overflow-hidden group bg-gray-100 border border-gray-200"
          >
            <Image
              src={item.image}
              alt={item.caption}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-dark/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div>
                <span className="text-primary text-xs font-semibold uppercase tracking-wider block mb-1">
                  {item.category}
                </span>
                <p className="text-white text-sm font-medium leading-snug">
                  {item.caption}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {portfolioItems.length === 0 && (
        <p className="text-center text-gray-mid py-16">
          No works to display yet.
        </p>
      )}
    </div>
  );
}
