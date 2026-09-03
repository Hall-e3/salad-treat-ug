"use client";

import Image from "next/image";
import { useState } from "react";
import { formatUGX, type MenuItem, type Duration } from "@/lib/menu-data";
import { useCart } from "@/lib/cart";
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
      <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl bg-herb-white text-charcoal shadow-2xl border border-line animate-fadeIn">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-basil/10 text-charcoal hover:bg-basil hover:text-bone transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Image & Badges */}
          <div className="relative h-64 md:h-full min-h-[260px] bg-basil">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-basil-deep/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <Chip key={tag} label={tag} variant="overlay" />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between p-6 sm:p-8">
            <div>
              <AppText variant="label-sm" color="zest" transform="uppercase" className="font-bold tracking-wider">
                {isPlan ? "Subscription Plan" : "Signature Bowl"}
              </AppText>
              <AppText variant="display-sm" color="primary" className="mt-1 font-display">
                {item.name}
              </AppText>
              <AppText variant="body-sm" color="secondary" className="mt-2 italic">
                {item.tagline}
              </AppText>
              <AppText variant="body-sm" color="primary" className="mt-4 leading-relaxed opacity-85">
                {item.description}
              </AppText>

              {/* Nutrition Macros */}
              {(item.calories || item.protein) && (
                <div className="mt-5 grid grid-cols-4 gap-2 rounded-2xl bg-white p-3 border border-line text-center">
                  <div>
                    <AppText variant="caption" color="secondary" transform="uppercase">Calories</AppText>
                    <AppText variant="label-md" className="font-bold">{item.calories || "N/A"}</AppText>
                  </div>
                  <div>
                    <AppText variant="caption" color="secondary" transform="uppercase">Protein</AppText>
                    <AppText variant="label-md" color="zest" className="font-bold">{item.protein || "N/A"}</AppText>
                  </div>
                  <div>
                    <AppText variant="caption" color="secondary" transform="uppercase">Carbs</AppText>
                    <AppText variant="label-md" className="font-bold">{item.carbs || "N/A"}</AppText>
                  </div>
                  <div>
                    <AppText variant="caption" color="secondary" transform="uppercase">Fats</AppText>
                    <AppText variant="label-md" className="font-bold">{item.fat || "N/A"}</AppText>
                  </div>
                </div>
              )}

              {/* Key Ingredients */}
              <div className="mt-5">
                <AppText variant="label-sm" color="secondary" transform="uppercase" className="font-bold">
                  Key Ingredients:
                </AppText>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {item.ingredients.map((ing) => (
                    <li
                      key={ing}
                      className="flex items-center gap-1 rounded-lg bg-bone px-2.5 py-1 text-xs text-charcoal/80 border border-line"
                    >
                      <CheckCircleIcon className="h-3 w-3 text-zest-deep" />
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Price & Add Controls */}
            <div className="mt-6 pt-5 border-t border-line">
              {isPlan && (
                <div className="mb-4 flex items-center justify-between">
                  <AppText variant="label-md" color="secondary">Plan Duration:</AppText>
                  <div className="inline-flex rounded-full border border-line p-1 bg-white">
                    {(["weekly", "monthly"] as Duration[]).map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setDuration(d)}
                        className={`rounded-full px-3 py-1 text-xs capitalize transition-colors cursor-pointer ${
                          duration === d
                            ? "bg-zest text-basil font-bold"
                            : "text-charcoal/70 hover:text-charcoal"
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between gap-4">
                <div>
                  <AppText variant="caption" color="secondary">Total Price</AppText>
                  <AppText variant="heading-lg" color="basil" className="font-bold font-display">
                    UGX {formatUGX(unitPrice * qty)}
                  </AppText>
                </div>

                <div className="flex items-center gap-3">
                  <QuantityStepper value={qty} onChange={setQty} min={1} />
                  <Button
                    text="Add to Cart"
                    variant="filled"
                    size="md"
                    onClick={handleAdd}
                    leftIcon={<ShoppingBagIcon className="h-4 w-4 text-basil" />}
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
