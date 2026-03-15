import Image from "next/image";
import iconEngagement from "@/assets/components/benefits-banner/icon-engagement.svg";
import iconFidelisation from "@/assets/components/benefits-banner/icon-fidelisation.svg";
import iconViralite from "@/assets/components/benefits-banner/icon-viralite.svg";

const benefits = [
  {
    icon: iconEngagement,
    title: "Engagement immédiat",
    desc: "Chaque produit devient un point de contact et une opportunité de créer un lien avec l'acheteur en jeu.",
  },
  {
    icon: iconFidelisation,
    title: "Fidélisation naturelle",
    desc: "Les clients reviennent pour compléter leur collection, créant un cycle d'achats récurrents.",
  },
  {
    icon: iconViralite,
    title: "Viralité organique",
    desc: "Des fans partagent et s'entraident entre eux, créant un bouche-à-oreille viral.",
  },
];

export default function BenefitsBanner() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-24 bg-gradient-to-r from-[#16a34a] to-[#0b6b3a] font-display">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Transformez vos ventes en expérience mémorable
        </h2>
        <p className="text-[#F0FDF4] text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
          YouCanWin offre à vos clients plus qu&apos;un produit : une expérience
          interactive complète autour du football
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 pt-6">
          {benefits.map((b) => {
            return (
              <div
                key={b.title}
                className="bg-white/10 backdrop-blur-[8px] rounded-2xl p-6 sm:p-8 text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <Image src={b.icon} alt={b.title} width={64} height={64} />
                </div>
                <h3 className="font-display font-semibold text-white text-lg sm:text-xl mb-2">
                  {b.title}
                </h3>
                <p className="text-[#F0FDF4] text-sm sm:text-base leading-relaxed">
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
