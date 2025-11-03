"use client";
import { useEffect, useState, useCallback } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

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

  return (
    <button
      aria-label="Kembali ke atas"
      onClick={scrollTop}
      className={`fixed z-50 bottom-5 right-5 md:bottom-7 md:right-7 inline-flex items-center justify-center w-12 h-12 rounded-full text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/40 bg-rent hover:bg-[#a06663] cursor-pointer ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ChevronUpIcon className="w-6 h-6" strokeWidth={2.5} />
    </button>
  );
}
