import { Gift, QrCode, ShoppingBag, Trophy, WalletCards } from "lucide-react";

const steps = [
  {
    icon: ShoppingBag,
    label: "Achat produit",
    desc: "Le client achète votre produit en magasin",
  },
  {
    icon: QrCode,
    label: "Scan QR Code",
    desc: "Il scanne le code sur l'emballage",
  },
  {
    icon: WalletCards,
    label: "Déblocage carte",
    desc: "Une carte digitale est débloquée",
  },
  {
    icon: Trophy,
    label: "Collection",
    desc: "Il complète sa collection",
  },
  {
    icon: Gift,
    label: "Récompenses",
    desc: "Participe aux tirages",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="section-title mb-3">Un parcours client simple et engageant</h2>
        <p className="section-subtitle mb-14 max-w-2xl mx-auto text-lg">
          De l&apos;achat du produit à la récompense, en 5 étapes
        </p>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="hidden lg:block absolute top-8 left-[9%] right-[9%] h-px bg-slate-200" />

          {steps.map((step, i) => (
            <div
              key={step.label}
              className="relative z-10 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
            >
              <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-brand-green text-white text-sm font-semibold flex items-center justify-center">
                {i + 1}
              </div>
              <div className="w-16 h-16 rounded-2xl bg-green-50 mx-auto mb-4 flex items-center justify-center">
                <step.icon size={24} className="text-brand-green" />
              </div>
              <p className="font-semibold text-base text-brand-dark mb-2">{step.label}</p>
              <p className="text-gray-500 text-sm leading-5">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
