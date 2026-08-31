import { VehicleType, estimateFare } from "@/lib/mockData";
import BikeIllustration from "./BikeIllustration";

export default function VehicleSelector({
  vehicles,
  km,
  selected,
  onSelect,
}: {
  vehicles: VehicleType[];
  km: number;
  selected: VehicleType["id"] | null;
  onSelect: (id: VehicleType["id"]) => void;
}) {
  return (
    <div className="flex flex-col gap-3">
      {vehicles.map((v) => {
        const active = selected === v.id;
        return (
          <button
            key={v.id}
            onClick={() => onSelect(v.id)}
            className={`flex items-center justify-between rounded-2xl border px-4 py-3.5 text-left transition ${
              active
                ? "border-violet bg-violet-soft"
                : "border-cloudline bg-white hover:border-violet/50"
            }`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`flex h-14 w-16 items-center justify-center rounded-xl ${
                  active ? "bg-white" : "bg-cloud"
                }`}
              >
                <BikeIllustration variant={v.id} className="h-9 w-16" />
              </span>
              <div>
                <p className="font-medium text-ink">{v.label}</p>
                <p className="text-sm text-graphite">{v.tagline}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-display font-semibold text-ink">
                ₹{estimateFare(v, km)}
              </p>
              <p className="text-xs text-graphite">{v.etaMins} min away</p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
