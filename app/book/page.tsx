"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import VehicleSelector from "@/components/VehicleSelector";
import StatusStepper from "@/components/StatusStepper";
import DriverCard from "@/components/DriverCard";
import RouteIllustration from "@/components/RouteIllustration";
import BikeIllustration from "@/components/BikeIllustration";
import {
  vehicleTypes,
  estimateFare,
  pickRandomDriver,
  VehicleType,
} from "@/lib/mockData";
import { ArrowUpDown, ArrowLeft, MapPin, Star } from "lucide-react";

type Stage = "search" | "vehicle" | "matching" | "tracking" | "rate" | "done";

const TRIP_KM = 4.8;
const rideStages = ["Assigned", "Arriving", "On trip", "Completed"];

export default function BookPage() {
  const [stage, setStage] = useState<Stage>("search");
  const [pickup, setPickup] = useState("Indiranagar 100ft Road");
  const [drop, setDrop] = useState("Koramangala 5th Block");
  const [vehicleId, setVehicleId] = useState<VehicleType["id"] | null>(null);
  const [tripStage, setTripStage] = useState(0);
  const [driver] = useState(pickRandomDriver);
  const [rating, setRating] = useState(0);

  const vehicle = vehicleTypes.find((v) => v.id === vehicleId) ?? null;

  useEffect(() => {
    if (stage === "matching") {
      const t = setTimeout(() => setStage("tracking"), 2200);
      return () => clearTimeout(t);
    }
  }, [stage]);

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-md px-6 py-10">
        <div className="phone-frame rounded-[28px] bg-white p-5">
          {/* SEARCH STAGE */}
          {stage === "search" && (
            <div>
              <p className="font-display text-xl font-semibold text-ink">
                Let's find
                <br />
                your ride
              </p>
              <div className="mt-5 rounded-2xl bg-lime-soft p-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex-1">
                    <label className="text-xs text-graphite">Pickup</label>
                    <input
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      className="mt-0.5 w-full bg-transparent font-medium text-ink outline-none"
                    />
                  </div>
                  <button
                    aria-label="Swap pickup and drop"
                    onClick={() => {
                      setPickup(drop);
                      setDrop(pickup);
                    }}
                    className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-white text-ink"
                  >
                    <ArrowUpDown size={16} />
                  </button>
                </div>
                <div className="mt-3 border-t border-ink/10 pt-3">
                  <label className="text-xs text-graphite">Drop</label>
                  <input
                    value={drop}
                    onChange={(e) => setDrop(e.target.value)}
                    className="mt-0.5 w-full bg-transparent font-medium text-ink outline-none"
                  />
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm text-graphite">
                <MapPin size={15} />
                <span>{TRIP_KM} km · about {Math.round(TRIP_KM * 4)} min ride</span>
              </div>

              <button
                onClick={() => setStage("vehicle")}
                className="mt-6 w-full rounded-full bg-ink py-3.5 text-sm font-medium text-cloud transition hover:bg-ink/85"
              >
                Find rides
              </button>
            </div>
          )}

          {/* VEHICLE STAGE */}
          {stage === "vehicle" && (
            <div>
              <div className="flex items-center gap-3">
                <button
                  aria-label="Back"
                  onClick={() => setStage("search")}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-cloudline text-ink"
                >
                  <ArrowLeft size={16} />
                </button>
                <p className="font-display text-lg font-semibold text-ink">
                  Choose your ride
                </p>
              </div>
              <p className="mt-1 text-sm text-graphite">
                {pickup} → {drop}
              </p>

              <div className="mt-5">
                <VehicleSelector
                  vehicles={vehicleTypes}
                  km={TRIP_KM}
                  selected={vehicleId}
                  onSelect={setVehicleId}
                />
              </div>

              <button
                disabled={!vehicle}
                onClick={() => setStage("matching")}
                className="mt-6 w-full rounded-full bg-ink py-3.5 text-sm font-medium text-cloud transition hover:bg-ink/85 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {vehicle ? `Confirm ${vehicle.label} · ₹${estimateFare(vehicle, TRIP_KM)}` : "Select a vehicle"}
              </button>
            </div>
          )}

          {/* MATCHING STAGE */}
          {stage === "matching" && (
            <div className="flex flex-col items-center py-10 text-center">
              <div className="relative flex h-24 w-24 items-center justify-center">
                <span className="absolute inset-0 animate-ping rounded-full bg-violet/20" />
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-violet text-white">
                  <BikeIllustration variant="bike" className="h-9 w-14" />
                </span>
              </div>
              <p className="mt-6 font-display text-lg font-semibold text-ink">
                Finding your rider
              </p>
              <p className="mt-1 text-sm text-graphite">
                Matching you with someone nearby
              </p>
            </div>
          )}

          {/* TRACKING STAGE */}
          {stage === "tracking" && vehicle && (
            <div>
              <div className="flex items-center justify-between">
                <p className="font-display text-lg font-semibold text-ink">
                  Your ride is on the way
                </p>
              </div>

              <div className="mt-4">
                <StatusStepper steps={rideStages} currentIndex={tripStage} />
              </div>

              <div className="mt-4 overflow-hidden rounded-2xl border border-cloudline">
                <RouteIllustration className="h-40 w-full" />
              </div>

              <div className="mt-4">
                <DriverCard
                  name={driver.name}
                  vehicle={driver.vehicle}
                  plate={driver.plate}
                  rating={driver.rating}
                  etaLabel={
                    tripStage < 2 ? `${vehicle.etaMins} min away` : "En route to drop"
                  }
                />
              </div>

              <button
                onClick={() => {
                  if (tripStage < rideStages.length - 1) {
                    setTripStage((s) => s + 1);
                  } else {
                    setStage("rate");
                  }
                }}
                className="mt-6 w-full rounded-full bg-ink py-3.5 text-sm font-medium text-cloud transition hover:bg-ink/85"
              >
                {tripStage < rideStages.length - 1
                  ? `Simulate: ${rideStages[tripStage + 1]}`
                  : "Finish ride"}
              </button>
              <p className="mt-2 text-center text-xs text-graphite">
                This button stands in for live GPS updates until a backend is wired up.
              </p>
            </div>
          )}

          {/* RATE STAGE */}
          {stage === "rate" && vehicle && (
            <div className="text-center">
              <p className="font-display text-lg font-semibold text-ink">
                You've arrived at {drop}
              </p>
              <p className="mt-1 text-sm text-graphite">
                Fare: ₹{estimateFare(vehicle, TRIP_KM)} · {TRIP_KM} km with {driver.name}
              </p>

              <div className="mt-6 flex justify-center gap-1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    aria-label={`Rate ${n} stars`}
                    onClick={() => setRating(n)}
                    className="p-1"
                  >
                    <Star
                      size={30}
                      className={n <= rating ? "fill-lime text-ink" : "text-cloudline"}
                    />
                  </button>
                ))}
              </div>

              <button
                onClick={() => setStage("done")}
                disabled={rating === 0}
                className="mt-6 w-full rounded-full bg-ink py-3.5 text-sm font-medium text-cloud transition hover:bg-ink/85 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Submit rating
              </button>
            </div>
          )}

          {/* DONE STAGE */}
          {stage === "done" && (
            <div className="text-center">
              <p className="font-display text-lg font-semibold text-ink">
                Thanks for riding with Vroom
              </p>
              <p className="mt-1 text-sm text-graphite">
                Rated {rating} star{rating === 1 ? "" : "s"} · see you next trip
              </p>
              <Link
                href="/book"
                onClick={() => {
                  setStage("search");
                  setVehicleId(null);
                  setTripStage(0);
                  setRating(0);
                }}
                className="mt-6 inline-block w-full rounded-full bg-ink py-3.5 text-sm font-medium text-cloud transition hover:bg-ink/85"
              >
                Book another ride
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
