import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-cloudline/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-lime font-display font-bold">
            V
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Vroom
          </span>
        </Link>
        <nav className="flex items-center gap-2">
          <Link
            href="/book"
            className="rounded-full px-4 py-2 text-sm font-medium text-ink/70 transition hover:text-ink"
          >
            Book a ride
          </Link>
          <Link
            href="/driver"
            className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-cloud transition hover:bg-ink/85"
          >
            Drive with us
          </Link>
        </nav>
      </div>
    </header>
  );
}
