import HeroBanner from "@/components/HeroBanner";
import PromoBanner from "@/components/PromoBanner";
import CategoryGrid from "@/components/CategoryGrid";
import Benefits from "@/components/Benefits";
import BundlingBanner from "@/components/BundlingBanner";
import Steps from "@/components/Steps";
import FAQ from "@/components/FAQ";
import BlogGrid from "@/components/BlogGrid";
import CategoryProducts from "@/components/CategoryProducts";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="font-sans">
      <HeroBanner />
      <main className="space-y-10 md:space-y-12 lg:space-y-16">
        <PromoBanner />
        {/* <ProductSlider id="rekomendasi" title="Rekomendasi Untukmu" headingVariants={fadeRight} cardVariants={fadeUp} /> */}
        <CategoryGrid />
        <CategoryProducts />
        {/* <ProductSlider id="populer" title="Pilihan Terpopuler" headingVariants={fadeLeft} cardVariants={zoomIn} /> */}
        <Benefits />
        <Steps />
        <FAQ />
        <BundlingBanner />
        <ReviewsSection />
        <ContactSection />
        <BlogGrid />
      </main>
    </div>
  );
}
