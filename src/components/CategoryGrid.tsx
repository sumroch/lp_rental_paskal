import { Card } from "@heroui/react";
import { Reveal, Stagger } from "@/components/Reveal";

const categories = [
  { name: "Matic", cc: "110" },
  { name: "Matic", cc: "125" },
  { name: "Matic", cc: "150" },
  { name: "Matic", cc: "160" },
];

export default function CategoryGrid({ id = "kategori" }: { id?: string }) {
  return (
    <section id={id} className="container-max bg-blue px-4 md:px-6 mt-6 md:mt-8 scroll-mt-20 md:scroll-mt-24">
      <Reveal>
        <h2 className="text-xl md:text-2xl font-bold mb-3">Kategori Kendaraan</h2>
      </Reveal>
      <Stagger className="bg-rent grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-lg">
        {categories.map((cat) => (
          <Reveal key={`${cat.name}-${cat.cc}`}>
            <a href={`#cc-${cat.cc}`} className="block">
              <Card className="bg-white p-4 text-center card-shadow hover:shadow-md hover:bg-[#0e5fd8] hover:text-white transition-shadow">
                <p className="text-xl font-bold ">{cat.name}</p>
                <p className="text-xl font-extrabold">{cat.cc}cc</p>
              </Card>
            </a>
          </Reveal>
        ))}
      </Stagger>
    </section>
  );
}
