import { services } from "../data/content";

export function ServiceCard({ title, description }) {
  return (
    <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-lg text-blue-700 ring-1 ring-blue-100">
        ✦
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-slate-900">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{description}</p>
    </article>
  );
}

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-2xl">
        <div className="text-sm font-medium uppercase tracking-[0.2em] text-blue-700/80">
          Services
        </div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          Design-forward front-end work with clean execution.
        </h2>
        <p className="mt-4 text-slate-600">
          A section built to showcase spacing discipline, card systems, and editorial-style layout design.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}
