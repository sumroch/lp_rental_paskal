"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@heroui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const links = [
  { href: "#promo", label: "Promo" },
  // { href: "#rekomendasi", label: "Rekomendasi" },
  { href: "#kategori", label: "Kategori" },
  // { href: "#populer", label: "Populer" },
  { href: "#benefits", label: "Keuntungan" },
  { href: "#steps", label: "Cara Sewa" },
  { href: "#faq", label: "FAQ" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Kontak" },
  { href: "#blog", label: "Artikel" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#promo");

  const sectionIds = useMemo(() => links.map(l => l.href.replace("#", "")), []);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px 0px -60% 0px",
      threshold: 0.4,
    };
    const handler: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(`#${entry.target.id}`);
        }
      });
    };
    const observer = new IntersectionObserver(handler, options);
    const targets = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [sectionIds]);

  const renderLinks = (onClick?: () => void) => (
    <ul className="flex items-center gap-6 text-sm">
      {links.map((l) => (
        <li key={l.href}>
          <a
            href={l.href}
            onClick={() => onClick?.()}
            className={`font-medium transition-colors ${active === l.href ? "text-[#0e5fd8]" : "text-foreground/80 hover:text-[#0e5fd8]"}`}
          >
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-black/5">
      <nav className="container-max px-4 md:px-6 h-14 md:h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="icon/logo-rental.svg" alt="Logo" width={60} height={60} className="w-12 h-12" />
          <Link href="/" className="font-extrabold tracking-wide text-[15px] md:text-lg blue-rent">PASKAL RENTAL</Link>
        </div>
        <div className="hidden md:block">
          {renderLinks()}
        </div>
        <button aria-label="Open menu" className="md:hidden p-2" onClick={() => setOpen((v) => !v)}>
          {open ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile dropdown panel under navbar */}
      {open && (
        <div className="md:hidden fixed left-0 right-0 top-14 z-40">
          <div className="container-max px-4 md:px-6">
            <div className="bg-black/60 text-white rounded-md backdrop-blur-sm py-3 px-3">
              <div className="pb-2 border-b border-white/10 flex items-center justify-between">
                <span className="">PASKAL RENTAL</span>
                <Button isIconOnly variant="light" onPress={() => setOpen(false)} aria-label="Close">
                  <XMarkIcon className="w-6 h-6" />
                </Button>
              </div>
              <ul className="flex flex-col gap-3 py-3">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`block font-medium ${active === l.href ? "text-primary-300" : "text-white/90"}`}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
