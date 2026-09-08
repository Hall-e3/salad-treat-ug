import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { CartProvider } from "@/lib/cart";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saladtreat.ug"),
  title: {
    default: "Salad Treat | Enjoy the Taste of Eating Right - Kampala, Uganda",
    template: "%s | Salad Treat Kampala",
  },
  description:
    "Kampala's premier healthy salad bar & meal plan subscription service. Fresh high-protein bowls, customizable salads, and daily doorstep delivery across Kololo, Naguru, Nakasero, Bugolobi, and Muyenga.",
  keywords: [
    "salad treat",
    "salad treat uganda",
    "salad treat kampala",
    "healthy food delivery kampala",
    "salad bar kampala",
    "fresh salad bowls uganda",
    "meal subscription plan kampala",
    "weekly lunch delivery kampala",
    "high protein salad bowl",
    "keto salad kampala",
    "custom salad builder uganda",
  ],
  authors: [{ name: "Salad Treat Uganda" }],
  creator: "Salad Treat Uganda",
  publisher: "Salad Treat Uganda",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_UG",
    url: "https://saladtreat.ug",
    siteName: "Salad Treat Kampala",
    title: "Salad Treat | Kampala's Premier Fresh Salad Bar & Meal Plans",
    description:
      "Fresh, portion-controlled, nutrient-dense salad bowls delivered to your door in Kampala. Subscriptions & custom bowls available.",
    images: [
      {
        url: "/photos/kampala-crunch-bowl.png",
        width: 1200,
        height: 630,
        alt: "Salad Treat Fresh Signature Bowl Kampala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salad Treat | Fresh Salad Bowls & Meal Subscriptions Kampala",
    description:
      "Enjoy the taste of eating right. Fresh salad bowls delivered daily across Kampala, Monday to Saturday.",
    images: ["/photos/kampala-crunch-bowl.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  alternates: {
    canonical: "https://saladtreat.ug",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#16241c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${fraunces.variable} ${inter.variable} antialiased w-full max-w-full overflow-x-hidden min-h-screen`}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
