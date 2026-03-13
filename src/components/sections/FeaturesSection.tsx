import { BarChart2, Gift, Layers, Smartphone, Sparkles } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Activation instantanée",
    desc: "QR codes uniques sur chaque produit",
  },
  {
    icon: Layers,
    title: "Collection digitale",
    desc: "Cartes de joueurs, raretés, échanges",
  },
  {
    icon: Gift,
    title: "Récompenses exclusives",
    desc: "Tirages au sort, lots partenaires, expériences VIP",
  },
  {
    icon: BarChart2,
    title: "Analytics avancés",
    desc: "Dashboard temps réel, insights consommateurs",
  },
];

const footballImage =
  "https://www.figma.com/api/mcp/asset/c7435bec-fb89-4a64-bffc-652b47c65e63";

export default function FeaturesSection() {
  return (
    <section id="offres" className="py-20 bg-brand-gray-light border-y border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <div className="relative w-full max-w-[448px] rounded-2xl overflow-hidden shadow-xl border border-black/10">
              <img
                src={footballImage}
                alt="Fans de football avec smartphones"
                className="w-full h-[597px] object-cover"
              />
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-[#0b6b3a] px-3 py-1 rounded-full text-sm font-medium mb-4">
              <Sparkles size={14} />
              Solution complète
            </div>

            <h2 className="font-display text-5xl leading-[1.05] font-bold text-brand-dark mb-4">
              Le terrain de jeu digital de votre marque
            </h2>

            <p className="text-slate-600 text-3xl leading-10 mb-8 max-w-xl">
              YouCanWin transforme vos produits en expériences interactives.
              Chaque achat devient une opportunité d'engagement avec vos
              consommateurs.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <li key={f.title} className="flex items-start gap-4 min-h-11">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-brand-green" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-dark text-2xl leading-6">
                        {f.title}
                      </p>
                      <p className="text-slate-600 text-sm leading-5">{f.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <a
              href="#demo"
              className="inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3 rounded-lg font-medium text-xl hover:opacity-95 transition-opacity"
            >
              Planifier une démo →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
