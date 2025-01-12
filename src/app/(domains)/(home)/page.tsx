import FaqSection from "@/app/(domains)/(home)/_sections/FaqSection";
import Footer from "@/app/(domains)/(home)/_sections/Footer";
import HeroSection from "@/app/(domains)/(home)/_sections/HeroSection";
import HowItWorksSection from "@/app/(domains)/(home)/_sections/HowItWorksSection";
import TestimonialSection from "@/app/(domains)/(home)/_sections/TestimonialSection";
import FeaturesSection from "@/components/FeaturesSection";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/Pricing";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <section id="pricing" className="bg-gray-100 py-20">
          <PricingSection selectedOption="preview" />
        </section>
        <FeaturesSection />
        <TestimonialSection />
        <FaqSection />
        <Footer />
      </main>
    </div>
  );
}
