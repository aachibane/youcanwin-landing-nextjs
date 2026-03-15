import Image from "next/image";
import calendarIcon from "@/assets/components/cta-banner/calendar.svg";
import mailIcon from "@/assets/components/cta-banner/mail.svg";

export default function CTABanner() {
  return (
    <section className="px-4 sm:px-6 lg:px-20 bg-gradient-to-l from-[#b01219] to-[#dc2626] font-display">
      <div className="py-12 sm:py-16 lg:py-20 text-center font-display flex flex-col items-center gap-3 sm:gap-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Prêt à transformer votre marketing ?
        </h2>
        <p className="text-white/80 text-sm sm:text-base lg:text-lg px-2">
          Rejoignez les marques qui engagent leurs fans avec YouCanWin
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 w-full sm:w-auto">
          <a
            href="#demo"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#b01219] px-6 sm:px-7 py-3.5 rounded-lg font-medium text-base sm:text-base"
          >
            <Image src={calendarIcon} alt="" width={17} height={17} />
            Planifier une démo gratuite
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-[#c32f33] border-2 border-white/30 text-white px-6 sm:px-7 py-3.5 rounded-lg font-medium text-sm sm:text-base hover:bg-[#cb464a] transition-colors"
          >
            <Image src={mailIcon} alt="" width={17} height={14} />
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
}
