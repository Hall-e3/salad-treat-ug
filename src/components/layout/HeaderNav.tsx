"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui";
import {
  ShoppingBagIcon,
  SparklesIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const links = [
  { label: "Meal Plans", href: "#menu" },
  { label: "Signature Bowls", href: "#bowls" },
  { label: "Custom Builder", href: "#builder" },
  { label: "Fresh Ingredients", href: "#ingredients" },
  { label: "Delivery", href: "#order" },
  { label: "FAQ", href: "#faq" },
];

export default function HeaderNav() {
  const { totalItems, openCart, toast } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Toast Notification Floating Banner */}
      {toast && (
        <div className="fixed top-20 right-6 z-50 animate-bounce transition-all">
          <div className="flex items-center gap-2.5 rounded-2xl bg-zest px-5 py-3 text-sm font-semibold text-basil shadow-2xl border border-basil/20">
            <SparklesIcon className="h-5 w-5 text-basil" />
            <span>{toast}</span>
          </div>
        </div>
      )}

      <header className="sticky top-0 z-40 border-b border-white/10 bg-basil/90 backdrop-blur-md transition-all">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#top"
            className="flex items-center gap-2 font-display text-2xl italic tracking-wide text-bone group cursor-pointer"
          >
            <SparklesIcon className="h-6 w-6 text-zest transition-transform group-hover:rotate-12" />
            <span>Salad Treat</span>
          </a>

          <nav className="hidden gap-7 text-sm font-medium text-bone/80 lg:flex items-center">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-zest cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              text="Order Cart"
              variant="dark"
              size="sm"
              onClick={openCart}
              leftIcon={<ShoppingBagIcon className="h-4 w-4 text-bone" />}
              rightIcon={
                totalItems > 0 ? (
                  <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-zest px-1.5 text-xs font-bold text-basil">
                    {totalItems}
                  </span>
                ) : undefined
              }
            />

            {/* Mobile Toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex lg:hidden p-2 text-bone hover:text-zest transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-white/10 bg-basil px-6 py-4 space-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-base font-medium text-bone/90 hover:text-zest py-1 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
