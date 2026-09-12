export type Announcement = {
  enabled: boolean;
  eyebrow: string;
  title: string;
  /** ISO date (YYYY-MM-DD) the closure starts — used to auto-expire the popup. */
  startDate: string;
  /** ISO date (YYYY-MM-DD) the closure ends — the popup stops showing after this date. */
  endDate: string;
  dateRangeLabel: string;
  message: string;
  closingLine: string;
};

// Flip `enabled` to true and fill in real dates when there's an upcoming
// closure to announce. It auto-hides once `endDate` has passed, so it's
// safe to leave enabled and forget about it.
export const announcement: Announcement = {
  enabled: false,
  eyebrow: "Holiday Notice",
  title: "Easter Goodness to You",
  startDate: "2025-04-18",
  endDate: "2025-04-21",
  dateRangeLabel: "Friday, 18 Apr — Monday, 21 Apr",
  message:
    "We shall be closed over the Easter holiday. Subscriptions resume automatically right after — no days will be lost from your plan.",
  closingLine: "Happy Healthy Holidays!",
};
