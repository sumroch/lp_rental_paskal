import { Reveal } from "@/components/Reveal";
import Image from "next/image";

export default function PromoBanner({ id = "promo" }: { id?: string }) {
  return (
    <section id={id} className="container-max px-4 md:px-6 mt-6 md:mt-8 scroll-mt-20 md:scroll-mt-24">
      <Reveal>
        <div className="w-full rounded-xl overflow-hidden card-shadow bg-white">
          {/* Mobile: use mobile-specific banner */}
          <Image
            src="/banner/promo-banner-mobile.svg"
            alt="Promo Cashback 10% (Mobile)"
            width={1024}
            height={221}
            priority
            className="w-full h-auto md:hidden"
          />
          {/* Desktop and md+: default banner */}
          <Image
            src="/banner/promo-mahasiswa.svg"
            alt="Promo Cashback 10%"
            width={1024}
            height={221}
            priority
            className="w-full h-auto hidden md:block"
          />
        </div>
      </Reveal>
    </section>
  );
}
