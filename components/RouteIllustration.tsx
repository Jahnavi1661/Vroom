export default function RouteIllustration({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 400 320"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Map showing the route from pickup to drop"
    >
      <rect x="0" y="0" width="400" height="320" fill="#F4F2FD" />

      {/* park patches */}
      <rect x="270" y="40" width="90" height="70" rx="10" fill="#DDF3A6" />
      <rect x="20" y="200" width="70" height="90" rx="10" fill="#DDF3A6" />

      {/* roads */}
      <path
        d="M0 60 C 80 60, 90 130, 170 130 S 260 60, 400 60"
        stroke="#B9AEF2"
        strokeWidth="10"
        fill="none"
      />
      <path
        d="M40 0 C 40 90, 120 90, 120 190 S 200 290, 200 320"
        stroke="#B9AEF2"
        strokeWidth="10"
        fill="none"
      />
      <path
        d="M400 200 C 320 200, 320 260, 250 260 S 180 220, 120 240"
        stroke="#B9AEF2"
        strokeWidth="10"
        fill="none"
      />

      {/* route line */}
      <path
        d="M120 90 L120 150 L260 230"
        stroke="#15151C"
        strokeWidth="3"
        fill="none"
        strokeDasharray="1 10"
        strokeLinecap="round"
      />

      {/* pickup pin */}
      <g transform="translate(120, 90)">
        <circle r="10" fill="#15151C" />
        <circle r="4" fill="#CFF24E" />
      </g>

      {/* drop pin (bike marker) */}
      <g transform="translate(260, 230)">
        <circle r="16" fill="#7C6FF0" />
        <circle cx="-6" cy="4" r="3" fill="white" />
        <circle cx="6" cy="4" r="3" fill="white" />
        <path d="M-6 4 L-1 -5 L6 4 M-1 -5 L3 -7" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>

      {/* small map pins */}
      <circle cx="300" cy="70" r="4" fill="#F5A524" />
      <circle cx="70" cy="230" r="4" fill="#F5A524" />
    </svg>
  );
}
