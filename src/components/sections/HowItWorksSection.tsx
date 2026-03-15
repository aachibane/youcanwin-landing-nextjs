import Image from "next/image";
import stepAchat from "@/assets/components/how-it-works/step-achat.svg";
import stepScan from "@/assets/components/how-it-works/step-scan.svg";
import stepDeblocage from "@/assets/components/how-it-works/step-deblocage.svg";
import stepCollection from "@/assets/components/how-it-works/step-collection.svg";
import stepRecompenses from "@/assets/components/how-it-works/step-recompenses.svg";

const steps = [
  {
    icon: stepAchat,
    label: "Achat produit",
    desc: "Le client achète votre produit en magasin",
  },
  {
    icon: stepScan,
    label: "Scan QR Code",
    desc: "Il scanne le code sur l'emballage",
  },
  {
    icon: stepDeblocage,
    label: "Déblocage carte",
    desc: "Une carte digitale est débloquée",
  },
  {
    icon: stepCollection,
    label: "Collection",
    desc: "Il complète sa collection",
  },
  {
    icon: stepRecompenses,
    label: "Récompenses",
    desc: "Participe aux tirages",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how" className="py-12 sm:py-16 lg:py-20 bg-white font-display">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="section-title mb-3">
          Un parcours client simple et engageant
        </h2>
        <p className="section-subtitle mb-8 sm:mb-14 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
          De l&apos;achat du produit à la récompense, en 5 étapes
        </p>

        <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 pr-4 sm:pr-6 lg:pr-8 mx-auto">
          {steps.map((step, i) => (
            <div
              key={step.label}
              className="relative z-10 bg-white rounded-2xl p-4 sm:p-6"
            >
              <div
                className={`absolute -top-2 -right-2 w-7 h-7 rounded-full ${
                  i < 3 ? "bg-brand-green" : "bg-brand-red"
                } text-white text-sm font-semibold flex items-center justify-center`}
              >
                {i + 1}
              </div>
              <Image src={step.icon} alt={step.label} width={74} height={74} className="mx-auto mb-4" />
              <p className="font-semibold text-sm sm:text-base text-brand-dark mb-1 sm:mb-2">
                {step.label}
              </p>
              <p className="text-gray-500 text-xs sm:text-sm leading-4 sm:leading-5">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
