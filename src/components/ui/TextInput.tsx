import React, { useId } from "react";
import AppText from "./AppText";
import { twMerge } from "tailwind-merge";

type InputType =
  | "text"
  | "email"
  | "password"
  | "search"
  | "tel"
  | "url"
  | "number"
  | "date";
type InputSize = "sm" | "md" | "lg";
type InputState = "default" | "error" | "success" | "disabled";

interface TextInputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: InputType;
  size?: InputSize;
  state?: InputState;
  hint?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onRightIconClick?: () => void;
  required?: boolean;
  name?: string;
  id?: string;
  className?: string;
  inputClassName?: string;
  autoComplete?: string;
  darkMode?: boolean;
}

const sizeClasses: Record<InputSize, string> = {
  sm: "h-9 px-3 text-xs",
  md: "h-11 px-4 text-xs sm:text-sm",
  lg: "h-13 px-5 text-sm sm:text-base",
};

export default function TextInput({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  size = "md",
  state = "default",
  hint,
  leftIcon,
  rightIcon,
  onRightIconClick,
  required,
  name,
  id,
  className = "",
  inputClassName = "",
  autoComplete,
  darkMode = false,
}: TextInputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  const hasLeft = Boolean(leftIcon);
  const hasRight = Boolean(rightIcon);

  const baseStyles = darkMode
    ? "border-bone/20 bg-[#0c1610] text-bone placeholder:text-bone/40 focus:border-zest focus:ring-2 focus:ring-zest/30"
    : "border-line bg-herb-white text-charcoal placeholder:text-charcoal/40 focus:border-zest-deep focus:ring-2 focus:ring-zest/25";

  const stateStyles =
    state === "error"
      ? "border-red-500 focus:border-red-500 focus:ring-red-200"
      : state === "disabled"
      ? "opacity-50 cursor-not-allowed"
      : "";

  return (
    <div className={`flex flex-col gap-1.5 w-full max-w-full min-w-0 ${className}`}>
      {label && (
        <AppText
          as="label"
          variant="label-sm"
          color={darkMode ? "zest" : "secondary"}
          htmlFor={inputId}
          className="font-bold uppercase tracking-wider text-[11px] truncate flex items-center gap-1"
        >
          {label}
          {required && <span className="text-zest ml-0.5">*</span>}
        </AppText>
      )}

      <div className="relative flex items-center w-full min-w-0">
        {hasLeft && (
          <span className="absolute left-3.5 flex items-center text-zest-deep dark:text-zest pointer-events-none shrink-0 z-10">
            {leftIcon}
          </span>
        )}

        <input
          id={inputId}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={state === "disabled"}
          required={required}
          autoComplete={autoComplete}
          className={twMerge(
            "w-full rounded-xl border outline-none transition-all duration-200 font-semibold shadow-xs",
            sizeClasses[size],
            baseStyles,
            stateStyles,
            hasLeft ? "pl-10" : "pl-3.5",
            hasRight ? "pr-10" : "pr-3.5",
            inputClassName
          )}
        />

        {hasRight && (
          <span
            onClick={onRightIconClick}
            className={`absolute right-3.5 flex items-center ${
              onRightIconClick ? "cursor-pointer hover:opacity-80" : ""
            }`}
          >
            {rightIcon}
          </span>
        )}
      </div>

      {hint && (
        <AppText
          variant="caption"
          color={state === "error" ? "error" : darkMode ? "inverse" : "secondary"}
        >
          {hint}
        </AppText>
      )}
    </div>
  );
}
