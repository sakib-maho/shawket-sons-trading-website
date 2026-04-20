import { Hero } from "@/components/Hero";
import { IntroSection } from "@/components/IntroSection";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { WhyUsSection } from "@/components/WhyUsSection";
import { CTASection } from "@/components/CTASection";
import { Testimonials } from "@/components/Testimonials";
import { ContactTeaser } from "@/components/ContactTeaser";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <FeaturedProducts />
      <WhyUsSection />
      <Testimonials />
      <CTASection />
      <ContactTeaser />
    </>
  );
}
