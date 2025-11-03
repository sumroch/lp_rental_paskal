"use client";
import Image from "next/image";
import { useRef } from "react";
import { Card, Button } from "@heroui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Reveal, fadeUp } from "@/components/Reveal";
import type { Variants } from "framer-motion";
import type { Swiper as SwiperClass } from "swiper";

const products = [
  { name: "Honda Vario 125", price: 85000, img: "https://picsum.photos/id/1011/800/600" },
  { name: "Yamaha NMAX", price: 120000, img: "https://picsum.photos/id/1015/800/600" },
  { name: "Honda Beat", price: 70000, img: "https://picsum.photos/id/1020/800/600" },
  { name: "Yamaha Aerox", price: 110000, img: "https://picsum.photos/id/1035/800/600" },
  { name: "Suzuki GSX", price: 150000, img: "https://picsum.photos/id/1040/800/600" },
];

function currency(n: number) {
  return new Intl.NumberFormat("id-ID").format(n);
}

export default function ProductSlider({ title = "Daftar Motor", id, headingVariants = fadeUp }: { title?: string; id?: string; headingVariants?: Variants; cardVariants?: Variants }) {
  const phoneTarget = "6285156390511"; // nomor tujuan WA
  const swiperRef = useRef<SwiperClass | null>(null);

  const orderWA = (name: string, price: number) => {
    const lines = [
      "hallo Admin saya mau rental motor",
      "",
      `nama motor : ${name}`,
      `harga: Rp ${currency(price)} perhari`,
    ];
    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${phoneTarget}?text=${text}`;
    window.open(url, "_blank");
  };
  return (
    <section id={id ?? "products"} className="container-max px-4 md:px-6 mt-6 md:mt-8 scroll-mt-20 md:scroll-mt-24">
      <div className="flex items-end justify-between mb-3">
        <Reveal variants={headingVariants}>
          <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
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
          // Force a recalc on mount; useful when inside animated/hidden containers
          requestAnimationFrame(() => swiper.update());
        }}
        onResize={(swiper) => {
          // Recalculate when viewport changes (common on mobile address bar show/hide)
          requestAnimationFrame(() => swiper.update());
        }}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="!pb-10"
      >
        {products.map((p) => (
          <SwiperSlide key={p.name}>
              <Card className="p-3 card-shadow">
                <div className="relative h-36 w-full rounded-lg overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-cover"
                    onLoad={() => swiperRef.current?.update()}
                  />
                </div>
                <div className="pt-3">
                  <p className="font-semibold line-clamp-1">{p.name}</p>
                  <p className="text-sm text-foreground/70">Bandung</p>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-[#0e5fd8] font-extrabold">Rp {currency(p.price)}/hari</p>
                    <Button size="sm" color="primary" radius="sm" onPress={() => orderWA(p.name, p.price)}>Sewa</Button>
                  </div>
                </div>
              </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
