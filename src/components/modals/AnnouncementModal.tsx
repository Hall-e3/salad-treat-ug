"use client";

import { useEffect, useState } from "react";
import { XMarkIcon, SparklesIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui";
import { announcement } from "@/lib/menu-data";
import { useLockBodyScroll } from "@/lib/useLockBodyScroll";
import { usePersistedState } from "@/lib/usePersistedState";

export default function AnnouncementModal() {
  const [mounted, setMounted] = useState(false);
  const dismissKey = `salad-treat-announcement-dismissed-${announcement.startDate}-${announcement.endDate}`;
  const [dismissed, setDismissed] = usePersistedState(dismissKey, false);

  const isExpired = new Date(`${announcement.endDate}T23:59:59`) < new Date();
  const shouldShow = announcement.enabled && !isExpired && !dismissed;

  useEffect(() => {
    if (!shouldShow) return;
    const timer = setTimeout(() => setMounted(true), 900);
    return () => clearTimeout(timer);
  }, [shouldShow]);

  useLockBodyScroll(mounted);

  if (!shouldShow) return null;

  const close = () => {
    setMounted(false);
    setDismissed(true);
  };

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 transition-opacity duration-300 ${
        mounted ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div
        className="fixed inset-0 bg-basil-deep/80 backdrop-blur-sm cursor-pointer"
        onClick={close}
      />

      <div className="relative z-10 w-full max-w-sm min-w-0 rounded-3xl border-2 border-zest/40 bg-basil text-bone shadow-2xl p-6 sm:p-8 text-center animate-fadeIn">
        <button
          type="button"
          onClick={close}
          aria-label="Close announcement"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-bone/10 text-bone/70 hover:bg-bone/20 hover:text-bone transition-colors cursor-pointer shrink-0"
        >
          <XMarkIcon className="h-4 w-4" />
        </button>

        <span className="inline-flex max-w-full items-center gap-1.5 rounded-full bg-zest/15 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-zest border border-zest/30">
          <SparklesIcon className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">{announcement.eyebrow}</span>
        </span>

        <h2 className="mt-4 font-display text-2xl sm:text-3xl italic text-bone break-words">
          {announcement.title}
        </h2>

        <div className="mt-5 rounded-2xl bg-red-500 px-4 py-3 text-sm font-bold text-white shadow-md break-words">
          <div className="flex items-center justify-center gap-1.5 text-[11px] uppercase tracking-wider opacity-90 mb-1">
            <CalendarDaysIcon className="h-3.5 w-3.5 shrink-0" />
            <span>We&rsquo;ll be closed</span>
          </div>
          {announcement.dateRangeLabel}
        </div>

        <p className="mt-5 text-sm text-bone/80 leading-relaxed">
          {announcement.message}
        </p>

        <p className="mt-4 font-display text-lg italic text-zest break-words">
          {announcement.closingLine}
        </p>

        <Button
          text="Got It, Thanks!"
          variant="filled"
          size="md"
          onClick={close}
          className="mt-6 w-full justify-center"
        />
      </div>
    </div>
  );
}
