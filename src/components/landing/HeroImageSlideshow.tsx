"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { signatureBowls } from "@/lib/menu-data";
import { CheckBadgeIcon, FireIcon } from "@heroicons/react/24/outline";

const slides = signatureBowls.map((bowl) => ({
  id: bowl.id,
  name: bowl.name,
  image: bowl.image,
  protein: bowl.protein,
  calories: bowl.calories,
}));

export default function HeroImageSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const current = slides[index];

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-bone/10">
        {slides.map((slide, i) => (
          <Image
            key={slide.id}
            src={slide.image}
            alt={`Salad Treat ${slide.name} bowl`}
            fill
            sizes="(min-width: 768px) 26rem, 90vw"
            className={`object-cover transition-opacity duration-1000 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            priority={i === 0}
          />
        ))}

        {/* Slide Progress Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show ${slide.name}`}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                i === index ? "w-6 bg-zest" : "w-1.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating Badges */}
      <p className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-bone px-6 py-2.5 text-xs font-bold text-basil shadow-xl border border-line flex items-center gap-2">
        <CheckBadgeIcon className="h-4 w-4 text-zest-deep" />
        <span>One Bowl. Endless Goodness.</span>
      </p>

      <div className="absolute top-6 -left-6 hidden sm:flex items-center gap-2.5 rounded-2xl bg-basil-deep/90 backdrop-blur border border-bone/20 p-3 shadow-xl max-w-[13rem] min-w-0">
        <FireIcon className="h-6 w-6 text-zest shrink-0" />
        <div className="min-w-0">
          <p className="text-[11px] font-bold text-bone truncate">{current.name}</p>
          <p className="text-[10px] text-zest truncate">
            {current.protein} Protein • {current.calories}
          </p>
        </div>
      </div>
    </div>
  );
}
