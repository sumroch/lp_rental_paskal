"use client";
import Image from "next/image";
import { Card, Chip } from "@heroui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Reveal, Stagger } from "@/components/Reveal";

type Review = {
  name: string;
  city: string;
  rating: number; // 1..5
  text: string;
  img: string;
};

const reviews: Review[] = [
  {
    name: "Doraemon",
    city: "Jakarta",
    rating: 5,
    text:
      "Pertama kali sewa motor di sini dan puas banget! Motornya bersih, wangi, dan full service. Proses booking juga gampang, adminnya ramah banget. Recommended pokoknya!",
    img: "/review/review-1.png",
  },
  {
    name: "Doraemon",
    city: "Jakarta",
    rating: 5,
    text:
      "Saya pakai buat jalan-jalan di Bandung, motornya irit dan nyaman. Helm dan jas hujan juga disediakan, jadi nggak ribet. Next time pasti sewa di sini lagi!",
    img: "/review/review-2.png",
  },
  {
    name: "Doraemon",
    city: "Jakarta",
    rating: 5,
    text:
      "Harga sewa terjangkau, motor selalu ready dan terawat. Yang paling oke itu layanan antar-jemput ke hotel, jadi super praktis. Mantap banget!",
    img: "/review/review-3.png",
  },
  {
    name: "Doraemon",
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

export default function ReviewsPage() {
  return (
    <div className="container-max px-4 md:px-6 py-6 md:py-8">
      <div className="flex items-center gap-3 mb-4">
        <Reveal>
          <h1 className="text-xl md:text-2xl font-bold">Reviews</h1>
        </Reveal>
        <Chip size="sm" color="primary" variant="flat">{reviews.length}</Chip>
      </div>

      <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((r, idx) => (
          <Reveal key={idx}>
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
                  <p className="text-sm text-foreground/60">{r.city}</p>
                </div>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                  {r.text}
                </p>
              </div>
            </Card>
          </Reveal>
        ))}
      </Stagger>

      {/* <div className="mt-6 flex justify-center">
        <Button color="primary" className="px-6">Lihat Ulasan</Button>
      </div> */}
    </div>
  );
}
