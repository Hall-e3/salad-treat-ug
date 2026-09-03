import React from "react";
import AppText from "./AppText";
import { SparklesIcon, InformationCircleIcon, ExclamationTriangleIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

type AlertVariant = "info" | "success" | "warning" | "brand";

interface CustomAlertProps {
  title?: string;
  message: string;
  variant?: AlertVariant;
  onClose?: () => void;
  className?: string;
}

export default function CustomAlert({
  title,
  message,
  variant = "brand",
  className = "",
}: CustomAlertProps) {
  const icons: Record<AlertVariant, React.ReactNode> = {
    info: <InformationCircleIcon className="h-5 w-5 text-blue-600" />,
    success: <CheckCircleIcon className="h-5 w-5 text-emerald-600" />,
    warning: <ExclamationTriangleIcon className="h-5 w-5 text-amber-600" />,
    brand: <SparklesIcon className="h-5 w-5 text-zest" />,
  };

  const bgColors: Record<AlertVariant, string> = {
    info: "bg-blue-50 border-blue-200 text-blue-900",
    success: "bg-emerald-50 border-emerald-200 text-emerald-900",
    warning: "bg-amber-50 border-amber-200 text-amber-900",
    brand: "bg-zest/10 border-zest/30 text-basil dark:text-bone",
  };

  return (
    <div
      className={`flex items-start gap-3 rounded-2xl border p-4 shadow-sm ${bgColors[variant]} ${className}`}
    >
      <span className="shrink-0 mt-0.5">{icons[variant]}</span>
      <div className="flex-1">
        {title && (
          <AppText variant="label-lg" className="font-bold mb-0.5">
            {title}
          </AppText>
        )}
        <AppText variant="body-sm">{message}</AppText>
      </div>
    </div>
  );
}
