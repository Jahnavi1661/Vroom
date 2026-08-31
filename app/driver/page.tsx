"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import StatusStepper from "@/components/StatusStepper";
import RouteIllustration from "@/components/RouteIllustration";
import BikeIllustration from "@/components/BikeIllustration";
import { Power, Star, Wallet } from "lucide-react";

type Status = "offline" | "online" | "incoming" | "trip" | "summary";

const tripStages = ["Heading to pickup", "Rider onboard", "Completed"];

const mockRequest = {
  riderName: "Ananya S.",
  rating: 4.9,
  pickup: "Indiranagar 100ft Road",
  drop: "Koramangala 5th Block",
  km: 4.8,
  fare: 64,
};

export default function DriverPage() {
  const [status, setStatus] = useState<Status>("offline");
  const [tripStage, setTripStage] = useState(0);
  const [earnings, setEarnings] = useState(0);
  const [trips, setTrips] = useState(0);

  useEffect(() => {
    if (status === "online") {
      const t = setTimeout(() => setStatus("incoming"), 2600);
      return () => clearTimeout(t);
    }
  }, [status]);

  function goOnline() {
    setStatus("online");
  }

  function goOffline() {
    setStatus("offline");
    setTripStage(0);
  }

  function acceptRequest() {
    setStatus("trip");
    setTripStage(0);
  }

  function declineRequest() {
    setStatus("online");
  }

  function advanceTrip() {
    if (tripStage < tripStages.length - 1) {
      setTripStage((s) => s + 1);
    } else {
      setEarnings((e) => e + mockRequest.fare);
      setTrips((t) => t + 1);
      setStatus("summary");
    }
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-md px-6 py-10">
        {/* Earnings header */}
        <div className="flex items-center justify-between rounded-2xl border border-cloudline bg-white p-4">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-soft text-violet">
              <Wallet size={18} />
            </span>
            <div>
              <p className="text-xs text-graphite">Today's earnings</p>
              <p className="font-display text-lg font-semibold text-ink">
                ₹{earnings}
              </p>
            </div>
          </div>
          <div className="text-right text-xs text-graphite">
            <p className="font-medium text-ink">{trips}</p>
            trips today
          </div>
        </div>

        <div className="phone-frame mt-6 rounded-[28px] bg-white p-5">
          {/* OFFLINE */}
          {status === "offline" && (
            <div className="flex flex-col items-center py-10 text-center">
              <BikeIllustration variant="bike" className="h-16 w-28" />
              <p className="mt-4 font-display text-lg font-semibold text-ink">
                You're offline
              </p>
              <p className="mt-1 max-w-[220px] text-sm text-graphite">
                Go online to start receiving ride requests nearby.
              </p>
              <button
                onClick={goOnline}
                className="mt-6 flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-cloud transition hover:bg-ink/85"
              >
                <Power size={16} />
                Go online
              </button>
            </div>
          )}

          {/* ONLINE / WAITING */}
          {status === "online" && (
            <div className="flex flex-col items-center py-10 text-center">
              <div className="relative flex h-24 w-24 items-center justify-center">
                <span className="absolute inset-0 animate-ping rounded-full bg-lime/40" />
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-lime text-ink">
                  <Power size={22} />
                </span>
              </div>
              <p className="mt-6 font-display text-lg font-semibold text-ink">
                You're online
              </p>
              <p className="mt-1 text-sm text-graphite">
                Listening for ride requests near you
              </p>
              <button
                onClick={goOffline}
                className="mt-6 rounded-full border border-cloudline px-6 py-3 text-sm font-medium text-ink transition hover:border-violet/50"
              >
                Go offline
              </button>
            </div>
          )}

          {/* INCOMING REQUEST */}
          {status === "incoming" && (
            <div>
              <p className="font-display text-lg font-semibold text-ink">
                New ride request
              </p>
              <div className="mt-4 flex items-center justify-between rounded-2xl bg-violet-soft p-4">
                <div>
                  <p className="font-medium text-ink">{mockRequest.riderName}</p>
                  <p className="flex items-center gap-1 text-xs text-graphite">
                    <Star size={12} className="fill-ink text-ink" />
                    {mockRequest.rating}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-display font-semibold text-ink">
                    ₹{mockRequest.fare}
                  </p>
                  <p className="text-xs text-graphite">{mockRequest.km} km</p>
                </div>
              </div>

              <div className="mt-4 space-y-2 text-sm">
                <p className="text-ink">
                  <span className="text-graphite">Pickup · </span>
                  {mockRequest.pickup}
                </p>
                <p className="text-ink">
                  <span className="text-graphite">Drop · </span>
                  {mockRequest.drop}
                </p>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={declineRequest}
                  className="flex-1 rounded-full border border-cloudline py-3 text-sm font-medium text-ink transition hover:border-violet/50"
                >
                  Decline
                </button>
                <button
                  onClick={acceptRequest}
                  className="flex-1 rounded-full bg-ink py-3 text-sm font-medium text-cloud transition hover:bg-ink/85"
                >
                  Accept
                </button>
              </div>
            </div>
          )}

          {/* TRIP IN PROGRESS */}
          {status === "trip" && (
            <div>
              <p className="font-display text-lg font-semibold text-ink">
                Trip with {mockRequest.riderName}
              </p>
              <div className="mt-4">
                <StatusStepper steps={tripStages} currentIndex={tripStage} />
              </div>
              <div className="mt-4 overflow-hidden rounded-2xl border border-cloudline">
                <RouteIllustration className="h-40 w-full" />
              </div>
              <p className="mt-4 text-sm text-ink">
                <span className="text-graphite">
                  {tripStage === 0 ? "Heading to · " : "Heading to · "}
                </span>
                {tripStage === 0 ? mockRequest.pickup : mockRequest.drop}
              </p>
              <button
                onClick={advanceTrip}
                className="mt-6 w-full rounded-full bg-ink py-3.5 text-sm font-medium text-cloud transition hover:bg-ink/85"
              >
                {tripStage < tripStages.length - 1
                  ? `Simulate: ${tripStages[tripStage + 1]}`
                  : `Complete trip · ₹${mockRequest.fare}`}
              </button>
              <p className="mt-2 text-center text-xs text-graphite">
                This button stands in for live GPS updates until a backend is wired up.
              </p>
            </div>
          )}

          {/* SUMMARY */}
          {status === "summary" && (
            <div className="text-center">
              <p className="font-display text-lg font-semibold text-ink">
                Trip complete
              </p>
              <p className="mt-1 text-sm text-graphite">
                You earned ₹{mockRequest.fare} from {mockRequest.riderName}
              </p>
              <button
                onClick={goOnline}
                className="mt-6 w-full rounded-full bg-ink py-3.5 text-sm font-medium text-cloud transition hover:bg-ink/85"
              >
                Go online for the next ride
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
