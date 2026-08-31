import Link from "next/link";
import Navbar from "@/components/Navbar";
import BikeIllustration from "@/components/BikeIllustration";
import { ArrowUpDown, Bell, Home as HomeIcon, MessageCircle, Settings, Grid2x2 } from "lucide-react";

const steps = [
  {
    title: "Drop your pin",
    body: "Set where you are and where you're headed. We match you with riders already close by.",
  },
  {
    title: "Pick your ride",
    body: "Bike, scooter, or a premium moto with a jacket included — see the fare before you confirm.",
  },
  {
    title: "Hop on and go",
    body: "Track your rider on the map, share your trip with someone, and pay however you like.",
  },
];

const vehicleCards = [
  { id: "bike" as const, name: "Bike", price: "From ₹22", note: "Fastest through traffic" },
  { id: "scooter" as const, name: "Scooter", price: "From ₹26", note: "Steadier, more legroom" },
  { id: "premium" as const, name: "Premium Moto", price: "From ₹38", note: "Newer bikes, jacket included" },
];

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink md:text-5xl">
            Two wheels through the city, in the time a car takes to turn around.
          </h1>
          <p className="mt-5 max-w-md text-graphite">
            Vroom puts a bike or scooter at your door in minutes. No traffic jams,
            no waiting for a car that can't fit down your street.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/book"
              className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-cloud transition hover:bg-ink/85"
            >
              Book a ride
            </Link>
            <Link
              href="/driver"
              className="rounded-full border border-cloudline bg-white px-6 py-3 text-sm font-medium text-ink transition hover:border-violet/50"
            >
              Drive and earn
            </Link>
          </div>
          <div className="mt-10 flex gap-8">
            <div>
              <p className="font-display text-2xl font-semibold text-ink">3 min</p>
              <p className="text-sm text-graphite">average pickup</p>
            </div>
            <div>
              <p className="font-display text-2xl font-semibold text-ink">12</p>
              <p className="text-sm text-graphite">cities live</p>
            </div>
            <div>
              <p className="font-display text-2xl font-semibold text-ink">₹22</p>
              <p className="text-sm text-graphite">starting fare</p>
            </div>
          </div>
        </div>

        {/* Phone mockup */}
        <div className="mx-auto w-full max-w-[300px]">
          <div className="phone-frame overflow-hidden rounded-[28px] bg-white">
            <div className="rounded-b-[24px] bg-violet px-5 pb-8 pt-6 text-white">
              <div className="flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40">
                  <Grid2x2 size={16} />
                </span>
                <span className="font-display text-lg font-semibold">Vroom</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40">
                  <Bell size={16} />
                </span>
              </div>
            </div>

            <div className="-mt-5 px-4">
              <div className="rounded-2xl bg-white p-4 card-shadow">
                <p className="font-display text-lg font-semibold text-ink">
                  Let's find
                  <br />
                  your ride
                </p>
                <div className="mt-4 rounded-xl bg-lime-soft p-3.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-graphite">Pickup</p>
                      <p className="text-sm font-medium text-ink">Indiranagar</p>
                    </div>
                    <ArrowUpDown size={16} className="text-ink" />
                  </div>
                  <div className="mt-3 border-t border-ink/10 pt-3">
                    <p className="text-xs text-graphite">Drop</p>
                    <p className="text-sm font-medium text-ink">Koramangala</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 pb-6 pt-4">
              <p className="text-sm font-medium text-ink">On its way</p>
              <div className="mt-3 flex items-center gap-3 rounded-2xl bg-cloud p-3">
                <BikeIllustration variant="bike" className="h-12 w-20" />
                <div>
                  <p className="text-sm font-medium text-ink">TVS Sport</p>
                  <p className="text-xs text-graphite">3 min · ₹64 estimate</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center gap-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-lime">
                  <HomeIcon size={16} />
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-soft text-violet">
                  <MessageCircle size={16} />
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-soft text-violet">
                  <Settings size={16} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-cloudline bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-2xl font-semibold text-ink">How it works</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title}>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-sm font-semibold text-lime">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-graphite">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle types */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-2xl font-semibold text-ink">
          Pick what fits the trip
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {vehicleCards.map((v) => (
            <div
              key={v.id}
              className="rounded-2xl border border-cloudline bg-white p-5 transition hover:border-violet/40"
            >
              <BikeIllustration variant={v.id} className="h-16 w-full" />
              <p className="mt-4 font-medium text-ink">{v.name}</p>
              <p className="text-sm text-graphite">{v.note}</p>
              <p className="mt-3 font-display font-semibold text-ink">{v.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-ink">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-semibold text-white">
              Have a bike and a few free hours?
            </h2>
            <p className="mt-2 max-w-md text-white/70">
              Ride when you want, keep what you earn after a 15% platform fee.
            </p>
          </div>
          <Link
            href="/driver"
            className="rounded-full bg-lime px-6 py-3 text-sm font-medium text-ink transition hover:bg-lime/85"
          >
            Start driving
          </Link>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 py-8 text-sm text-graphite">
        © {new Date().getFullYear()} Vroom. Built for cities that move on two wheels.
      </footer>
    </main>
  );
}
