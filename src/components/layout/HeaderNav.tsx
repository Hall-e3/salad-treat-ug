"use client";

import { useState, useRef, useEffect } from "react";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui";
import {
  ShoppingBagIcon,
  SparklesIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  CalendarDaysIcon,
  CheckBadgeIcon,
  TruckIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";

const dropdownMenu = [
  {
    title: "Meal Subscription Plans",
    desc: "Weekly (6-day) & Monthly (24-day) healthy plans",
    href: "/#menu",
    icon: <CalendarDaysIcon className="h-5 w-5 text-zest" />,
  },
  {
    title: "Signature Salad Bowls",
    desc: "Chef-crafted high-protein & keto bowls",
    href: "/#bowls",
    icon: <SparklesIcon className="h-5 w-5 text-zest" />,
  },
  {
    title: "Custom Bowl Builder",
    desc: "Build your customized salad step-by-step",
    href: "/#builder",
    icon: <AdjustmentsHorizontalIcon className="h-5 w-5 text-zest" />,
  },
  {
    title: "Fresh Local Ingredients",
    desc: "100% farm-fresh crisp greens, proteins & dressings",
    href: "/#ingredients",
    icon: <CheckBadgeIcon className="h-5 w-5 text-zest" />,
  },
  {
    title: "Kampala Delivery Estimator",
    desc: "Doorstep dispatch zones & instant fee calculator",
    href: "/#order",
    icon: <TruckIcon className="h-5 w-5 text-zest" />,
  },
];

export default function HeaderNav() {
  const { totalItems, openCart, toast } = useCart();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

      <header className="sticky top-0 z-40 border-b border-white/10 bg-basil/95 backdrop-blur-md transition-all">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="/#top"
            className="flex items-center gap-2 font-display text-2xl italic tracking-wide text-bone group cursor-pointer"
          >
            <SparklesIcon className="h-6 w-6 text-zest transition-transform group-hover:rotate-12" />
            <span>Salad Treat</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden gap-8 text-sm font-medium text-bone/80 lg:flex items-center">
            {/* Consolidated Offerings Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1.5 transition-colors hover:text-zest cursor-pointer py-1 text-bone"
              >
                <span>Menu &amp; Services</span>
                <ChevronDownIcon
                  className={`h-4 w-4 transition-transform duration-200 text-zest ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-3 w-80 rounded-2xl bg-[#14261a] p-3 shadow-2xl border border-bone/20 animate-fadeIn z-50">
                  <div className="space-y-1">
                    {dropdownMenu.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-start gap-3 rounded-xl p-3 hover:bg-basil transition-colors group cursor-pointer"
                      >
                        <div className="p-2 rounded-lg bg-bone/10 group-hover:bg-zest/20 shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <p className="font-bold text-bone text-sm group-hover:text-zest transition-colors">
                            {item.title}
                          </p>
                          <p className="text-xs text-bone/60 leading-tight mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="/#faq" className="transition-colors hover:text-zest cursor-pointer">
              FAQs
            </a>
            <a href="/terms" className="transition-colors hover:text-zest cursor-pointer">
              Terms
            </a>
            <a href="/privacy" className="transition-colors hover:text-zest cursor-pointer">
              Privacy
            </a>
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

        {/* Mobile Navigation Dropdown Drawer */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-white/10 bg-[#122318] px-6 py-5 space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-zest">
              Menu &amp; Services
            </p>
            <div className="space-y-2 border-l-2 border-zest/30 pl-3">
              {dropdownMenu.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-medium text-bone hover:text-zest py-1 cursor-pointer"
                >
                  {item.title}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-bone/10 space-y-2">
              <a
                href="/#faq"
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium text-bone/80 hover:text-zest py-1"
              >
                FAQs
              </a>
              <a
                href="/terms"
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium text-bone/80 hover:text-zest py-1"
              >
                Terms of Service
              </a>
              <a
                href="/privacy"
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium text-bone/80 hover:text-zest py-1"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
