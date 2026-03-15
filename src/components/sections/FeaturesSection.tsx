import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import footballImage from "@/assets/components/feature-section/football.jpg";
import calendarIcon from "@/assets/components/cta-banner/calendar.svg";
import iconActivation from "@/assets/components/feature-section/icon-activation.svg";
import iconCollection from "@/assets/components/feature-section/icon-collection.svg";
import iconRecompenses from "@/assets/components/feature-section/icon-recompenses.svg";
import iconAnalytics from "@/assets/components/feature-section/icon-analytics.svg";

const features = [
  {
    icon: iconActivation,
    title: "Activation instantanée",
    desc: "QR codes uniques sur chaque produit",
  },
  {
    icon: iconCollection,
    title: "Collection digitale",
    desc: "Cartes de joueurs, raretés, échanges",
  },
  {
    icon: iconRecompenses,
    title: "Récompenses exclusives",
    desc: "Tirages au sort, lots partenaires, expériences VIP",
  },
  {
    icon: iconAnalytics,
    title: "Analytics avancés",
    desc: "Dashboard temps réel, insights consommateurs",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="apropos"
      className="py-12 sm:py-16 lg:py-[81px] px-4 sm:px-6 lg:px-24 bg-red bg-gradient-to-t from-[#f5f5f5] to-[#fefefe] border-y border-black/7 font-display"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="flex justify-center">
            <div className="relative w-full max-w-[448px] h-[360px] sm:h-[500px] lg:h-[597px] rounded-2xl overflow-hidden shadow-xl border border-black/10">
              <Image
                src={footballImage}
                alt="Fans de football avec smartphones"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-[#0b6b3a] px-3 py-1 rounded-full text-sm font-medium mb-4">
              <CheckCircle2 size={14} />
              Solution complète
            </div>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.05] font-bold text-brand-dark mb-3 sm:mb-4">
              Le terrain de jeu digital de votre marque
            </h2>

            <p className="text-slate-600 text-sm sm:text-base lg:text-lg xl:text-xl leading-6 sm:leading-7 lg:leading-8 mb-6 sm:mb-8 max-w-xl">
              YouCanWin transforme vos produits en expériences interactives.
              Chaque achat devient une opportunité d&apos;engagement avec vos
              consommateurs.
            </p>

            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {features.map((f) => {
                return (
                  <li key={f.title} className="flex items-start gap-3 sm:gap-4">
                    <Image src={f.icon} alt={f.title} width={40} height={40} className="shrink-0" />
                    <div>
                      <p className="font-semibold text-brand-dark text-base sm:text-lg leading-6">
                        {f.title}
                      </p>
                      <p className="text-slate-600 text-sm leading-5">
                        {f.desc}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <a
              href="#demo"
              className="inline-flex items-center gap-2 bg-brand-red text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium text-sm sm:text-base lg:text-lg hover:opacity-95 transition-opacity"
            >
              Planifier une démo
              <Image src={calendarIcon} alt="" width={17} height={17} className="invert brightness-0 invert" style={{ filter: "brightness(0) invert(1)" }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
