import React from "react";
import { twMerge } from "tailwind-merge";

type Variant = "filled" | "outlined" | "ghost" | "destructive" | "dark";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  form?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  className?: string;
  bgColor?: string;
}

const variantClasses: Record<Variant, string> = {
  filled: [
    "bg-zest text-basil font-bold shadow-md",
    "hover:bg-zest-deep hover:text-basil",
    "active:scale-[0.98]",
  ].join(" "),
  dark: [
    "bg-basil text-bone font-semibold border border-bone/20",
    "hover:bg-basil-deep hover:border-zest",
    "active:scale-[0.98]",
  ].join(" "),
  outlined: [
    "border border-zest text-zest bg-transparent font-semibold",
    "hover:bg-zest hover:text-basil",
    "active:scale-[0.98]",
  ].join(" "),
  ghost: [
    "text-bone hover:text-zest bg-transparent",
    "hover:bg-white/5",
  ].join(" "),
  destructive: [
    "bg-red-600 text-white font-semibold",
    "hover:bg-red-700",
  ].join(" "),
};

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-4 text-xs rounded-full",
  md: "h-11 px-5 text-sm rounded-full",
  lg: "h-13 px-7 text-base rounded-full",
};

export default function Button({
  text,
  onClick,
  variant = "filled",
  size = "md",
  disabled = false,
  type = "button",
  form,
  leftIcon,
  rightIcon,
  isLoading = false,
  className,
  bgColor,
}: ButtonProps) {
  return (
    <button
      type={type}
      form={form}
      onClick={onClick}
      disabled={disabled || isLoading}
      aria-busy={isLoading || undefined}
      style={bgColor ? { backgroundColor: bgColor } : undefined}
      className={twMerge(
        "inline-flex cursor-pointer items-center justify-center gap-2 font-medium tracking-normal transition-all duration-150",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {isLoading ? (
        <>
          <span
            aria-hidden="true"
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
          />
          <span className="sr-only">Loading</span>
        </>
      ) : (
        <>
          {leftIcon && <span className="shrink-0">{leftIcon}</span>}
          <span className="truncate max-w-full">{text}</span>
          {rightIcon && <span className="shrink-0">{rightIcon}</span>}
        </>
      )}
    </button>
  );
}
