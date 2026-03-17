import React from "react";
import { navLinks } from "../data/content";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-[#f7f7f4]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#top" className="flex items-center gap-3 text-slate-900">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white shadow-sm ring-1 ring-slate-900/5">
            NA
          </span>
          <span className="text-xl font-semibold tracking-tight">Northstar Agency</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-slate-600 transition hover:text-slate-900">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 md:block">
            Book a call
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white md:hidden"
          >
            <span className="text-lg">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base text-slate-700"
              >
                {link.label}
              </a>
            ))}
            <button className="mt-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white">
              Book a call
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
