import { z } from "zod";
import { DurationSchema } from "./menu.schema";

export const CartItemTypeSchema = z.enum(["plan", "bowl", "custom"]);
export type CartItemType = z.infer<typeof CartItemTypeSchema>;

export const CartLineSchema = z.object({
  id: z.string(),
  type: CartItemTypeSchema,
  itemKey: z.string(),
  name: z.string(),
  duration: DurationSchema.optional(),
  unitPrice: z.number().positive(),
  qty: z.number().int().min(1),
  details: z.string().optional(),
  image: z.string().optional(),
});
export type CartLine = z.infer<typeof CartLineSchema>;

export const AddToCartInputSchema = z.object({
  type: CartItemTypeSchema,
  itemKey: z.string(),
  name: z.string(),
  duration: DurationSchema.optional(),
  unitPrice: z.number().positive(),
  qty: z.number().int().min(1).default(1),
  details: z.string().optional(),
  image: z.string().optional(),
});
export type AddToCartInput = z.infer<typeof AddToCartInputSchema>;

export const CheckoutDetailsSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  location: z.string().min(3, "Delivery address required"),
  notes: z.string().optional(),
  paymentMethod: z.enum([
    "MTN Mobile Money",
    "Airtel Money",
    "Cash on Delivery",
    "Bank Transfer",
  ]).default("MTN Mobile Money"),
});
export type CheckoutDetails = z.infer<typeof CheckoutDetailsSchema>;
