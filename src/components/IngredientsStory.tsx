import { CarrotBunch, CitrusSlice, LeafSprig } from "./Botanical";

const values = [
  {
    title: "Sourced fresh, daily",
    body: "Vegetables and fruit are bought and prepped the same day they go into your bowl — nothing sits around.",
  },
  {
    title: "Built for real meals",
    body: "Grilled protein, roasted plantain, sweetcorn and greens, portioned so a bowl actually holds you over.",
  },
  {
    title: "Priced by the week or month",
    body: "Pick a plan once and stop thinking about lunch — we handle the rest, delivery included.",
  },
];

export function IngredientsStory() {
  return (
    <section id="ingredients" className="bg-herb-white py-14 sm:py-20 lg:py-24 text-charcoal">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 min-w-0">
        <div className="grid gap-10 sm:gap-12 lg:gap-16 md:grid-cols-[1fr_1.1fr] md:items-start min-w-0">
          <div className="min-w-0">
            <p className="font-display text-base sm:text-lg italic text-zest-deep">
              Discover
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl leading-tight break-words">
              The best ingredients, every single bowl
            </h2>
            <p className="mt-6 max-w-md text-sm sm:text-base text-charcoal/70">
              We take pride in sourcing carefully so every bowl tastes as
              fresh as it looks — that care is what a meal plan from Salad
              Treat is actually paying for.
            </p>

            <div className="mt-10 flex flex-wrap items-end gap-4 sm:gap-6 text-zest-deep">
              <CarrotBunch className="h-16 sm:h-20 md:h-24 w-auto shrink-0" />
              <LeafSprig className="h-16 sm:h-20 md:h-24 w-auto text-[#3c5a45] shrink-0" />
              <CitrusSlice className="hidden sm:block h-14 md:h-16 w-auto self-end shrink-0" />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 min-w-0">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-line bg-white/60 p-6 min-w-0"
              >
                <h3 className="font-display text-xl break-words">{v.title}</h3>
                <p className="mt-3 text-sm text-charcoal/70">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
