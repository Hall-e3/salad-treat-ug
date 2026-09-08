"use client";

import { useState } from "react";
import { UserPlusIcon, EnvelopeIcon, XMarkIcon, BriefcaseIcon } from "@heroicons/react/24/outline";

export function HiringBanner() {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <div className="bg-[#122417] border-y border-zest/30 py-6 sm:py-7 px-4 sm:px-6 lg:px-8 text-bone relative overflow-hidden">
      <button
        onClick={() => setIsDismissed(true)}
        className="absolute top-3 right-3 sm:top-1/2 sm:right-6 sm:-translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-bone/10 text-bone/60 hover:bg-bone/20 hover:text-bone transition-colors cursor-pointer z-10"
        title="Dismiss notice"
      >
        <XMarkIcon className="h-4 w-4" />
      </button>

      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-5 md:gap-4 min-w-0">
        <div className="flex items-start gap-3.5 min-w-0 pr-10 sm:pr-14 md:pr-0">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zest text-basil shrink-0 shadow-lg font-bold">
            <BriefcaseIcon className="h-6 w-6 stroke-[2.5]" />
          </div>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-zest/20 px-2.5 py-0.5 text-[10px] font-bold text-zest uppercase tracking-wider">
                We Are Hiring!
              </span>
              <span className="text-xs text-bone/60">Salad Treat Team</span>
            </div>
            <h4 className="font-display text-base sm:text-lg text-bone mt-1.5 break-words">
              Open Positions: <span className="text-zest">Delivery Rider</span> &amp; <span className="text-zest">Call Center Agent</span>
            </h4>
            <p className="mt-1 text-xs text-bone/70 leading-relaxed">
              Min. 1 year experience in delivery or call center operations. Submit CV to{" "}
              <a href="mailto:saladtreat256@gmail.com" className="text-zest underline hover:text-white font-bold">
                saladtreat256@gmail.com
              </a>
            </p>
          </div>
        </div>

        <a
          href="mailto:saladtreat256@gmail.com?subject=Job%20Application%20-%20Salad%20Treat"
          className="flex w-full md:w-auto items-center justify-center gap-2 rounded-full bg-zest px-5 py-2.5 text-xs font-bold text-basil hover:bg-zest-deep transition-all shadow-md cursor-pointer shrink-0"
        >
          <EnvelopeIcon className="h-4 w-4 stroke-[2.5]" />
          <span>Apply Now via Email</span>
        </a>
      </div>
    </div>
  );
}
