import { caseStudy } from "../data/content";

export default function CaseStudy() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:grid-cols-[1fr_1.1fr] md:p-10">
        <div>
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-blue-700/80">
            {caseStudy.eyebrow}
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            {caseStudy.title}
          </h2>
          <p className="mt-5 leading-8 text-slate-600">{caseStudy.description}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {caseStudy.stats.map((stat) => (
              <div key={stat.label} className="rounded-[1.5rem] border border-slate-200 bg-[#fafaf8] p-4">
                <div className="text-sm text-slate-500">{stat.label}</div>
                <div className="mt-2 text-lg font-semibold text-slate-900">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-[#f4f7ff] p-5">
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-slate-500">Homepage system</div>
                <div className="mt-1 text-lg font-semibold text-slate-900">Northstar Studio</div>
              </div>
              <div className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                Responsive concept
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-[1.25rem] bg-[#f8fafc] p-5 ring-1 ring-slate-200/70">
                <div className="h-3 w-24 rounded-full bg-slate-200" />
                <div className="mt-4 h-8 w-4/5 rounded-full bg-slate-900/90" />
                <div className="mt-3 h-3 w-full rounded-full bg-slate-200" />
                <div className="mt-2 h-3 w-5/6 rounded-full bg-slate-200" />
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <div className="h-16 rounded-[1rem] bg-white shadow-sm ring-1 ring-slate-200/70" />
                  <div className="h-16 rounded-[1rem] bg-blue-50 ring-1 ring-blue-100" />
                  <div className="h-16 rounded-[1rem] bg-slate-100 ring-1 ring-slate-200/70" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.25rem] bg-white p-5 shadow-sm ring-1 ring-slate-200/70">
                  <div className="h-3 w-20 rounded-full bg-slate-200" />
                  <div className="mt-4 h-24 rounded-[1rem] bg-slate-100" />
                </div>
                <div className="rounded-[1.25rem] bg-white p-5 shadow-sm ring-1 ring-slate-200/70">
                  <div className="h-3 w-20 rounded-full bg-slate-200" />
                  <div className="mt-4 h-24 rounded-[1rem] bg-blue-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
