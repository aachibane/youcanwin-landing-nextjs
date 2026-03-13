import { Play, ChevronRight } from "lucide-react";

const stats = [
  { value: "500K+", label: "Participants actifs" },
  { value: "50+", label: "Marques & Clients" },
  { value: "x3.5", label: "Taux d'engagement" },
];

const partners = ["Nike", "Adidas", "Puma", "Umbro", "Decathlon"];

export default function HeroSection() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div className="animate-fade-up">
            <h1 className="font-display text-4xl md:text-5xl xl:text-6xl font-bold text-brand-dark leading-[1.1] mb-6">
              Transformez chaque{" "}
              <span className="text-brand-green relative">
                produit
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 6C50 2 100 2 198 6"
                    stroke="#2DB84B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.4"
                  />
                </svg>
              </span>{" "}
              en expérience de jeu
            </h1>

            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8 max-w-md">
              YouCanWin connecte vos marques aux fans de football à travers des
              mécaniques de gamification innovantes.{" "}
              <strong className="text-brand-dark">
                Codes QR, cartes digitales, défis et récompenses
              </strong>
            </p>

            {/* Stats */}
            <div className="flex gap-8 mb-10">
              {stats.map((s) => (
                <div key={s.value}>
                  <div className="font-display font-bold text-2xl text-brand-dark">
                    {s.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a href="#demo" className="btn-primary">
                Voir la démo <ChevronRight size={16} />
              </a>
              <a href="#how" className="btn-outline">
                <Play size={14} className="text-brand-green" />
                Comment ça marche
              </a>
            </div>

            {/* Partners */}
            <div className="mt-10">
              <p className="text-xs text-gray-400 mb-3">Ils nous font confiance</p>
              <div className="flex gap-6 items-center flex-wrap">
                {partners.map((p) => (
                  <span key={p} className="text-sm font-semibold text-gray-300 tracking-wide">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: App mockup */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Decorative BG */}
            <div className="absolute top-8 right-0 w-72 h-72 bg-brand-green/5 rounded-full blur-3xl" />
            <div className="absolute bottom-8 left-8 w-48 h-48 bg-brand-green/10 rounded-full blur-2xl" />

            {/* Phone mockup */}
            <div className="relative z-10 w-64 md:w-72">
              <div className="bg-gray-900 rounded-[2.5rem] p-4 shadow-2xl">
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-white px-4 pt-3 pb-2 flex justify-between items-center">
                    <span className="text-[10px] text-gray-400">9:41</span>
                    <div className="w-16 h-4 bg-gray-900 rounded-full" />
                    <span className="text-[10px] text-gray-400">●●●</span>
                  </div>

                  {/* App header */}
                  <div className="bg-brand-green px-4 py-4">
                    <p className="text-white/70 text-[10px] font-medium">Ma Collection</p>
                    <div className="flex gap-4 mt-2">
                      {[
                        { v: "127", l: "Cartes" },
                        { v: "76%", l: "Complété" },
                        { v: "#12", l: "Rang" },
                      ].map((s) => (
                        <div key={s.l}>
                          <div className="text-white font-display font-bold text-base">{s.v}</div>
                          <div className="text-white/60 text-[9px]">{s.l}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* QR scan button */}
                  <div className="px-4 py-3">
                    <div className="bg-brand-green/10 rounded-xl p-3 flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-brand-green/20 rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 border-2 border-brand-green rounded-sm" />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold text-brand-dark">Scanner QR Code</p>
                        <p className="text-[9px] text-gray-400">Débloquez des cartes exclusives</p>
                      </div>
                    </div>

                    {/* Card grid */}
                    <div className="grid grid-cols-4 gap-1.5">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div
                          key={i}
                          className={`aspect-[2/3] rounded-md ${
                            i < 5
                              ? "bg-gradient-to-b from-brand-green/30 to-brand-green/10 border border-brand-green/20"
                              : "bg-gray-100 border border-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Nav bar */}
                  <div className="px-4 py-3 border-t border-gray-100 flex justify-around">
                    {["🏠", "🎯", "🏆", "👤"].map((icon) => (
                      <span key={icon} className="text-sm">{icon}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-3 -right-3 bg-white rounded-2xl px-3 py-2 shadow-lg border border-gray-100 flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
                <span className="text-[11px] font-semibold text-brand-dark">1 238 scans aujourd'hui</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
