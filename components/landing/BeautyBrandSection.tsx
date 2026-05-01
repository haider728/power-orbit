export default function BeautyBrandSection() {
  return (
    <section className="relative z-10 min-h-screen bg-gradient-to-b from-beauty-cream via-white to-beauty-nude px-6 py-20 text-[#2b1f26] sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#9f6f82]">
            Luxury Beauty
          </p>
          <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Velvet Lip Atelier
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#5d4752] sm:text-lg">
            Discover soft matte essentials crafted for modern elegance. Our lipstick collection blends nourishing formulas with timeless nude and pink shades for every mood.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["Rose Nude", "Soft Blush", "Silk Mauve"].map((shade) => (
            <article
              key={shade}
              className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-[0_20px_40px_rgba(227,177,196,0.25)] backdrop-blur"
            >
              <div className="mb-5 h-44 rounded-2xl bg-gradient-to-br from-[#ffd8e4] via-[#f9bfd1] to-[#f2a8c0]" />
              <h3 className="text-xl font-semibold">{shade}</h3>
              <p className="mt-2 text-sm text-[#6a535e]">
                Placeholder product area for lipstick imagery, shade details, and quick shop actions.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
