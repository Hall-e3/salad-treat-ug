"use client";

import Image from "next/image";
import { useState } from "react";
import { formatUGX, type MenuItem, type Duration } from "@/lib/menu-data";
import { useCart } from "@/lib/cart";
import {
  XMarkIcon,
  PlusIcon,
  MinusIcon,
  ShoppingBagIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

export function ItemModal({
  item,
  onClose,
}: {
  item: MenuItem | null;
  onClose: () => void;
}) {
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
      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-herb-white text-charcoal shadow-2xl border border-line animate-fadeIn min-w-0">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-basil/10 text-charcoal hover:bg-basil hover:text-bone transition-colors cursor-pointer shrink-0"
          aria-label="Close modal"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>

        <div className="grid md:grid-cols-2 min-w-0">
          {/* Image & Badges */}
          <div className="relative h-52 sm:h-64 md:h-full min-h-[220px] bg-basil">
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
                <span
                  key={tag}
                  className="rounded-full bg-zest px-3 py-1 text-xs font-semibold text-basil shadow-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between p-5 sm:p-8 min-w-0">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-zest-deep">
                {isPlan ? "Subscription Plan" : "Signature Bowl"}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl mt-1 text-charcoal break-words">
                {item.name}
              </h3>
              <p className="mt-2 text-sm italic text-charcoal/70">
                {item.tagline}
              </p>
              <p className="mt-4 text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                {item.description}
              </p>

              {/* Nutrition Macros */}
              {(item.calories || item.protein) && (
                <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2 rounded-2xl bg-white p-3 border border-line text-center">
                  <div>
                    <p className="text-[10px] text-charcoal/50 uppercase">Calories</p>
                    <p className="text-xs font-bold text-charcoal">{item.calories || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-charcoal/50 uppercase">Protein</p>
                    <p className="text-xs font-bold text-zest-deep">{item.protein || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-charcoal/50 uppercase">Carbs</p>
                    <p className="text-xs font-bold text-charcoal">{item.carbs || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-charcoal/50 uppercase">Fats</p>
                    <p className="text-xs font-bold text-charcoal">{item.fat || "N/A"}</p>
                  </div>
                </div>
              )}

              {/* Ingredients List */}
              <div className="mt-5">
                <p className="text-xs font-bold uppercase tracking-wider text-charcoal/60">
                  Key Ingredients:
                </p>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {item.ingredients.map((ing) => (
                    <li
                      key={ing}
                      className="flex items-center gap-1 rounded-lg bg-bone px-2.5 py-1 text-xs text-charcoal/80 border border-line"
                    >
                      <CheckCircleIcon className="h-3 w-3 text-zest-deep shrink-0" />
                      <span className="truncate">{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Price & Add Controls */}
            <div className="mt-6 pt-5 border-t border-line">
              {isPlan && (
                <div className="mb-4 flex items-center justify-between gap-2">
                  <span className="text-xs font-medium text-charcoal/70 shrink-0">
                    Plan Duration:
                  </span>
                  <div className="inline-flex rounded-full border border-line p-1 bg-white shrink-0">
                    {(["weekly", "monthly"] as Duration[]).map((d) => (
                      <button
                        key={d}
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

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-charcoal/50">Total Price</p>
                  <p className="font-display text-2xl text-basil font-bold">
                    UGX {formatUGX(unitPrice * qty)}
                  </p>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                  <div className="flex items-center rounded-full border border-line bg-white p-1 shrink-0">
                    <button
                      onClick={() => setQty(Math.max(1, qty - 1))}
                      className="flex h-7 w-7 items-center justify-center rounded-full text-charcoal/70 hover:bg-bone cursor-pointer"
                    >
                      <MinusIcon className="h-4 w-4" />
                    </button>
                    <span className="w-6 text-center text-xs font-bold">
                      {qty}
                    </span>
                    <button
                      onClick={() => setQty(qty + 1)}
                      className="flex h-7 w-7 items-center justify-center rounded-full text-charcoal/70 hover:bg-bone cursor-pointer"
                    >
                      <PlusIcon className="h-4 w-4" />
                    </button>
                  </div>

                  <button
                    onClick={handleAdd}
                    className="flex items-center gap-1.5 rounded-full bg-zest px-5 py-3 text-xs font-bold text-basil transition-transform hover:-translate-y-0.5 shadow-md cursor-pointer shrink-0"
                  >
                    <ShoppingBagIcon className="h-4 w-4 text-basil shrink-0" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
