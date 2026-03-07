import type { Metadata } from "next";
import { Phone, Mail, Clock, MapPin, ExternalLink } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact MelaniArts | Call or WhatsApp Us",
  description:
    "Get in touch with MelaniArts — call, WhatsApp, or email us for custom printing and signage quotes in Hambantota and Colombo.",
};

const WA_NUMBER = "94717402537";
const MAP_URL = "https://maps.app.goo.gl/55sUNusmwbCiLa7o7";
const WA_MESSAGE = encodeURIComponent(
  "Hi MelaniArts! I'd like to inquire about your services.",
);

const contactCards = [
  {
    icon: <Phone size={22} />,
    label: "Phone",
    value: "+94 71 740 2537",
    href: "tel:+94717402537",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "+94 71 740 2537",
    href: `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`,
  },
  {
    icon: <Mail size={22} />,
    label: "Email",
    value: "melani.arts@gmail.com",
    href: "mailto:melani.arts@gmail.com",
  },
  {
    icon: <Clock size={22} />,
    label: "Working Hours",
    value: "Mon–Sat: 8.00 am to 6.00 pm",
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="bg-dark pt-32 pb-16 text-center relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-1/3 h-full bg-primary/10"
          style={{ clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />
        <div className="relative z-10">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">
            Get In Touch
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white">
            Let&apos;s Talk
          </h1>
          <p className="text-gray-300 mt-4 text-lg max-w-xl mx-auto px-4">
            Have a project in mind? Reach out — we&apos;re ready to help.
          </p>
        </div>
      </div>

      <div className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {contactCards.map((card, i) => (
              <div
                key={i}
                className="bg-gray-light rounded-xl p-5 text-center border-t-4 border-primary"
              >
                <div className="text-primary flex justify-center mb-2">
                  {card.icon}
                </div>
                <p className="font-display font-semibold text-dark text-sm mb-1">
                  {card.label}
                </p>
                {card.href ? (
                  <a
                    href={card.href}
                    className="text-gray-mid text-xs hover:text-primary transition-colors break-words"
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      card.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {card.value}
                  </a>
                ) : (
                  <p className="text-gray-mid text-xs">{card.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* Form + Maps */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <div>
              <h2 className="font-display font-bold text-dark text-2xl mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Maps */}
            <div>
              <h2 className="font-display font-bold text-dark text-2xl mb-6">
                Find Our Locations
              </h2>
              <div className="space-y-6">
                {["Hambantota Branch"].map((branch, i) => (
                  <div key={i}>
                    <h3 className="font-semibold text-dark text-sm mb-2 flex items-center gap-1.5">
                      <MapPin size={14} className="text-primary" />
                      {branch}
                    </h3>
                    <div className="w-full rounded-xl overflow-hidden border border-gray-200">
                      <iframe
                        src="https://www.openstreetmap.org/export/embed.html?bbox=81.05%2C6.05%2C81.2%2C6.2&layer=mapnik&marker=6.1248%2C81.1188"
                        width="100%"
                        height="208"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="MelaniArts Location - Hambantota"
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
                  </div>
                ))}

                <div>
                  <h3 className="font-semibold text-dark text-sm mb-2 flex items-center gap-1.5">
                    <MapPin size={14} className="text-primary" />
                    Colombo Branch - Online store
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
