const games = [
  {
    emoji: "⚽",
    title: "Album Digital 2025",
    desc: "Des cartes digitales des plus grands joueurs de la Botola Pro",
    tag: "Découvrir",
    color: "from-green-400 to-green-600",
  },
  {
    emoji: "🎯",
    title: "Quiz Football",
    desc: "Testez vos connaissances sur le football marocain et africain",
    tag: "QUIZ",
    color: "from-yellow-400 to-orange-500",
    big: true,
  },
  {
    emoji: "📊",
    title: "Tombola digitale",
    desc: "Tirage au sort digital, transparent et certifié",
    tag: "Découvrir",
    color: "from-blue-400 to-blue-600",
  },
  {
    emoji: "📈",
    title: "Pronostics",
    desc: "Laissez vos fans prédire les résultats et gagnez des prix",
    tag: "Découvrir",
    color: "from-purple-400 to-purple-600",
  },
];

const globalStats = [
  { value: "500K+", label: "Participants actifs" },
  { value: "50+", label: "Marques & Clients" },
  { value: "98%", label: "Taux de satisfaction" },
  { value: "24/7", label: "Support disponible" },
];

export default function CatalogSection() {
  return (
    <section id="jeux" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="section-title mb-3">Catalogue de jeux</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Des mécaniques éprouvées pour engager votre audience
          </p>
        </div>

        {/* Game cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {games.map((g) => (
            <div
              key={g.title}
              className={`rounded-2xl overflow-hidden relative group cursor-pointer ${
                g.big ? "row-span-1" : ""
              }`}
            >
              <div
                className={`aspect-[3/4] bg-gradient-to-b ${g.color} flex flex-col items-center justify-center p-4 relative`}
              >
                <div className="text-5xl mb-3">{g.emoji}</div>
                {g.tag === "QUIZ" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-display font-black text-4xl tracking-tight opacity-20">
                      QUIZ
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
              <div className="p-4 bg-white border-x border-b border-gray-100 rounded-b-2xl">
                <h3 className="font-semibold text-sm text-brand-dark mb-1">{g.title}</h3>
                <p className="text-gray-500 text-xs leading-snug mb-3">{g.desc}</p>
                <button className="text-brand-green text-xs font-semibold hover:underline">
                  {g.tag} →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {globalStats.map((s) => (
            <div key={s.value}>
              <div className="font-display font-bold text-3xl text-brand-dark mb-1">{s.value}</div>
              <div className="text-gray-500 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
