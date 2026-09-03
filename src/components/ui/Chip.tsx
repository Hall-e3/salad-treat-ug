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
    <div className="relative group inline-flex items-center">
      <button
        type="button"
        onClick={onClick}
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

      {/* Professional Hover Tooltip Popup */}
      {tooltip && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 p-3 rounded-2xl bg-[#0a180f] text-bone text-xs font-normal leading-snug border border-zest/40 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none text-center">
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0a180f] border-t border-l border-zest/40 rotate-45" />
          <p className="text-[11px] text-bone/90 font-medium">{tooltip}</p>
        </div>
      )}
    </div>
  );
}
