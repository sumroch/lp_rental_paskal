import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan | Paskal Rental",
  description:
    "Syarat dan ketentuan layanan Paskal Rental Motor Bandung: ketentuan sewa, dokumen, pembayaran, keterlambatan, pembatalan, dan keselamatan.",
};

export default function SyaratKetentuanPage() {
  return (
    <main className="container-max px-4 md:px-6 py-12">
      <section className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-rent">Syarat & Ketentuan</h1>
          <p className="mt-2 text-base text-foreground/70">
            Harap membaca syarat & ketentuan berikut sebelum melakukan pemesanan
            layanan sewa motor di Paskal Rental.
          </p>
        </header>

        <div className="space-y-8">
          <div className="rounded-xl border border-black/5 bg-white shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-3">1. Kualifikasi Penyewa</h2>
            <ul className="list-disc pl-5 space-y-2 text-foreground/80">
              <li>Minimal berusia 17 tahun dan memiliki KTP yang masih berlaku.</li>
              <li>Memiliki SIM C aktif yang sesuai dengan peraturan Indonesia.</li>
              <li>Bersedia difoto bersama dokumen saat serah terima unit (verifikasi).</li>
            </ul>
          </div>

          <div className="rounded-xl border border-black/5 bg-white shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-3">2. Dokumen & Verifikasi</h2>
            <ul className="list-disc pl-5 space-y-2 text-foreground/80">
              <li>Wajib menunjukkan KTP asli dan SIM C asli saat pengambilan unit.</li>
              <li>Untuk pengantaran, foto dokumen dapat diminta sebelumnya via WhatsApp.</li>
              <li>Pihak kami berhak menolak pesanan apabila verifikasi tidak valid.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-black/5 bg-white shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-3">3. Ketentuan Pemakaian</h2>
            <ul className="list-disc pl-5 space-y-2 text-foreground/80">
              <li>Penggunaan hanya untuk keperluan pribadi dan di wilayah yang wajar.</li>
              <li>Dilarang dipindahtangankan, digunakan untuk balap, atau aktivitas ilegal.</li>
              <li>BBM, e-toll, dan biaya parkir menjadi tanggung jawab penyewa.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-black/5 bg-white shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-3">4. Tarif, Pembayaran & Deposit</h2>
            <ul className="list-disc pl-5 space-y-2 text-foreground/80">
              <li>Tarif sewa mengikuti yang tertera pada website/konfirmasi admin.</li>
              <li>Pembayaran dapat dilakukan tunai, transfer, atau e-wallet.</li>
              <li>Deposit dapat diminta untuk tipe unit tertentu dan dikembalikan saat pengembalian sesuai kondisi.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-black/5 bg-white shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-3">5. Keterlambatan & Perpanjangan</h2>
            <ul className="list-disc pl-5 space-y-2 text-foreground/80">
              <li>Keterlambatan pengembalian akan dikenakan biaya tambahan per jam/hari.</li>
              <li>Perpanjangan sewa wajib konfirmasi minimal 3 jam sebelumnya.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-black/5 bg-white shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-3">6. Kerusakan, Kehilangan & Asuransi</h2>
            <ul className="list-disc pl-5 space-y-2 text-foreground/80">
              <li>Penyewa bertanggung jawab atas kerusakan/kehilangan akibat kelalaian.</li>
              <li>Biaya perbaikan mengikuti estimasi bengkel resmi/mitra kami.</li>
              <li>Jika tersedia, opsi perlindungan tambahan akan diinformasikan saat pemesanan.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-black/5 bg-white shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-3">7. Pembatalan</h2>
            <ul className="list-disc pl-5 space-y-2 text-foreground/80">
              <li>Pembatalan H-0 dapat dikenakan biaya pembatalan hingga 100%.</li>
              <li>Pengembalian dana mengikuti kebijakan masing-masing metode pembayaran.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-black/5 bg-white shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-3">8. Keselamatan</h2>
            <ul className="list-disc pl-5 space-y-2 text-foreground/80">
              <li>Selalu gunakan helm dan patuhi peraturan lalu lintas.</li>
              <li>Pastikan kondisi kendaraan sebelum berkendara; laporkan bila ada kendala.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-black/5 bg-white shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-3">9. Lain-lain</h2>
            <p className="text-foreground/80">
              Paskal Rental berhak memperbarui syarat & ketentuan sewaktu-waktu. Versi
              terbaru akan dipublikasikan di halaman ini.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
