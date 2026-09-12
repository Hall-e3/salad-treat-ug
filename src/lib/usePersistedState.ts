"use client";

import { useEffect, useState } from "react";

/**
 * Like useState, but backed by localStorage. WhatsApp's app-switch on mobile
 * often gets the tab killed and reloaded on return, wiping plain component
 * state — this survives that round trip the same way the cart already does.
 */
export function usePersistedState<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(key);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration of persisted state from localStorage
      if (raw) setValue({ ...initialValue, ...JSON.parse(raw) });
    } catch {
      // ignore
    }
    setHydrated(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // ignore
    }
  }, [key, value, hydrated]);

  return [value, setValue] as const;
}
