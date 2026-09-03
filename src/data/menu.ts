import type { MealPlan, SignatureBowl, CustomIngredient } from "@/types";

export type {
  Duration,
  Category,
  MealPlan,
  SignatureBowl,
  MenuItem,
  CustomIngredient,
} from "@/types";

export const mealPlans: MealPlan[] = [
  {
    id: "breakfast",
    name: "Breakfast Plan",
    tagline: "A fresh start, delivered before your day begins.",
    description:
      "Nutrient-dense breakfast bowls featuring fresh avocado, boiled eggs, chia fruit parfaits, and toasted nuts.",
    category: "plans",
    weeklyPrice: 200000,
    monthlyPrice: 790000,
    image: "/photos/hero-bowl.png",
    calories: "420 - 500 kcal",
    protein: "22g",
    carbs: "38g",
    fat: "18g",
    ingredients: [
      "Organic Romaine & Kale",
      "Soft-Boiled Eggs",
      "Fresh Avocado",
      "Spiced Seeds & Pumpkin Seeds",
      "Citrus Drizzle",
    ],
    tags: ["Morning Energy", "High Fiber"],
  },
  {
    id: "lunch",
    name: "Lunch Plan",
    tagline: "A proper midday reset, no queue required.",
    description:
      "Satisfying mid-day bowls loaded with flame-grilled chicken, roasted plantain, sweetcorn, and fresh vinaigrettes.",
    category: "plans",
    weeklyPrice: 250000,
    monthlyPrice: 970000,
    featured: true,
    image: "/photos/kampala-crunch-bowl.png",
    calories: "580 - 650 kcal",
    protein: "42g",
    carbs: "45g",
    fat: "20g",
    ingredients: [
      "Herb Grilled Chicken Breast",
      "Sweetcorn",
      "Roasted Sweet Plantain",
      "Ripe Avocado",
      "House Honey Mustard",
    ],
    tags: ["Best Seller", "High Protein"],
  },
  {
    id: "dinner",
    name: "Dinner Plan",
    tagline: "Wind the day down without touching a stove.",
    description:
      "Light yet filling evening meals balanced to support digestion and restorative sleep.",
    category: "plans",
    weeklyPrice: 200000,
    monthlyPrice: 790000,
    image: "/photos/hero-bowl.png",
    calories: "450 - 520 kcal",
    protein: "35g",
    carbs: "30g",
    fat: "16g",
    ingredients: [
      "Pan-Seared Salmon / Chicken",
      "Cucumber & Radish Ribbon",
      "Baby Spinach",
      "Lemon Herb Dressing",
    ],
    tags: ["Light & Lean", "Detox"],
  },
  {
    id: "bf-lunch",
    name: "Breakfast + Lunch",
    tagline: "Two meals sorted, one less thing to think about.",
    description:
      "Complete workday coverage from early morning through late afternoon meetings.",
    category: "plans",
    weeklyPrice: 450000,
    monthlyPrice: 1750000,
    image: "/photos/kampala-crunch-bowl.png",
    calories: "1,000 - 1,150 kcal total",
    protein: "64g",
    carbs: "83g",
    fat: "38g",
    ingredients: ["Full Breakfast Bowl", "Full Lunch Bowl", "Daily Dressing"],
    tags: ["Workday Combo", "Popular"],
  },
  {
    id: "bf-dinner",
    name: "Breakfast + Dinner",
    tagline: "Bookend your day with two fresh, honest meals.",
    description:
      "Ideal for professionals who lunch at the office but want clean eating morning and evening.",
    category: "plans",
    weeklyPrice: 400000,
    monthlyPrice: 1580000,
    image: "/photos/hero-bowl.png",
    calories: "900 - 1,020 kcal total",
    protein: "57g",
    carbs: "68g",
    fat: "34g",
    ingredients: ["Full Breakfast Bowl", "Full Dinner Bowl"],
    tags: ["Balanced Lifestyle"],
  },
  {
    id: "full",
    name: "Full Day Package",
    tagline: "Breakfast, lunch and dinner — every day, handled.",
    description:
      "The ultimate hassle-free healthy eating subscription. 3 curated daily meals delivered fresh.",
    category: "plans",
    weeklyPrice: 650000,
    monthlyPrice: 2530000,
    featured: true,
    image: "/photos/kampala-crunch-bowl.png",
    calories: "1,500 - 1,700 kcal total",
    protein: "99g",
    carbs: "115g",
    fat: "54g",
    ingredients: [
      "Breakfast Bowl",
      "Lunch Bowl",
      "Dinner Bowl",
      "Daily Juice Boost",
    ],
    tags: ["Ultimate Convenience", "Chef Curated"],
  },
];

export const signatureBowls: SignatureBowl[] = [
  {
    id: "cauli-broccoli",
    name: "Cauli-Broccoli Crunch",
    tagline:
      "Blanched cauliflower, broccoli florets, sweet peppers & mustard dip.",
    description:
      "A crunchy, antioxidant-rich medley of cauliflower, broccoli, diced bell peppers, and red onions with house honey mustard sauce.",
    category: "bowls",
    price: 30000,
    featured: true,
    image: "/photos/kampala-crunch-bowl.png",
    calories: "410 kcal",
    protein: "18g",
    carbs: "34g",
    fat: "14g",
    ingredients: [
      "Steamed Cauliflower & Broccoli",
      "Tri-Color Bell Peppers",
      "Red Onion Dice",
      "Crispy Garlic Flakes",
      "Honey Mustard Vinaigrette",
    ],
    tags: ["Customer Favorite", "Antioxidant Rich"],
  },
  {
    id: "kampala-crunch",
    name: "Kampala Crunch Bowl",
    tagline:
      "Flame-grilled chicken, sweet mango, ripe avocado & golden sweetcorn.",
    description:
      "Our signature bowl bursting with vibrant local flavors, juicy grilled chicken, sweet mango cubes, and crunchy pumpkin seeds.",
    category: "bowls",
    price: 32000,
    featured: true,
    image: "/photos/kampala-crunch-bowl.png",
    calories: "540 kcal",
    protein: "38g",
    carbs: "42g",
    fat: "18g",
    ingredients: [
      "Herb Grilled Chicken",
      "Sweet Mango",
      "Ripe Avocado",
      "Golden Sweetcorn",
      "Cherry Tomatoes",
      "Toasted Seeds",
    ],
    tags: ["House Favorite", "High Protein"],
  },
  {
    id: "proteina-power",
    name: "Proteina Steak & Quinoa",
    tagline: "Tender beef strips, quinoa, roasted sweet potatoes & boiled egg.",
    description:
      "Heavyweight protein bowl designed for workouts and active days, drizzled with creamy garlic tahini.",
    category: "bowls",
    price: 38000,
    image: "/photos/hero-bowl.png",
    calories: "620 kcal",
    protein: "48g",
    carbs: "48g",
    fat: "22g",
    ingredients: [
      "Marinated Beef Strips",
      "Organic Quinoa",
      "Roasted Sweet Potatoes",
      "Hard Boiled Egg",
      "Spinach & Kale",
    ],
    tags: ["Gym Fuel", "High Protein"],
  },
  {
    id: "green-goddess",
    name: "Green Goddess Detox",
    tagline: "Baby spinach, cucumber ribbons, crisp green apple & chia seeds.",
    description:
      "A hydrating, enzyme-rich green bowl with tangy lemon vinaigrette and creamy avocado.",
    category: "bowls",
    price: 28000,
    image: "/photos/kampala-crunch-bowl.png",
    calories: "380 kcal",
    protein: "14g",
    carbs: "32g",
    fat: "16g",
    ingredients: [
      "Baby Spinach",
      "English Cucumber",
      "Green Apple",
      "Avocado",
      "Chia & Flaxseed",
    ],
    tags: ["Vegan", "Detox & Cleanse"],
  },
  {
    id: "nile-salmon",
    name: "Nile Salmon & Avocado",
    tagline: "Pan-seared salmon fillet, mixed greens, radish & dill yogurt.",
    description:
      "Rich in Omega-3 fatty acids with crispy seared skin, fresh cucumber, and house dill drizzle.",
    category: "bowls",
    price: 45000,
    image: "/photos/hero-bowl.png",
    calories: "510 kcal",
    protein: "36g",
    carbs: "18g",
    fat: "26g",
    ingredients: [
      "Pan-Seared Salmon Fillet",
      "Fresh Avocado",
      "Sliced Radish",
      "Wild Rocket",
      "Dill Lemon Sauce",
    ],
    tags: ["Keto Friendly", "Omega-3"],
  },
];

export const customOptions: CustomIngredient[] = [
  // Bases
  {
    id: "b1",
    name: "Baby Spinach & Romaine Mix",
    price: 6000,
    category: "base",
  },
  { id: "b2", name: "Organic Kale & Rocket", price: 7000, category: "base" },
  { id: "b3", name: "Quinoa & Brown Rice Base", price: 8000, category: "base" },

  // Proteins
  { id: "p1", name: "Herb Grilled Chicken", price: 12000, category: "protein" },
  {
    id: "p2",
    name: "Marinated Steak Strips",
    price: 15000,
    category: "protein",
  },
  {
    id: "p3",
    name: "Pan-Seared Salmon Fillet",
    price: 20000,
    category: "protein",
  },
  { id: "p4", name: "Boiled Eggs (2x)", price: 4000, category: "protein" },
  {
    id: "p5",
    name: "Grilled Halloumi Cheese",
    price: 10000,
    category: "protein",
  },

  // Toppings
  { id: "t1", name: "Ripe Sliced Avocado", price: 4000, category: "topping" },
  { id: "t2", name: "Sweetcorn Kernels", price: 2500, category: "topping" },
  { id: "t3", name: "Cherry Tomatoes", price: 2500, category: "topping" },
  {
    id: "t4",
    name: "Roasted Plantain Cubes",
    price: 3000,
    category: "topping",
  },
  { id: "t5", name: "Spiced Pumpkin Seeds", price: 2000, category: "topping" },
  { id: "t6", name: "Mango Cubes", price: 3000, category: "topping" },

  // Dressings
  { id: "d1", name: "House Honey Mustard", price: 2000, category: "dressing" },
  {
    id: "d2",
    name: "Zesty Citrus Vinaigrette",
    price: 2000,
    category: "dressing",
  },
  { id: "d3", name: "Creamy Tahini Garlic", price: 2500, category: "dressing" },
  { id: "d4", name: "Spicy Peanut Drizzle", price: 2000, category: "dressing" },
];

export function formatUGX(amount: number): string {
  return new Intl.NumberFormat("en-UG", {
    maximumFractionDigits: 0,
  }).format(amount);
}
