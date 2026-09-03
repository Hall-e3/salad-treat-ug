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
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-2 rounded-full border border-line bg-white dark:bg-[#0c1610] p-1">
        <button
          type="button"
          disabled={value <= min}
          onClick={() => onChange(Math.max(min, value - 1))}
          aria-label={label ? `Decrease ${label}` : "Decrease quantity"}
          className="flex h-6 w-6 items-center justify-center rounded-full text-charcoal/70 dark:text-bone/70 transition-colors hover:bg-bone dark:hover:bg-basil disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
        >
          <MinusIcon className="h-3.5 w-3.5" />
        </button>

        <AppText
          variant="label-md"
          color={darkMode ? "inverse" : "primary"}
          as="span"
          className="w-5 text-center font-bold"
        >
          {value}
        </AppText>

        <button
          type="button"
          disabled={value >= max}
          onClick={() => onChange(Math.min(max, value + 1))}
          aria-label={label ? `Increase ${label}` : "Increase quantity"}
          className="flex h-6 w-6 items-center justify-center rounded-full text-charcoal/70 dark:text-bone/70 transition-colors hover:bg-bone dark:hover:bg-basil disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
        >
          <PlusIcon className="h-3.5 w-3.5" />
        </button>
      </div>

      {label && (
        <div className="flex items-center gap-1.5">
          {icon && <span className="text-charcoal/50 dark:text-bone/50">{icon}</span>}
          <AppText variant="caption" color={darkMode ? "inverse" : "secondary"}>
            {label}
          </AppText>
        </div>
      )}
    </div>
  );
}
