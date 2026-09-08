"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { useLockBodyScroll } from "@/lib/useLockBodyScroll";
import { formatUGX, deliveryZones } from "@/lib/menu-data";
import {
  AppText,
  Button,
  TextInput,
  SelectInput,
  QuantityStepper,
  EmptyState,
  Form,
} from "@/components/ui";
import {
  XMarkIcon,
  ShoppingBagIcon,
  TrashIcon,
  ChatBubbleLeftRightIcon,
  UserIcon,
  MapPinIcon,
  CreditCardIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

export default function CartDrawerModal() {
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

  useLockBodyScroll(isOpen);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("MTN Mobile Money");

  const zoneOptions = deliveryZones.map((z) => ({
    value: z.id,
    label: `${z.name} (+UGX ${formatUGX(z.fee)})`,
  }));

  const paymentOptions = [
    { value: "MTN Mobile Money", label: "MTN Mobile Money" },
    { value: "Airtel Money", label: "Airtel Money" },
    { value: "Cash on Delivery", label: "Cash on Delivery" },
    { value: "Bank Transfer", label: "Bank Transfer" },
  ];

  const handleCheckoutSubmit = () => {
    window.open(
      whatsappHref({ name, location, notes, paymentMethod }),
      "_blank"
    );
  };

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
            <AppText variant="heading-md" color="primary" className="flex items-center gap-2 font-display">
              <ShoppingBagIcon className="h-6 w-6 text-zest-deep" />
              <span>Your Order</span>
            </AppText>
            <AppText variant="caption" color="secondary">
              {lines.length} {lines.length === 1 ? "item" : "items"} in cart
            </AppText>
          </div>

          <div className="flex items-center gap-3">
            {lines.length > 0 && (
              <button
                type="button"
                onClick={clear}
                className="text-xs text-red-600 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <TrashIcon className="h-3.5 w-3.5" />
                <span>Clear all</span>
              </button>
            )}
            <button
              type="button"
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
            <EmptyState
              title="Your cart is empty"
              description="Explore our meal plans, signature bowls, or customize your own salad bowl to get started."
              actionText="Browse the Menu"
              onAction={() => {
                closeCart();
                document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-12 bg-transparent border-none"
            />
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
                      <AppText variant="label-lg" color="primary" className="truncate font-semibold">
                        {line.name}
                      </AppText>
                      <button
                        type="button"
                        onClick={() => removeLine(line.id)}
                        className="text-xs text-charcoal/40 hover:text-red-500 p-1 cursor-pointer"
                        title="Remove item"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>

                    {line.duration && (
                      <span className="inline-block rounded bg-zest/15 px-2 py-0.5 text-[10px] font-bold text-zest-deep capitalize mt-0.5">
                        {line.duration} plan
                      </span>
                    )}

                    {line.details && (
                      <AppText variant="caption" color="secondary" className="line-clamp-2 mt-0.5 opacity-80">
                        {line.details}
                      </AppText>
                    )}

                    <div className="mt-2 flex items-center justify-between">
                      <AppText variant="label-md" color="basil" className="font-bold">
                        UGX {formatUGX(line.unitPrice * line.qty)}
                      </AppText>

                      <QuantityStepper
                        value={line.qty}
                        onChange={(q) => setQty(line.id, q)}
                        min={0}
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Drawer Footer - Checkout Form */}
        {lines.length > 0 && (
          <Form onSubmit={handleCheckoutSubmit} className="border-t border-line bg-white px-6 py-5 space-y-3.5">
            <SelectInput
              label="Select Delivery Zone"
              value={selectedZoneId}
              onChange={(e) => setSelectedZoneId(e.target.value)}
              options={zoneOptions}
              leftIcon={<MapPinIcon className="h-4 w-4 text-zest-deep" />}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <TextInput
                placeholder="Full Name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                leftIcon={<UserIcon className="h-4 w-4 text-charcoal/40" />}
                required
              />
              <TextInput
                placeholder="Street / Office *"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                leftIcon={<MapPinIcon className="h-4 w-4 text-charcoal/40" />}
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <SelectInput
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                options={paymentOptions}
                leftIcon={<CreditCardIcon className="h-4 w-4 text-charcoal/40" />}
              />
              <TextInput
                placeholder="Notes (e.g. no onions)"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                leftIcon={<DocumentTextIcon className="h-4 w-4 text-charcoal/40" />}
              />
            </div>

            {/* Calculations */}
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

            <Button
              type="submit"
              text="Send Order via WhatsApp"
              variant="filled"
              size="lg"
              className="w-full shadow-lg"
              leftIcon={<ChatBubbleLeftRightIcon className="h-5 w-5 text-basil" />}
            />

            <AppText variant="caption" color="secondary" align="center" className="block text-[11px] opacity-70">
              Your order summary will open in WhatsApp to confirm delivery time.
            </AppText>
          </Form>
        )}
      </aside>
    </>
  );
}
