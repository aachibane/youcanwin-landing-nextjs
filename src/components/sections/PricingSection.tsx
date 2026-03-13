import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Contactez-nous",
    target: "Idéal pour tester sur le marché",
    features: [
      "Jusqu'à 1 000 QR utilisateurs",
      "1 jeu actif",
      "1 Marque",
      "Management visuel des lots",
      "Dashboard basique",
      "Support email",
    ],
    cta: "Demander un devis",
    variant: "outline" as const,
    highlighted: false,
  },
  {
    name: "Scale",
    price: "Contactez-nous",
    target: "Pour vos campagnes multi-catégories",
    features: [
      "Jusqu'à 50 000 utilisateurs",
      "5 jeux illimités",
      "3 Marques",
      "Configuration des jeux Avancés",
      "10 Go en Illimité",
      "Support prioritaire",
      "Analytics API",
      "3 utilisateurs API",
      "Support dédié",
    ],
    cta: "Planifier une démo",
    variant: "primary" as const,
    highlighted: true,
    badge: "POPULAIRE",
  },
  {
    name: "Enterprise",
    price: "Contactez-nous",
    target: "Pour les groupes & fédérations",
    features: [
      "Utilisateurs illimités",
      "Jeux illimités",
      "Décentralisation nationale",
      "Analytics avancées par région",
      "4 utilisateurs admin (Premium)",
      "SLA garanti (5-9 NINES)",
      "Onboarding personnalisé",
    ],
    cta: "Contactez-nous",
    variant: "outline" as const,
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section id="offres" className="py-20 bg-brand-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="section-title mb-3">Des formules adaptées à votre échelle</h2>
        <p className="section-subtitle mb-14 max-w-2xl mx-auto text-lg">
          Choisissez la solution qui correspond à vos besoins et votre ambition
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 text-left relative shadow-sm ${
                plan.highlighted
                  ? "bg-white border-2 border-brand-green scale-105"
                  : "bg-white border border-slate-200"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-brand-red text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase">
                    {plan.badge}
                  </span>
                </div>
              )}

              <h3 className="font-display font-bold text-xl text-brand-dark mb-1">{plan.name}</h3>
              <p className="text-brand-green font-semibold text-sm mb-1 uppercase tracking-wide">{plan.price}</p>
              <p className="text-gray-500 text-sm mb-6">{plan.target}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f, idx) => (
                  <li key={`${plan.name}-${idx}`} className="flex items-start gap-2 text-sm text-gray-600">
                    <Check size={14} className="text-brand-green mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#demo"
                className={`w-full text-center block rounded-xl py-3 text-sm font-semibold transition-all ${
                  plan.variant === "primary"
                    ? "bg-brand-green text-white hover:bg-brand-green-dark"
                    : "border border-gray-300 text-brand-dark hover:border-brand-green hover:text-brand-green"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
