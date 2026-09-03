"use client";

import { useState } from "react";
import { UserPlusIcon, EnvelopeIcon, XMarkIcon, BriefcaseIcon } from "@heroicons/react/24/outline";

export function HiringBanner() {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <div className="bg-[#122417] border-y border-zest/30 py-6 px-4 sm:px-6 text-bone relative overflow-hidden">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3.5 min-w-0">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zest text-basil shrink-0 shadow-lg font-bold">
            <BriefcaseIcon className="h-6 w-6 stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-zest/20 px-2.5 py-0.5 text-[10px] font-bold text-zest uppercase tracking-wider">
                We Are Hiring!
              </span>
              <span className="text-xs text-bone/60">Salad Treat Team</span>
            </div>
            <h4 className="font-display text-base sm:text-lg text-bone mt-0.5">
              Open Positions: <span className="text-zest">Female Rider</span> &amp; <span className="text-zest">Customer Care (Call Centre)</span>
            </h4>
            <p className="text-xs text-bone/70">
              Min. 1 year experience in delivery / customer service. Submit CV to{" "}
              <a href="mailto:saladtreat256@gmail.com" className="text-zest underline hover:text-white font-bold">
                saladtreat256@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="mailto:saladtreat256@gmail.com?subject=Job%20Application%20-%20Salad%20Treat"
            className="flex items-center gap-2 rounded-full bg-zest px-5 py-2.5 text-xs font-bold text-basil hover:bg-zest-deep transition-all shadow-md cursor-pointer"
          >
            <EnvelopeIcon className="h-4 w-4 stroke-[2.5]" />
            <span>Apply Now via Email</span>
          </a>
          <button
            onClick={() => setIsDismissed(true)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-bone/10 text-bone/60 hover:bg-bone/20 hover:text-bone transition-colors cursor-pointer"
            title="Dismiss notice"
          >
            <XMarkIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
