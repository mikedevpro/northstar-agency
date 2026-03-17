import { logos } from "../data/content";

export default function LogoStrip() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-8">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="text-sm uppercase tracking-[0.22em] text-slate-500">
          Trusted by modern teams
        </div>
        <div className="mt-6 grid gap-4 text-center text-sm font-medium text-slate-500 sm:grid-cols-3 md:grid-cols-6 md:text-left">
          {logos.map((logo) => (
            <div
              key={logo}
              className="rounded-2xl border border-slate-100 bg-[#fafaf8] px-4 py-4 transition hover:border-slate-200 hover:bg-white"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
