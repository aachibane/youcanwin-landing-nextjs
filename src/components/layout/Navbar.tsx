"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import arrowRightIcon from "@/assets/components/hero-section/arrow-right.svg";

const navLinks = [
  { label: "Nos offres", href: "#offres" },
  { label: "Nos jeux", href: "#jeux" },
  { label: "Album 2025", href: "#album" },
  { label: "À propos", href: "#apropos" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-[12px] border-b border-gray-100 font-display shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
      <div className="mx-auto flex items-center h-[72px] px-4 sm:px-6 lg:px-20">
        <Link href="/" className="flex items-center gap-[12px] shrink-0">
          <div className="shrink-0 w-[40px] h-[40px] rounded-[12px] bg-gradient-to-br from-[#16A34A] to-[#0B6B3A] shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1)] flex items-center justify-center">
            <Image
              src="/logo.svg"
              alt="YouCanWin"
              width={20}
              height={20}
              priority
            />
          </div>
          <span className="font-display font-bold text-[20px] leading-[40px]">
            <span className="text-[#D82424]">You</span>
            <span className="text-[#1E293B]">can</span>
            <span className="text-[#0E7B3E]">win</span>
          </span>
          <span className="font-display font-semibold text-[10px] leading-[15px] text-[#0B6B3A] bg-[#DCFCE7] px-[8px] py-[2px] rounded-full">
            GAMES
          </span>
        </Link>

        <div className="hidden nav:block flex-1" />

        <nav className="hidden nav:flex items-center gap-1 mr-3">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={
                "text-sm font-medium transition-colors whitespace-nowrap px-3 py-2 rounded-md hover:bg-[#F8FAFC] hover:text-[#0B6B3A] text-[#334155] hover:text-brand-green-dark"
              }
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#demo"
          className="group hidden nav:flex items-center gap-1.5 shrink-0 text-sm font-medium px-5 py-2.5 rounded-lg
           bg-gradient-to-r from-brand-green-light to-brand-green-dark text-white transition-shadow duration-200 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]"
        >
          Demander une démo
          <div className="relative w-4 h-4 transition-transform duration-200 group-hover:translate-x-1">
            <Image
              src={arrowRightIcon}
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </a>

        <button
          className="nav:hidden ml-auto p-2 text-gray-600"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="nav:hidden bg-white border-t border-gray-100 px-6 py-5 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-gray-700 font-medium py-1"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#demo"
            className="group text-sm font-medium px-5 py-2.5 rounded-lg bg-gradient-to-r from-brand-green-light to-brand-green-dark text-white text-center w-fit transition-shadow duration-200 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]"
          >
            Demander une démo
            <div className="relative w-4 h-4 inline-block transition-transform duration-200 group-hover:translate-x-1">
              <Image
                src={arrowRightIcon}
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </a>
        </div>
      )}
    </header>
  );
}
