import React from "react";
import Chip from "./Chip";

export interface TabItem<T extends string = string> {
  id: T;
  label: string;
  icon?: React.ReactNode;
  tooltip?: string;
}

interface TabProps<T extends string = string> {
  tabs: TabItem<T>[];
  activeTab: T;
  onTabChange: (id: T) => void;
  className?: string;
  darkMode?: boolean;
}

export default function Tab<T extends string = string>({
  tabs,
  activeTab,
  onTabChange,
  className = "",
  darkMode = true,
}: TabProps<T>) {
  return (
    <div className={`flex items-center gap-2.5 overflow-x-auto no-scrollbar max-w-full py-1 ${className}`}>
      {tabs.map((tab) => (
        <Chip
          key={tab.id}
          label={tab.label}
          icon={tab.icon}
          tooltip={tab.tooltip}
          isActive={activeTab === tab.id}
          onClick={() => onTabChange(tab.id)}
          darkMode={darkMode}
        />
      ))}
    </div>
  );
}
