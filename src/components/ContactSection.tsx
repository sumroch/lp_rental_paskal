"use client";
import { FormEvent, useMemo, useState } from "react";
import { Input, Textarea, Button, Link } from "@heroui/react";
import { Reveal } from "@/components/Reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faAt } from "@fortawesome/free-solid-svg-icons";

export default function ContactSection({ id = "contact" }: { id?: string }) {
  const todayISO = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const tomorrowISO = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().slice(0, 10);
  }, []);

  const [form, setForm] = useState({
    name: "",
    ig: "",
    phone: "",
    asal: "",
    penjamin: "",
    telpPenjamin: "",
    hubungan: "",
    bike: "",
    helm: "",
    jasHujan: "",
    start: todayISO,
    end: tomorrowISO,
    startTime: "09:00",
    endTime: "18:00",
    antar: "",
    jemput: "",
    note: "",
  });

  const onChange = (key: keyof typeof form) => (val: string) =>
    setForm((s) => ({ ...s, [key]: val }));

  const canSend = useMemo(() => {
    return Boolean(
      form.name &&
        form.ig &&
        form.phone &&
        form.asal &&
        form.penjamin &&
        form.telpPenjamin &&
        form.hubungan &&        form.bike &&
        form.helm &&
        form.jasHujan &&
        form.start &&
        form.end &&
        form.startTime &&
        form.endTime &&
        form.antar &&
        form.jemput
    );
  }, [
    form.name,
    form.ig,
    form.phone,
    form.asal,
    form.penjamin,
    form.telpPenjamin,
    form.hubungan,
    form.bike,
    form.helm,
    form.jasHujan,
    form.start,
    form.end,
    form.startTime,
    form.endTime,
    form.antar,
    form.jemput,
  ]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.ig ||
      !form.phone ||
      !form.asal ||
      !form.penjamin ||
      !form.telpPenjamin ||
      !form.hubungan ||
      !form.bike ||
      !form.helm ||
      !form.jasHujan ||
      !form.start ||
      !form.end ||
      !form.startTime ||
      !form.endTime ||
      !form.antar ||
      !form.jemput
    ) {
      alert(
        "Mohon lengkapi semua data wajib seperti Nama, Instagram, No Ponsel, Kota Asal, Nama & No Telp Penjamin, Nama Motor, Jumlah Helm, Jumlah Jas Hujan, Lokasi Antar & Jemput, serta Tanggal & Jam."
      );
      return;
    }

    if (form.start === form.end && form.endTime < form.startTime) {
      alert(
        "Jam Selesai tidak boleh lebih awal dari Jam Mulai pada tanggal yang sama."
      );
      return;
    }

    const phoneTarget = "6287837970070";
    const fmt = (s: string) => {
      const [y, m, d] = s.split("-");
      return `${d}-${m}-${y}`;
    };

    const lines = [
      " PASKAL RENTAL MOTOR",
      "",
      "Ruko Paskal Hypersquare B-45",
      "JL. Pasir Kaliki No 25-27 Bandung",
      "paskalrental.com",
      "0878-3797-0070",
      "",
      "",
      "",
      "DETAIL RESERVASI",
      `Nama : ${form.name}`,
      `No. Telpon : ${form.phone}`,
      `Instagram : ${form.ig}`,
      `Kota Asal : ${form.asal}`,
      `Nama Motor : ${form.bike}`,
      `Jumlah Helm : ${form.helm}`,
      `Jumlah Jas Hujan : ${form.jasHujan}`,
      `Awal Sewa : ${fmt(form.start)} ${form.startTime} WIB`,
      `Lokasi Antar : ${form.antar}`,
      `Akhir Sewa : ${fmt(form.end)} ${form.endTime} WIB`,
      `Lokasi Jemput : ${form.jemput}`,
      `Catatan : ${form.note}`,
      "",
      "", 
      "KONTAK DARURAT",
      `Nama: ${form.penjamin}`,
      `No. Telp : ${form.telpPenjamin}`,
      `Hubungan : ${form.hubungan}`,
      "",
      "",
      "METODE PEMBAYARAN",
      "Transfer :",
      "Tunai :",
      "Diskon :",
      "Total :",
      "",
      "",
      "Terima Kasih.",
    ];

    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${phoneTarget}?text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id={id}
      className="container-max px-4 md:px-6 mt-10 md:mt-12 scroll-mt-24"
    >
      <div className="rounded-2xl border border-black/10 bg-white p-4 md:p-6 card-shadow">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {/* Left: Form */}
          <Reveal>
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#0972CE]">
                Booking di Sini
              </h2>
              <form onSubmit={onSubmit} className="space-y-4">
                <Input
                  isRequired
                  variant="bordered"
                  size="md"
                  label="Nama"
                  placeholder="Nama lengkap"
                  value={form.name}
                  onValueChange={onChange("name")}
                />
                <Input
                  isRequired
                  variant="bordered"
                  size="md"
                  label="Akun Instagram"
                  placeholder="@username"
                  value={form.ig}
                  onValueChange={onChange("ig")}
                />
                <Input
                  isRequired
                  variant="bordered"
                  size="md"
                  label="Nomor Ponsel"
                  placeholder="Contoh: 08xxx"
                  type="tel"
                  value={form.phone}
                  onValueChange={onChange("phone")}
                />
                <Input
                  isRequired
                  variant="bordered"
                  size="md"
                  label="Kota Asal"
                  placeholder="Contoh: Bandung"
                  value={form.asal}
                  onValueChange={onChange("asal")}
                />
                <Input
                  isRequired
                  variant="bordered"
                  size="md"
                  label="Nama Motor"
                  placeholder="Contoh: Vario 125"
                  value={form.bike}
                  onValueChange={onChange("bike")}
                />
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    isRequired
                    variant="bordered"
                    size="md"
                    label="Jumlah Helm"
                    placeholder="0"
                    type="number"
                    min={0}
                    value={form.helm}
                    onValueChange={onChange("helm")}
                  />
                  <Input
                    isRequired
                    variant="bordered"
                    size="md"
                    label="Jumlah Jas Hujan"
                    placeholder="0"
                    type="number"
                    min={0}
                    value={form.jasHujan}
                    onValueChange={onChange("jasHujan")}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    isRequired
                    variant="bordered"
                    size="md"
                    label="Tanggal Pinjam"
                    type="date"
                    min={todayISO}
                    value={form.start}
                    onValueChange={(val) => {
                      if (val > form.end) {
                        setForm((prev) => ({ ...prev, start: val, end: val }));
                      } else {
                        onChange("start")(val);
                      }
                    }}
                  />
                  <Input
                    isRequired
                    variant="bordered"
                    size="md"
                    label="Tanggal Selesai"
                    type="date"
                    min={form.start}
                    value={form.end}
                    onValueChange={onChange("end")}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    isRequired
                    variant="bordered"
                    size="md"
                    label="Jam Mulai"
                    type="time"
                    value={form.startTime}
                    onValueChange={onChange("startTime")}
                  />
                  <Input
                    isRequired
                    variant="bordered"
                    size="md"
                    label="Jam Selesai"
                    type="time"
                    value={form.endTime}
                    min={form.start === form.end ? form.startTime : undefined}
                    onValueChange={onChange("endTime")}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    isRequired
                    variant="bordered"
                    size="md"
                    label="Lokasi Antar"
                    placeholder="Contoh: Hotel X, Lobby"
                    value={form.antar}
                    onValueChange={onChange("antar")}
                  />
                  <Input
                    isRequired
                    variant="bordered"
                    size="md"
                    label="Lokasi Jemput"
                    placeholder="Contoh: Bandara Husein"
                    value={form.jemput}
                    onValueChange={onChange("jemput")}
                  />
                </div>

                <Textarea
                  minRows={5}
                  variant="bordered"
                  label="Catatan"
                  placeholder="Contoh: Sewa Intercom, atau catatan lainnya"
                  value={form.note}
                  onValueChange={onChange("note")}
                />
                <div className="flex flex-col gap-4">
                  <p className="text-sm font-semibold text-[#0e5fd8]">Kontak Darurat</p>
                  <Input
                    isRequired
                    variant="bordered"
                    size="md"
                    label="Nama"
                    placeholder="Nama"
                    value={form.penjamin}
                    onValueChange={onChange("penjamin")}
                  />
                  <Input
                    isRequired
                    variant="bordered"
                    size="md"
                    label="No Telp"
                    placeholder="Contoh: 08xxx"
                    type="tel"
                    value={form.telpPenjamin}
                    onValueChange={onChange("telpPenjamin")}
                  />
                </div>
                <Input
                  isRequired
                  variant="bordered"
                  size="md"
                  label="Hubungan"
                  placeholder="Contoh: Ibu, Ayah, Orang Tua"
                  value={form.hubungan}
                  onValueChange={onChange("hubungan")}
                />
                <Button
                  type="submit"
                  color="primary"
                  className="mt-1 rounded-lg px-6 self-start"
                  isDisabled={!canSend}
                >
                  Kirim Pesan
                </Button>
              </form>
              <div className="mt-4">
                <p className="text-sm text-[#0e5fd8]">*Bookingan akan dikonfirmasi oleh admin di jam operasional</p>
              </div>
            </div>
          </Reveal>

          {/* Right: Contact + Map */}
          <Reveal>
            <div className="md:border-l md:pl-8 border-black/10">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#0972CE]">
                Hubungi kami
              </h3>
              <ul className="space-y-3 mb-4">
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="text-[18px] md:text-[20px] text-[#0972CE]"
                  />
                  <Link
                    href="https://wa.me/6287837970070"
                    className="text-foreground"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +62 878 - 3797 - 0070
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-[18px] md:text-[20px] text-[#0972CE]"
                  />
                  <Link
                    href="mailto:yorokobirental@gmail.com"
                    className="text-foreground"
                  >
                    yorokobirental@gmail.com
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={faAt}
                    className="text-[18px] md:text-[20px] text-[#0972CE]"
                  />
                  <Link
                    href="https://www.instagram.com/paskalrentalmotor"
                    className="text-foreground"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    paskalrentalmotor
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-[18px] md:text-[20px] text-[#0972CE]"
                  />
                  <span>
                    Ruko Paskal Hypersquare B-45 Jl. Pasirkaliki 25-27 Bandung
                  </span>
                </li>
              </ul>
              <div className="rounded-xl overflow-hidden card-shadow">
                <iframe
                  title="Lokasi Paskal Rental Motor Bandung"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.795301587549!2d107.5956108!3d-6.915060399999989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7fbc0ac2271%3A0xc30ebe12541c3768!2sPaskal%20Rental%20Motor%20Bandung!5e0!3m2!1sid!2sid!4v1760321862219!5m2!1sid!2sid"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
