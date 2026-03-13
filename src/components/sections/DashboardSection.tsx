import { QrCode, Users, Settings, BarChart2, Shield, Bell, Download, Megaphone } from "lucide-react";

const dashboardFeatures = [
  { icon: QrCode, title: "Générateur QR Codes", desc: "Créez et téléchargez des milliers de QR codes uniques en quelques clics." },
  { icon: Users, title: "Côté Participants", desc: "Collectez et gérez vos participants avec des rapports complets et personnalisables." },
  { icon: Settings, title: "Config Jeux jeux", desc: "Créez des mécaniques de jeu adaptées en temps réel sans une ligne de code." },
  { icon: BarChart2, title: "Analytics temps réel", desc: "Suivez vos scans, codes, conversions et performances régionales." },
  { icon: Shield, title: "Gestion des lots", desc: "Définissez vos budgets dotations et gérez vos stocks de récompenses facilement." },
  { icon: Bell, title: "Notifications", desc: "Envoyez des push pertinents aux bons moments, au bon utilisateur." },
  { icon: Download, title: "Export données", desc: "Téléchargez les données brutes en CSV ou JSON directement depuis l'API." },
  { icon: Megaphone, title: "Multi-campagnes", desc: "Gérez plusieurs campagnes et marques depuis une interface unifiée." },
];

const stats = [
  { value: "11 Utilisateurs", label: "Actifs" },
  { value: "QR Codes", label: "Générés" },
  { value: "Couverture", label: "Nationale" },
  { value: "Albums", label: "Collectés" },
  { value: "Infrastructure", label: "Cloud sécurisée" },
];

export default function DashboardSection() {
  return (
    <section id="dashboard" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-label justify-center">
            <span className="w-2 h-2 bg-brand-green rounded-full" />
            Backoffice en un
          </div>
          <h2 className="section-title mb-4">
            Gérez tout depuis une interface unique
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Notre backoffice intuitif vous permet de créer, configurer et piloter vos
            campagnes en toute autonomie.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {dashboardFeatures.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="card group">
                <div className="w-9 h-9 rounded-xl bg-brand-green/10 flex items-center justify-center mb-4 group-hover:bg-brand-green transition-colors">
                  <Icon size={16} className="text-brand-green group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-sm text-brand-dark mb-1">{f.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mb-16">
          <a href="#demo" className="btn-primary">
            Demander un accès au backoffice →
          </a>
        </div>

        {/* Stats bar */}
        <div className="bg-brand-gray-light rounded-2xl px-6 py-5 grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
          {stats.map((s) => (
            <div key={s.value}>
              <p className="font-display font-bold text-brand-dark text-sm">{s.value}</p>
              <p className="text-gray-400 text-xs">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
