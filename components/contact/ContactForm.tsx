"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  email?: string;
  service: string;
  message: string;
}

const serviceOptions = [
  "Name Boards",
  "Number Plates",
  "Vehicle Stickers",
  "Digital Printing",
  "Photocopy",
  "Mug Printing",
  "Awards",
  "Other",
];

const WA_NUMBER = "94717402537";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const message = encodeURIComponent(
      `Hi MelaniArts!\n\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email || "N/A"}\nService: ${data.service}\n\nMessage:\n${data.message}`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${message}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle size={56} className="text-primary mb-4" />
        <h3 className="font-display font-bold text-2xl text-dark mb-2">
          Message Sent!
        </h3>
        <p className="text-gray-mid">
          We&apos;ll be in touch with you shortly via WhatsApp.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-primary text-sm font-medium hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-dark mb-1.5">
            Full Name <span className="text-primary">*</span>
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            className={`w-full border rounded-lg px-4 py-3 text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors ${
              errors.name ? "border-primary" : "border-gray-200 focus:border-primary"
            }`}
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="text-primary text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold text-dark mb-1.5">
            Phone Number <span className="text-primary">*</span>
          </label>
          <input
            {...register("phone", { required: "Phone number is required" })}
            type="tel"
            className={`w-full border rounded-lg px-4 py-3 text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors ${
              errors.phone ? "border-primary" : "border-gray-200 focus:border-primary"
            }`}
            placeholder="07X XXX XXXX"
          />
          {errors.phone && (
            <p className="text-primary text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-dark mb-1.5">
          Email Address{" "}
          <span className="text-gray-mid font-normal">(optional)</span>
        </label>
        <input
          {...register("email")}
          type="email"
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          placeholder="your@email.com"
        />
      </div>

      {/* Service */}
      <div>
        <label className="block text-sm font-semibold text-dark mb-1.5">
          Service Interested In <span className="text-primary">*</span>
        </label>
        <select
          {...register("service", { required: "Please select a service" })}
          className={`w-full border rounded-lg px-4 py-3 text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors bg-white ${
            errors.service ? "border-primary" : "border-gray-200 focus:border-primary"
          }`}
        >
          <option value="">Select a service...</option>
          {serviceOptions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className="text-primary text-xs mt-1">{errors.service.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold text-dark mb-1.5">
          Message / Project Details <span className="text-primary">*</span>
        </label>
        <textarea
          {...register("message", { required: "Please describe your project" })}
          rows={5}
          className={`w-full border rounded-lg px-4 py-3 text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors resize-none ${
            errors.message ? "border-primary" : "border-gray-200 focus:border-primary"
          }`}
          placeholder="Tell us about your project..."
        />
        {errors.message && (
          <p className="text-primary text-xs mt-1">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold py-4 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
      >
        <Send size={18} />
        Send Message via WhatsApp
      </button>
    </form>
  );
}
