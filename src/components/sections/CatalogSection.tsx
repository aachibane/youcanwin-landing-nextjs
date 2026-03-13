const games = [
  {
    emoji: "⚽",
    title: "Album Digital 2025",
    desc: "Collectionnez des cartes digitales officielles des plus grands joueurs",
    tag: "Découvrir",
    color: "from-green-400 to-green-600",
  },
  {
    emoji: "🎯",
    title: "Quiz Football",
    desc: "Testez vos connaissances et engagez votre audience en temps réel",
    tag: "QUIZ",
    color: "from-yellow-400 to-orange-500",
    big: true,
  },
  {
    emoji: "📊",
    title: "Tombola digitale",
    desc: "Tirages au sort digitaux transparents et certifiés",
    tag: "Découvrir",
    color: "from-blue-400 to-blue-600",
  },
  {
    emoji: "📈",
    title: "Pronostics",
    desc: "Faites pronostiquer les fans et stimulez l'engagement en continu",
    tag: "Découvrir",
    color: "from-purple-400 to-purple-600",
  },
];

const globalStats = [
  { value: "500K+", label: "Interactions mensuelles" },
  { value: "50+", label: "Marques partenaires" },
  { value: "98%", label: "Taux de satisfaction" },
  { value: "24/7", label: "Support technique" },
];

export default function CatalogSection() {
  return (
    <section id="jeux" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="section-title mb-3">Catalogue de jeux</h2>
          <p className="section-subtitle max-w-2xl mx-auto text-lg">
            Des mécaniques éprouvées pour engager vos audiences
          </p>
        </div>

        {/* Game cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {games.map((g) => (
            <div
              key={g.title}
              className={`rounded-2xl overflow-hidden relative group cursor-pointer shadow-sm border border-slate-200 ${
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
              <div className="p-5 bg-white rounded-b-2xl">
                <h3 className="font-semibold text-base text-brand-dark mb-1">{g.title}</h3>
                <p className="text-gray-500 text-sm leading-snug mb-3">{g.desc}</p>
                <button className="text-brand-green text-sm font-semibold hover:underline">
                  {g.tag} →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {globalStats.map((s) => (
            <div key={s.value} className="bg-brand-gray-light rounded-2xl border border-slate-200 py-6 px-4">
              <div className="w-8 h-8 bg-green-100 rounded-lg mx-auto mb-2" />
              <div className="font-display font-bold text-3xl text-brand-dark mb-1">{s.value}</div>
              <div className="text-gray-500 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
