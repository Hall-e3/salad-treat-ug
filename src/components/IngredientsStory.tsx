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
    <section id="ingredients" className="bg-herb-white py-24 text-charcoal">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-[1fr_1.1fr] md:items-start">
          <div>
            <p className="font-display text-lg italic text-zest-deep">
              Discover
            </p>
            <h2 className="mt-2 font-display text-4xl leading-tight md:text-5xl">
              The best ingredients, every single bowl
            </h2>
            <p className="mt-6 max-w-md text-charcoal/70">
              We take pride in sourcing carefully so every bowl tastes as
              fresh as it looks — that care is what a meal plan from Salad
              Treat is actually paying for.
            </p>

            <div className="mt-10 flex gap-6 text-zest-deep">
              <CarrotBunch className="h-24 w-auto" />
              <LeafSprig className="h-24 w-auto text-[#3c5a45]" />
              <CitrusSlice className="h-16 w-auto self-end" />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-line bg-white/60 p-6"
              >
                <h3 className="font-display text-xl">{v.title}</h3>
                <p className="mt-3 text-sm text-charcoal/70">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
