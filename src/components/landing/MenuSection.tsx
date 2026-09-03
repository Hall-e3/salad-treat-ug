"use client";

import { useState } from "react";
import {
  mealPlans,
  signatureBowls,
  type Category,
  type MenuItem,
} from "@/lib/menu-data";
import MealPlanCard from "@/components/cards/MealPlanCard";
import SignatureBowlCard from "@/components/cards/SignatureBowlCard";
import ProductDetailModal from "@/components/modals/ProductDetailModal";
import { SearchInput, Tab, AppText } from "@/components/ui";
import CustomBowlSection from "@/components/landing/CustomBowlSection";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("plans");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedModalItem, setSelectedModalItem] = useState<MenuItem | null>(
    null,
  );

  const tabs = [
    {
      id: "plans",
      label: "Meal Subscription Plans",
      tooltip: "Subscribe to Weekly (6-day) or Monthly (24-day) lunch packages with FREE delivery across Kampala.",
    },
    {
      id: "bowls",
      label: "Signature Salad Bowls",
      tooltip: "Order chef-crafted, high-protein & keto-friendly individual salad bowls prepared fresh daily.",
    },
    {
      id: "custom",
      label: "Custom Bowl Builder",
      tooltip: "Build your own salad step-by-step: pick your greens, protein, fresh toppings & house dressing.",
    },
  ];

  const allItems: MenuItem[] = [...mealPlans, ...signatureBowls];

  const filteredItems = allItems.filter((item) => {
    if (
      activeCategory !== "all" &&
      activeCategory !== "custom" &&
      item.category !== activeCategory
    ) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = item.name.toLowerCase().includes(q);
      const matchTagline = item.tagline.toLowerCase().includes(q);
      const matchIng = item.ingredients.some((ing) =>
        ing.toLowerCase().includes(q),
      );
      return matchName || matchTagline || matchIng;
    }
    return true;
  });

  return (
    <>
      <section id="menu" className="bg-basil py-16 sm:py-24 text-bone">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-xl">
              <AppText
                variant="body-lg"
                color="zest"
                className="font-display italic"
              >
                Fresh & Nourishing
              </AppText>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl leading-tight md:text-5xl text-bone break-words">
                Explore Our Menu & Plans
              </h2>
              <AppText
                variant="body-md"
                color="inverse"
                className="mt-4 opacity-75 leading-relaxed"
              >
                Choose weekly if you&rsquo;re trying us out, or monthly once
                lunch stops being a daily dilemma. Delivery and plan management
                are built right into every price.
              </AppText>
            </div>

            {/* Search Input */}
            <div className="w-full md:w-72">
              <SearchInput
                value={searchQuery}
                onChange={setSearchQuery}
                darkMode
              />
            </div>
          </div>

          {/* Category Navigation Tabs */}
          <div className="mt-10 border-b border-bone/15 pb-4 space-y-3">
            <Tab
              tabs={tabs}
              activeTab={activeCategory}
              onTabChange={(id) => setActiveCategory(id as Category)}
              darkMode
            />

            {tabs.find((t) => t.id === activeCategory)?.tooltip && (
              <div className="flex items-center gap-2 text-xs font-medium text-zest/90 bg-zest/10 border border-zest/20 px-3.5 py-2 rounded-xl">
                <InformationCircleIcon className="h-4 w-4 text-zest shrink-0" />
                <span>{tabs.find((t) => t.id === activeCategory)?.tooltip}</span>
              </div>
            )}
          </div>

          {/* Custom Bowl Builder if tab selected */}
          {activeCategory === "custom" ? (
            <div id="builder" className="mt-12">
              <CustomBowlSection />
            </div>
          ) : (
            <>
              {/* Menu Grid */}
              <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {filteredItems.map((item) =>
                  item.category === "plans" ? (
                    <MealPlanCard
                      key={item.id}
                      item={item}
                      onOpenModal={() => setSelectedModalItem(item)}
                    />
                  ) : (
                    <SignatureBowlCard
                      key={item.id}
                      item={item}
                      onOpenModal={() => setSelectedModalItem(item)}
                    />
                  ),
                )}
              </div>

              {filteredItems.length === 0 && (
                <div className="mt-16 text-center py-12 rounded-3xl border border-bone/10 bg-[#172b1e]">
                  <AppText
                    variant="heading-sm"
                    color="inverse"
                    className="opacity-60"
                  >
                    No items match your search &ldquo;{searchQuery}&rdquo;
                  </AppText>
                  <button
                    type="button"
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
                  <CustomBowlSection />
                </div>
              )}
            </>
          )}

          <AppText
            variant="caption"
            color="inverse"
            align="center"
            className="mt-12 block opacity-50"
          >
            Payments accepted via Mobile Money (MTN / Airtel), Cash, or Bank
            Deposit. Confirmed seamlessly via WhatsApp.
          </AppText>
        </div>
      </section>

      {/* Item Detail Modal */}
      <ProductDetailModal
        item={selectedModalItem}
        onClose={() => setSelectedModalItem(null)}
      />
    </>
  );
}
