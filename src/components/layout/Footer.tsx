import { ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 9 16" fill="none">
    <path
      d="M8.00781 9L8.45219 6.10437H5.67375V4.22531C5.67375 3.43313 6.06188 2.66094 7.30625 2.66094H8.56937V0.195625C8.56937 0.195625 7.42313 0 6.32719 0C4.03906 0 2.54344 1.38688 2.54344 3.8975V6.10437H0V9H2.54344V16H5.67375V9H8.00781Z"
      fill="currentColor"
    />
  </svg>
);

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 15 13" fill="none">
    <path
      d="M11.325 0H13.5312L8.7125 5.50625L14.3813 13H9.94375L6.46562 8.45625L2.49062 13H0.28125L5.43437 7.10938L0 0H4.55L7.69062 4.15312L11.325 0ZM10.55 11.6812H11.7719L3.88438 1.25H2.57188L10.55 11.6812Z"
      fill="currentColor"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
    <path
      d="M7.00547 3.41172C5.01797 3.41172 3.41484 5.01484 3.41484 7.00234C3.41484 8.98984 5.01797 10.593 7.00547 10.593C8.99297 10.593 10.5961 8.98984 10.5961 7.00234C10.5961 5.01484 8.99297 3.41172 7.00547 3.41172ZM7.00547 9.33672C5.72109 9.33672 4.67109 8.28984 4.67109 7.00234C4.67109 5.71484 5.71797 4.66797 7.00547 4.66797C8.29297 4.66797 9.33984 5.71484 9.33984 7.00234C9.33984 8.28984 8.28984 9.33672 7.00547 9.33672ZM11.5805 3.26484C11.5805 3.73047 11.2055 4.10234 10.743 4.10234C10.2773 4.10234 9.90547 3.72734 9.90547 3.26484C9.90547 2.80234 10.2805 2.42734 10.743 2.42734C11.2055 2.42734 11.5805 2.80234 11.5805 3.26484ZM13.9586 4.11484C13.9055 2.99297 13.6492 1.99922 12.8273 1.18047C12.0086 0.361719 11.0148 0.105469 9.89297 0.0492187C8.73672 -0.0164062 5.27109 -0.0164062 4.11484 0.0492187C2.99609 0.102344 2.00234 0.358594 1.18047 1.17734C0.358594 1.99609 0.105469 2.98984 0.0492187 4.11172C-0.0164062 5.26797 -0.0164062 8.73359 0.0492187 9.88984C0.102344 11.0117 0.358594 12.0055 1.18047 12.8242C2.00234 13.643 2.99297 13.8992 4.11484 13.9555C5.27109 14.0211 8.73672 14.0211 9.89297 13.9555C11.0148 13.9023 12.0086 13.6461 12.8273 12.8242C13.6461 12.0055 13.9023 11.0117 13.9586 9.88984C14.0242 8.73359 14.0242 5.27109 13.9586 4.11484ZM12.4648 11.1305C12.2211 11.743 11.7492 12.2148 11.1336 12.4617C10.2117 12.8273 8.02422 12.743 7.00547 12.743C5.98672 12.743 3.79609 12.8242 2.87734 12.4617C2.26484 12.218 1.79297 11.7461 1.54609 11.1305C1.18047 10.2086 1.26484 8.02109 1.26484 7.00234C1.26484 5.98359 1.18359 3.79297 1.54609 2.87422C1.78984 2.26172 2.26172 1.78984 2.87734 1.54297C3.79922 1.17734 5.98672 1.26172 7.00547 1.26172C8.02422 1.26172 10.2148 1.18047 11.1336 1.54297C11.7461 1.78672 12.218 2.25859 12.4648 2.87422C12.8305 3.79609 12.7461 5.98359 12.7461 7.00234C12.7461 8.02109 12.8305 10.2117 12.4648 11.1305Z"
      fill="currentColor"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
    <path
      d="M3.13375 13.9997H0.23125V4.65281H3.13375V13.9997ZM1.68094 3.37781C0.752813 3.37781 0 2.60906 0 1.68094C6.64312e-09 1.23513 0.177098 0.807572 0.492335 0.492335C0.807572 0.177098 1.23513 0 1.68094 0C2.12675 0 2.5543 0.177098 2.86954 0.492335C3.18478 0.807572 3.36188 1.23513 3.36188 1.68094C3.36188 2.60906 2.60875 3.37781 1.68094 3.37781ZM13.9969 13.9997H11.1006V9.44969C11.1006 8.36531 11.0787 6.97469 9.59156 6.97469C8.0825 6.97469 7.85125 8.15281 7.85125 9.37156V13.9997H4.95188V4.65281H7.73562V5.92781H7.77625C8.16375 5.19344 9.11031 4.41844 10.5225 4.41844C13.46 4.41844 14 6.35281 14 8.86531V13.9997H13.9969Z"
      fill="currentColor"
    />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 9 9"
    fill="none"
    className="shrink-0"
  >
    <path
      d="M3.5 1.5H1.5C1.23478 1.5 0.98043 1.60536 0.792893 1.79289C0.605357 1.98043 0.5 2.23478 0.5 2.5V7.5C0.5 7.76522 0.605357 8.01957 0.792893 8.20711C0.98043 8.39464 1.23478 8.5 1.5 8.5H6.5C6.76522 8.5 7.01957 8.39464 7.20711 8.20711C7.39464 8.01957 7.5 7.76522 7.5 7.5V5.5M5.5 0.5H8.5M8.5 0.5V3.5M8.5 0.5L3.5 5.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const socialLinks = [
  { label: "Facebook", icon: FacebookIcon },
  { label: "X", icon: XIcon },
  { label: "Instagram", icon: InstagramIcon },
  { label: "LinkedIn", icon: LinkedInIcon },
];

const footerLinks = {
  "Liens rapides": [
    { label: "Nos offres" },
    { label: "Nos Jeux" },
    { label: "Album 2025" },
    { label: "À propos" },
  ],
  "Contact & Légal": [
    { label: "games@agency.africa" },
    { label: "Mentions légales" },
    {
      label: "Protection des données (CNDP)",
      hasLink: true,
    },
    { label: "Conditions d'utilisation" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 px-4 sm:px-6 lg:px-20 font-display">
      <div className="px-0 sm:px-4 py-8 sm:py-12 flex gap-6 sm:gap-8 flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-[12px] shrink-0">
              <div className="shrink-0 w-[32px] h-[32px] rounded-[12px] bg-gradient-to-br from-[#16A34A] to-[#0B6B3A] shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1)] flex items-center justify-center">
                <Image
                  src="/logo.svg"
                  alt="YouCanWin"
                  width={16}
                  height={16}
                  priority
                />
              </div>
              <span className="font-display font-bold text-[20px] leading-[40px]">
                <span className="text-[#D82424]">You</span>
                <span className="text-[#1E293B]">can</span>
                <span className="text-[#0E7B3E]">win</span>
              </span>
            </Link>

            <p className="text-brand-gray-dark text-sm">
              Plateforme de jeux digitaux pour engager vos communautés autour du
              football. Un service d&apos;Agency.Africa.
            </p>

            <div className="flex gap-3 pt-1">
              {socialLinks.map(({ label, icon: Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-[#e2e8f0] flex items-center justify-center text-[#475569] hover:bg-brand-green hover:text-white transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-brand-dark mb-3 text-base">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l.label}>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-[#475569] text-sm hover:text-brand-green transition-colors"
                    >
                      <span>{l.label}</span>
                      {"hasLink" in l && l.hasLink && <ExternalLinkIcon />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="">
          <div className="border-t border-gray-100 pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-2">
            <p className="text-brand-gray-dark text-sm">
              © 2025 Youcanwin. Tous droits réservés.
            </p>
            <div className="flex items-center gap-1 flex-wrap justify-center">
              <span className="text-brand-gray-dark text-sm">
                Un service de
              </span>
              <span className="text-[#166534] text-sm font-semibold">
                Agency.Africa
              </span>
              <span className="text-brand-gray-dark text-sm">
                — games.agency.africa
              </span>
            </div>
          </div>

          <div className="pt-6 flex justify-center">
            <div className="inline-flex items-center gap-2 bg-brand-green-x-light text-[#0b6b3a] px-3 py-1 rounded-[8px] text-sm font-medium border border-brand-green/20">
              <ShieldCheck size={14} />
              <span>Site conforme CNDP Maroc</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
