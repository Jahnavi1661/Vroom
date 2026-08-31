export type VehicleType = {
  id: "bike" | "scooter" | "premium";
  label: string;
  tagline: string;
  etaMins: number;
  baseFare: number;
  perKm: number;
  capacity: string;
};

export const vehicleTypes: VehicleType[] = [
  {
    id: "bike",
    label: "Bike",
    tagline: "Fastest through traffic",
    etaMins: 3,
    baseFare: 22,
    perKm: 6.5,
    capacity: "1 rider",
  },
  {
    id: "scooter",
    label: "Scooter",
    tagline: "Steadier, more legroom",
    etaMins: 5,
    baseFare: 26,
    perKm: 7.2,
    capacity: "1 rider",
  },
  {
    id: "premium",
    label: "Premium Moto",
    tagline: "Newer bikes, riding jackets provided",
    etaMins: 6,
    baseFare: 38,
    perKm: 9.8,
    capacity: "1 rider",
  },
];

export const drivers = [
  { name: "Manjunath R.", rating: 4.92, plate: "KA 03 AK 7741", vehicle: "Honda Activa", trips: 3400 },
  { name: "Suresh K.", rating: 4.87, plate: "KA 05 EQ 2210", vehicle: "TVS Sport", trips: 2110 },
  { name: "Fahad M.", rating: 4.95, plate: "KA 01 MJ 9034", vehicle: "Bajaj Pulsar", trips: 5210 },
  { name: "Deepa N.", rating: 4.98, plate: "KA 41 CJ 5567", vehicle: "Yamaha Ray ZR", trips: 1870 },
];

export function estimateFare(vehicle: VehicleType, km: number) {
  return Math.round(vehicle.baseFare + vehicle.perKm * km);
}

export function pickRandomDriver() {
  return drivers[Math.floor(Math.random() * drivers.length)];
}
