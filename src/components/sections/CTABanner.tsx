export default function CTABanner() {
  return (
    <section className="py-20 bg-brand-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
          Prêt à transformer votre marketing ?
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
          Rejoignez les marques qui engagent leurs fans avec YouCanWin
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#demo"
            className="inline-flex items-center justify-center gap-2 bg-white text-brand-red px-7 py-3.5 rounded-xl font-semibold text-base hover:bg-red-50 transition-colors"
          >
            📅 Planifier une démo gratuite
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white px-7 py-3.5 rounded-xl font-semibold text-base hover:bg-white/20 transition-colors"
          >
            ✉️ Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
}
