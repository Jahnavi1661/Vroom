import { Phone, Star } from "lucide-react";

export default function DriverCard({
  name,
  vehicle,
  plate,
  rating,
  etaLabel,
}: {
  name: string;
  vehicle: string;
  plate: string;
  rating: number;
  etaLabel: string;
}) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl bg-lime-soft px-4 py-3">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-sm font-semibold text-lime">
          {initials}
        </span>
        <div>
          <p className="font-medium text-ink">{name}</p>
          <p className="flex items-center gap-1 text-xs text-graphite">
            <Star size={12} className="fill-ink text-ink" />
            {rating} · {vehicle} · {plate}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="hidden text-right text-xs text-graphite sm:block">
          {etaLabel}
        </span>
        <button
          aria-label="Call driver"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-lime transition hover:bg-ink/85"
        >
          <Phone size={16} />
        </button>
      </div>
    </div>
  );
}
