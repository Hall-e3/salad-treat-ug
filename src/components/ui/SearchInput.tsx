import React from "react";
import TextInput from "./TextInput";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

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
      className={className}
      darkMode={darkMode}
    />
  );
}
