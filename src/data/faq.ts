export type FAQItem = {
  q: string;
  a: string;
};

export const faqData: FAQItem[] = [
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
