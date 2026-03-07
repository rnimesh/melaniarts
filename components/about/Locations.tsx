"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const MAP_URL = "https://maps.app.goo.gl/55sUNusmwbCiLa7o7";

const locations = [
  {
    name: "Hambantota Branch",
    address: "No 33 Tissa Road, Hambantota",
    phone: "+94 71 740 2537",
    hours: "Mon–Sat: 8.00 am to 6.00 pm",
    comingSoon: false,
  },
  {
    name: "Colombo Branch",
    address: "Coming Soon",
    phone: "Coming Soon",
    hours: "Coming Soon",
    comingSoon: true,
  },
];

export default function Locations() {
  return (
    <section className="py-20 lg:py-28 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Find Us" title="Where to Find Us" centered />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {locations.map((loc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col h-full"
            >
              {/* Info card */}
              <div className={`bg-white rounded-xl p-6 shadow-sm mb-4 border flex-1 flex flex-col ${loc.comingSoon ? "border-primary/30 relative overflow-hidden" : "border-gray-200"}`}>
                {loc.comingSoon && (
                  <span className="absolute top-4 right-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Coming Soon
                  </span>
                )}
                <h3 className="font-display font-bold text-dark text-xl mb-4 flex items-center gap-2">
                  <MapPin size={20} className="text-primary" />
                  {loc.name}
                </h3>
                {loc.comingSoon ? (
                  <p className="text-gray-mid text-sm">
                    We&apos;re expanding to Colombo! Our new branch is on its way — stay tuned for updates on the opening date, address, and contact details.
                  </p>
                ) : (
                  <ul className="space-y-3 text-gray-mid text-sm">
                    <li className="flex items-start gap-2">
                      <MapPin
                        size={15}
                        className="text-primary shrink-0 mt-0.5"
                      />
                      {loc.address}
                    </li>
                    <li className="flex items-start gap-2">
                      <Phone
                        size={15}
                        className="text-primary shrink-0 mt-0.5"
                      />
                      {loc.phone}
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock
                        size={15}
                        className="text-primary shrink-0 mt-0.5"
                      />
                      {loc.hours}
                    </li>
                  </ul>
                )}
              </div>

              {/* Map */}
              {loc.comingSoon ? (
                <div className="w-full h-56 rounded-xl flex flex-col items-center justify-center border bg-primary/5 border-primary/20 text-primary/40">
                  <MapPin size={32} className="mb-2 opacity-40" />
                  <p className="text-sm">Map available soon</p>
                </div>
              ) : (
                <div className="w-full rounded-xl overflow-hidden border border-gray-200">
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=81.05%2C6.05%2C81.2%2C6.2&layer=mapnik&marker=6.1248%2C81.1188"
                    width="100%"
                    height="208"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${loc.name} - MelaniArts`}
                  />
                  <a
                    href={MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-gray-50 hover:bg-primary hover:text-white text-sm font-medium transition-colors"
                  >
                    Open in Google Maps <ExternalLink size={14} />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
