const footerLinks = {
  work: ["Services", "Featured Work", "Testimonials"],
  contact: ["hello@northstaragency.dev", "Remote", "Available for projects"],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3 text-slate-900">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white shadow-sm">
              NA
            </span>
            <span className="text-xl font-semibold tracking-tight">Northstar Agency</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600">
            A bright, editorial-style design-to-code showcase built with React and Tailwind CSS.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Work
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {footerLinks.work.map((item) => (
              <li key={item}>
                <a href="#" className="transition hover:text-slate-900">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {footerLinks.contact.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200 px-6 py-5 text-center text-sm text-slate-500">
        © 2026 Northstar Agency. Crafted as a Figma-to-React portfolio concept.
      </div>
    </footer>
  );
}
