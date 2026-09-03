export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  location: string;
};

export const testimonialsData: Testimonial[] = [
  {
    id: "sharon",
    name: "Dr. Sharon K.",
    role: "Medical Resident, Mulago Hospital",
    quote:
      "The Lunch plan is a lifesaver. On long hospital shifts, having a fresh high-protein bowl delivered right at 12:30pm keeps me focused without resorting to junk food.",
    location: "Kololo",
  },
  {
    id: "dennis",
    name: "Dennis M.",
    role: "Software Lead, Innovation Village",
    quote:
      "We subscribed our tech team to the full-day package. The portion sizes are honest, greens are crisp, and ordering on WhatsApp takes 10 seconds.",
    location: "Ntinda",
  },
  {
    id: "brenda",
    name: "Brenda T.",
    role: "Fitness Coach & Entrepreneur",
    quote:
      "I love the custom bowl lab! Being able to pick my exact proteins, quinoa base, and house dressings makes tracking my macros super easy.",
    location: "Nakasero",
  },
];
