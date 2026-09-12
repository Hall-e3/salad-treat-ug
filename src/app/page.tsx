import HeaderNav from "@/components/layout/HeaderNav";
import HeroSection from "@/components/landing/HeroSection";
import IngredientsSection from "@/components/landing/IngredientsSection";
import MenuSection from "@/components/landing/MenuSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import OrderBandSection from "@/components/landing/OrderBandSection";
import FaqSection from "@/components/landing/FaqSection";
import { HiringBanner } from "@/components/HiringBanner";
import Footer from "@/components/layout/Footer";
import CartDrawerModal from "@/components/modals/CartDrawerModal";
import AnnouncementModal from "@/components/modals/AnnouncementModal";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "name": "Salad Treat Kampala",
    "image": "https://saladtreat.ug/photos/kampala-crunch-bowl.jpg",
    "@id": "https://saladtreat.ug",
    "url": "https://saladtreat.ug",
    "telephone": "+256752182379",
    "priceRange": "UGX 22,000 - UGX 250,000",
    "servesCuisine": ["Healthy", "Salad", "High Protein", "Keto"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kampala",
      "addressRegion": "Central Region",
      "addressCountry": "UG"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      "https://www.tiktok.com/@salad.treat.ug",
      "https://www.instagram.com/salad_treat"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeaderNav />
      <main>
        <HeroSection />
        <IngredientsSection />
        <MenuSection />
        <TestimonialsSection />
        <OrderBandSection />
        <FaqSection />
        <HiringBanner />
      </main>
      <Footer />
      <CartDrawerModal />
      <AnnouncementModal />
    </>
  );
}
