export default function BikeIllustration({
  variant = "bike",
  className = "",
}: {
  variant?: "bike" | "scooter" | "premium";
  className?: string;
}) {
  const accent = variant === "premium" ? "#7C6FF0" : "#15151C";

  return (
    <svg
      viewBox="0 0 320 180"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`${variant} illustration`}
    >
      <ellipse cx="160" cy="158" rx="130" ry="10" fill="#EDEAFB" />

      {/* wheels */}
      <circle cx="88" cy="130" r="34" fill="none" stroke={accent} strokeWidth="7" />
      <circle cx="88" cy="130" r="6" fill={accent} />
      <circle cx="238" cy="130" r="34" fill="none" stroke={accent} strokeWidth="7" />
      <circle cx="238" cy="130" r="6" fill={accent} />

      {/* body */}
      <path
        d="M88 130 L128 90 L176 90 L196 70 L232 70"
        stroke={accent}
        strokeWidth="7"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M128 90 L150 130 L238 130"
        stroke={accent}
        strokeWidth="7"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* seat */}
      <path
        d="M150 130 L188 122 L206 122"
        stroke={accent}
        strokeWidth="7"
        fill="none"
        strokeLinecap="round"
      />

      {/* handlebar */}
      <path
        d="M196 70 L212 58"
        stroke={accent}
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M196 70 L182 58"
        stroke={accent}
        strokeWidth="7"
        strokeLinecap="round"
      />

      {/* headlight */}
      <circle cx="232" cy="70" r="6" fill="#CFF24E" />
    </svg>
  );
}
