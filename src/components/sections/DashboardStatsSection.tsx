import Image from "next/image";

const globalStats = [
  {
    icon: "/stat-users.svg",
    title: "Utilisateurs",
    subtitle: "De 1K à illimité",
  },
  { icon: "/stat-qrcode.svg", title: "QR Codes", subtitle: "Volume adapté" },
  {
    icon: "/stat-coverage.svg",
    title: "Couverture",
    subtitle: "Local à mondial",
  },
  { icon: "/stat-albums.svg", title: "Albums", subtitle: "Standard ou custom" },
  {
    icon: "/stat-infra.svg",
    title: "Infrastructure",
    subtitle: "Cloud ou On-Premise",
  },
];

export default function DashboardStatsSection() {
  return (
    <section className="bg-white border-t border-[#E5E7EB] font-display">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-8 sm:py-10 lg:py-[49px]">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 justify-items-center">
          {globalStats.map((s) => (
            <div key={s.title} className="flex flex-col items-center">
              <Image src={s.icon} alt={s.title} width={48} height={48} className="w-12 h-12 2xl:w-14 2xl:h-14" />
              <p className="font-display font-semibold text-sm lg:text-base leading-[1.5em] text-[#0F172A] text-center mt-2 sm:mt-3">
                {s.title}
              </p>
              <p className="font-display font-normal text-xs leading-[1.333em] text-[#475569] text-center mt-1">
                {s.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
