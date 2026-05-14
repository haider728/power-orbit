const SLIDING_MESSAGE = "Power Orbit — formerly known as Digital Myth Solution";

/** Enough repeats for a smooth infinite marquee loop */
const SLIDING_REPEAT = 10;

function TickerMarqueeRow({ duplicate }: { duplicate?: boolean }) {
  return (
    <ul
      className="sliding-text-three__list list-unstyled flex animate-marquee"
      aria-hidden={duplicate}
    >
      {Array.from({ length: SLIDING_REPEAT }, (_, i) => (
        <li key={`${duplicate ? "b" : "a"}-${i}`}>
          <span className="sliding-text-three__ticker">
            <span className="sliding-text-three__ticker-label">{SLIDING_MESSAGE}</span>
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
