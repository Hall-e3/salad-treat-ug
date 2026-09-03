import type { Metadata } from "next";
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
  title: "Salad Treat | Enjoy the Taste of Eating Right",
  description:
    "Fresh salad bowls and weekly or monthly meal plans, delivered to your door in Kampala, Monday to Saturday.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${inter.variable} antialiased w-full max-w-full overflow-x-hidden min-h-screen`}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
