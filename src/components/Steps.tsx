import { Card } from "@heroui/react";
import { Reveal } from "@/components/Reveal";

export default function Steps({ id = "steps" }: { id?: string }) {
  const images = [
    { src: "/icon/1.png", alt: "Step 1" },
    { src: "/icon/2.png", alt: "Step 2" },
    { src: "/icon/3.png", alt: "Step 3" },
    { src: "/icon/4.png", alt: "Step 4" },
  ];
  return (
    <section
      id={id}
      className="container-max px-4 md:px-6 mt-8 scroll-mt-20 md:scroll-mt-24"
    >
      <Reveal>
        <h2 className="text-xl md:text-2xl font-bold text-center mb-8">
          Cara Sewa
        </h2>
      </Reveal>
      <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto md:gap-10">
        {images.map((img) => (
          <Reveal key={img.src}>
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto object-contain rounded-xl shadow-md"
              loading="lazy"
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
