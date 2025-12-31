"use client";

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";

export default function SyaratKetentuanModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Modal isOpen={open} size="full" onClose={onClose}>
      <ModalContent>
        {(close) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Syarat &amp; Ketentuan</ModalHeader>
            <ModalBody className="overflow-y-auto max-h-[80vh]">
              <div className="prose max-w-none">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-rent mb-2">Syarat &amp; Ketentuan Penyewaan Kendaraan</h2>
                <p className="mt-2 text-base text-foreground/70 mb-4">Mohon dibaca dan dipahami sebelum melakukan penyewaan.</p>
                <div className="rounded-xl border border-black/5 bg-white shadow-sm p-0 md:p-6">
                  <ol className="list-decimal pl-5 space-y-4 text-foreground/80">
                    <li>
                      Penyewa bertanggung jawab penuh atas penggunaan, perawatan, dan keamanan kendaraan beserta seluruh perlengkapannya selama masa sewa berlangsung. Kendaraan tidak diperkenankan dipindahtangankan kepada pihak lain tanpa persetujuan pemilik rental.
                    </li>
                    <li>
                      Penyewa wajib menyerahkan jaminan berupa KTP, ID Card, atau dokumen lain yang disepakati oleh pihak rental.
                    </li>
                    <li>
                      Kendaraan digunakan dalam kondisi layak dan sesuai peruntukan. Penggunaan kendaraan dibatasi di wilayah Bandung. Apabila kendaraan digunakan ke luar wilayah Bandung tanpa persetujuan, akan dikenakan biaya tambahan sebesar <strong>Rp500.000</strong>.
                    </li>
                    <li>
                      Layanan antar dan jemput kendaraan dilakukan berdasarkan kesepakatan awal. Apabila tersedia, biaya antar-jemput dikenakan sesuai perjanjian.
                    </li>
                    <li>
                      Perhitungan sewa berlaku <strong>per 24 jam</strong> sejak serah terima unit. Over time maksimal 6 jam dengan biaya <strong>Rp10.000/jam</strong>. Melebihi batas tersebut akan dihitung sebagai harga sewa hari berikutnya.
                    </li>
                    <li>
                      Waktu pengambilan dan lokasi pengembalian harus sesuai jadwal pada formulir sewa. Penyewa diharapkan menghubungi admin <strong>30 menit</strong> sebelum waktu penjemputan. Keterlambatan pengembalian dianggap sebagai perpanjangan masa sewa.
                    </li>
                    <li>
                      Permohonan perpanjangan masa sewa wajib dikonfirmasi minimal <strong>12 jam</strong> sebelumnya dan hanya dapat dilakukan jika kendaraan tersedia.
                    </li>
                    <li>
                      Keterlambatan pengembalian dikenakan denda <strong>Rp15.000 per jam</strong>. Apabila keterlambatan melebihi 6 jam tanpa konfirmasi, kendaraan dianggap disewa kembali.
                    </li>
                    <li>
                      Pemesanan kendaraan untuk hari mendatang wajib disertai uang booking sebesar <strong>Rp50.000 per unit</strong>. Uang booking tidak dapat dikembalikan apabila terjadi pembatalan sepihak oleh penyewa.
                    </li>
                    <li>
                      Apabila terjadi kehilangan kendaraan atau perlengkapannya, penyewa wajib mengganti secara penuh sesuai nilai pasaran atau harga pembelian pemilik rental.
                    </li>
                    <li>
                      Segala bentuk kerusakan kendaraan, baik sebagian maupun keseluruhan, akibat kelalaian, kecelakaan, atau kesalahan penyewa menjadi tanggung jawab penuh penyewa.
                    </li>
                    <li>
                      Kendaraan tidak diperkenankan digunakan di area rawan banjir atau medan yang berpotensi menyebabkan kerusakan.
                    </li>
                    <li>
                      Kondisi bahan bakar saat pengembalian harus sama seperti saat kendaraan diterima. Apabila kurang, akan dikenakan biaya tambahan sebesar <strong>Rp10.000 per bar</strong>.
                    </li>
                    <li>
                      Penyewa atau pengemudi wajib memiliki SIM C yang aktif dan sah. Segala bentuk pelanggaran lalu lintas, termasuk denda dan tilang, menjadi tanggung jawab penuh penyewa.
                    </li>
                    <li>
                      Apabila masa sewa telah berakhir dan penyewa tidak dapat dihubungi atau tidak memberikan respons, pemilik rental berhak menempuh jalur hukum sesuai ketentuan perundang-undangan yang berlaku.
                    </li>
                    <li>
                      Pemilik rental tidak bertanggung jawab atas tuntutan hukum yang timbul akibat pelanggaran syarat dan ketentuan oleh penyewa.
                    </li>
                    <li>
                      Pemilik rental berhak menolak atau membatalkan permohonan sewa kendaraan kapan pun, dengan atau tanpa memberikan alasan kepada calon penyewa.
                    </li>
                  </ol>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onPress={close} className="w-full md:w-auto">Tutup</Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
