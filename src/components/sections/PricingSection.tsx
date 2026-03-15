import { Check } from "lucide-react";
import Image from "next/image";
const plans = [
  {
    name: "Starter",
    icon: "/icon-starter.svg",
    subtitle: "Campagne locale",
    target: "Idéal pour tester sur un marché",
    pricing: "Tarification sur mesure selon vos volumes",
    features: [
      "Jusqu'à 1 000 utilisateurs",
      "Jusqu'à 10K QR codes",
      "1 pays / région",
      "Album standard (équipe nationale)",
      "Hébergement Cloud sécurisé",
      "Backoffice simplifié",
      "Support par email",
      "1 marque",
    ],
    cta: "Demander un devis",
    variant: "outline" as const,
    highlighted: false,
  },
  {
    name: "Scale",
    icon: "/icon-scale.svg",
    subtitle: "Expansion nationale",
    target: "Pour des campagnes d'envergure",
    pricing: "Tarification sur mesure selon vos volumes",
    features: [
      "Jusqu'à 50 000 utilisateurs",
      "QR codes illimités",
      "Multi-pays (jusqu'à 5)",
      "Album complet (toutes les équipes)",
      "Cloud ou On-Premise",
      "Backoffice avancé avec analytics",
      "Support prioritaire 24/7",
      "Jusqu'à 3 marques",
      "API REST disponible",
    ],
    cta: "Planifier une démo",
    variant: "primary" as const,
    highlighted: true,
    badge: "POPULAIRE",
  },
  {
    name: "Enterprise",
    icon: "/icon-enterprise.svg",
    subtitle: "Solution globale",
    target: "Pour les groupes internationaux",
    pricing: "Tarification sur mesure selon vos volumes",
    features: [
      "Utilisateurs illimités",
      "QR codes illimités",
      "Déploiement mondial",
      "Albums personnalisés par région",
      "Infrastructure dédiée (On-Premise)",
      "Multi-marques illimité",
      "Développements sur-mesure",
      "Account manager dédié",
      "SLA garanti 99.9%",
      "Formation et onboarding complet",
    ],
    cta: "Contactez-nous",
    variant: "outline" as const,
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section
      id="offres"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#fefefe] to-[#f8fafc] font-display"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="section-title mb-3">
          Des formules adaptées à votre échelle
        </h2>
        <p className="section-subtitle mb-8 sm:mb-14 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
          Choisissez la solution qui correspond à vos besoins et votre ambition
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-md lg:max-w-none mx-auto">
          {plans.map((plan) => {
            return (
              <div
                key={plan.name}
                className={`
                  rounded-xl p-5 sm:p-6 lg:p-8 text-left relative transition-shadow duration-300 flex flex-col gap-3 sm:gap-4
                  ${plan.highlighted
                    ? "bg-white border border-[#FECACA] shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.1),0px_20px_25px_-5px_rgba(0,0,0,0.1)]"
                    : "bg-white border border-[#E2E8F0] shadow-none hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]"
                  }
                `}
              >
                {plan.badge && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2">
                    <span className="text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full uppercase bg-gradient-to-r from-[#DC2626] to-[#B01219] whitespace-nowrap">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <Image src={plan.icon} alt={plan.name} width={48} height={48} className="shrink-0" />

                <div>
                  <h3 className="font-semibold text-lg sm:text-xl text-brand-dark">
                    {plan.name}
                  </h3>
                  <p className="text-brand-green font-medium text-xs sm:text-sm">
                    {plan.subtitle}
                  </p>
                </div>
                <p className="text-brand-gray-dark text-sm sm:text-base">
                  {plan.target}
                </p>
                <p className="text-[#697E9A] text-xs sm:text-sm border-b border-t border-slate-100 py-3 sm:py-4">
                  {plan.pricing}
                </p>

                <ul className="space-y-2 sm:space-y-3 pt-1 sm:pt-2 pb-2 sm:pb-4">
                  {plan.features.map((f, idx) => (
                    <li
                      key={`${plan.name}-${idx}`}
                      className="flex items-start gap-2 text-xs sm:text-sm text-brand-gray-dark"
                    >
                      <Check
                        size={14}
                        className={`${plan.highlighted ? "text-brand-red" : "text-brand-green"} mt-0.5 shrink-0`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#demo"
                  className={`text-center rounded-lg py-2.5 sm:py-3 px-4 text-sm sm:text-base font-medium transition-all ${
                    plan.variant === "primary"
                      ? "bg-brand-red text-white hover:bg-[#B01219]"
                      : "border border-[#CBD5E1] text-[#334155] hover:bg-[#F8FAFC]"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
