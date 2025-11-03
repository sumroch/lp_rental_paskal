import { Reveal } from "@/components/Reveal";
import Image from "next/image";

export default function BundlingBanner({ id = "bundling" }: { id?: string }) {
  return (
    <section id={id} className="container-max px-4 md:px-6 mt-6 md:mt-8 scroll-mt-20 md:scroll-mt-24">
      <Reveal>
        <div className="w-full rounded-xl overflow-hidden card-shadow bg-white">
          {/* Mobile banner */}
          <Image
            src="/banner/banner-bundling-mobile.svg"
            alt="Paket Bundling Hemat (Mobile)"
            width={1024}
            height={221}
            priority
            className="w-full h-auto md:hidden"
          />
          {/* Desktop & md+ banner */}
          <Image
            src="/banner/banner-bundling.svg"
            alt="Paket Bundling Hemat"
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
