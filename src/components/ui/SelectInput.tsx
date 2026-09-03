import React, { useId } from "react";
import AppText from "./AppText";
import { twMerge } from "tailwind-merge";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectInputProps {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
  placeholder?: string;
  leftIcon?: React.ReactNode;
  required?: boolean;
  name?: string;
  id?: string;
  hint?: string;
  className?: string;
  darkMode?: boolean;
  disabled?: boolean;
}

export default function SelectInput({
  label,
  value,
  onChange,
  options,
  placeholder,
  leftIcon,
  required,
  name,
  id,
  hint,
  className = "",
  darkMode = false,
  disabled = false,
}: SelectInputProps) {
  const generatedId = useId();
  const selectId = id ?? generatedId;
  const hasLeft = Boolean(leftIcon);

  const baseStyles = darkMode
    ? "border-bone/20 bg-[#0c1610] text-bone focus:border-zest"
    : "border-line bg-herb-white text-charcoal focus:border-zest";

  return (
    <div className={`flex flex-col gap-1.5 w-full max-w-full min-w-0 ${className}`}>
      {label && (
        <AppText
          as="label"
          variant="label-md"
          color={darkMode ? "inverse" : "primary"}
          htmlFor={selectId}
          className="font-medium truncate"
        >
          {label}
          {required && <span className="text-zest ml-0.5">*</span>}
        </AppText>
      )}

      <div className="relative flex items-center w-full min-w-0">
        {hasLeft && (
          <span className="absolute left-3.5 flex items-center text-charcoal/40 dark:text-bone/40 pointer-events-none">
            {leftIcon}
          </span>
        )}

        <select
          id={selectId}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          className={twMerge(
            "w-full appearance-none rounded-2xl border px-4 py-2.5 text-xs sm:text-sm font-medium outline-none transition-colors cursor-pointer",
            baseStyles,
            hasLeft ? "pl-10" : "",
            "pr-10",
            disabled ? "opacity-50 cursor-not-allowed" : ""
          )}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option
              key={opt.value}
              value={opt.value}
              disabled={opt.disabled}
              className={darkMode ? "bg-basil text-bone" : "bg-white text-charcoal"}
            >
              {opt.label}
            </option>
          ))}
        </select>

        <ChevronDownIcon className="absolute right-3.5 h-4 w-4 pointer-events-none text-charcoal/50 dark:text-bone/50" />
      </div>

      {hint && (
        <AppText variant="caption" color={darkMode ? "inverse" : "secondary"}>
          {hint}
        </AppText>
      )}
    </div>
  );
}
