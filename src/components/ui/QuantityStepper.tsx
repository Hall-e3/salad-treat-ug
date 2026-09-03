"use client";

import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import AppText from "./AppText";

interface QuantityStepperProps {
  label?: string;
  icon?: React.ReactNode;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  darkMode?: boolean;
}

export default function QuantityStepper({
  label,
  icon,
  value,
  onChange,
  min = 1,
  max = 99,
  darkMode = false,
}: QuantityStepperProps) {
  return (
    <div className="flex items-center justify-between gap-3 shrink-0">
      <div
        className={`flex items-center gap-1.5 rounded-full border p-1 shadow-xs ${
          darkMode
            ? "border-zest/30 bg-[#0e1c13] text-bone"
            : "border-line bg-bone/40 text-charcoal"
        }`}
      >
        <button
          type="button"
          disabled={value <= min}
          onClick={() => onChange(Math.max(min, value - 1))}
          aria-label={label ? `Decrease ${label}` : "Decrease quantity"}
          className={`flex h-7 w-7 items-center justify-center rounded-full transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer shrink-0 ${
            darkMode
              ? "bg-basil text-zest hover:bg-basil-deep"
              : "bg-white text-basil border border-line hover:bg-basil hover:text-bone hover:border-basil"
          }`}
        >
          <MinusIcon className="h-3.5 w-3.5 stroke-[2.5]" />
        </button>

        <span
          className={`w-6 text-center font-display text-sm font-bold select-none ${
            darkMode ? "text-bone" : "text-charcoal"
          }`}
        >
          {value}
        </span>

        <button
          type="button"
          disabled={value >= max}
          onClick={() => onChange(Math.min(max, value + 1))}
          aria-label={label ? `Increase ${label}` : "Increase quantity"}
          className={`flex h-7 w-7 items-center justify-center rounded-full transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer shrink-0 ${
            darkMode
              ? "bg-zest text-basil hover:bg-zest-deep"
              : "bg-zest text-basil hover:bg-zest-deep shadow-xs"
          }`}
        >
          <PlusIcon className="h-3.5 w-3.5 stroke-[2.5]" />
        </button>
      </div>

      {label && (
        <div className="flex items-center gap-1.5">
          {icon && <span className="text-charcoal/50">{icon}</span>}
          <AppText variant="caption" color={darkMode ? "inverse" : "secondary"}>
            {label}
          </AppText>
        </div>
      )}
    </div>
  );
}
