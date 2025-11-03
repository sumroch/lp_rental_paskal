"use client";
import { Card, Button } from "@heroui/react";
import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Reveal } from "@/components/Reveal";
import type { Swiper as SwiperClass } from "swiper";

type Product = { name: string; price: number; img: string };

const data: Record<string, Product[]> = {
  "110": [
    { name: "Vario LED", price: 130000, img: "/motorcycle/110cc/vario.svg?v=20251007" },
    { name: "Beat", price: 130000, img: "/motorcycle/110cc/beat.svg?v=20251007" },
    { name: "X-Ride", price: 125000, img: "/motorcycle/110cc/xride.svg?v=20251007" },
    { name: "Scoopy Prestige", price: 140000, img: "/motorcycle/110cc/scoopy.svg?v=20251007" },
  ],
  "125": [
    { name: "Mio M3", price: 125000, img: "/motorcycle/125cc/miom3.svg?v=20251007" },
    { name: "Vario LED 125 New", price: 150000, img: "/motorcycle/125cc/varioLed.svg?v=20251007" },
    { name: "Freego", price: 135000, img: "/motorcycle/125cc/freego.svg?v=20251007" },
    { name: "Mio Gear", price: 135000, img: "/motorcycle/125cc/mioGear.svg?v=20251007" },
    { name: "Filano", price: 200000, img: "/motorcycle/125cc/filano.svg?v=20251007" },
    { name: "Mio S", price: 130000, img: "/motorcycle/125cc/mioS.svg?v=20251007" },
    { name: "Lexi", price: 160000, img: "/motorcycle/125cc/lexi.svg?v=20251007" },
    
  ],
  "150": [
    { name: "Vario LED 150 Old", price: 150000, img: "/motorcycle/150cc/varioLed.svg?v=20251007" },
    { name: "PCX", price: 200000, img: "/motorcycle/150cc/pcx.svg?v=20251007" },
    { name: "Vario 150 New", price: 175000, img: "/motorcycle/150cc/vario.svg?v=20251007" },
  ],
  "160": [
    { name: "Vario 160 New", price: 200000, img: "/motorcycle/160cc/vario.svg?v=20251007" },
    { name: "ADV 160", price: 200000, img: "/motorcycle/160cc/adv.svg?v=20251007" },
  ],
};

function currency(n: number) {
  return new Intl.NumberFormat("id-ID").format(n);
}

function Section({ cc, items }: { cc: string; items: Product[] }) {
  const phoneTarget = "6287837970070"; // nomor tujuan WA
  const swiperRef = useRef<SwiperClass | null>(null);

  const orderWA = (p: Product) => {
    const lines = [
      "Hallo Admin saya mau rental motor",
      "",
      `nama motor : ${p.name}`,
      "",
      `harga : Rp ${currency(p.price)} perhari`,
    ];
    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${phoneTarget}?text=${text}`;
    window.open(url, "_blank");
  };
  return (
    <section id={`cc-${cc}`} className="container-max px-4 md:px-6 mt-8 scroll-mt-24">
      <div className="flex items-end justify-between mb-3">
        <Reveal>
          <h3 className="text-lg md:text-xl font-bold">{cc}cc</h3>
        </Reveal>
        {/* <a href="#" className="text-sm text-[#0e5fd8] font-semibold">Lihat Semua</a> */}
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={16}
        slidesPerView={1.2}
        observer
        observeParents
        observeSlideChildren
        updateOnWindowResize
        watchSlidesProgress
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onInit={(swiper) => {
          requestAnimationFrame(() => swiper.update());
        }}
        onResize={(swiper) => {
          requestAnimationFrame(() => swiper.update());
        }}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="!pb-10"
      >
        {items.map((p) => {
          const isUnavailable = p.name === "";
          return (
            <SwiperSlide key={p.name}>
                <Card className="group p-3 card-shadow transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl">
                  <div className="relative w-full rounded-lg overflow-hidden bg-white" style={{ aspectRatio: "4 / 3" }}>
                    <Image
                      src={p.img}
                      alt={p.name}
                      fill
                      className={`object-contain transition-transform duration-300 group-hover:scale-105 ${isUnavailable ? "opacity-40 grayscale" : ""}`}
                      sizes="(max-width: 640px) 60vw, (max-width: 1024px) 33vw, 25vw"
                      onLoad={() => swiperRef.current?.update()}
                    />
                  </div>
                  <div className="pt-3">
                    <p className="font-semibold line-clamp-1">{p.name}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <p className="text-[#0e5fd8] font-extrabold">Rp {currency(p.price)}/hari</p>
                      <Button
                        size="sm"
                        color="primary"
                        radius="sm"
                        isDisabled={isUnavailable}
                        // onPress={() => orderWA(p)}
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        Sewa
                      </Button>
                    </div>
                    <p className="text-xs text-[#0e5fd8]">Include biaya antar jemput motor</p>
                  </div>
                </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default function CategoryProducts() {
  return (
    <div className="space-y-8">
      {Object.entries(data).map(([cc, items]) => (
        <Section key={cc} cc={cc} items={items} />
      ))}
    </div>
  );
}
