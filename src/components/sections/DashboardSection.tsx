import { Settings } from "lucide-react";
import Image from "next/image";
import arrowRightIcon from "@/assets/components/hero-section/arrow-right.svg";
import iconQrcode from "@/assets/components/dashboard-section/icon-qrcode.svg";
import iconCrm from "@/assets/components/dashboard-section/icon-crm.svg";
import iconConfig from "@/assets/components/dashboard-section/icon-config.svg";
import iconAnalytics from "@/assets/components/dashboard-section/icon-analytics.svg";
import iconLots from "@/assets/components/dashboard-section/icon-lots.svg";
import iconNotifications from "@/assets/components/dashboard-section/icon-notifications.svg";
import iconExport from "@/assets/components/dashboard-section/icon-export.svg";
import iconMulticampagnes from "@/assets/components/dashboard-section/icon-multicampagnes.svg";

const dashboardFeatures = [
  {
    icon: iconQrcode,
    title: "Générateur QR Codes",
    desc: "Créez et téléchargez vos QR codes uniques en masse",
  },
  {
    icon: iconCrm,
    title: "CRM Participants",
    desc: "Collectez et gérez vos participants avec segmentation avancée",
  },
  {
    icon: iconConfig,
    title: "Configuration jeux",
    desc: "Paramétrez entièrement vos jeux : règles, lots, durée, visuels",
  },
  {
    icon: iconAnalytics,
    title: "Analytics temps réel",
    desc: "Suivez vos KPIs : scans, conversions, engagement, ROI",
  },
  {
    icon: iconLots,
    title: "Gestion des lots",
    desc: "Définissez vos récompenses et gérez les tirages au sort",
  },
  {
    icon: iconNotifications,
    title: "Notifications",
    desc: "Envoyez des push, emails et SMS à vos participants",
  },
  {
    icon: iconExport,
    title: "Export données",
    desc: "Téléchargez vos données en CSV, Excel ou via API",
  },
  {
    icon: iconMulticampagnes,
    title: "Multi-campagnes",
    desc: "Gérez plusieurs campagnes simultanément",
  },
];

export default function DashboardSection() {
  return (
    <section
      id="dashboard"
      className="px-4 sm:px-6 lg:px-20 bg-gradient-to-t from-[#f5f5f5] to-[#fefefe] font-display"
    >
      <div className="w-full py-12 sm:py-16 lg:py-20 px-0 sm:px-4">
        <div className="text-center pt-4 sm:pt-8 flex flex-col items-center gap-3 sm:gap-4">
          <div className="inline-flex items-center gap-2 bg-[#dcfce7] text-brand-green-dark px-3 py-1 rounded-full text-sm font-medium">
            <Settings size={16} />
            Backoffice tout-en-un
          </div>

          <h2 className="section-title">
            Gérez tout depuis une interface unique
          </h2>

          <p className="section-subtitle max-w-2xl text-sm sm:text-base lg:text-lg">
            Notre backoffice intuitif vous permet de créer, configurer et
            piloter vos campagnes en toute autonomie.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 mt-8 sm:mt-12">
          {dashboardFeatures.map((f) => {
            return (
              <div key={f.title}>
                <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 lg:p-6 shadow-sm hover:shadow-lg transition-shadow duration-200">
                  <Image src={f.icon} alt={f.title} width={48} height={48} className="mb-4" />
                  <h3 className="font-semibold text-base text-brand-dark mb-1">
                    {f.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="#demo"
            className="btn-primary rounded-lg text-sm sm:text-base"
          >
            Demander un accès au backoffice
            <div className="relative w-4 h-4 inline-block">
              <Image
                src={arrowRightIcon}
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
