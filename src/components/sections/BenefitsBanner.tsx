import { Zap, Users, Share2 } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Engagement immédiat",
    desc: "Chaque produit devient un point de contact et une opportunité de créer un lien avec l'acheteur en jeu.",
  },
  {
    icon: Users,
    title: "Fidélisation naturelle",
    desc: "Les clients reviennent pour compléter leur collection, créant un cycle d'achats récurrents.",
  },
  {
    icon: Share2,
    title: "Viralité organique",
    desc: "Des fans partagent et s'entraident entre eux, créant un bouche-à-oreille viral.",
  },
];

export default function BenefitsBanner() {
  return (
    <section className="py-20 bg-brand-green">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
          Transformez vos ventes en expérience mémorable
        </h2>
        <p className="text-white/70 text-base mb-14 max-w-xl mx-auto">
          YouCanWin offre à vous l'outil clé du produit — une expérience irrésistible
          capable de faire du football!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-left hover:bg-white/20 transition-colors"
              >
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="font-display font-semibold text-white text-base mb-2">{b.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
