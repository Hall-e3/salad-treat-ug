import React from "react";
import AppText from "./AppText";
import Button from "./Button";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  actionText?: string;
  onAction?: () => void;
  className?: string;
  darkMode?: boolean;
}

export default function EmptyState({
  icon = <ShoppingBagIcon className="h-12 w-12 text-charcoal/30 dark:text-bone/30 mx-auto" />,
  title,
  description,
  actionText,
  onAction,
  className = "",
  darkMode = false,
}: EmptyStateProps) {
  return (
    <div className={`text-center py-12 px-6 rounded-3xl border border-line dark:border-bone/10 bg-white dark:bg-[#16271c] ${className}`}>
      {icon}
      <AppText
        variant="heading-sm"
        color={darkMode ? "inverse" : "primary"}
        className="mt-3"
      >
        {title}
      </AppText>
      {description && (
        <AppText
          variant="body-sm"
          color={darkMode ? "inverse" : "secondary"}
          className="mt-1 max-w-sm mx-auto opacity-70"
        >
          {description}
        </AppText>
      )}
      {actionText && onAction && (
        <div className="mt-5">
          <Button text={actionText} onClick={onAction} variant="filled" size="sm" />
        </div>
      )}
    </div>
  );
}
