"use client";
import Image from "next/image";
import { Button } from "@heroui/react";
import { Reveal, Stagger } from "@/components/Reveal";

export default function HeroBanner() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[340px] md:h-[440px] lg:h-[520px] w-full">
        <Image
          src="/banner/kota-bandung.jpg"
          alt="Hero Rental Motor"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 max-w-6xl mx-auto px-4 md:px-6 flex items-center">
          <Reveal className="text-white max-w-xl">
            <p className="text-xs md:text-sm uppercase tracking-widest text-white/80 mb-2">Rental Motor Bandung</p>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Sewa Motor
            <br />
            di Paskal Rental
            </h1>
            <p className="mt-3 md:mt-4 text-white/85 text-sm md:text-base">
            Jasa Sewa Rental Sepeda Motor di Kota Bandung,Harian,Mingguan,Bulanan dengan Harga Murah & Berkualitas 
            </p>
            <Stagger className="mt-4 md:mt-6 flex gap-3">
              <Button 
                as="a"
                href="#contact"
                color="primary" 
                radius="sm" 
                className="font-semibold px-5 bg-rent text-white rounded-lg p-4"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Sewa Sekarang
              </Button>
            </Stagger>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
