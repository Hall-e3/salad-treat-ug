"use client";

import Image from "next/image";
import { useState } from "react";
import { formatUGX, type MenuItem, type Duration } from "@/lib/menu-data";
import { useCart } from "@/lib/cart";
import { Button, AppText, Chip } from "@/components/ui";
import { InformationCircleIcon, PlusIcon, StarIcon } from "@heroicons/react/24/solid";
import { BoltIcon, FireIcon } from "@heroicons/react/24/outline";

interface MealPlanCardProps {
  item: MenuItem;
  onOpenModal: () => void;
}

export default function MealPlanCard({ item, onOpenModal }: MealPlanCardProps) {
  const [duration, setDuration] = useState<Duration>("weekly");
  const { addLine } = useCart();

  const isPlan = item.category === "plans";
  const price = isPlan
    ? duration === "weekly"
      ? item.weeklyPrice
      : item.monthlyPrice
    : item.price;

  const handleAdd = () => {
    addLine({
      type: "plan",
      itemKey: item.id,
      name: item.name,
      duration,
      unitPrice: price,
      image: item.image,
      details: item.tagline,
    });
  };

  return (
    <div
      className={`group flex flex-col justify-between rounded-3xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl w-full max-w-full min-w-0 ${
        item.featured
          ? "border-zest/70 bg-[#1c3022] shadow-xl"
          : "border-bone/15 bg-[#17291d]"
      }`}
    >
      <div className="w-full min-w-0">
        {/* Card Header Image */}
        <div
          className="relative h-48 w-full overflow-hidden bg-basil-deep cursor-pointer"
          onClick={onOpenModal}
        >
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17291d] via-transparent to-transparent" />

          {/* Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <Chip label="Subscription Plan" variant="overlay" />
            {item.featured && (
              <span className="rounded-full bg-zest px-3 py-1 text-[10px] font-extrabold text-basil shadow-md flex items-center gap-1 shrink-0">
                <StarIcon className="h-3 w-3 text-basil" />
                <span>FEATURED</span>
              </span>
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6 w-full min-w-0">
          <AppText
            as="h3"
            variant="heading-lg"
            color="inverse"
            className="cursor-pointer hover:text-zest transition-colors font-display break-words"
            onClick={onOpenModal}
          >
            {item.name}
          </AppText>
          <AppText variant="body-sm" color="inverse" className="mt-2 opacity-60 leading-relaxed line-clamp-2">
            {item.tagline}
          </AppText>

          {/* Duration Selector */}
          <div className="mt-5 inline-flex w-fit max-w-full rounded-full border border-bone/20 p-1 text-xs bg-[#0e1c13]">
            {(["weekly", "monthly"] as Duration[]).map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setDuration(d)}
                className={`rounded-full px-3 py-1 capitalize transition-colors cursor-pointer ${
                  duration === d
                    ? "bg-zest text-basil font-bold"
                    : "text-bone/70 hover:text-bone"
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          {/* Nutritional Tags */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {item.protein && (
              <span className="rounded-md bg-zest/10 px-2 py-0.5 text-[10px] font-bold text-zest flex items-center gap-1">
                <BoltIcon className="h-3 w-3 text-zest" />
                <span>{item.protein} Protein</span>
              </span>
            )}
            {item.calories && (
              <span className="rounded-md bg-bone/10 px-2 py-0.5 text-[10px] text-bone/70 flex items-center gap-1">
                <FireIcon className="h-3 w-3 text-bone/60" />
                <span>{item.calories}</span>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-5 sm:p-6 pt-0 border-t border-bone/10 mt-4 flex items-center justify-between gap-2 sm:gap-3 flex-wrap sm:flex-nowrap">
        <div className="min-w-0">
          <AppText variant="caption" color="inverse" className="opacity-50 uppercase block">
            Price
          </AppText>
          <AppText variant="heading-lg" color="zest" className="font-display truncate">
            UGX {formatUGX(price)}
            <span className="ml-1 text-xs font-normal text-bone/50">
              /{duration === "weekly" ? "wk" : "mo"}
            </span>
          </AppText>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenModal}
            className="rounded-full border border-bone/20 p-2.5 text-xs text-bone/70 hover:border-zest hover:text-zest transition-colors cursor-pointer"
            title="View Details & Specs"
          >
            <InformationCircleIcon className="h-5 w-5 text-bone/70 hover:text-zest" />
          </button>
          <Button
            text="Add"
            variant="filled"
            size="sm"
            onClick={handleAdd}
            leftIcon={<PlusIcon className="h-4 w-4 text-basil" />}
          />
        </div>
      </div>
    </div>
  );
}
