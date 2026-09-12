import type { Metadata } from "next";
import HeaderNav from "@/components/layout/HeaderNav";
import Footer from "@/components/layout/Footer";
import CartDrawerModal from "@/components/modals/CartDrawerModal";
import AnnouncementModal from "@/components/modals/AnnouncementModal";
import { AppText } from "@/components/ui";
import { ShieldCheckIcon, DocumentTextIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Terms of Service | Salad Treat Kampala",
  description:
    "Read Salad Treat's Terms of Service regarding meal plan subscriptions, daily salad delivery across Kampala, order cut-offs, payment policies, and refunds.",
  alternates: {
    canonical: "https://saladtreat.ug/terms",
  },
  openGraph: {
    title: "Terms of Service | Salad Treat Kampala",
    description:
      "Read Salad Treat's Terms of Service regarding meal plan subscriptions, daily salad delivery across Kampala, order cut-offs, payment policies, and refunds.",
    url: "https://saladtreat.ug/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <HeaderNav />
      <main className="bg-herb-white text-charcoal min-h-screen">
        {/* Header Hero */}
        <section className="bg-basil text-bone py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-zest/15 px-3.5 py-1 text-xs font-bold text-zest uppercase tracking-wider mb-4 border border-zest/30">
              <DocumentTextIcon className="h-4 w-4" />
              <span>Legal Agreement</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl text-bone">
              Terms of Service
            </h1>
            <p className="mt-3 text-sm sm:text-base text-bone/70 max-w-xl mx-auto">
              Effective Date: September 2026 • Salad Treat Uganda
            </p>
          </div>
        </section>

        {/* Content Container */}
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="rounded-3xl bg-white p-6 sm:p-10 shadow-lg border border-line space-y-8 text-xs sm:text-sm text-charcoal/80 leading-relaxed">
            <div>
              <h2 className="font-display text-xl text-basil font-bold mb-2">
                1. Acceptance of Terms
              </h2>
              <p>
                By placing an order, subscribing to a meal plan, or using the Salad Treat website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please refrain from using our services.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-basil font-bold mb-2">
                2. Operational Hours &amp; Delivery Cut-offs
              </h2>
              <p>
                Salad Treat operates Monday through Saturday, from 8:00 AM to 5:00 PM.
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Same-day lunch delivery orders must be placed before <strong>10:30 AM</strong>.</li>
                <li>Orders placed after 10:30 AM will be scheduled for afternoon dispatch or next business day delivery.</li>
                <li>Delivery zones cover major Kampala areas including Kololo, Naguru, Nakasero, Bugolobi, Muyenga, Ntinda, Kamwokya, and surrounding districts.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl text-basil font-bold mb-2">
                3. Meal Subscription Plans
              </h2>
              <p>
                Salad Treat offers Weekly (6 Days) and Monthly (24 Days) subscription packages:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><strong>Monthly Subscribers</strong> enjoy <strong>FREE delivery</strong> across designated Kampala zones.</li>
                <li>Subscriptions can be paused or rescheduled with at least <strong>24 hours prior notice</strong> via phone or WhatsApp.</li>
                <li>Subscription balances are non-transferable unless authorized by Salad Treat management.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl text-basil font-bold mb-2">
                4. Pricing &amp; Payment Methods
              </h2>
              <p>
                All prices are listed in Ugandan Shillings (UGX). Payments can be completed via MTN Mobile Money, Airtel Money, Direct Cash on Delivery, or Bank Transfer. Full payment or mobile money verification is required upon order confirmation.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-basil font-bold mb-2">
                5. Food Safety, Hygiene &amp; Allergies
              </h2>
              <p>
                Our meals are prepared fresh daily using fresh ingredients under strict hygiene standards. Please specify any dietary restrictions or food allergies (e.g., nuts, dairy, onions) in your order notes. Salad Treat is not responsible for adverse reactions to unspecified allergens.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-basil font-bold mb-2">
                6. Cancellations &amp; Refunds
              </h2>
              <p>
                Because our salad ingredients are sourced and prepared fresh daily, same-day cancellations must be requested prior to <strong>9:00 AM</strong>. Refunds for eligible cancelled orders will be issued via mobile money within 24–48 hours.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-basil font-bold mb-2">
                7. Contact &amp; Customer Support
              </h2>
              <p>
                For questions regarding your order or terms, contact our support line:
              </p>
              <div className="mt-3 p-4 rounded-2xl bg-bone/50 border border-line text-xs font-semibold text-charcoal space-y-2">
                <div className="flex items-center gap-2">
                  <PhoneIcon className="h-4 w-4 text-zest-deep shrink-0" />
                  <span>Direct Phone: 0752 182 379 / 0775 980 728</span>
                </div>
                <div className="flex items-center gap-2">
                  <EnvelopeIcon className="h-4 w-4 text-zest-deep shrink-0" />
                  <span>Email: saladtreat256@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPinIcon className="h-4 w-4 text-zest-deep shrink-0" />
                  <span>Location: Kampala, Uganda</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CartDrawerModal />
      <AnnouncementModal />
    </>
  );
}
