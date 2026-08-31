import { Check } from "lucide-react";

export default function StatusStepper({
  steps,
  currentIndex,
}: {
  steps: string[];
  currentIndex: number;
}) {
  return (
    <div className="flex items-center">
      {steps.map((step, i) => {
        const done = i < currentIndex;
        const active = i === currentIndex;
        return (
          <div key={step} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center gap-2">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-semibold transition ${
                  done
                    ? "border-violet bg-violet text-white"
                    : active
                    ? "border-lime bg-lime text-ink animate-pulse"
                    : "border-cloudline text-graphite"
                }`}
              >
                {done ? <Check size={15} /> : i + 1}
              </div>
              <span
                className={`whitespace-nowrap text-xs ${
                  active ? "text-ink" : "text-graphite"
                }`}
              >
                {step}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={`mx-2 h-0.5 flex-1 ${
                  done ? "bg-violet" : "bg-cloudline"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
