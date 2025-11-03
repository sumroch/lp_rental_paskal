import { Card } from "@heroui/react";
import {
  PhoneIcon,
  CalendarDaysIcon,
  CreditCardIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/solid";
import { Reveal, Stagger } from "@/components/Reveal";

const steps = [
  {
    id: 1,
    icon: PhoneIcon,
    title: "Hubungi Kami",
    desc: "Chat WhatsApp untuk ketersediaan & harga.",
  },
  {
    id: 2,
    icon: CalendarDaysIcon,
    title: "Reservasi",
    desc: "Kirim data diri & pilih jadwal sewa.",
  },
  {
    id: 3,
    icon: CreditCardIcon,
    title: "Pembayaran",
    desc: "Transfer DP atau bayar penuh sesuai kebutuhan.",
  },
  {
    id: 4,
    icon: BuildingOfficeIcon,
    title: "Ambil / Antar",
    desc: "Unit bisa diambil atau kami antar ke lokasi.",
  },
];

export default function Steps({ id = "steps" }: { id?: string }) {
  return (
    <section
      id={id}
      className="container-max px-4 md:px-6 mt-8 scroll-mt-20 md:scroll-mt-24"
    >
      <Reveal>
        <h2 className="text-xl md:text-2xl font-bold text-center mb-8">
          Cara Sewa
        </h2>
      </Reveal>

      <div className="relative flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10 max-w-4xl mx-auto">
        {steps.map(({ id, icon: Icon, title, desc }) => (
          <Reveal key={id}>
            <div className="relative flex items-center md:items-start gap-4">
              {/* Card utama */}
              <Card className="flex-1 p-5 md:p-6 shadow-md rounded-xl">
                <div className="flex items-center gap-4">
                  <Icon className="w-10 h-10 text-[#0e5fd8] shrink-0" />
                  <div>
                    <p className="font-semibold text-base md:text-lg">
                      {title}
                    </p>
                    <p className="text-sm text-foreground/70">{desc}</p>
                  </div>
                </div>
              </Card>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
