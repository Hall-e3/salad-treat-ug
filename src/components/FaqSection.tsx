"use client";

import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

export function FaqSection() {
  const faqs = [
    {
      q: "How does meal plan delivery work in Kampala?",
      a: "When you subscribe to a weekly or monthly plan, your freshly prepared bowl is portioned and dispatched daily in temperature-controlled thermal containers. Deliveries are made Monday through Saturday between 8:00am and 5:00pm.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept MTN Mobile Money, Airtel Money, cash on delivery for first-time orders, and direct bank transfers. Payment details are provided directly when your order is confirmed via WhatsApp.",
    },
    {
      q: "Can I swap ingredients or customize my daily meal plan?",
      a: "Yes! If you have dietary preferences (e.g. no onions, extra avocado, halal protein, or dressing on the side), simply mention it when confirming your order on WhatsApp or use our Custom Bowl Builder.",
    },
    {
      q: "Can I pause my weekly or monthly subscription if I'm out of town?",
      a: "Absolutely. You can pause or adjust your delivery days anytime with 24 hours advance notice via WhatsApp without losing any days on your plan.",
    },
    {
      q: "Do you cater for office teams or corporate meetings?",
      a: "Yes, we provide corporate catering and bulk lunch drop-offs for offices across Nakasero, Kololo, Naguru, and Ntinda. Special discounts apply for team orders above 10 bowls.",
    },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-basil py-14 sm:py-20 text-bone border-t border-bone/10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14 min-w-0">
          <span className="font-display text-base sm:text-lg italic text-zest flex items-center justify-center gap-1.5">
            <QuestionMarkCircleIcon className="h-5 w-5 text-zest shrink-0" />
            <span>Got Questions?</span>
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl leading-tight text-bone break-words">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-bone/70 text-xs sm:text-base">
            Everything you need to know about our ingredients, ordering, and delivery across Kampala.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-bone/15 bg-[#1a2b20] overflow-hidden transition-colors w-full min-w-0"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-4 sm:p-6 text-left font-display text-base sm:text-lg md:text-xl text-bone hover:text-zest transition-colors cursor-pointer min-w-0"
                >
                  <span className="pr-2 break-words">{faq.q}</span>
                  {isOpen ? (
                    <ChevronUpIcon className="h-5 w-5 sm:h-6 sm:w-6 text-zest shrink-0 ml-2" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 sm:h-6 sm:w-6 text-zest shrink-0 ml-2" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm text-bone/75 leading-relaxed border-t border-bone/10 mt-2 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
