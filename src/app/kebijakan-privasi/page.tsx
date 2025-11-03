import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Privasi | Paskal Rental",
  description:
    "Kebijakan privasi Paskal Rental: jenis data yang dikumpulkan, tujuan, penyimpanan, keamanan, berbagi data, dan hak pengguna.",
};

export default function KebijakanPrivasiPage() {
  return (
    <main className="container-max px-4 md:px-6 py-12">
      <section className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-rent">Kebijakan Privasi</h1>
          <p className="mt-2 text-base text-foreground/70">
            Kebijakan ini menjelaskan bagaimana Paskal Rental mengumpulkan, menggunakan,
            melindungi, serta membagikan data pribadi Anda.
          </p>
        </header>

        <div className="space-y-8">
          <div className="rounded-xl border border-black/5 bg-white shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-3">1. Data yang Kami Kumpulkan</h2>
            <ul className="list-disc pl-5 space-y-2 text-foreground/80">
              <li>Identitas: Nama, KTP, SIM C, alamat, dan tanggal lahir.</li>
              <li>Kontak: Nomor telepon, email, dan alamat domisili.</li>
              <li>Transaksi: Riwayat pemesanan, metode pembayaran, dan tagihan.</li>
              <li>Teknis: Alamat IP, jenis perangkat, cookies, dan aktivitas pada situs.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-black/5 bg-white shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-3">2. Tujuan Penggunaan Data</h2>
            <ul className="list-disc pl-5 space-y-2 text-foreground/80">
              <li>Memproses pemesanan dan verifikasi penyewa.</li>
              <li>Komunikasi layanan, konfirmasi, dan dukungan pelanggan.</li>
              <li>Meningkatkan kualitas layanan, keamanan, dan pengalaman pengguna.</li>
              <li>Kepatuhan terhadap hukum yang berlaku.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-black/5 bg-white shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-3">3. Penyimpanan & Keamanan Data</h2>
            <ul className="list-disc pl-5 space-y-2 text-foreground/80">
              <li>Data disimpan selama diperlukan untuk tujuan layanan dan hukum.</li>
              <li>Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang wajar.</li>
              <li>Anda bertanggung jawab menjaga kerahasiaan akun/OTP (jika ada).</li>
            </ul>
          </div>

          <div className="rounded-xl border border-black/5 bg-white shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-3">4. Berbagi Data kepada Pihak Ketiga</h2>
            <ul className="list-disc pl-5 space-y-2 text-foreground/80">
              <li>Penyedia pembayaran, verifikasi identitas, dan logistik (jika diperlukan).</li>
              <li>Otoritas hukum apabila diwajibkan oleh undang-undang.</li>
              <li>Kami tidak menjual data pribadi Anda.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-black/5 bg-white shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-3">5. Hak Anda</h2>
            <ul className="list-disc pl-5 space-y-2 text-foreground/80">
              <li>Mengakses, memperbarui, atau menghapus data pribadi Anda.</li>
              <li>Menarik persetujuan untuk pemrosesan data tertentu.</li>
              <li>Mengeluh kepada otoritas perlindungan data yang berwenang.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-black/5 bg-white shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-3">6. Cookies</h2>
            <p className="text-foreground/80">
              Kami menggunakan cookies untuk fungsionalitas situs dan analitik. Anda dapat
              mengatur preferensi cookies melalui pengaturan browser.
            </p>
          </div>

          <div className="rounded-xl border border-black/5 bg-white shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-3">7. Perubahan Kebijakan</h2>
            <p className="text-foreground/80">
              Kebijakan ini dapat diperbarui sewaktu-waktu. Perubahan akan dipublikasikan
              di halaman ini dengan tanggal pembaruan terbaru.
            </p>
          </div>

          <div className="rounded-xl border border-black/5 bg-white shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-3">8. Kontak</h2>
            <p className="text-foreground/80">
              Untuk pertanyaan terkait privasi, hubungi kami melalui email
              <span className="font-medium"> cs@rentalpaskal.id</span>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
