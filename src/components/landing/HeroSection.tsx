"use client";

import { CherryTomatoes } from "@/components/Botanical";
import { Button, AppText } from "@/components/ui";
import {
  SparklesIcon,
  FireIcon,
  AdjustmentsHorizontalIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
import HeroVideoSlideshow from "./HeroVideoSlideshow";
import HeroImageSlideshow from "./HeroImageSlideshow";

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-basil text-bone">
      {/* Background Video Slideshow Player */}
      <HeroVideoSlideshow />

      {/* Background Decorative Art */}
      <div className="pointer-events-none absolute right-6 top-8 h-16 w-24 text-zest/70 md:right-16 md:h-20 md:w-28">
        <CherryTomatoes className="h-full w-full" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 lg:gap-12 px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24 md:grid-cols-2 md:items-center">
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

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <a href="#menu" className="cursor-pointer w-full sm:w-auto">
              <Button
                text="Explore Meal Plans & Menu"
                variant="filled"
                size="lg"
                noTruncate
                className="w-full sm:w-auto justify-center"
              />
            </a>
            <a href="#builder" className="cursor-pointer w-full sm:w-auto">
              <Button
                text="Custom Bowl Builder"
                variant="dark"
                size="lg"
                noTruncate
                leftIcon={<AdjustmentsHorizontalIcon className="h-4 w-4 text-bone" />}
                className="w-full sm:w-auto justify-center"
              />
            </a>
          </div>
        </div>

        {/* Hero Image Showcase */}
        <HeroImageSlideshow />
      </div>
    </section>
  );
}
