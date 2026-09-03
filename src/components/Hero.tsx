import Image from "next/image";
import { CherryTomatoes, LeafSprig } from "./Botanical";
import {
  SparklesIcon,
  FireIcon,
  AdjustmentsHorizontalIcon,
  ArrowRightIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-basil text-bone">
      {/* Background Decorative Art */}
      <div className="pointer-events-none absolute -left-6 top-16 hidden h-56 w-32 text-[#3c5a45] opacity-70 md:block md:h-72 md:w-40">
        <LeafSprig className="h-full w-full" />
      </div>
      <div className="pointer-events-none absolute right-6 top-8 h-16 w-24 text-zest/70 md:right-16 md:h-20 md:w-28">
        <CherryTomatoes className="h-full w-full" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-zest/40 bg-zest/10 px-4 py-1.5 text-xs font-semibold text-zest uppercase tracking-wider">
            <SparklesIcon className="h-4 w-4 text-zest" />
            <span>Kampala&rsquo;s Premier Healthy Salad Bar</span>
          </div>

          <h1 className="mt-4 font-display text-5xl leading-[1.08] sm:text-6xl md:text-6xl text-bone">
            Enjoy the taste
            <br />
            <span className="italic text-zest">of eating right</span>
          </h1>

          <p className="mt-6 max-w-lg text-base sm:text-lg text-bone/80 leading-relaxed">
            Fresh, high-protein bowls and flexible weekly or monthly meal subscription plans. Portion-controlled and delivered fresh to your home or office — Monday to Saturday, 8am to 5pm.
          </p>

          {/* Highlights Grid */}
          <div className="mt-8 grid grid-cols-3 gap-3 border-y border-bone/15 py-4 text-xs font-medium text-bone/70">
            <div>
              <p className="font-bold text-bone text-sm text-zest flex items-center gap-1">
                <CheckBadgeIcon className="h-4 w-4" /> 100% Fresh
              </p>
              <p>Same-day prep</p>
            </div>
            <div>
              <p className="font-bold text-bone text-sm text-zest flex items-center gap-1">
                <FireIcon className="h-4 w-4" /> High Protein
              </p>
              <p>Up to 48g per bowl</p>
            </div>
            <div>
              <p className="font-bold text-bone text-sm text-zest flex items-center gap-1">
                <SparklesIcon className="h-4 w-4" /> Fast Delivery
              </p>
              <p>Across Kampala</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#menu"
              className="flex items-center gap-2 rounded-full bg-zest px-8 py-3.5 text-sm font-bold text-basil transition-all transform hover:-translate-y-0.5 hover:bg-zest-deep shadow-lg shadow-zest/20"
            >
              <span>Explore Meal Plans & Menu</span>
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href="#builder"
              className="flex items-center gap-2 rounded-full border border-bone/30 bg-bone/5 px-8 py-3.5 text-sm font-semibold text-bone transition-all hover:border-zest hover:text-zest"
            >
              <AdjustmentsHorizontalIcon className="h-4 w-4" />
              <span>Custom Bowl Builder</span>
            </a>
          </div>
        </div>

        {/* Hero Image Showcase */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-bone/10">
            <Image
              src="/photos/kampala-crunch-bowl.png"
              alt="A Salad Treat signature bowl with grilled chicken, sweet mango, ripe avocado and sweetcorn"
              fill
              sizes="(min-width: 768px) 26rem, 90vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
          </div>

          {/* Floating Badges */}
          <p className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-bone px-6 py-2.5 text-xs font-bold text-basil shadow-xl border border-line flex items-center gap-2">
            <CheckBadgeIcon className="h-4 w-4 text-zest-deep" />
            <span>One Bowl. Endless Goodness.</span>
          </p>

          <div className="absolute top-6 -left-6 hidden sm:flex items-center gap-2.5 rounded-2xl bg-basil-deep/90 backdrop-blur border border-bone/20 p-3 shadow-xl">
            <FireIcon className="h-6 w-6 text-zest" />
            <div>
              <p className="text-[11px] font-bold text-bone">Kampala Crunch</p>
              <p className="text-[10px] text-zest">38g Protein • 540 kcal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
