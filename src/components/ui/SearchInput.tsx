import React from "react";
import TextInput from "./TextInput";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  darkMode?: boolean;
}

export default function SearchInput({
  value,
  onChange,
  placeholder = "Search menu items, ingredients...",
  className = "",
  darkMode = true,
}: SearchInputProps) {
  return (
    <TextInput
      type="search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      leftIcon={<MagnifyingGlassIcon className="h-5 w-5" />}
      rightIcon={
        value ? (
          <span className="flex items-center justify-center rounded-full bg-zest p-1 text-basil transition-colors hover:bg-zest-deep shadow-xs cursor-pointer">
            <XMarkIcon className="h-3.5 w-3.5 stroke-[2.5]" />
          </span>
        ) : undefined
      }
      onRightIconClick={() => onChange("")}
      className={className}
      inputClassName="[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none"
      darkMode={darkMode}
    />
  );
}
