import { Zap, Layers, Gift, BarChart2 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Activation instantanée",
    desc: "QR codes intégrés sur chaque produit",
  },
  {
    icon: Layers,
    title: "Collection digitale",
    desc: "Des cartes des players de chaque ligue",
  },
  {
    icon: Gift,
    title: "Récompenses exclusives",
    desc: "Maillots, billets, produits dérivés VIP",
  },
  {
    icon: BarChart2,
    title: "Analytics avancés",
    desc: "Suivez vos KPIs et données comportementales",
  },
];

export default function FeaturesSection() {
  return (
    <section id="offres" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100">
              {/* Placeholder football image */}
              <div className="w-full h-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 flex items-center justify-center relative">
                <div className="text-6xl opacity-30">⚽</div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-xl border border-gray-100">
              <div className="text-xs text-gray-400">Taux de conversion</div>
              <div className="font-display font-bold text-2xl text-brand-green">+340%</div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="section-label">
              <span className="w-2 h-2 bg-brand-green rounded-full" />
              Terrain de jeu digital
            </div>
            <h2 className="section-title mb-4">
              Le terrain de jeu digital de votre marque
            </h2>
            <p className="section-subtitle mb-8">
              YouCanWin transforme vos produits en expériences interactives.
              Chaque achat devient une opportunité d'engagement avec vos
              consommateurs.
            </p>

            <ul className="space-y-5 mb-8">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <li key={f.title} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-brand-green/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={16} className="text-brand-green" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-dark text-sm">{f.title}</p>
                      <p className="text-gray-500 text-sm">{f.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <a href="#demo" className="btn-primary">
              Planifier une démo →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
