import Image from "next/image";
import { LeafSprig, CherryTomatoes } from "@/components/Botanical";
import { Button, AppText } from "@/components/ui";
import {
  SparklesIcon,
  FireIcon,
  AdjustmentsHorizontalIcon,
  ArrowRightIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-basil text-bone">
      {/* Background Video Player (Supports /videos/hero.mp4 or /videos/salad-prep.mp4) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-overlay"
        poster="/photos/delivery-rider.png"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        <source src="/videos/salad-prep.mp4" type="video/mp4" />
      </video>

      {/* Background Decorative Art */}
      <div className="pointer-events-none absolute -left-6 top-16 hidden h-56 w-32 text-[#3c5a45] opacity-70 md:block md:h-72 md:w-40">
        <LeafSprig className="h-full w-full" />
      </div>
      <div className="pointer-events-none absolute right-6 top-8 h-16 w-24 text-zest/70 md:right-16 md:h-20 md:w-28">
        <CherryTomatoes className="h-full w-full" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 lg:gap-12 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:grid-cols-2 md:items-center md:py-24">
        <div className="min-w-0 max-w-full">
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-zest/40 bg-zest/10 px-3.5 py-1.5 text-[11px] sm:text-xs font-semibold text-zest uppercase tracking-wider">
            <SparklesIcon className="h-4 w-4 text-zest shrink-0" />
            <span className="truncate">Kampala&rsquo;s Premier Healthy Salad Bar</span>
          </div>

          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-bone break-words">
            Enjoy the taste
            <br />
            <span className="italic text-zest">of eating right</span>
          </h1>

          <AppText variant="body-lg" color="inverse" className="mt-6 max-w-lg opacity-80 leading-relaxed">
            Fresh, high-protein bowls and flexible weekly or monthly meal subscription plans. Portion-controlled and delivered fresh to your home or office — Monday to Saturday, 8am to 5pm.
          </AppText>

          {/* Highlights Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 border-y border-bone/15 py-4 text-xs font-medium text-bone/70">
            <div className="flex sm:block items-center justify-between">
              <p className="font-bold text-bone text-sm text-zest flex items-center gap-1">
                <CheckBadgeIcon className="h-4 w-4 shrink-0" /> 100% Fresh
              </p>
              <p>Same-day prep</p>
            </div>
            <div className="flex sm:block items-center justify-between">
              <p className="font-bold text-bone text-sm text-zest flex items-center gap-1">
                <FireIcon className="h-4 w-4 shrink-0" /> High Protein
              </p>
              <p>Up to 48g per bowl</p>
            </div>
            <div className="flex sm:block items-center justify-between">
              <p className="font-bold text-bone text-sm text-zest flex items-center gap-1">
                <SparklesIcon className="h-4 w-4 shrink-0" /> Fast Delivery
              </p>
              <p>Across Kampala</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#menu" className="cursor-pointer">
              <Button
                text="Explore Meal Plans & Menu"
                variant="filled"
                size="lg"
                rightIcon={<ArrowRightIcon className="h-4 w-4" />}
              />
            </a>
            <a href="#builder" className="cursor-pointer">
              <Button
                text="Custom Bowl Builder"
                variant="dark"
                size="lg"
                leftIcon={<AdjustmentsHorizontalIcon className="h-4 w-4 text-bone" />}
              />
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
