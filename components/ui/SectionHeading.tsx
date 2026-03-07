interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  centered?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  dark = false,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 lg:mb-14 ${centered ? "text-center" : ""}`}>
      {label && (
        <span className="text-primary font-semibold uppercase tracking-widest text-sm block mb-2">
          {label}
        </span>
      )}
      <h2
        className={`font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight ${
          dark ? "text-white" : "text-dark"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${dark ? "text-gray-300" : "text-gray-mid"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
