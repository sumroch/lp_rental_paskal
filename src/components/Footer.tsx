import { Link } from "@heroui/react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-12 bg-rent text-white border-t border-black/5">
      <div className="container-max px-4 md:px-6 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
          <div className="flex justify-center md:justify-start">
            <Image
              src="icon/logo-footer.png"
              alt="Logo"
              width={200}
              height={200}
              className="w-48 h-48"
            />
          </div>
          </div> 
          <div>
            <p className="font-semibold mb-2">Tentang Kami</p>
            <p className="text-sm text-white mt-2">Penyedia jasa sewa motor terpercaya di Bandung dengan unit terawat, nyaman, dan aman digunakan. Kami menyediakan pilihan paket sewa&nbsp;harian, mingguan, hingga bulanan&nbsp;dengan harga terjangkau serta proses mudah, sehingga perjalananmu di Bandung jadi lebih praktis dan menyenangkan.</p>
          </div>
          <div>
            <p className="font-semibold mb-2">Kontak</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><PhoneIcon className="w-4 h-4"/> +62 878-3797-0070</li>
              <li className="flex items-center gap-2"><EnvelopeIcon className="w-4 h-4"/> yorokobirental@gmail.com</li>
              <li className="flex items-center gap-2"><MapPinIcon className="w-7 h-7"/> Paskal Hypersquare jl. Pasirkaliki No.25-27 B-45, lt.4, Kota Bandung, Jawa Barat 40181</li>
            </ul>
          </div>
          <div>
          </div>
        </div>
      </div>
      <div className="border-t border-black/5">
        <div className="container-max px-4 md:px-6 py-4 text-sm flex flex-col md:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} Rental Paskal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
