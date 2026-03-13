interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeader({ label, title, subtitle, center = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {label && (
        <div className={`section-label ${center ? "justify-center" : ""}`}>
          <span className="w-2 h-2 bg-brand-green rounded-full" />
          {label}
        </div>
      )}
      <h2 className="section-title mb-4">{title}</h2>
      {subtitle && (
        <p className={`section-subtitle ${center ? "max-w-xl mx-auto" : "max-w-lg"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
