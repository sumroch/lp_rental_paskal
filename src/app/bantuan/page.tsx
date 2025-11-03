import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bantuan | Paskal Rental",
  description:
    "Pusat bantuan Paskal Rental: FAQ, cara pemesanan, pengantaran/pengambilan, pembayaran, perubahan jadwal, dan kontak layanan pelanggan.",
};

export default function BantuanPage() {
  return (
    <main className="container-max px-4 md:px-6 py-12">
      <section className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-rent">Bantuan</h1>
          <p className="mt-2 text-base text-foreground/70">
            Temukan jawaban atas pertanyaan umum berikut. Jika masih memerlukan bantuan,
            jangan ragu untuk menghubungi kami.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-black/5 bg-white shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-2">Cara Pemesanan</h2>
            <ol className="list-decimal pl-5 space-y-2 text-foreground/80">
              <li>Pilih tipe motor yang diinginkan di halaman utama.</li>
              <li>Tentukan tanggal dan durasi sewa.</li>
              <li>Lengkapi data dan unggah dokumen jika diminta.</li>
              <li>Konfirmasi pesanan dan lakukan pembayaran.</li>
            </ol>
          </div>

          <div className="rounded-xl border border-black/5 bg-white shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-2">Pengantaran & Pengambilan</h2>
            <ul className="list-disc pl-5 space-y-2 text-foreground/80">
              <li>Unit dapat diambil di lokasi kami atau diantar ke area tertentu.</li>
              <li>Biaya pengantaran bergantung pada jarak dan ketersediaan.</li>
              <li>Mohon siapkan KTP dan SIM C asli saat serah terima.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-black/5 bg-white shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-2">Pembayaran</h2>
            <ul className="list-disc pl-5 space-y-2 text-foreground/80">
              <li>Menerima pembayaran tunai, transfer bank, atau e-wallet.</li>
              <li>Mohon simpan bukti pembayaran untuk verifikasi.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-black/5 bg-white shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-2">Perubahan & Pembatalan</h2>
            <ul className="list-disc pl-5 space-y-2 text-foreground/80">
              <li>Perubahan jadwal dapat dilakukan bila unit tersedia.</li>
              <li>Pembatalan di hari H dapat dikenakan biaya pembatalan.</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-black/5 bg-gradient-to-r from-rent to-orange-500 text-white p-6">
          <h3 className="text-xl font-semibold">Butuh bantuan lebih lanjut?</h3>
          <p className="mt-1 text-white/90">Hubungi layanan pelanggan kami melalui:</p>
          <ul className="mt-3 space-y-1">
            <li>Email: cs@rentalpaskal.id</li>
            <li>Telepon/WhatsApp: 0812-3456-7890</li>
          </ul>
          <div className="mt-4">
            <Link href="/syarat-ketentuan" className="underline font-medium">Baca Syarat & Ketentuan</Link>
            <span className="mx-2">•</span>
            <Link href="/kebijakan-privasi" className="underline font-medium">Kebijakan Privasi</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
