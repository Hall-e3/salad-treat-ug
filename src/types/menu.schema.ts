import { z } from "zod";

export const DurationSchema = z.enum(["weekly", "monthly"]);
export type Duration = z.infer<typeof DurationSchema>;

export const CategorySchema = z.enum(["all", "plans", "bowls", "custom"]);
export type Category = z.infer<typeof CategorySchema>;

export const MealPlanSchema = z.object({
  id: z.string(),
  name: z.string(),
  tagline: z.string(),
  description: z.string(),
  category: z.literal("plans"),
  weeklyPrice: z.number().positive(),
  monthlyPrice: z.number().positive(),
  featured: z.boolean().optional(),
  image: z.string(),
  calories: z.string().optional(),
  protein: z.string().optional(),
  carbs: z.string().optional(),
  fat: z.string().optional(),
  ingredients: z.array(z.string()),
  tags: z.array(z.string()),
});
export type MealPlan = z.infer<typeof MealPlanSchema>;

export const SignatureBowlSchema = z.object({
  id: z.string(),
  name: z.string(),
  tagline: z.string(),
  description: z.string(),
  category: z.literal("bowls"),
  price: z.number().positive(),
  featured: z.boolean().optional(),
  image: z.string(),
  calories: z.string(),
  protein: z.string(),
  carbs: z.string(),
  fat: z.string(),
  ingredients: z.array(z.string()),
  tags: z.array(z.string()),
});
export type SignatureBowl = z.infer<typeof SignatureBowlSchema>;

export const MenuItemSchema = z.union([MealPlanSchema, SignatureBowlSchema]);
export type MenuItem = z.infer<typeof MenuItemSchema>;

export const CustomIngredientCategorySchema = z.enum([
  "base",
  "protein",
  "topping",
  "dressing",
]);
export type CustomIngredientCategory = z.infer<
  typeof CustomIngredientCategorySchema
>;

export const CustomIngredientSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number().nonnegative(),
  category: CustomIngredientCategorySchema,
});
export type CustomIngredient = z.infer<typeof CustomIngredientSchema>;

export const DeliveryZoneSchema = z.object({
  id: z.string(),
  name: z.string(),
  fee: z.number().nonnegative(),
  eta: z.string(),
});
export type DeliveryZone = z.infer<typeof DeliveryZoneSchema>;
