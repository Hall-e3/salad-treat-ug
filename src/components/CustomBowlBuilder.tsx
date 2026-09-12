"use client";

import { useCallback } from "react";
import { customOptions, formatUGX, type CustomIngredient } from "@/lib/menu-data";
import { useCart } from "@/lib/cart";
import { usePersistedState } from "@/lib/usePersistedState";
import {
  BeakerIcon,
  CheckCircleIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

const bases = customOptions.filter((o) => o.category === "base");
const proteins = customOptions.filter((o) => o.category === "protein");
const toppings = customOptions.filter((o) => o.category === "topping");
const dressings = customOptions.filter((o) => o.category === "dressing");

const defaultDraft = {
  baseId: bases[0].id,
  proteinId: proteins[0].id,
  toppingIds: ["t1", "t2"] as string[],
  dressingId: dressings[0].id,
  customName: "",
};

export function CustomBowlBuilder() {
  const { addLine } = useCart();

  // Persisted so a mid-build selection survives the WhatsApp app-switch on
  // mobile, which can get the tab killed and reloaded on return.
  const [draft, setDraft] = usePersistedState(
    "salad-treat-custom-bowl-draft-v1",
    defaultDraft
  );

  const selectedBase = bases.find((b) => b.id === draft.baseId) ?? bases[0];
  const selectedProtein =
    proteins.find((p) => p.id === draft.proteinId) ?? proteins[0];
  const selectedToppings = draft.toppingIds
    .map((id) => toppings.find((t) => t.id === id))
    .filter((t): t is CustomIngredient => Boolean(t));
  const selectedDressing =
    dressings.find((d) => d.id === draft.dressingId) ?? dressings[0];
  const customName = draft.customName;

  const setSelectedBase = (base: CustomIngredient) =>
    setDraft((d) => ({ ...d, baseId: base.id }));
  const setSelectedProtein = (protein: CustomIngredient) =>
    setDraft((d) => ({ ...d, proteinId: protein.id }));
  const setSelectedDressing = (dressing: CustomIngredient) =>
    setDraft((d) => ({ ...d, dressingId: dressing.id }));
  const setCustomName = (value: string) =>
    setDraft((d) => ({ ...d, customName: value }));

  const toggleTopping = (topping: CustomIngredient) => {
    setDraft((d) => {
      if (d.toppingIds.includes(topping.id)) {
        return { ...d, toppingIds: d.toppingIds.filter((id) => id !== topping.id) };
      }
      if (d.toppingIds.length >= 4) return d; // max 4 toppings
      return { ...d, toppingIds: [...d.toppingIds, topping.id] };
    });
  };

  const totalPrice =
    selectedBase.price +
    selectedProtein.price +
    selectedToppings.reduce((sum, t) => sum + t.price, 0) +
    selectedDressing.price;

  const handleAddToCart = () => {
    const bowlTitle = customName.trim() || "My Custom Bowl";
    const details = `${selectedBase.name}, ${selectedProtein.name}, ${selectedToppings
      .map((t) => t.name)
      .join(", ")}, Dressing: ${selectedDressing.name}`;

    addLine({
      type: "custom",
      itemKey: `custom-${Date.now()}`,
      name: bowlTitle,
      unitPrice: totalPrice,
      details,
      image: "/photos/kampala-crunch-bowl.png",
    });
  };

  return (
    <div className="rounded-3xl border border-bone/20 bg-[#16271c] p-4 sm:p-6 md:p-10 shadow-2xl text-bone w-full max-w-full min-w-0">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-bone/15 pb-6">
        <div className="min-w-0 max-w-full">
          <span className="inline-flex max-w-full items-center gap-1.5 rounded-full bg-zest/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-zest">
            <BeakerIcon className="h-4 w-4 text-zest shrink-0" />
            <span className="truncate">Interactive Salad Lab</span>
          </span>
          <h3 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl text-bone break-words">
            Build Your Own Salad Bowl
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-bone/70">
            Pick your base greens, premium protein, up to 4 toppings & signature dressing.
          </p>
        </div>
        <div className="text-left md:text-right bg-[#0f1b13] px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl border border-bone/10 shrink-0">
          <p className="text-[10px] sm:text-xs text-bone/60 uppercase tracking-wider">Bowl Subtotal</p>
          <p className="font-display text-2xl sm:text-3xl text-zest">
            UGX {formatUGX(totalPrice)}
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 sm:gap-8 md:grid-cols-2 min-w-0">
        {/* Step 1: Base */}
        <div className="min-w-0">
          <label className="text-xs font-bold uppercase tracking-wider text-zest block">
            1. Select Your Base Greens / Grains
          </label>
          <div className="mt-3 space-y-2.5">
            {bases.map((base) => (
              <button
                key={base.id}
                type="button"
                onClick={() => setSelectedBase(base)}
                className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left text-xs sm:text-sm transition-all cursor-pointer min-w-0 ${
                  selectedBase.id === base.id
                    ? "border-zest bg-zest/10 font-semibold text-bone"
                    : "border-bone/15 bg-bone/5 text-bone/70 hover:border-bone/30"
                }`}
              >
                <span className="flex items-center gap-2 truncate pr-2">
                  {selectedBase.id === base.id && (
                    <CheckCircleIcon className="h-4 w-4 text-zest shrink-0" />
                  )}
                  <span className="truncate">{base.name}</span>
                </span>
                <span className="text-xs text-zest shrink-0">UGX {formatUGX(base.price)}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Protein */}
        <div className="min-w-0">
          <label className="text-xs font-bold uppercase tracking-wider text-zest block">
            2. Select Your Prime Protein
          </label>
          <div className="mt-3 space-y-2.5">
            {proteins.map((protein) => (
              <button
                key={protein.id}
                type="button"
                onClick={() => setSelectedProtein(protein)}
                className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left text-xs sm:text-sm transition-all cursor-pointer min-w-0 ${
                  selectedProtein.id === protein.id
                    ? "border-zest bg-zest/10 font-semibold text-bone"
                    : "border-bone/15 bg-bone/5 text-bone/70 hover:border-bone/30"
                }`}
              >
                <span className="flex items-center gap-2 truncate pr-2">
                  {selectedProtein.id === protein.id && (
                    <CheckCircleIcon className="h-4 w-4 text-zest shrink-0" />
                  )}
                  <span className="truncate">{protein.name}</span>
                </span>
                <span className="text-xs text-zest shrink-0">UGX {formatUGX(protein.price)}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Toppings */}
        <div className="min-w-0">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold uppercase tracking-wider text-zest block">
              3. Fresh Toppings (Pick up to 4)
            </label>
            <span className="text-xs text-bone/50 shrink-0">
              {selectedToppings.length}/4 selected
            </span>
          </div>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {toppings.map((topping) => {
              const isSelected = selectedToppings.some((t) => t.id === topping.id);
              return (
                <button
                  key={topping.id}
                  type="button"
                  onClick={() => toggleTopping(topping)}
                  className={`flex items-center justify-between p-3 rounded-xl border text-left text-xs transition-all cursor-pointer min-w-0 ${
                    isSelected
                      ? "border-zest bg-zest/15 text-bone font-medium"
                      : "border-bone/15 bg-bone/5 text-bone/70 hover:border-bone/30"
                  }`}
                >
                  <span className="flex items-center gap-1.5 truncate pr-1">
                    {isSelected && <CheckCircleIcon className="h-3.5 w-3.5 text-zest shrink-0" />}
                    <span className="truncate">{topping.name}</span>
                  </span>
                  <span className="text-[11px] text-zest shrink-0">
                    +{formatUGX(topping.price)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 4: Dressing */}
        <div className="min-w-0">
          <label className="text-xs font-bold uppercase tracking-wider text-zest block">
            4. House Dressing
          </label>
          <div className="mt-3 space-y-2.5">
            {dressings.map((dressing) => (
              <button
                key={dressing.id}
                type="button"
                onClick={() => setSelectedDressing(dressing)}
                className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left text-xs sm:text-sm transition-all cursor-pointer min-w-0 ${
                  selectedDressing.id === dressing.id
                    ? "border-zest bg-zest/10 font-semibold text-bone"
                    : "border-bone/15 bg-bone/5 text-bone/70 hover:border-bone/30"
                }`}
              >
                <span className="flex items-center gap-2 truncate pr-2">
                  {selectedDressing.id === dressing.id && (
                    <CheckCircleIcon className="h-4 w-4 text-zest shrink-0" />
                  )}
                  <span className="truncate">{dressing.name}</span>
                </span>
                <span className="text-xs text-zest shrink-0">UGX {formatUGX(dressing.price)}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Summary Box & Add Button */}
      <div className="mt-8 pt-6 border-t border-bone/15 flex flex-col md:flex-row items-center justify-between gap-6 min-w-0">
        <div className="w-full md:w-auto flex-1 min-w-0">
          <input
            type="text"
            placeholder="Name your creation (e.g., Sarah's Power Salad)"
            value={customName}
            onChange={(e) => setCustomName(e.target.value)}
            className="w-full rounded-xl border border-bone/20 bg-[#0c1610] px-4 py-3 text-xs sm:text-sm text-bone placeholder-bone/40 outline-none focus:border-zest"
          />
          <p className="mt-2 text-xs text-bone/60 break-words">
            <span className="text-zest font-medium">Selected:</span> {selectedBase.name},{" "}
            {selectedProtein.name},{" "}
            {selectedToppings.map((t) => t.name).join(", ") || "No toppings"},{" "}
            Dressing: {selectedDressing.name}
          </p>
        </div>

        <button
          type="button"
          onClick={handleAddToCart}
          className="w-full md:w-auto flex items-center justify-center gap-2 rounded-full bg-zest px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold text-basil transition-all transform hover:-translate-y-0.5 hover:bg-zest-deep hover:shadow-lg hover:shadow-zest/20 cursor-pointer shrink-0"
        >
          <PlusIcon className="h-5 w-5 text-basil shrink-0" />
          <span className="truncate">Add Custom Bowl (UGX {formatUGX(totalPrice)})</span>
        </button>
      </div>
    </div>
  );
}
