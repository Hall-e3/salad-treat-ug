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
  "display-lg": "text-[32px] sm:text-[40px] lg:text-[48px] font-display font-semibold leading-[1.15] tracking-[-0.02em]",
  "display-md": "text-[26px] sm:text-[30px] lg:text-[36px] font-display font-semibold leading-[1.2] tracking-[-0.02em]",
  "display-sm": "text-[22px] sm:text-[26px] lg:text-[30px] font-display font-semibold leading-[1.25] tracking-[-0.01em]",
  "heading-lg": "text-[20px] sm:text-[22px] lg:text-[24px] font-display font-semibold leading-[1.3]",
  "heading-md": "text-[18px] sm:text-[19px] lg:text-[20px] font-display font-semibold leading-[1.35]",
  "heading-sm": "text-[16px] sm:text-[17px] lg:text-[18px] font-display font-semibold leading-[1.4]",
  "body-lg": "text-[15px] sm:text-[16px] font-normal leading-[1.5]",
  "body-md": "text-[13px] sm:text-[14px] font-normal leading-[1.5]",
  "label-lg": "text-[13px] sm:text-[14px] font-medium leading-[1.4]",
  "label-md": "text-[12px] font-medium leading-[1.4]",
  "label-sm": "text-[11px] font-medium leading-[1.4] tracking-[0.02em]",
  "body-sm": "text-[12px] font-normal leading-[1.4]",
  caption: "text-[11px] sm:text-[12px] font-normal leading-[1.4]",
  code: "text-[12px] sm:text-[13px] font-normal leading-[1.4] font-mono",
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
