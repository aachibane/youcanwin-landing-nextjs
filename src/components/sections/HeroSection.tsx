import Image from "next/image";
import arrowRightIcon from "@/assets/components/hero-section/arrow-right.svg";
import lampIcon from "@/assets/components/hero-section/lamp.svg";
import iconQrcode from "@/assets/components/hero-section/icon-qrcode.svg";
import iconGift from "@/assets/components/hero-section/icon-gift.svg";

const stats = [
  { value: "500K+", label: "Interactions/mois", tone: "green" },
  { value: "50+", label: "Marques actives", tone: "red" },
  { value: "x3.5", label: "ROI moyen", tone: "green" },
];

const partners = ["Maroc Telecom", "Inwi", "Orange", "Carrefour"];

export default function HeroSection() {
  return (
    <section
      id="album"
      className="overflow-hidden bg-four-corners font-display mt-18"
    >
      <div
        className="z-10"
        style={{
          backgroundImage:
            "linear-gradient(152deg, #f0fdf4 0%, #ffffff 50%, #fef2f2 100%)",
        }}
      >
        <div className="px-6 sm:px-10 lg:px-20">
          <div className="py-12 md:py-16 lg:py-24 xl:py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="animate-fade-up flex flex-col gap-8">
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold text-[#0F172A] leading-[1em] tracking-[-0.025em]">
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

                <p className="text-[#475569] text-lg md:text-xl lg:text-2xl max-w-xl leading-[1.33em]">
                  YouCanWin connecte vos marques aux fans de football à travers
                  des mécaniques de gamification innovantes. Codes QR, cartes
                  digitales, défis et récompenses.
                </p>

                <div className="grid grid-cols-3 gap-3 sm:gap-17 mt-2 max-w-xl justify-between">
                  {stats.map((s) => (
                    <div key={s.value}>
                      <div
                        className={`font-display font-bold text-2xl sm:text-3xl md:text-4xl leading-[1.11em] ${
                          s.tone === "red"
                            ? "text-[#b01219]"
                            : "text-brand-green-dark"
                        }`}
                      >
                        {s.value}
                      </div>
                      <div className="text-sm text-brand-gray-dark mt-1 font-medium">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 py-4">
                  <a
                    href="#demo"
                    className="group btn-primary rounded-xl font-normal text-sm sm:text-base md:text-lg xl:text-xl px-2 lg:px-4 xl:px-8 py-3 lg:py-4 
             bg-gradient-to-r from-brand-green-light to-brand-green-dark flex items-center gap-2 justify-center text-white transition-shadow duration-200 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]"
                  >
                    Voir la démo
                    <div className="relative w-3 h-3 xl:w-4 xl:h-4 transition-transform duration-200 group-hover:translate-x-1">
                      <Image
                        src={arrowRightIcon}
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                  </a>
                  <a
                    href="#how"
                    className="bg-[#F8FAFC] hover:bg-slate-100 py-3 lg:py-4 border-2 border-[#94A3B8] text-[#334155] px-3 lg:px-4 xl:px-8 rounded-xl font-medium text-sm sm:text-base md:text-lg transition-all duration-200 inline-flex items-center justify-center gap-2"
                  >
                    <Image src={lampIcon} alt="" width={17} height={17} />
                    Comment ça marche
                  </a>
                </div>

                <div className="border-t border-slate-200 pt-[33px] max-w-xl flex flex-col gap-4">
                  <p className="text-xs text-slate-500 mb-3 uppercase font-medium">
                    Ils nous font confiance
                  </p>
                  <div className="flex gap-5 sm:gap-8 items-center flex-wrap">
                    {partners.map((p) => (
                      <span
                        key={p}
                        className="text-xs sm:text-sm font-medium text-slate-400"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="hidden md:block flex ml-8 px-6 lg:px-10 xl:px-16">
                <div className="relative z-10 w-full max-w-lg mx-auto animate-fade-up">
                  <div className="bg-[#1e293b] rounded-[40px] p-[8px] shadow-2xl">
                    <div className="bg-white rounded-[31px] overflow-hidden pb-[231px] relative flex flex-col gap-4">
                      <div className="bg-gradient-to-b from-brand-green to-[#0b6b3a] px-6 py-8 flex flex-col gap-2">
                        <p className="text-white/80 text-xs font-medium uppercase">
                          Album Digital 2025
                        </p>
                        <h3 className="text-white font-bold text-2xl">
                          Ma Collection
                        </h3>
                        <div className="flex gap-4 pt-4 text-center">
                          {[
                            { v: "127", l: "Cartes" },
                            { v: "76%", l: "Complet" },
                            { v: "#12", l: "Rang" },
                          ].map((s) => (
                            <div key={s.l}>
                              <div className="text-white font-display font-bold text-2xl">
                                {s.v}
                              </div>
                              <div className="text-white/75 text-xs font-regular">
                                {s.l}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="px-4">
                        <div className="grid grid-cols-3 gap-2">
                          {Array.from({ length: 6 }).map((_, i) => (
                            <div
                              key={i}
                              className="aspect-[3/4] rounded-lg bg-[#e4eaf0]"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-0 right-0 bottom-0 px-6 sm:px-8 pt-3 pb-3 bg-white border-t border-slate-100 flex justify-between">
                    {" "}
                    {["Collection", "Scanner", "Échanges", "Profil"].map(
                      (label) => (
                        <div
                          key={label}
                          className="flex flex-col items-center gap-1"
                        >
                          <div className="w-5 h-5 rounded-md bg-slate-200" />
                          <span className="text-[10px] text-slate-500 font-medium">
                            {label}
                          </span>
                        </div>
                      ),
                    )}
                  </div>

                  <div className="hidden sm:flex absolute -top-5 -right-10 lg:-right-18 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 items-center gap-3 z-20">
                    <Image
                      src={iconQrcode}
                      alt="QR Code"
                      width={40}
                      height={40}
                    />
                    <div>
                      <p className="text-sm font-semibold text-brand-dark">
                        Scan QR Code
                      </p>
                      <p className="text-xs text-slate-500">
                        Débloquer une carte
                      </p>
                    </div>
                  </div>

                  <div className="hidden sm:flex absolute -bottom-5 -left-10 -lg:-left-27 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 items-center gap-3 z-20">
                    <Image
                      src={iconGift}
                      alt="Récompense"
                      width={40}
                      height={40}
                    />
                    <div>
                      <p className="text-sm font-semibold text-brand-dark">
                        Récompense
                      </p>
                      <p className="text-xs text-slate-500">
                        Tirage hebdomadaire
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
