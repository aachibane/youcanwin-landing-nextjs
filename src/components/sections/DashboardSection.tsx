import { QrCode, Users, Settings, BarChart2, Shield, Bell, Download, Megaphone } from "lucide-react";

const dashboardFeatures = [
  { icon: QrCode, title: "Générateur QR Codes", desc: "Créez et téléchargez des milliers de QR codes uniques en quelques clics." },
  { icon: Users, title: "Gestion participants", desc: "Collectez et gérez vos participants avec des rapports complets et personnalisables." },
  { icon: Settings, title: "Configuration des jeux", desc: "Créez des mécaniques de jeu adaptées en temps réel sans une ligne de code." },
  { icon: BarChart2, title: "Analytics temps réel", desc: "Suivez vos scans, codes, conversions et performances régionales." },
  { icon: Shield, title: "Gestion des lots", desc: "Définissez vos budgets dotations et gérez vos stocks de récompenses facilement." },
  { icon: Bell, title: "Notifications", desc: "Envoyez des push pertinents aux bons moments, au bon utilisateur." },
  { icon: Download, title: "Export données", desc: "Téléchargez les données brutes en CSV ou JSON directement depuis l'API." },
  { icon: Megaphone, title: "Multi-campagnes", desc: "Gérez plusieurs campagnes et marques depuis une interface unifiée." },
];

const stats = [
  { value: "Utilisateurs", label: "De 1K à illimité" },
  { value: "QR Codes", label: "Volume adapté" },
  { value: "Couverture", label: "Local à mondial" },
  { value: "Albums", label: "Standard ou custom" },
  { value: "Infrastructure", label: "Cloud ou On-Premise" },
];

export default function DashboardSection() {
  return (
    <section id="dashboard" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-label justify-center">
            <span className="w-2 h-2 bg-brand-green rounded-full" />
            Backoffice tout-en-un
          </div>
          <h2 className="section-title mb-4">
            Gérez tout depuis une interface unique
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto text-lg">
            Notre backoffice intuitif vous permet de créer, configurer et piloter vos
            campagnes en toute autonomie.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {dashboardFeatures.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-brand-green" />
                </div>
                <h3 className="font-semibold text-base text-brand-dark mb-1">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mb-16">
          <a href="#demo" className="btn-primary rounded-xl px-8 py-3">
            Demander un accès au backoffice →
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {stats.map((s) => (
            <div key={s.value} className="text-center bg-brand-gray-light rounded-2xl py-6 px-3 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-green-100 mx-auto mb-3" />
              <p className="font-display font-bold text-brand-dark text-lg">{s.value}</p>
              <p className="text-gray-500 text-xs">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
