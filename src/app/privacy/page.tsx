import type { Metadata } from "next";
import HeaderNav from "@/components/layout/HeaderNav";
import Footer from "@/components/layout/Footer";
import CartDrawerModal from "@/components/modals/CartDrawerModal";
import { ShieldCheckIcon, LockClosedIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Privacy Policy | Salad Treat Kampala",
  description:
    "Learn how Salad Treat protects your personal information, delivery addresses, and payment details in compliance with Uganda Data Protection regulations.",
};

export default function PrivacyPage() {
  return (
    <>
      <HeaderNav />
      <main className="bg-herb-white text-charcoal min-h-screen">
        {/* Header Hero */}
        <section className="bg-basil text-bone py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-zest/15 px-3.5 py-1 text-xs font-bold text-zest uppercase tracking-wider mb-4 border border-zest/30">
              <ShieldCheckIcon className="h-4 w-4" />
              <span>Data Protection</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl text-bone">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm sm:text-base text-bone/70 max-w-xl mx-auto">
              Effective Date: September 2026 • Salad Treat Uganda
            </p>
          </div>
        </section>

        {/* Content Container */}
        <section className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
          <div className="rounded-3xl bg-white p-6 sm:p-10 shadow-lg border border-line space-y-8 text-xs sm:text-sm text-charcoal/80 leading-relaxed">
            <div>
              <h2 className="font-display text-xl text-basil font-bold mb-2">
                1. Overview &amp; Commitment
              </h2>
              <p>
                At Salad Treat, we prioritize the privacy and security of our customers in Kampala and surrounding areas. This Privacy Policy outlines what information we collect when you order salad bowls or subscribe to meal plans, and how we use it.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-basil font-bold mb-2">
                2. Information We Collect
              </h2>
              <p>When placing an order or customizing a meal plan, we collect:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><strong>Contact Information:</strong> Your full name, phone number, and WhatsApp contact details.</li>
                <li><strong>Delivery Details:</strong> Street name, office building, area/zone, and delivery time preferences.</li>
                <li><strong>Dietary Notes:</strong> Ingredient customizations or food allergy instructions.</li>
                <li><strong>Order History:</strong> Past salad bowl selections and subscription durations.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl text-basil font-bold mb-2">
                3. How We Use Your Information
              </h2>
              <p>We use your personal data strictly for operational purposes:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Dispatching fresh salad orders directly to your doorstep.</li>
                <li>Sending order status confirmations and WhatsApp delivery updates.</li>
                <li>Processing subscription renewals and managing your meal preferences.</li>
                <li>Improving our menu offerings based on popular item choices.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl text-basil font-bold mb-2">
                4. Data Protection &amp; Third Parties
              </h2>
              <p>
                <strong>We never sell, rent, or trade your personal data to third parties.</strong> Your delivery information is shared only with authorized Salad Treat dispatch riders and customer care representatives necessary to fulfill your order.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-basil font-bold mb-2">
                5. Local Storage &amp; Cookies
              </h2>
              <p>
                Our web app utilizes browser <code>localStorage</code> to store your shopping cart items temporarily so you don&rsquo;t lose your order when refreshing the page. We do not use intrusive tracking cookies or cross-site surveillance scripts.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-basil font-bold mb-2">
                6. Contact Privacy Officer
              </h2>
              <p>
                If you wish to update, correct, or delete your customer records from our system, please contact us:
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
    </>
  );
}
