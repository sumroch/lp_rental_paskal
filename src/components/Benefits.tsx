import { Card } from "@heroui/react";
import { Reveal, Stagger } from "@/components/Reveal";
import Image from "next/image";
import {
  ShieldCheckIcon,
  MapPinIcon,
  CalendarDaysIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const items = [
  { icon: ShieldCheckIcon, title: "Kendaraan Berkualitas", desc: "Unit bersih, aman, nyaman, dan berkualitas" },
  { icon: UserIcon, title: "Pelayanan Terbaik", desc: "Pelayanan ramah, cepat, dan tanpa ribet" },
  { icon: MapPinIcon, title: "Lokasi Strategis", desc: "Mudah dijangkau, dekat pusat kota" },
  { icon: CalendarDaysIcon, title: "Fleksibel", desc: "Proses booking mudah & praktis" },
];

export default function Benefits({ id = "benefits" }: { id?: string }) {
  return (
    <section id={id} className="container-max px-4 md:px-6 mt-10 md:mt-14 scroll-mt-24">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <Reveal>
          <h2 className="text-xl md:text-3xl font-bold leading-snug">
            Kenapa anda harus rental
            <br />
            <span className="text-[#0e5fd8]">di Paskal Rental Motor</span>
          </h2>
        </Reveal>
        <div className="mt-3 flex justify-center">
          <span className="h-1 w-28 rounded-full bg-[#0e5fd8]" />
        </div>
      </div>

      {/* 4 Benefits */}
      <Stagger className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {items.map(({ icon: Icon, title, desc }) => (
          <Reveal key={title}>
            <Card className="p-5 rounded-2xl bg-white border border-black/10 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#e8f1ff] text-[#0e5fd8]">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{title}</p>
                  <p className="text-sm text-foreground/70 mt-1">{desc}</p>
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </Stagger>

      {/* Image + Copy */}
      <div className="mt-10 md:mt-14 rounded-2xl bg-white">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
          <Reveal>
            <div className="relative w-full">
              <Image
                src="/icon/nmax-banner.svg"
                alt="Motor"
                width={900}
                height={500}
                className="w-full h-auto"
                priority
              />
            </div>
          </Reveal>
          <Reveal>
            <div className="md:pl-6">
              <h3 className="text-xl md:text-2xl font-bold text-[#0e5fd8]">Paskal Rental Motor Bandung</h3>
              <div className="h-1 w-20 bg-[#0e5fd8] rounded-full my-3" />
              <p className="text-foreground/70 leading-relaxed">
                Penyedia jasa sewa motor terpercaya di Bandung dengan unit terawat, nyaman, dan aman digunakan. Kami menyediakan pilihan paket sewa harian, mingguan, hingga bulanan dengan harga terjangkau serta proses mudah, sehingga perjalananmu di Bandung jadi lebih praktis dan menyenangkan.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
