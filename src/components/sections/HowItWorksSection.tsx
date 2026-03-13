const steps = [
  { emoji: "📦", label: "Achat produit", desc: "Le client achète un produit en magasin ou en ligne" },
  { emoji: "📷", label: "Scan QR Code", desc: "Il scanne le code QR sur l'emballage ou l'étiquette" },
  { emoji: "🎮", label: "Utilise son carte", desc: "Il débloque une carte digitale exclusive" },
  { emoji: "🃏", label: "Collection", desc: "Il complète sa collection de cartes" },
  { emoji: "🏆", label: "Récompenses", desc: "Il remporte des prix et des expériences exclusives" },
];

export default function HowItWorksSection() {
  return (
    <section id="how" className="py-20 bg-brand-gray-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="section-title mb-3">Un parcours client simple et engageant</h2>
        <p className="section-subtitle mb-14 max-w-xl mx-auto">
          De l'achat au produit à la récompense, en 1 clic près
        </p>

        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-brand-green via-brand-green/50 to-brand-red" />

          {steps.map((step, i) => (
            <div key={step.label} className="flex flex-col items-center text-center flex-1 relative z-10">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-4 shadow-md ${
                  i === steps.length - 1
                    ? "bg-brand-red"
                    : "bg-white border-2 border-brand-green/20"
                }`}
              >
                {step.emoji}
              </div>
              <p className="font-semibold text-sm text-brand-dark mb-1">{step.label}</p>
              <p className="text-gray-500 text-xs leading-snug max-w-[120px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
