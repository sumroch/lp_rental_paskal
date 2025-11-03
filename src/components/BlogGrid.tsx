"use client";
import Image from "next/image";
import { Card } from "@heroui/react";
import { Reveal } from "@/components/Reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const posts = [
  {
    title: "Grafika Cikole",
    date: "12 Sep 2025",
    img: "/blog/grafika-cikole.jpg",
    excerpt:
      "Terletak di Cikole, Lembang, Grafika Cikole menawarkan penginapan bernuansa Hutan Pinus dan beragam aktivitas outdoor seperti ATV, outbound, hingga paintball.",
    source: "Paskal Rental Motor",
    logo: "/icon/logo-rental.svg",
  },
  {
    title: "Tangkuban Perahu",
    date: "10 Sep 2025",
    img: "/blog/tangkuban-perahu.jpg",
    excerpt:
      "Gunung stratovolcano aktif di utara Bandung. Pengunjung bisa mencapai bibir kawah dan melihat isi kawah dari dekat—ikon wisata klasik Bandung.",
    source: "Paskal Rental Motor",
    logo: "/icon/logo-rental.svg",
  },
  {
    title: "Sanghyang Heuleut",
    date: "08 Sep 2025",
    img: "/blog/sanghyang-heuleut.jpg",
    excerpt:
      "Kolam alami berair sejuk dan jernih, dikelilingi bebatuan putih yang indah—tempat favorit untuk berenang dan menikmati suasana alam.",
    source: "Paskal Rental Motor",
    logo: "/icon/logo-rental.svg",
  },
  {
    title: "Glamping Lakeside Rancabali",
    date: "06 Sep 2025",
    img: "/blog/Glamping.jpg",
    excerpt:
      "Menginap di tepi danau dengan udara sejuk dan pagi berkabut memberikan pengalaman glamping yang berbeda di Rancabali.",
    source: "Paskal Rental Motor",
    logo: "/icon/logo-rental.svg",
  },
  {
    title: "The Lodge Maribaya",
    date: "04 Sep 2025",
    img: "/blog/Lodge.jpg",
    excerpt:
      "Destinasi keluarga populer di Lembang dengan berbagai wahana foto unik dan pemandangan alam pinus yang menawan sejak 2016.",
    source: "Paskal Rental Motor",
    logo: "/icon/logo-rental.svg",
  },
  {
    title: "Dusun Bambu Lembang",
    date: "02 Sep 2025",
    img: "/blog/dusun-bambu.jpg",
    excerpt:
      "Ikon danau kecil yang instagramable, kuliner di tepi danau, serta opsi menginap di villa atau glamping untuk pengalaman lengkap.",
    source: "Paskal Rental Motor",
    logo: "/icon/logo-rental.svg",
  },
  {
    title: "The Great Asia Africa Lembang",
    date: "31 Agu 2025",
    img: "/blog/asia-africa.jpg",
    excerpt:
      "Satu tempat dengan banyak area bertema negara—spot foto instagramable berseberangan dengan Farmhouse Lembang, destinasi hits saat ini.",
    source: "Paskal Rental Motor",
    logo: "/icon/logo-rental.svg",
  },
  {
    title: "Taman Hutan Raya Ir. H. Djuanda",
    date: "29 Agu 2025",
    img: "/blog/hutan.jpg",
    excerpt:
      "Hutan kota di kawasan Dago Pakar, favorit warga Bandung untuk rekreasi alam dengan jalur hijau dan udara segar.",
    source: "Paskal Rental Motor",
    logo: "/icon/logo-rental.svg",
  },
  {
    title: "Orchid Forest Cikole",
    date: "27 Agu 2025",
    img: "/blog/cikole.jpg",
    excerpt:
      "Hutan anggrek terbesar di Indonesia dengan lebih dari 20.000 tanaman anggrek—berlatar hutan pinus yang indah dan sejuk.",
    source: "Paskal Rental Motor",
    logo: "/icon/logo-rental.svg",
  },
  {
    title: "Kawah Putih Ciwidey",
    date: "25 Agu 2025",
    img: "/blog/kawah-putih.jpg",
    excerpt:
      "Destinasi ikonik dengan danau kawah berwarna putih kehijauan, suasana magis dan spot foto populer yang wajib dikunjungi.",
    source: "Paskal Rental Motor",
    logo: "/icon/logo-rental.svg",
  },
];

export default function BlogGrid({ id = "blog" }: { id?: string }) {
  return (
    <section id={id} className="container-max px-4 md:px-6 mt-10 scroll-mt-20 md:scroll-mt-24">
      <div className="flex items-end justify-between mb-3">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-bold">Artikel</h2>
        </Reveal>
        {/* <a href="#" className="text-sm text-[#0e5fd8] font-semibold">Lihat Semua</a> */}
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-8"
      >
        {posts.map((p) => (
          <SwiperSlide key={p.title}>
            <Card className="overflow-hidden rounded-xl border border-black/10 bg-white card-shadow">
              <div className="relative w-full h-60 md:h-64">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <p className="text-[15px] md:text-base font-semibold leading-snug line-clamp-2 mb-2">{p.title}</p>
                <p className="text-[13px] md:text-sm text-foreground/70 leading-relaxed line-clamp-3 mb-4">{p.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden bg-[#f3f4f6] ring-1 ring-black/10">
                      <Image
                        src={p.logo}
                        alt={p.source}
                        fill
                        className="object-contain p-1.5"
                        sizes="32px"
                      />
                    </div>
                    <span className="text-[12px] text-foreground/80">{p.source}</span>
                  </div>
                  {/* <Button size="sm" variant="light" className="text-[#0e5fd8] px-0">
                    Baca Selengkapnya
                  </Button> */}
                </div>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
