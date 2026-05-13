const SLIDING_TICKERS = [
  { text: "Fleet & asset telematics", variant: 0 },
  { text: "IoT intelligence — GCC", variant: 1 },
  { text: "Formerly Digital Myth Solution", variant: 2 },
  { text: "Real-time fleet visibility", variant: 3 },
  { text: "Enterprise-grade platform", variant: 0 },
  { text: "Cold chain & compliance", variant: 1 },
  { text: "Video telematics", variant: 2 },
  { text: "Power Orbit", variant: 3 },
] as const;

function TickIcon() {
  return (
    <svg
      className="sliding-text-three__tick-svg"
      viewBox="0 0 12 10"
      width="12"
      height="10"
      aria-hidden
      focusable="false"
    >
      <path
        d="M1 5l3.5 3.5L11 1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TickerMarqueeRow({ duplicate }: { duplicate?: boolean }) {
  return (
    <ul
      className="sliding-text-three__list list-unstyled flex animate-marquee"
      aria-hidden={duplicate}
    >
      {SLIDING_TICKERS.map((item, i) => (
        <li key={`${duplicate ? "b" : "a"}-${i}`}>
          <span
            className={`sliding-text-three__ticker sliding-text-three__ticker--v${item.variant}`}
          >
            <span className="sliding-text-three__ticker-check">
              <TickIcon />
            </span>
            <span className="sliding-text-three__ticker-label">{item.text}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function SlideingText() {
  return (
    <section className="sliding-text-three overflow-hidden" id="sliding-text">
      <div className="sliding-text-three__wrap flex whitespace-nowrap">
        <TickerMarqueeRow />
        <TickerMarqueeRow duplicate />
      </div>
    </section>
  );
}
