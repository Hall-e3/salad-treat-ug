"use client";

import React, { useId, useState, useRef, useEffect } from "react";
import AppText from "./AppText";
import { twMerge } from "tailwind-merge";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/24/outline";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectInputProps {
  label?: string;
  value: string;
  onChange: (e: { target: { name?: string; value: string } }) => void;
  options: SelectOption[];
  placeholder?: string;
  leftIcon?: React.ReactNode;
  required?: boolean;
  name?: string;
  id?: string;
  hint?: string;
  error?: string;
  className?: string;
  selectClassName?: string;
  darkMode?: boolean;
  disabled?: boolean;
}

export default function SelectInput({
  label,
  value,
  onChange,
  options,
  placeholder = "Select an option...",
  leftIcon,
  required,
  name,
  id,
  hint,
  error,
  className = "",
  selectClassName = "",
  darkMode = false,
  disabled = false,
}: SelectInputProps) {
  const generatedId = useId();
  const selectId = id ?? generatedId;
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  // Close popover when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (optionValue: string) => {
    if (disabled) return;
    onChange({ target: { name, value: optionValue } });
    setIsOpen(false);
  };

  const triggerBaseStyles = darkMode
    ? "border-bone/20 bg-[#0c1610] text-bone hover:border-zest/60"
    : "border-line bg-herb-white text-charcoal hover:border-zest/60";

  const activeFocusStyles = isOpen
    ? darkMode
      ? "border-zest ring-2 ring-zest/30"
      : "border-zest-deep ring-2 ring-zest/25"
    : "";

  return (
    <div
      ref={containerRef}
      className={`flex flex-col gap-1.5 w-full max-w-full min-w-0 relative ${className}`}
    >
      {label && (
        <AppText
          as="label"
          variant="label-sm"
          color={darkMode ? "zest" : "secondary"}
          htmlFor={selectId}
          className="font-bold uppercase tracking-wider text-[11px] truncate flex items-center gap-1 cursor-pointer"
          onClick={() => !disabled && setIsOpen(!isOpen)}
        >
          {label}
          {required && <span className="text-zest ml-0.5">*</span>}
        </AppText>
      )}

      {/* Trigger Button */}
      <div className="relative flex items-center w-full min-w-0">
        <button
          type="button"
          id={selectId}
          disabled={disabled}
          onClick={() => setIsOpen(!isOpen)}
          className={twMerge(
            "w-full flex items-center justify-between rounded-xl border px-3.5 py-2.5 text-xs sm:text-sm font-semibold outline-none transition-all duration-200 cursor-pointer shadow-xs select-none",
            triggerBaseStyles,
            activeFocusStyles,
            disabled ? "opacity-50 cursor-not-allowed" : "",
            error ? "border-red-500 focus:ring-red-200" : "",
            selectClassName
          )}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <div className="flex items-center gap-2.5 min-w-0 pr-2">
            {leftIcon && (
              <span className="text-zest-deep dark:text-zest shrink-0">
                {leftIcon}
              </span>
            )}
            <span
              className={twMerge(
                "truncate text-left font-medium",
                selectedOption
                  ? darkMode
                    ? "text-bone"
                    : "text-charcoal font-semibold"
                  : darkMode
                  ? "text-bone/50"
                  : "text-charcoal/50"
              )}
            >
              {selectedOption ? selectedOption.label : placeholder}
            </span>
          </div>

          <ChevronDownIcon
            className={twMerge(
              "h-4 w-4 shrink-0 transition-transform duration-200",
              darkMode ? "text-zest" : "text-charcoal/60",
              isOpen ? "rotate-180 text-zest-deep dark:text-zest" : ""
            )}
          />
        </button>

        {/* Custom Popover Dropdown Menu */}
        {isOpen && (
          <div
            className={twMerge(
              "absolute left-0 right-0 top-full z-50 mt-1.5 max-h-60 overflow-y-auto rounded-2xl border p-1.5 shadow-2xl transition-all duration-150 animate-fadeIn min-w-0",
              darkMode
                ? "border-bone/20 bg-[#16271c] text-bone shadow-black/60"
                : "border-line bg-white text-charcoal shadow-basil-deep/15"
            )}
            role="listbox"
          >
            {options.length === 0 ? (
              <div className="px-3 py-2 text-xs opacity-60 text-center">
                No options available
              </div>
            ) : (
              options.map((opt) => {
                const isSelected = opt.value === value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    disabled={opt.disabled}
                    onClick={() => handleSelect(opt.value)}
                    className={twMerge(
                      "w-full flex items-center justify-between rounded-xl px-3 py-2.5 text-xs sm:text-sm font-semibold transition-colors cursor-pointer text-left min-w-0",
                      isSelected
                        ? darkMode
                          ? "bg-zest/20 text-zest font-bold"
                          : "bg-basil/10 text-basil font-bold"
                        : darkMode
                        ? "hover:bg-basil/40 text-bone/90"
                        : "hover:bg-bone/80 text-charcoal/90",
                      opt.disabled ? "opacity-40 cursor-not-allowed" : ""
                    )}
                    role="option"
                    aria-selected={isSelected}
                  >
                    <span className="truncate pr-2">{opt.label}</span>
                    {isSelected && (
                      <CheckIcon
                        className={twMerge(
                          "h-4 w-4 shrink-0 stroke-[2.5]",
                          darkMode ? "text-zest" : "text-zest-deep"
                        )}
                      />
                    )}
                  </button>
                );
              })
            )}
          </div>
        )}
      </div>

      {error ? (
        <AppText variant="caption" className="text-red-500 font-medium">
          {error}
        </AppText>
      ) : hint ? (
        <AppText variant="caption" color={darkMode ? "inverse" : "secondary"}>
          {hint}
        </AppText>
      ) : null}
    </div>
  );
}
