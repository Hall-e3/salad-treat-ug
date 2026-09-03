import HeaderNav from "@/components/layout/HeaderNav";
import HeroSection from "@/components/landing/HeroSection";
import IngredientsSection from "@/components/landing/IngredientsSection";
import MenuSection from "@/components/landing/MenuSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import OrderBandSection from "@/components/landing/OrderBandSection";
import FaqSection from "@/components/landing/FaqSection";
import Footer from "@/components/layout/Footer";
import CartDrawerModal from "@/components/modals/CartDrawerModal";

export default function Home() {
  return (
    <>
      <HeaderNav />
      <main>
        <HeroSection />
        <IngredientsSection />
        <MenuSection />
        <TestimonialsSection />
        <OrderBandSection />
        <FaqSection />
      </main>
      <Footer />
      <CartDrawerModal />
    </>
  );
}
