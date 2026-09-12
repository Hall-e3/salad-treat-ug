"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { formatUGX, deliveryZones } from "./menu-data";
import { buildWhatsAppLink } from "./whatsapp";
import type { CartLine, CartItemType } from "@/types";

export type { CartLine, CartItemType };

type CartContextValue = {
  lines: CartLine[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addLine: (line: Omit<CartLine, "id" | "qty">, qty?: number) => void;
  removeLine: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  totalItems: number;
  itemsSubtotal: number;
  selectedZoneId: string;
  setSelectedZoneId: (zoneId: string) => void;
  deliveryFee: number;
  grandTotal: number;
  toast: string | null;
  showToast: (msg: string) => void;
  whatsappHref: (opts: {
    name?: string;
    location?: string;
    notes?: string;
    paymentMethod?: string;
  }) => string;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "salad-treat-cart-v2";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [selectedZoneId, setSelectedZoneId] = useState<string>("kololo");
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration of persisted cart from localStorage
      if (raw) setLines(JSON.parse(raw));
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines, hydrated]);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => {
      setToast(null);
    }, 3200);
  }, []);

  const addLine = useCallback(
    (line: Omit<CartLine, "id" | "qty">, qty = 1) => {
      const itemKey =
        line.type === "plan"
          ? `${line.itemKey}-${line.duration}`
          : line.itemKey;

      const generatedId =
        line.type === "custom"
          ? `custom-${Date.now()}`
          : `${line.type}-${itemKey}`;

      setLines((prev) => {
        if (line.type !== "custom") {
          const existing = prev.find((l) => l.id === generatedId);
          if (existing) {
            return prev.map((l) =>
              l.id === generatedId ? { ...l, qty: l.qty + qty } : l
            );
          }
        }
        return [...prev, { ...line, id: generatedId, qty }];
      });

      showToast(`Added ${line.name} to your order!`);
      setIsOpen(true);
    },
    [showToast]
  );

  const removeLine = useCallback((id: string) => {
    setLines((prev) => prev.filter((l) => l.id !== id));
  }, []);

  const setQty = useCallback(
    (id: string, qty: number) => {
      if (qty <= 0) {
        removeLine(id);
        return;
      }
      setLines((prev) => prev.map((l) => (l.id === id ? { ...l, qty } : l)));
    },
    [removeLine]
  );

  const clear = useCallback(() => setLines([]), []);

  const totalItems = useMemo(
    () => lines.reduce((sum, l) => sum + l.qty, 0),
    [lines]
  );

  const itemsSubtotal = useMemo(
    () => lines.reduce((sum, l) => sum + l.qty * l.unitPrice, 0),
    [lines]
  );

  const selectedZone = useMemo(
    () =>
      deliveryZones.find((z) => z.id === selectedZoneId) || deliveryZones[0],
    [selectedZoneId]
  );

  const deliveryFee = useMemo(() => {
    if (lines.length === 0) return 0;
    // Free delivery for monthly subscription plans
    const hasMonthlyPlan = lines.some((l) => l.duration === "monthly");
    if (hasMonthlyPlan) return 0;
    return selectedZone.fee;
  }, [lines, selectedZone]);

  const grandTotal = useMemo(
    () => itemsSubtotal + deliveryFee,
    [itemsSubtotal, deliveryFee]
  );

  const whatsappHref = useCallback(
    ({
      name,
      location,
      notes,
      paymentMethod = "Mobile Money",
    }: {
      name?: string;
      location?: string;
      notes?: string;
      paymentMethod?: string;
    }) => {
      const itemLines = lines
        .map((l) => {
          const detailStr = l.details ? ` (${l.details})` : "";
          const durStr = l.duration ? ` [${l.duration.toUpperCase()}]` : "";
          return `• ${l.name}${durStr}${detailStr} x${l.qty} — UGX ${formatUGX(
            l.unitPrice * l.qty
          )}`;
        })
        .join("\n");

      const deliveryStr =
        deliveryFee === 0
          ? "Delivery Fee: FREE (Monthly Plan)"
          : `Delivery Fee: UGX ${formatUGX(deliveryFee)}`;

      const message = [
        "*NEW SALAD TREAT ORDER*",
        "--------------------------------",
        itemLines || "(No items selected)",
        "--------------------------------",
        `Subtotal: UGX ${formatUGX(itemsSubtotal)}`,
        `Delivery Zone: ${selectedZone.name}`,
        deliveryStr,
        `*TOTAL AMOUNT: UGX ${formatUGX(grandTotal)}*`,
        "--------------------------------",
        `Customer Name: ${name || "Not specified"}`,
        `Location/Address: ${location || "Not specified"}`,
        `Payment Preference: ${paymentMethod}`,
        notes ? `Order Notes: ${notes}` : "",
        "--------------------------------",
        "Please confirm delivery schedule and payment instructions!",
      ]
        .filter(Boolean)
        .join("\n");

      return buildWhatsAppLink(message);
    },
    [lines, itemsSubtotal, deliveryFee, grandTotal, selectedZone]
  );

  const value: CartContextValue = {
    lines,
    isOpen,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    addLine,
    removeLine,
    setQty,
    clear,
    totalItems,
    itemsSubtotal,
    selectedZoneId,
    setSelectedZoneId,
    deliveryFee,
    grandTotal,
    toast,
    showToast,
    whatsappHref,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
