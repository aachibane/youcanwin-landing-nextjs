const footerLinks = {
  "Liens rapides": ["Nos offres", "Nos Jeux", "Album 2025", "La Ligue", "La Liga"],
  "Contact & Légal": [
    "contact@youcanwin.com",
    "Mentions légales",
    "Politique de confidentialité",
    "CGU",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-green rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">Y</span>
              </div>
              <span className="font-display font-bold text-brand-dark text-lg">
                YouCan<span className="text-brand-green">Win</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Nous transformons vos produits en expériences interactives qui engagent et fidélisent vos consommateurs.
            </p>
            <div className="flex gap-3 mt-5">
              {["f", "in", "tw"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500 hover:bg-brand-green hover:text-white transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-brand-dark mb-4 text-sm">{title}</h4>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-gray-500 text-sm hover:text-brand-green transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-xs">
            © 2025 YouCanWin. Tous droits réservés.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-xs">Made with</span>
            <span className="text-brand-red">♥</span>
            <span className="text-gray-400 text-xs">by Agency Niflea — a Niflea agency</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
