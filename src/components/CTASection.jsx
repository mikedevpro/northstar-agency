export default function CTASection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 pb-10">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 px-8 py-12 text-white shadow-[0_20px_60px_rgba(15,23,42,0.16)] md:px-12">
        <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="max-w-3xl">
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-blue-200/90">
            Let’s build something sharp
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Need a polished landing page brought to life in code?
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-white/70">
            Northstar Agency is designed to highlight the ability to turn clean, modern layouts into responsive front-end experiences with strong hierarchy and premium spacing.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-full bg-blue-500 px-6 py-3 font-medium text-white shadow-sm transition hover:bg-blue-400">
              Book a project call
            </button>
            <button className="rounded-full border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/5">
              View case study
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
