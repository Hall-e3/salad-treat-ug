import { MapPinIcon } from "@heroicons/react/24/solid";
import { testimonialsData } from "@/data/testimonials";

export function Testimonials() {
  const reviews = testimonialsData;

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
