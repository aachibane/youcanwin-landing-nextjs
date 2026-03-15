import albumDigital from "../../assets/components/catalog-section/album-digital.png";
import quizFootball from "../../assets/components/catalog-section/quiz-football.png";
import tombolaDigitale from "../../assets/components/catalog-section/tombola-digitale.png";
import pronostics from "../../assets/components/catalog-section/pronostics.png";
import Image from "next/image";

const games = [
  {
    img: albumDigital,
    title: "Album Digital 2025",
    desc: "Collection de cartes avec échanges et défis.",
    badge: "STAR",
    link: true,
  },
  {
    img: quizFootball,
    title: "Quiz Football",
    desc: "Questions sur l'actualité et l'histoire du foot.",
    badge: "BIENTÔT",
  },
  {
    img: tombolaDigitale,
    title: "Tombola digitale",
    desc: "Tirages au sort avec lots sponsorisés.",
  },
  {
    img: pronostics,
    title: "Pronostics",
    desc: "Prédictions de matchs et classements.",
  },
];

export default function CatalogSection() {
  return (
    <section id="jeux" className="py-12 sm:py-16 lg:py-20 bg-[#f8fafc] font-display">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-14">
          <h2 className="section-title mb-3">Catalogue de jeux</h2>
          <p className="section-subtitle max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            Des mécaniques éprouvées pour engager vos audiences
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {games.map((g, index) => (
            <div
              key={g.title}
              className="rounded-2xl overflow-hidden group cursor-pointer border border-slate-200 transition-shadow duration-100 hover:shadow-2xl"
            >
              <div className="relative w-full h-[180px] sm:h-[200px] lg:h-[219px] rounded-t-2xl overflow-hidden">
                <Image
                  src={g.img}
                  alt={g.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {g.badge && (
                  <span
                    className={`absolute top-0 right-0 text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded-tr-xl rounded-bl-xl ${
                      g.badge === "STAR"
                        ? "bg-gradient-to-r from-[#16A34A] to-[#0B6B3A]"
                        : g.badge === "BIENTÔT"
                          ? "bg-[#475569]"
                          : "bg-gray-400"
                    }`}
                  >
                    {g.badge}
                  </span>
                )}
              </div>

              <div className="border-t border-gray-200 p-4 sm:p-6 flex flex-col gap-2 items-start group">
                <h3
                  className={`font-semibold text-sm sm:text-base text-brand-dark ${
                    index === 0
                      ? "group-hover:text-brand-green transition-colors duration-200"
                      : ""
                  }`}
                >
                  {g.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-snug">{g.desc}</p>
                {g.link && (
                  <button className="text-brand-green text-sm font-medium flex items-center gap-1 transition-colors duration-200">
                    Découvrir
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      &gt;
                    </span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
