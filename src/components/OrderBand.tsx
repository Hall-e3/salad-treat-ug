"use client";

import Image from "next/image";
import { useState } from "react";
import { deliveryZones, formatUGX } from "@/lib/menu-data";
import { useCart } from "@/lib/cart";
import {
  ClockIcon,
  PhoneIcon,
  CreditCardIcon,
  ShoppingBagIcon,
  MapPinIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";

import { SelectInput } from "@/components/ui";

export function OrderBand() {
  const { openCart, totalItems, selectedZoneId, setSelectedZoneId } = useCart();
  const [activeZoneId, setActiveZoneId] = useState(selectedZoneId);

  const currentZone =
    deliveryZones.find((z) => z.id === activeZoneId) || deliveryZones[0];

  const handleSelectZone = (zoneId: string) => {
    setActiveZoneId(zoneId);
    setSelectedZoneId(zoneId);
  };

  const zoneOptions = deliveryZones.map((zone) => ({
    value: zone.id,
    label: zone.name,
  }));

  return (
    <section id="order" className="relative overflow-hidden bg-basil-deep">
      {/* Visual Header Image Banner */}
      <div className="relative h-[420px] w-full md:h-[480px]">
        <Image
          src="/photos/delivery-rider.png"
          alt="A Salad Treat delivery rider ready to head out with a fresh order in Kampala"
          fill
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-basil-deep via-basil-deep/60 to-basil-deep/20" />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 text-center text-bone">
            <span className="font-display text-base sm:text-lg italic text-zest">
              Safe, Timely, To Your Doorstep
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-5xl md:text-6xl text-bone break-words">
              Fresh Delivery Across Kampala
            </h2>
            <p className="mt-4 max-w-xl text-xs sm:text-base text-bone/80">
              Dispatched daily in thermal insulation to guarantee crunch and freshness from our kitchen to your table.
            </p>

            <button
              onClick={openCart}
              className="mt-6 sm:mt-8 flex items-center gap-2 rounded-full bg-zest px-7 sm:px-9 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-basil transition-all transform hover:-translate-y-0.5 hover:bg-zest-deep shadow-xl shadow-zest/20 cursor-pointer"
            >
              <ShoppingBagIcon className="h-5 w-5 text-basil shrink-0" />
              <span className="truncate">
                {totalItems > 0
                  ? `Review Order (${totalItems} items)`
                  : "Start Your Order Now"}
              </span>
            </button>
          </div>
        </div>

        {/* Interactive Delivery Zone Lookup & Store Operational Info */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-bone border-t border-bone/10">
          <div className="grid gap-10 lg:grid-cols-2 items-center min-w-0">
            {/* Operational Details */}
            <div className="space-y-8 min-w-0">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-zest flex items-center gap-1.5">
                  <ClockIcon className="h-4 w-4 shrink-0" /> Delivery Schedule
                </span>
                <h3 className="font-display text-xl sm:text-3xl mt-1 text-bone break-words">
                  Operating Mon &ndash; Sat, 8am to 5pm
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-bone/70 leading-relaxed">
                  Same-day orders placed before 10:30am are delivered in time for lunch. Subscription meal plans follow automated daily drop-offs.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-y border-bone/15 py-6">
                <div>
                  <p className="font-display text-base sm:text-lg italic text-zest flex items-center gap-1.5">
                    <PhoneIcon className="h-4 w-4 shrink-0" /> Direct Phone Lines
                  </p>
                  <p className="mt-2 text-xs sm:text-sm font-semibold text-bone">0752 182 379</p>
                  <p className="text-xs sm:text-sm font-semibold text-bone">0775 980 728</p>
                </div>

                <div>
                  <p className="font-display text-base sm:text-lg italic text-zest flex items-center gap-1.5">
                    <CreditCardIcon className="h-4 w-4 shrink-0" /> Payment Methods
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-bone/80">MTN Mobile Money</p>
                  <p className="text-xs sm:text-sm text-bone/80">Airtel Money · Cash · Bank</p>
                </div>
              </div>
            </div>

          {/* Delivery Fee Calculator Box */}
          <div className="rounded-3xl border border-bone/20 bg-[#16271c] p-6 sm:p-8 shadow-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-zest flex items-center gap-1.5">
              <TruckIcon className="h-4 w-4" /> Instant Delivery Estimator
            </span>
            <h4 className="font-display text-2xl text-bone mt-1">
              Select Your Location in Kampala
            </h4>

            <div className="mt-4">
              <SelectInput
                leftIcon={<MapPinIcon className="h-5 w-5" />}
                value={activeZoneId}
                onChange={(e) => handleSelectZone(e.target.value)}
                options={zoneOptions}
                darkMode={true}
              />
            </div>

            <div className="mt-6 rounded-2xl bg-[#0b160e] p-5 border border-bone/10 flex items-center justify-between">
              <div>
                <p className="text-xs text-bone/50 uppercase">Estimated Delivery Fee</p>
                <p className="font-display text-2xl text-zest mt-0.5">
                  UGX {formatUGX(currentZone.fee)}
                </p>
                <p className="text-xs text-bone/40 mt-1">
                  *FREE delivery for Monthly Meal Subscriptions
                </p>
              </div>

              <div className="text-right">
                <p className="text-xs text-bone/50 uppercase">Typical ETA</p>
                <p className="font-bold text-sm text-bone mt-1 flex items-center justify-end gap-1">
                  <ClockIcon className="h-4 w-4 text-zest" />
                  <span>{currentZone.eta}</span>
                </p>
              </div>
            </div>

            <button
              onClick={openCart}
              className="mt-6 w-full rounded-full bg-zest py-3.5 text-sm font-bold text-basil transition-all hover:bg-zest-deep shadow-md cursor-pointer"
            >
              Set Location & Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
