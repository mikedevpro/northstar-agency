import { testimonials } from "../data/content";

function TestimonialCard({ name, role, quote, company }) {
  return (
    <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
      <p className="leading-8 text-slate-700">“{quote}”</p>
      <div className="mt-6">
        <div className="font-semibold text-slate-900">{name}</div>
        <div className="text-sm text-slate-500">{role} · {company}</div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-2xl">
        <div className="text-sm font-medium uppercase tracking-[0.2em] text-blue-700/80">
          Testimonials
        </div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          Thoughtful layout, clean execution, polished results.
        </h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.name}
            name={testimonial.name}
            role={testimonial.role}
            quote={testimonial.quote}
            company={testimonial.company}
          />
        ))}
      </div>
    </section>
  );
}
