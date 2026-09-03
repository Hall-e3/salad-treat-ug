"use client";

import Image from "next/image";
import { useState } from "react";
import {
  mealPlans,
  signatureBowls,
  formatUGX,
  type Duration,
  type Category,
  type MenuItem,
} from "@/lib/menu-data";
import { useCart } from "@/lib/cart";
import { ItemModal } from "./ItemModal";
import { CustomBowlBuilder } from "./CustomBowlBuilder";
import {
  MagnifyingGlassIcon,
  InformationCircleIcon,
  PlusIcon,
  FireIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as StarSolidIcon } from "@heroicons/react/24/solid";

export function MealPlans() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedModalItem, setSelectedModalItem] = useState<MenuItem | null>(null);

  const categories: { id: Category; label: string }[] = [
    { id: "all", label: "All Offerings" },
    { id: "plans", label: "Meal Subscription Plans" },
    { id: "bowls", label: "Signature Salad Bowls" },
    { id: "custom", label: "Custom Bowl Builder" },
  ];

  const allItems: MenuItem[] = [...mealPlans, ...signatureBowls];

  const filteredItems = allItems.filter((item) => {
    if (activeCategory !== "all" && activeCategory !== "custom" && item.category !== activeCategory) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = item.name.toLowerCase().includes(q);
      const matchTagline = item.tagline.toLowerCase().includes(q);
      const matchIng = item.ingredients.some((ing) => ing.toLowerCase().includes(q));
      return matchName || matchTagline || matchIng;
    }
    return true;
  });

  return (
    <>
      <section id="menu" className="bg-basil py-24 text-bone">
        <div className="mx-auto max-w-6xl px-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-xl">
              <span className="font-display text-lg italic text-zest">
                Fresh & Nourishing
              </span>
              <h2 className="mt-2 font-display text-4xl leading-tight md:text-5xl text-bone">
                Explore Our Menu & Plans
              </h2>
              <p className="mt-4 text-bone/75 text-sm md:text-base leading-relaxed">
                Choose weekly if you&rsquo;re trying us out, or monthly once lunch stops being a daily dilemma. Delivery and plan management are built right into every price.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <MagnifyingGlassIcon className="absolute left-4 top-3 h-5 w-5 text-bone/40" />
              <input
                type="text"
                placeholder="Search bowls, ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-bone/20 bg-[#16291d] pl-11 pr-5 py-2.5 text-sm text-bone placeholder-bone/40 outline-none focus:border-zest"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="mt-10 flex flex-wrap gap-2.5 border-b border-bone/15 pb-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-zest text-basil shadow-md"
                    : "border border-bone/20 bg-bone/5 text-bone/70 hover:border-bone/40 hover:text-bone"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Custom Bowl Builder Section if active */}
          {activeCategory === "custom" ? (
            <div id="builder" className="mt-12">
              <CustomBowlBuilder />
            </div>
          ) : (
            <>
              {/* Menu Grid */}
              <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {filteredItems.map((item) => (
                  <ItemCard
                    key={item.id}
                    item={item}
                    onOpenModal={() => setSelectedModalItem(item)}
                  />
                ))}
              </div>

              {filteredItems.length === 0 && (
                <div className="mt-16 text-center py-12 rounded-3xl border border-bone/10 bg-[#172b1e]">
                  <p className="text-lg text-bone/60">No items match your search &ldquo;{searchQuery}&rdquo;</p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("all");
                    }}
                    className="mt-4 text-sm font-semibold text-zest underline hover:text-zest-deep cursor-pointer"
                  >
                    Clear filters
                  </button>
                </div>
              )}

              {/* Dedicated Custom Builder Banner if viewing all */}
              {activeCategory === "all" && (
                <div id="builder" className="mt-20">
                  <CustomBowlBuilder />
                </div>
              )}
            </>
          )}

          <p className="mt-12 text-center text-xs text-bone/50">
            Payments accepted via Mobile Money (MTN / Airtel), Cash, or Bank Deposit. Confirmed seamlessly via WhatsApp.
          </p>
        </div>
      </section>

      {/* Item Detail Modal */}
      <ItemModal
        item={selectedModalItem}
        onClose={() => setSelectedModalItem(null)}
      />
    </>
  );
}

function ItemCard({
  item,
  onOpenModal,
}: {
  item: MenuItem;
  onOpenModal: () => void;
}) {
  const isPlan = item.category === "plans";
  const [duration, setDuration] = useState<Duration>("weekly");
  const { addLine } = useCart();

  const price = isPlan
    ? duration === "weekly"
      ? item.weeklyPrice
      : item.monthlyPrice
    : item.price;

  const handleAdd = () => {
    if (isPlan) {
      addLine({
        type: "plan",
        itemKey: item.id,
        name: item.name,
        duration,
        unitPrice: price,
        image: item.image,
        details: item.tagline,
      });
    } else {
      addLine({
        type: "bowl",
        itemKey: item.id,
        name: item.name,
        unitPrice: price,
        image: item.image,
        details: item.tagline,
      });
    }
  };

  return (
    <div
      className={`group flex flex-col justify-between rounded-3xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
        item.featured
          ? "border-zest/70 bg-[#1c3022] shadow-xl"
          : "border-bone/15 bg-[#17291d]"
      }`}
    >
      <div>
        {/* Card Image Header */}
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
            <span className="rounded-full bg-basil-deep/80 backdrop-blur px-3 py-1 text-[10px] font-bold text-bone uppercase tracking-wider border border-bone/10">
              {isPlan ? "Subscription Plan" : "Signature Bowl"}
            </span>
            {item.featured && (
              <span className="rounded-full bg-zest px-3 py-1 text-[10px] font-extrabold text-basil shadow-md flex items-center gap-1">
                <StarSolidIcon className="h-3 w-3 text-basil" />
                <span>FEATURED</span>
              </span>
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          <h3
            className="font-display text-2xl text-bone cursor-pointer hover:text-zest transition-colors"
            onClick={onOpenModal}
          >
            {item.name}
          </h3>
          <p className="mt-2 text-xs text-bone/60 leading-relaxed">
            {item.tagline}
          </p>

          {/* Subscription Duration Selector if Plan */}
          {isPlan && (
            <div className="mt-5 inline-flex w-fit rounded-full border border-bone/20 p-1 text-xs bg-[#0e1c13]">
              {(["weekly", "monthly"] as Duration[]).map((d) => (
                <button
                  key={d}
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
          )}

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

      {/* Card Footer Price & Actions */}
      <div className="p-6 pt-0 border-t border-bone/10 mt-4 flex items-center justify-between gap-3">
        <div>
          <span className="text-[10px] uppercase text-bone/50 block">Price</span>
          <p className="font-display text-2xl text-zest">
            UGX {formatUGX(price)}
            {isPlan && (
              <span className="ml-1 text-xs font-normal text-bone/50">
                /{duration === "weekly" ? "wk" : "mo"}
              </span>
            )}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenModal}
            className="rounded-full border border-bone/20 p-2.5 text-xs text-bone/70 hover:border-zest hover:text-zest transition-colors cursor-pointer"
            title="View Details & Specs"
          >
            <InformationCircleIcon className="h-5 w-5 text-bone/70 hover:text-zest" />
          </button>
          <button
            onClick={handleAdd}
            className="flex items-center gap-1 rounded-full bg-zest px-4 py-2.5 text-xs font-bold text-basil transition-all hover:bg-zest-deep shadow-md cursor-pointer"
          >
            <PlusIcon className="h-4 w-4 text-basil" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
