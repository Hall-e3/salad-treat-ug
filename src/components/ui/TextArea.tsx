import React, { useId } from "react";
import AppText from "./AppText";
import { twMerge } from "tailwind-merge";

interface TextAreaProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  hint?: string;
  required?: boolean;
  name?: string;
  id?: string;
  className?: string;
  darkMode?: boolean;
}

export default function TextArea({
  label,
  placeholder,
  value,
  onChange,
  rows = 3,
  hint,
  required,
  name,
  id,
  className = "",
  darkMode = false,
}: TextAreaProps) {
  const generatedId = useId();
  const textareaId = id ?? generatedId;

  const baseStyles = darkMode
    ? "border-bone/20 bg-[#0c1610] text-bone placeholder:text-bone/40 focus:border-zest"
    : "border-line bg-herb-white text-charcoal placeholder:text-charcoal/40 focus:border-zest";

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <AppText
          as="label"
          variant="label-md"
          color={darkMode ? "inverse" : "primary"}
          htmlFor={textareaId}
          className="font-medium"
        >
          {label}
          {required && <span className="text-zest ml-0.5">*</span>}
        </AppText>
      )}

      <textarea
        id={textareaId}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        required={required}
        className={twMerge(
          "w-full rounded-2xl border p-3.5 text-xs sm:text-sm outline-none transition-colors font-medium resize-none",
          baseStyles
        )}
      />

      {hint && (
        <AppText variant="caption" color={darkMode ? "inverse" : "secondary"}>
          {hint}
        </AppText>
      )}
    </div>
  );
}
