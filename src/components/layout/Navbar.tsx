"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Nos offres", href: "#offres" },
  { label: "Nos Jeux", href: "#jeux" },
  { label: "Album 2025", href: "#album" },
  { label: "La Ligue", href: "#ligue" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-green rounded-lg flex items-center justify-center">
            <span className="text-white font-display font-bold text-sm">Y</span>
          </div>
          <span className="font-display font-bold text-brand-dark text-lg">
            YouCan<span className="text-brand-green">Win</span>
          </span>
          <span className="ml-1 text-[10px] text-brand-green border border-brand-green rounded px-1 font-semibold uppercase tracking-wide hidden sm:inline">
            beta
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-gray-600 hover:text-brand-green font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#demo" className="btn-primary text-xs px-4 py-2">
            Démarrer une démo →
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-gray-700 font-medium"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="#demo" className="btn-primary text-sm w-fit">
            Démarrer une démo →
          </a>
        </div>
      )}
    </header>
  );
}
