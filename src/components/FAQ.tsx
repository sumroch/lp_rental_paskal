import { Reveal, Stagger } from "@/components/Reveal";

export default function FAQ({ id = "faq" }: { id?: string }) {
  const items = [
    {
      q: "Apa saja syarat & ketentuan rental motor?",
      a: `
• Sewa motor khusus wisatawan dan perjalanan bisnis di Bandung<br />
• Motor hanya digunakan di dalam wilayah Bandung Raya<br />
• Melakukan booking order wajib dengan DP minimal Rp50.000<br />
• Kartu Tanda Penduduk harus ASLI, bukan scan atau fotokopi<br />
• Keterlambatan maksimal 2 jam dari jadwal<br />
• Pihak rental berhak menolak atau membatalkan perjanjian jika data tidak lengkap<br />
• Maksimal pemakaian 100 km/hari. Jika lebih akan dikenakan charge Rp10.000/km
      `,
    },
    {
      q: "Berapa harga rental?",
      a: "Pricelist rental bisa dicek di website atau WhatsApp. Kami menyediakan paket harian (24 jam), mingguan, dan bulanan.",
    },
    {
      q: "Apakah bisa antar jemput motor?",
      a: "Bisa. Kami melayani antar jemput ke hotel dan stasiun dengan radius maksimal 5 km dari Paskal Rental. Jika lebih dari 5 km akan dikenakan charge Rp10.000/km.",
    },
    {
      q: "Apa yang didapat selama rental motor?",
      a: `
• Free 2 jas hujan<br />
• 2 helm<br />
• Phone holder<br />
• Kunci ganda<br />
• Lap kanebo
      `,
    },
    {
      q: "Apakah ada harga khusus untuk mahasiswa?",
      a: "Ada. Harga khusus untuk mahasiswa aktif dengan memperlihatkan KTM yang masih berlaku.",
    },
    {
      q: "Apakah bisa rental tapi tidak mempunyai SIM?",
      a: "Tidak bisa, untuk menghindari pelanggaran lalu lintas (tilang).",
    },
    {
      q: "Bagaimana jika ada tilang?",
      a: "Customer diharapkan mematuhi segala aturan lalu lintas. Jika terjadi tilang, menjadi tanggung jawab customer.",
    },
    {
      q: "Bisakah rental motor untuk 12 jam?",
      a: "Bisa, namun hanya berlaku pada weekdays.",
    },
    {
      q: "Metode pembayaran apa saja yang tersedia?",
      a: "Transfer bank dan tunai saat serah terima.",
    },
    {
      q: "Bagaimana proses jika ingin membatalkan booking?",
      a: `
• Pembatalan dilakukan minimal 1 hari sebelum hari-H agar DP dikembalikan full.<br />
• Jika dilakukan saat hari-H, maka DP hangus.
      `,
    },
    {
      q: "Bagaimana jika terlambat mengembalikan motor?",
      a: "Jika keterlambatan lebih dari 2 jam, maka akan dikenakan biaya tambahan.",
    },
    {
      q: "Bagaimana syarat pengembalian?",
      a: `
• Unit dikembalikan dalam keadaan seperti semula<br />
• Tidak ada kerusakan dan bensin dalam keadaan seperti saat awal pengantaran
      `,
    },
    {
      q: "Bagaimana jika motor ada kerusakan?",
      a: `
• Motor harus dikembalikan seperti semula<br />
• Segala kerusakan menjadi tanggung jawab customer<br />
• Customer bisa mengajukan garansi kebocoran ban kepada pihak Paskal Rental dengan harga yang sudah ditentukan
      `,
    },
    {
      q: "Bagaimana jika ada kehilangan?",
      a: "Kehilangan unit atau perlengkapan seperti helm menjadi tanggung jawab customer.",
    },
    {
      q: "Bisakah booking rental di hari H?",
      a: "Bisa, selama masih ada unit yang tersedia.",
    },
  ];

  return (
    <section id={id} className="container-max px-4 md:px-6 mt-8 scroll-mt-20 md:scroll-mt-24">
      <Reveal>
        <h2 className="text-xl md:text-2xl font-bold mb-3">Pertanyaan yang Sering Diajukan</h2>
      </Reveal>
      <Stagger className="space-y-2">
        {items.map((it) => (
          <Reveal key={it.q}>
            <details className="group rounded-xl bg-white card-shadow p-4 open:pb-5">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                <span className="font-semibold">{it.q}</span>
                <span className="w-6 h-6 rounded-full grid place-items-center bg-[#0e5fd8] text-white text-xs transition group-open:rotate-45">+</span>
              </summary>
              <p
                className="mt-2 text-sm text-foreground/70 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: it.a }}
              />
            </details>
          </Reveal>
        ))}
      </Stagger>
    </section>
  );
}
