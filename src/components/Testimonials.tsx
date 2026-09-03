import { StarIcon, MapPinIcon } from "@heroicons/react/24/solid";

export function Testimonials() {
  const reviews = [
    {
      name: "Dr. Sharon K.",
      role: "Medical Resident, Mulago Hospital",
      quote:
        "The Lunch plan is a lifesaver. On long hospital shifts, having a fresh high-protein bowl delivered right at 12:30pm keeps me focused without resorting to junk food.",
      location: "Kololo",
      rating: 5,
    },
    {
      name: "Dennis M.",
      role: "Software Lead, Innovation Village",
      quote:
        "We subscribed our tech team to the full-day package. The portion sizes are honest, greens are crisp, and ordering on WhatsApp takes 10 seconds.",
      location: "Ntinda",
      rating: 5,
    },
    {
      name: "Brenda T.",
      role: "Fitness Coach & Entrepreneur",
      quote:
        "I love the custom bowl lab! Being able to pick my exact proteins, quinoa base, and house dressings makes tracking my macros super easy.",
      location: "Nakasero",
      rating: 5,
    },
  ];

  return (
    <section className="bg-herb-white py-20 text-charcoal border-t border-line">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-display text-lg italic text-zest-deep">
            Loved Across Kampala
          </span>
          <h2 className="mt-2 font-display text-4xl leading-tight md:text-5xl">
            What Our Subscribers Say
          </h2>
          <p className="mt-4 text-charcoal/70 text-sm md:text-base">
            Over 10,000+ healthy bowls delivered to homes and offices across Nakasero, Kololo, Naguru, Ntinda, and beyond.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {reviews.map((rev, i) => (
            <div
              key={i}
              className="flex flex-col justify-between rounded-3xl border border-line bg-white/80 p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex gap-1 text-zest mb-4">
                  {Array.from({ length: rev.rating }).map((_, r) => (
                    <StarIcon key={r} className="h-5 w-5 text-zest" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-charcoal/80 italic">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-line flex items-center justify-between">
                <div>
                  <p className="font-display font-semibold text-base text-charcoal">
                    {rev.name}
                  </p>
                  <p className="text-xs text-charcoal/50">{rev.role}</p>
                </div>
                <span className="flex items-center gap-1 rounded-full bg-bone px-3 py-1 text-[11px] font-medium text-basil border border-line">
                  <MapPinIcon className="h-3.5 w-3.5 text-zest-deep" />
                  <span>{rev.location}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
