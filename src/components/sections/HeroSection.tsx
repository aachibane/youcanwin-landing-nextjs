import { ChevronRight, Gift, QrCode, Settings2 } from "lucide-react";

const stats = [
  { value: "500K+", label: "Interactions/mois", tone: "green" },
  { value: "50+", label: "Marques actives", tone: "red" },
  { value: "x3.5", label: "ROI moyen", tone: "green" },
];

const partners = ["Maroc Telecom", "Inwi", "Orange", "Carrefour"];

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-brand-gray-light">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(143deg, #f0fdf4 0%, #ffffff 50%, #fef2f2 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          <div className="animate-fade-up">
            <h1 className="font-display text-5xl md:text-6xl xl:text-[4.5rem] font-bold text-brand-dark leading-[0.95] tracking-[-0.02em] mb-6">
              Transformez chaque{" "}
              <span className="relative bg-gradient-to-r from-brand-green to-[#0b6b3a] bg-clip-text text-transparent">
                produit
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 6C50 2 100 2 198 6"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="text-brand-green/70"
                  />
                </svg>
              </span>{" "}
              en expérience de jeu
            </h1>

            <p className="text-gray-500 text-xl leading-8 mb-8 max-w-xl">
              YouCanWin connecte vos marques aux fans de football à travers des
              mécaniques de gamification innovantes.{" "}
              <strong className="text-brand-dark font-semibold">
                Codes QR, cartes digitales, défis et récompenses
              </strong>
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8 max-w-xl">
              {stats.map((s) => (
                <div key={s.value}>
                  <div
                    className={`font-display font-bold text-5xl leading-10 ${
                      s.tone === "red" ? "text-brand-red" : "text-brand-green"
                    }`}
                  >
                    {s.value}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 py-4">
              <a href="#demo" className="btn-primary px-8 py-4 rounded-xl text-xl">
                Voir la démo <ChevronRight size={16} />
              </a>
              <a
                href="#how"
                className="bg-white border-2 border-slate-300 text-slate-600 px-8 py-4 rounded-xl font-medium text-xl hover:border-brand-green hover:text-brand-green transition-all duration-200 inline-flex items-center gap-2"
              >
                <Settings2 size={16} className="text-brand-green" />
                Comment ça marche
              </a>
            </div>

            <div className="mt-8 border-t border-slate-200 pt-8 max-w-xl">
              <p className="text-xs text-slate-500 mb-3 uppercase tracking-[0.03em] font-medium">
                Ils nous font confiance
              </p>
              <div className="flex gap-8 items-center flex-wrap">
                {partners.map((p) => (
                  <span key={p} className="text-sm font-medium text-slate-400">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative z-10 w-full max-w-[448px]">
              <div className="bg-[#0f172a] border-8 border-[#0f172a] rounded-[40px] p-2 shadow-2xl">
                <div className="bg-white rounded-[32px] overflow-hidden">
                  <div className="bg-gradient-to-b from-brand-green to-[#0b6b3a] px-6 py-8">
                    <p className="text-white/80 text-xs font-medium uppercase tracking-[0.03em]">
                      Album Digital 2025
                    </p>
                    <h3 className="text-white font-display font-bold text-3xl mt-2">
                      Ma Collection
                    </h3>
                    <div className="flex gap-6 mt-4">
                      {[
                        { v: "127", l: "Cartes" },
                        { v: "76%", l: "Complet" },
                        { v: "#12", l: "Rang" },
                      ].map((s) => (
                        <div key={s.l}>
                          <div className="text-white font-display font-bold text-3xl leading-8">
                            {s.v}
                          </div>
                          <div className="text-white/75 text-xs mt-1">{s.l}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 pb-24">
                    <div className="grid grid-cols-3 gap-2">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div
                          key={i}
                          className="h-40 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="px-6 pt-3 pb-2 border-t border-slate-200 flex justify-between">
                    {[
                      "Collection",
                      "Scanner",
                      "Échanges",
                      "Profil",
                    ].map((label) => (
                      <div key={label} className="flex flex-col items-center gap-1.5">
                        <div className="w-5 h-5 rounded bg-slate-300" />
                        <span className="text-[10px] text-slate-600">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-5 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <QrCode size={18} className="text-brand-green" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-dark">Scan QR Code</p>
                  <p className="text-xs text-slate-500">Débloquer une carte</p>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                  <Gift size={18} className="text-brand-red" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-dark">Récompense</p>
                  <p className="text-xs text-slate-500">Tirage hebdomadaire</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
