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
    <section className="py-20 bg-brand-gray-light border-y border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Transformez vos ventes en expérience mémorable
        </h2>
        <p className="text-slate-600 text-lg mb-14 max-w-3xl mx-auto">
          YouCanWin offre à vos clients plus qu&apos;un produit : une expérience interactive
          complète autour du football
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-sm"
              >
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <Icon size={28} className="text-brand-green" />
                </div>
                <h3 className="font-display font-semibold text-brand-dark text-2xl mb-2">{b.title}</h3>
                <p className="text-slate-600 text-base leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
