"use client";

import { useEffect, useState } from "react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

const NAV = [
  { href: "#nosotras", label: "Nosotras" },
  { href: "#servicios", label: "Servicios" },
  { href: "#monitor", label: "Monitor de Marcas" },
  { href: "#curso", label: "Curso" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[color:var(--equilibrio)]/90 backdrop-blur-md border-b hairline"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={`${BASE}/assets/isotipo-sm.webp`}
            alt="Intelecta Abogadas — registro de marcas y propiedad intelectual"
            width="40"
            height="40"
            className="h-10 w-10 object-contain"
          />
          <div className="leading-tight">
            <div className="font-display text-xl tracking-wide text-[color:var(--solidez)]">
              INTELECTA
            </div>
            <div className="text-[10px] tracking-[0.3em] text-[color:var(--confianza)] uppercase">
              Abogadas
            </div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((e) => (
            <a
              key={e.href}
              href={e.href}
              className="text-sm text-[color:var(--modernidad)] hover:text-[color:var(--solidez)] transition-colors"
            >
              {e.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-sm bg-[color:var(--solidez)] text-[color:var(--equilibrio)] hover:bg-[color:var(--modernidad)] transition-colors"
        >
          Agendar consulta
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-[color:var(--solidez)]"
          aria-label="Menu"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[color:var(--equilibrio)] border-t hairline">
          <div className="px-6 py-6 flex flex-col gap-4">
            {NAV.map((e) => (
              <a
                key={e.href}
                href={e.href}
                onClick={() => setOpen(false)}
                className="text-base text-[color:var(--modernidad)]"
              >
                {e.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 px-5 py-3 bg-[color:var(--solidez)] text-[color:var(--equilibrio)] text-center text-sm"
            >
              Agendar consulta
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
