"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { formatUGX, deliveryZones } from "@/lib/menu-data";
import {
  XMarkIcon,
  PlusIcon,
  MinusIcon,
  ShoppingBagIcon,
  TrashIcon,
  ChatBubbleLeftRightIcon,
  UserIcon,
  MapPinIcon,
  CreditCardIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

export function CartDrawer() {
  const {
    isOpen,
    closeCart,
    lines,
    setQty,
    removeLine,
    clear,
    itemsSubtotal,
    selectedZoneId,
    setSelectedZoneId,
    deliveryFee,
    grandTotal,
    whatsappHref,
  } = useCart();

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("MTN Mobile Money");

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-basil-deep/60 backdrop-blur-xs transition-opacity duration-300 cursor-pointer ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-lg flex-col bg-herb-white text-charcoal shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-line px-6 py-5 bg-white">
          <div>
            <h2 className="font-display text-2xl text-charcoal flex items-center gap-2">
              <ShoppingBagIcon className="h-6 w-6 text-zest-deep" />
              <span>Your Order</span>
            </h2>
            <p className="text-xs text-charcoal/50">
              {lines.length} {lines.length === 1 ? "item" : "items"} in cart
            </p>
          </div>

          <div className="flex items-center gap-3">
            {lines.length > 0 && (
              <button
                onClick={clear}
                className="text-xs text-red-600 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <TrashIcon className="h-3.5 w-3.5" />
                <span>Clear all</span>
              </button>
            )}
            <button
              onClick={closeCart}
              aria-label="Close cart"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-bone text-charcoal/70 hover:bg-basil hover:text-bone transition-colors cursor-pointer"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Drawer Body - Items List */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {lines.length === 0 ? (
            <div className="mt-20 text-center space-y-3">
              <ShoppingBagIcon className="h-12 w-12 text-charcoal/30 mx-auto" />
              <p className="font-display text-lg text-charcoal">Your cart is empty</p>
              <p className="text-xs text-charcoal/50 max-w-xs mx-auto">
                Explore our meal plans, signature bowls, or customize your own salad bowl to get started.
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-line">
              {lines.map((line) => (
                <li key={line.id} className="py-4 flex gap-4 items-center">
                  {line.image && (
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-bone border border-line">
                      <Image
                        src={line.image}
                        alt={line.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-semibold text-sm text-charcoal truncate">
                        {line.name}
                      </p>
                      <button
                        onClick={() => removeLine(line.id)}
                        className="text-xs text-charcoal/40 hover:text-red-500 p-1 cursor-pointer"
                        title="Remove item"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>

                    {line.duration && (
                      <span className="inline-block rounded bg-zest/15 px-2 py-0.5 text-[10px] font-bold text-zest-deep capitalize">
                        {line.duration} plan
                      </span>
                    )}

                    {line.details && (
                      <p className="text-[11px] text-charcoal/60 line-clamp-2 mt-0.5">
                        {line.details}
                      </p>
                    )}

                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-xs font-bold text-basil">
                        UGX {formatUGX(line.unitPrice * line.qty)}
                      </span>

                      {/* Qty Controls */}
                      <div className="flex items-center gap-2 rounded-full border border-line bg-white px-2 py-1">
                        <button
                          onClick={() => setQty(line.id, line.qty - 1)}
                          className="flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold text-charcoal/70 hover:bg-bone cursor-pointer"
                          aria-label={`Reduce ${line.name}`}
                        >
                          <MinusIcon className="h-3 w-3" />
                        </button>
                        <span className="w-4 text-center text-xs font-bold">
                          {line.qty}
                        </span>
                        <button
                          onClick={() => setQty(line.id, line.qty + 1)}
                          className="flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold text-charcoal/70 hover:bg-bone cursor-pointer"
                          aria-label={`Increase ${line.name}`}
                        >
                          <PlusIcon className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Drawer Footer - Delivery Details & Checkout */}
        {lines.length > 0 && (
          <div className="border-t border-line bg-white px-6 py-5 space-y-4">
            {/* Delivery Zone Picker */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-charcoal/60 block mb-1 flex items-center gap-1">
                <MapPinIcon className="h-3.5 w-3.5 text-zest-deep" />
                <span>Select Delivery Zone</span>
              </label>
              <select
                value={selectedZoneId}
                onChange={(e) => setSelectedZoneId(e.target.value)}
                className="w-full rounded-xl border border-line bg-herb-white px-3 py-2 text-xs text-charcoal outline-none focus:border-zest cursor-pointer"
              >
                {deliveryZones.map((zone) => (
                  <option key={zone.id} value={zone.id}>
                    {zone.name} (+UGX {formatUGX(zone.fee)})
                  </option>
                ))}
              </select>
            </div>

            {/* Customer Inputs */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="relative">
                <UserIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-charcoal/40" />
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Full Name *"
                  className="w-full rounded-xl border border-line bg-herb-white pl-8 pr-3 py-2 text-xs text-charcoal outline-none focus:border-zest"
                />
              </div>

              <div className="relative">
                <MapPinIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-charcoal/40" />
                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Street / Office *"
                  className="w-full rounded-xl border border-line bg-herb-white pl-8 pr-3 py-2 text-xs text-charcoal outline-none focus:border-zest"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div className="relative">
                <CreditCardIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-charcoal/40 pointer-events-none" />
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full rounded-xl border border-line bg-herb-white pl-8 pr-2 py-2 text-xs text-charcoal outline-none focus:border-zest cursor-pointer"
                >
                  <option value="MTN Mobile Money">MTN Mobile Money</option>
                  <option value="Airtel Money">Airtel Money</option>
                  <option value="Cash on Delivery">Cash on Delivery</option>
                  <option value="Bank Transfer">Bank Transfer</option>
                </select>
              </div>

              <div className="relative">
                <DocumentTextIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-charcoal/40" />
                <input
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Notes (e.g. no onions)"
                  className="w-full rounded-xl border border-line bg-herb-white pl-8 pr-3 py-2 text-xs text-charcoal outline-none focus:border-zest"
                />
              </div>
            </div>

            {/* Pricing Calculation */}
            <div className="space-y-1.5 pt-2 border-t border-line text-xs text-charcoal/70">
              <div className="flex justify-between">
                <span>Items Subtotal</span>
                <span>UGX {formatUGX(itemsSubtotal)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Delivery Fee</span>
                {deliveryFee === 0 ? (
                  <span className="font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded text-[10px]">
                    FREE (Monthly Plan)
                  </span>
                ) : (
                  <span>UGX {formatUGX(deliveryFee)}</span>
                )}
              </div>
              <div className="flex justify-between text-base font-bold text-basil pt-1 border-t border-line">
                <span>Grand Total</span>
                <span className="text-zest-deep">UGX {formatUGX(grandTotal)}</span>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={whatsappHref({ name, location, notes, paymentMethod })}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-zest py-3.5 text-center text-sm font-bold text-basil shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-zest-deep cursor-pointer"
            >
              <ChatBubbleLeftRightIcon className="h-5 w-5 text-basil" />
              <span>Send Order via WhatsApp</span>
            </a>

            <p className="text-center text-[11px] text-charcoal/50">
              Your order summary will open in WhatsApp to confirm delivery time.
            </p>
          </div>
        )}
      </aside>
    </>
  );
}
