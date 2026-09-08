"use client";

import Image from "next/image";
import { useState } from "react";
import { formatUGX, type MenuItem, type Duration } from "@/lib/menu-data";
import { useCart } from "@/lib/cart";
import { useLockBodyScroll } from "@/lib/useLockBodyScroll";
import { AppText, Button, Chip, QuantityStepper } from "@/components/ui";
import { XMarkIcon, ShoppingBagIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

interface ProductDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export default function ProductDetailModal({ item, onClose }: ProductDetailModalProps) {
  const { addLine } = useCart();
  const [duration, setDuration] = useState<Duration>("weekly");
  const [qty, setQty] = useState(1);

  useLockBodyScroll(Boolean(item));

  if (!item) return null;

  const isPlan = item.category === "plans";
  const unitPrice = isPlan
    ? duration === "weekly"
      ? item.weeklyPrice
      : item.monthlyPrice
    : item.price;

  const handleAdd = () => {
    if (isPlan) {
      addLine(
        {
          type: "plan",
          itemKey: item.id,
          name: item.name,
          duration,
          unitPrice,
          image: item.image,
          details: item.tagline,
        },
        qty
      );
    } else {
      addLine(
        {
          type: "bowl",
          itemKey: item.id,
          name: item.name,
          unitPrice,
          image: item.image,
          details: item.tagline,
        },
        qty
      );
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-basil-deep/80 backdrop-blur-sm transition-opacity cursor-pointer"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-herb-white text-charcoal shadow-2xl border border-line animate-fadeIn min-w-0">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-basil/10 text-charcoal hover:bg-basil hover:text-bone transition-colors cursor-pointer shrink-0 shadow-md"
          aria-label="Close modal"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-[1.1fr,1.4fr] min-w-0">
          {/* Image & Badges */}
          <div className="relative h-64 md:h-full min-h-[260px] md:min-h-[420px] bg-basil">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 45vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-basil-deep/80 via-transparent to-transparent md:hidden" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <Chip key={tag} label={tag} variant="overlay" />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between p-6 sm:p-8 md:p-10 min-w-0">
            <div>
              <AppText variant="label-sm" color="zest" transform="uppercase" className="font-bold tracking-wider">
                {isPlan ? "Subscription Plan" : "Signature Bowl"}
              </AppText>
              <h2 className="mt-1 font-display text-2xl sm:text-3xl lg:text-4xl text-charcoal leading-tight break-words">
                {item.name}
              </h2>
              <AppText variant="body-sm" color="secondary" className="mt-2 italic">
                {item.tagline}
              </AppText>
              <AppText variant="body-sm" color="primary" className="mt-4 leading-relaxed opacity-85">
                {item.description}
              </AppText>

              {/* Nutrition Macros */}
              {(item.calories || item.protein) && (
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2 rounded-2xl bg-white p-3.5 border border-line text-center shadow-sm">
                  <div className="p-1">
                    <AppText variant="caption" color="secondary" transform="uppercase" className="text-[10px]">Calories</AppText>
                    <p className="text-xs sm:text-sm font-bold text-charcoal truncate">{item.calories || "N/A"}</p>
                  </div>
                  <div className="p-1">
                    <AppText variant="caption" color="secondary" transform="uppercase" className="text-[10px]">Protein</AppText>
                    <p className="text-xs sm:text-sm font-bold text-zest-deep truncate">{item.protein || "N/A"}</p>
                  </div>
                  <div className="p-1">
                    <AppText variant="caption" color="secondary" transform="uppercase" className="text-[10px]">Carbs</AppText>
                    <p className="text-xs sm:text-sm font-bold text-charcoal truncate">{item.carbs || "N/A"}</p>
                  </div>
                  <div className="p-1">
                    <AppText variant="caption" color="secondary" transform="uppercase" className="text-[10px]">Fats</AppText>
                    <p className="text-xs sm:text-sm font-bold text-charcoal truncate">{item.fat || "N/A"}</p>
                  </div>
                </div>
              )}

              {/* Key Ingredients */}
              <div className="mt-6">
                <AppText variant="label-sm" color="secondary" transform="uppercase" className="font-bold tracking-wider text-[11px]">
                  Key Ingredients:
                </AppText>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {item.ingredients.map((ing) => (
                    <li
                      key={ing}
                      className="flex items-center gap-1.5 rounded-lg bg-bone/80 px-3 py-1.5 text-xs text-charcoal border border-line"
                    >
                      <CheckCircleIcon className="h-4 w-4 text-zest-deep shrink-0" />
                      <span className="truncate">{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Price & Add Controls */}
            <div className="mt-8 pt-6 border-t border-line">
              {isPlan && (
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <AppText variant="label-md" color="secondary" className="shrink-0 font-bold">Plan Duration:</AppText>
                  <div className="inline-flex rounded-full border border-line p-1 bg-white shrink-0 shadow-sm">
                    {(["weekly", "monthly"] as Duration[]).map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setDuration(d)}
                        className={`rounded-full px-4 py-1.5 text-xs font-bold capitalize transition-all cursor-pointer ${
                          duration === d
                            ? "bg-zest text-basil shadow"
                            : "text-charcoal/70 hover:text-charcoal"
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="shrink-0 min-w-[140px]">
                  <AppText variant="caption" color="secondary" className="uppercase font-semibold tracking-wider text-[10px]">Total Price</AppText>
                  <p className="font-display text-2xl sm:text-3xl text-basil font-bold whitespace-nowrap">
                    UGX {formatUGX(unitPrice * qty)}
                  </p>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end shrink-0">
                  <QuantityStepper value={qty} onChange={setQty} min={1} />
                  <Button
                    text="Add to Cart"
                    variant="filled"
                    size="lg"
                    onClick={handleAdd}
                    leftIcon={<ShoppingBagIcon className="h-5 w-5 text-basil" />}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
