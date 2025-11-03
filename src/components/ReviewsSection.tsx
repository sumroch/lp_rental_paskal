"use client";
import Image from "next/image";
import { Card } from "@heroui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Reveal } from "@/components/Reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

type Review = {
  name: string;
  city: string;
  rating: number; // 1..5
  text: string;
  img: string;
};

const reviews: Review[] = [
  {
    name: "Nova",
    city: "Jakarta",
    rating: 5,
    text:
      "Pertama kali sewa motor di sini dan puas banget! Motornya bersih, wangi, dan full service. Proses booking juga gampang, adminnya ramah banget. Recommended pokoknya!",
    img: "/review/review-1.png",
  },
  {
    name: "Sri Suci",
    city: "Jakarta",
    rating: 5,
    text:
      "Saya pakai buat jalan-jalan di Bandung, motornya irit dan nyaman. Helm dan jas hujan juga disediakan, jadi nggak ribet. Next time pasti sewa di sini lagi!",
    img: "/review/review-2.png",
  },
  {
    name: "Dewi",
    city: "Bekasi",
    rating: 5,
    text:
      "Harga sewa terjangkau, motor selalu ready dan terawat. Yang paling oke itu layanan antar-jemput ke hotel, jadi super praktis. Mantap banget!",
    img: "/review/review-3.png",
  },
  {
    name: "Hanna",
    city: "Jakarta",
    rating: 5,
    text:
      "Udah beberapa kali repeat order, nggak pernah kecewa. Pelayanan cepat, motor selalu bagus kondisinya. Cocok banget buat harian maupun liburan.",
    img: "/review/review-4.png",
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex items-center gap-1 text-amber-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className={`w-4 h-4 ${i < n ? "fill-amber-500" : "fill-gray-300"}`} />
      ))}
    </div>
  );
}

export default function ReviewsSection({ id = "reviews" }: { id?: string }) {
  return (
    <section id={id} className="container-max px-4 md:px-6 mt-6 md:mt-8 scroll-mt-20 md:scroll-mt-24">
      <div className="flex items-center gap-3 mb-4">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-bold">Reviews</h2>
        </Reveal>
        {/* <Chip size="sm" color="primary" variant="flat">{reviews.length}</Chip> */}
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={16}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-8"
      >
        {reviews.map((r, idx) => (
          <SwiperSlide key={idx}>
            <Card className="overflow-hidden card-shadow">
              <div className="relative w-full h-48">
                <Image src={r.img} alt={r.name} fill className="object-contain object-center" unoptimized />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold">{r.name}</p>
                    <Stars n={r.rating} />
                  </div>
                  <p className="text-sm text-foreground/70">{r.city}</p>
                </div>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed line-clamp-4">
                  {r.text}
                </p>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div className="mt-4 flex justify-center">
        <Button color="primary" className="px-6">Lihat Ulasan</Button>
      </div> */}
    </section>
  );
}
