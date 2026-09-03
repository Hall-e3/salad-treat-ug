import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { CheckIcon } from "@heroicons/react/24/outline";

type ChipVariant = "filter" | "overlay";

interface ChipProps {
  label: string;
  icon?: ReactNode;
  isActive?: boolean;
  variant?: ChipVariant;
  onClick?: () => void;
  className?: string;
  darkMode?: boolean;
  tooltip?: string;
}

export default function Chip({
  label,
  icon,
  isActive = false,
  variant = "filter",
  onClick,
  className = "",
  darkMode = false,
  tooltip,
}: ChipProps) {
  if (variant === "overlay") {
    return (
      <span
        className={twMerge(
          "inline-flex items-center h-7 px-3.5 rounded-full",
          "bg-basil-deep/80 backdrop-blur-md border border-bone/10",
          "text-bone text-xs font-medium whitespace-nowrap",
          className,
        )}
      >
        {label}
      </span>
    );
  }

  const baseClasses =
    "inline-flex items-center h-9 rounded-full border px-4 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap gap-2";

  const activeClasses = "bg-zest text-basil border-zest shadow-md";

  const inactiveClasses = darkMode
    ? "border-bone/20 bg-bone/5 text-bone/70 hover:border-bone/40 hover:text-bone"
    : "border-line bg-white text-charcoal/70 hover:border-charcoal/40 hover:text-charcoal";

  return (
    <button
      type="button"
      onClick={onClick}
      title={tooltip}
      className={twMerge(
        baseClasses,
        isActive ? activeClasses : inactiveClasses,
        className,
      )}
    >
      {isActive && (
        <CheckIcon className="h-3.5 w-3.5 text-basil shrink-0 stroke-[3]" />
      )}
      {!isActive && icon && (
        <span className="shrink-0 flex items-center">{icon}</span>
      )}
      <span>{label}</span>
    </button>
  );
}
