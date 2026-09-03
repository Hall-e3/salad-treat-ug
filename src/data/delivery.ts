import type { DeliveryZone } from "@/types";

export type { DeliveryZone } from "@/types";

export const deliveryZones: DeliveryZone[] = [
  { id: "nakasero", name: "Nakasero / Central Business District", fee: 4000, eta: "25-35 mins" },
  { id: "kololo", name: "Kololo / Naguru", fee: 5000, eta: "30-40 mins" },
  { id: "bugolobi", name: "Bugolobi / Mbuya", fee: 6000, eta: "30-45 mins" },
  { id: "ntinda", name: "Ntinda / Bukoto / Kisaasi", fee: 6000, eta: "35-45 mins" },
  { id: "muyenga", name: "Muyenga / Kansanga / Kabalagala", fee: 7000, eta: "40-50 mins" },
  { id: "rubaga", name: "Rubaga / Mengo / Namirembe", fee: 7000, eta: "40-55 mins" },
  { id: "other", name: "Other Kampala / Entebbe Rd (Contact us)", fee: 8000, eta: "45-60 mins" },
];
