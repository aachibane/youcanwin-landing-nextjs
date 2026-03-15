import Image from "next/image";

const globalStats = [
  {
    icon: "/stat-interactions.svg",
    value: "500K+",
    label: "Interactions mensuelles",
  },
  {
    icon: "/stat-marques.svg",
    value: "50+",
    label: "Marques partenaires",
  },
  {
    icon: "/stat-satisfaction.svg",
    value: "98%",
    label: "Taux de satisfaction",
  },
  {
    icon: "/stat-support.svg",
    value: "24/7",
    label: "Support technique",
  },
];

export default function GlobalStatsSection() {
  return (
    <section className="bg-white border-y border-[#E5E7EB] font-display">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 xl:gap-16 justify-items-center">
          {globalStats.map((s) => (
            <div key={s.value} className="flex flex-col items-center text-center">
              <Image src={s.icon} alt={s.label} width={32} height={32} className="mb-3" />
              <p className="font-display font-bold text-xl sm:text-2xl md:text-[30px] text-[#0F172A] leading-[1.2em]">
                {s.value}
              </p>
              <p className="font-display text-xs sm:text-sm text-[#475569] mt-1 sm:mt-1.5">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
