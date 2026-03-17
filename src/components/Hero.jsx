export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-8 h-64 w-64 rounded-full bg-blue-100/70 blur-3xl" />
        <div className="absolute right-[-4rem] top-24 h-72 w-72 rounded-full bg-slate-200/70 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-slate-300 bg-white px-4 py-2 text-xs md:text-sm text-slate-600 shadow-sm">
              Figma → React Showcase
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-7xl md:leading-[1.02]">
              Clean design systems for modern websites.
            </h1>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              A bright, editorial landing page focused on responsive layout, spacing precision, and reusable components.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button className="rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white">
                Start a project
              </button>
              <button className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-900">
                View services
              </button>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-md">
            <div className="rounded-[1.25rem] bg-[#eef3ff] p-4">
              <div className="h-3 w-20 rounded-full bg-slate-200" />
              <div className="mt-4 h-6 w-3/4 rounded-full bg-slate-900" />
              <div className="mt-3 h-3 w-full rounded-full bg-slate-200" />
              <div className="mt-2 h-3 w-5/6 rounded-full bg-slate-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
