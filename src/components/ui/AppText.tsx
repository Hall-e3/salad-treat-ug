import React from "react";
import { twMerge } from "tailwind-merge";

export type TextVariant =
  | "display-lg"
  | "display-md"
  | "display-sm"
  | "heading-lg"
  | "heading-md"
  | "heading-sm"
  | "body-lg"
  | "body-md"
  | "body-sm"
  | "label-lg"
  | "label-md"
  | "label-sm"
  | "caption"
  | "code";

export type TextColor =
  | "primary"
  | "secondary"
  | "tertiary"
  | "inverse"
  | "brand"
  | "zest"
  | "basil"
  | "error"
  | "success";

export type TextAlign = "left" | "center" | "right";
export type TextTransform = "none" | "uppercase" | "lowercase" | "capitalize";
export type TextTag =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "label"
  | "caption"
  | "code"
  | "strong"
  | "em";

interface AppTextProps {
  children: React.ReactNode;
  variant?: TextVariant;
  color?: TextColor;
  align?: TextAlign;
  transform?: TextTransform;
  truncate?: boolean;
  lines?: number;
  as?: TextTag;
  className?: string;
  htmlFor?: string;
  id?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const variantClasses: Record<TextVariant, string> = {
  "display-lg": "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-[1.08] tracking-[-0.025em]",
  "display-md": "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-semibold leading-[1.12] tracking-[-0.02em]",
  "display-sm": "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-semibold leading-[1.18] tracking-[-0.015em]",
  "heading-lg": "text-lg sm:text-xl md:text-2xl lg:text-3xl font-display font-semibold leading-[1.25]",
  "heading-md": "text-base sm:text-lg md:text-xl font-display font-semibold leading-[1.3]",
  "heading-sm": "text-sm sm:text-base md:text-lg font-display font-semibold leading-[1.35]",
  "body-lg": "text-sm sm:text-base md:text-lg font-normal leading-relaxed",
  "body-md": "text-xs sm:text-sm md:text-base font-normal leading-relaxed",
  "label-lg": "text-xs sm:text-sm md:text-base font-semibold leading-tight uppercase tracking-wider",
  "label-md": "text-[11px] sm:text-xs font-semibold leading-tight uppercase tracking-wider",
  "label-sm": "text-[10px] sm:text-[11px] font-semibold leading-tight uppercase tracking-widest",
  "body-sm": "text-[11px] sm:text-xs font-normal leading-normal",
  caption: "text-[10px] sm:text-[11px] font-normal leading-normal",
  code: "text-xs sm:text-sm font-normal leading-normal font-mono",
};

const colorClasses: Record<TextColor, string> = {
  primary: "text-charcoal",
  secondary: "text-charcoal/70",
  tertiary: "text-charcoal/50",
  inverse: "text-bone",
  brand: "text-zest",
  zest: "text-zest",
  basil: "text-basil",
  error: "text-red-600",
  success: "text-emerald-600",
};

const alignClasses: Record<TextAlign, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const transformClasses: Record<TextTransform, string> = {
  none: "",
  uppercase: "uppercase",
  lowercase: "lowercase",
  capitalize: "capitalize",
};

const defaultTag: Record<TextVariant, TextTag> = {
  "display-lg": "h1",
  "display-md": "h2",
  "display-sm": "h3",
  "heading-lg": "h2",
  "heading-md": "h3",
  "heading-sm": "h4",
  "body-lg": "p",
  "body-md": "p",
  "body-sm": "p",
  "label-lg": "span",
  "label-md": "span",
  "label-sm": "span",
  caption: "span",
  code: "code",
};

export default function AppText({
  children,
  variant = "body-md",
  color = "primary",
  align = "left",
  transform = "none",
  truncate = false,
  lines,
  as,
  className = "",
  htmlFor,
  id,
  onClick,
}: AppTextProps) {
  const Tag = as ?? defaultTag[variant];

  const truncateClass = truncate
    ? "truncate"
    : lines
    ? `line-clamp-${lines}`
    : "";

  const classes = twMerge(
    variantClasses[variant],
    colorClasses[color],
    alignClasses[align],
    transformClasses[transform],
    truncateClass,
    className
  );

  return (
    <Tag className={classes} htmlFor={htmlFor} id={id} onClick={onClick}>
      {children}
    </Tag>
  );
}
