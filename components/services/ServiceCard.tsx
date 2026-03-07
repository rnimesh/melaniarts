"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/data";
import { getQuoteWhatsAppUrl } from "@/lib/data";

interface ServiceCardProps {
  service: Service;
  reverse?: boolean;
}

export default function ServiceCard({
  service,
  reverse = false,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center`}
    >
      {/* Image */}
      <div className={reverse ? "lg:order-2" : ""}>
        <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 relative">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Content */}
      <div className={reverse ? "lg:order-1" : ""}>
        <h2 className="font-display font-bold text-dark text-3xl md:text-4xl mb-4">
          {service.title}
        </h2>
        <p className="text-gray-mid leading-relaxed mb-6">
          {service.description}
        </p>

        {service.options.length > 0 && (
          <div className="mb-8">
            <h4 className="font-semibold text-dark mb-3 text-sm uppercase tracking-wide">
              Options include:
            </h4>
            <ul className="space-y-2">
              {service.options.map((opt, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-gray-mid text-sm"
                >
                  <CheckCircle
                    size={16}
                    className="text-primary shrink-0"
                  />
                  {opt}
                </li>
              ))}
            </ul>
          </div>
        )}

        {service.cta === "Get a Quote" ? (
          <a
            href={getQuoteWhatsAppUrl(service.title)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded transition-all duration-200 hover:-translate-y-0.5"
          >
            {service.cta}
          </a>
        ) : (
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded transition-all duration-200 hover:-translate-y-0.5"
          >
            {service.cta}
          </Link>
        )}
      </div>
    </motion.div>
  );
}
