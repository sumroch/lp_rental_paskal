"use client";
import { useEffect, useState, useCallback } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function BackToTop({ threshold = 200 }: { threshold?: number }) {
  const [visible, setVisible] = useState(false);

  const onScroll = useCallback(() => {
    if (typeof window === "undefined") return;
    setVisible(window.scrollY > threshold);
  }, [threshold]);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const scrollTop = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const phoneTarget = "6287837970070";
  const waMessage = "hallo admin Paskal Rental, mau bertanya perihal sewa motor";
  const waUrl = `https://wa.me/${phoneTarget}?text=${encodeURIComponent(waMessage)}`;

  return (
    <div
      className={`fixed z-50 bottom-5 right-5 md:bottom-7 md:right-7 flex flex-col items-center gap-3 transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}>
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi via WhatsApp"
        className="inline-flex items-center justify-center w-12 h-12 rounded-full text-white shadow-lg bg-[#25D366] hover:bg-[#128C7E] focus:outline-none focus:ring-2 focus:ring-white/40"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="w-7 h-7" />
      </a>
      <button
        aria-label="Kembali ke atas"
        onClick={scrollTop}
        className="inline-flex items-center justify-center w-12 h-12 rounded-full text-white shadow-lg bg-rent hover:bg-[#a06663] cursor-pointer"
      >
        <ChevronUpIcon className="w-6 h-6" strokeWidth={2.5} />
      </button>
    </div>
  );
}
