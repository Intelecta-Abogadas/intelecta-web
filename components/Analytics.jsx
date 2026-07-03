"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

// ▸ GA4 Measurement ID (GA4 → Admin → Data Streams → Web).
const GA_ID = "G-48BZYM6NFH";
const HAS_ID = /^G-[A-Z0-9]+$/.test(GA_ID) && !GA_ID.includes("XXXX");

const STORAGE_KEY = "cookie-consent"; // "granted" | "denied"

function track(name, params) {
  window.gtag?.("event", name, params);
}

export default function Analytics() {
  // null = undecided (show banner). Read from storage after mount to avoid SSR flash.
  const [consent, setConsent] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "granted" || saved === "denied") setConsent(saved);
    } catch {}
    setReady(true);
  }, []);

  // Event listeners only run once consent is granted.
  useEffect(() => {
    if (consent !== "granted") return;

    const thresholds = [25, 50, 75, 100];
    const fired = new Set();
    const onScroll = () => {
      const doc = document.documentElement;
      const pct = ((doc.scrollTop + window.innerHeight) / doc.scrollHeight) * 100;
      for (const t of thresholds) {
        if (pct >= t && !fired.has(t)) {
          fired.add(t);
          track("scroll_depth", { percent: t });
        }
      }
    };

    const onClick = (e) => {
      const el = e.target.closest("a, button");
      if (!el) return;
      const href = el.getAttribute("href") || "";
      const label = (el.textContent || el.getAttribute("aria-label") || "")
        .trim()
        .slice(0, 60);

      let cta = null;
      if (href.includes("wa.me") || /whatsapp/i.test(label)) cta = "whatsapp";
      else if (/agendar/i.test(label)) cta = "agendar_consulta";
      else if (/presupuesto/i.test(label) || href.includes("docs.google.com/forms"))
        cta = "solicitar_presupuesto";
      else if (href.includes("instagram.com")) cta = "instagram";
      else if (href.includes("linkedin.com")) cta = "linkedin";

      if (cta) track("cta_click", { cta_type: cta, link_text: label });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick);
    };
  }, [consent]);

  const decide = (value) => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {}
    setConsent(value);
  };

  const gaActive = HAS_ID && consent === "granted";

  return (
    <>
      {/* GA4 loads ONLY after explicit consent — rejecting means it never loads. */}
      {gaActive && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {/* Consent banner — shown until the visitor chooses. */}
      {ready && HAS_ID && consent === null && (
        <div className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-5">
          <div className="mx-auto max-w-3xl bg-[color:var(--solidez)] text-[color:var(--equilibrio)] border border-[color:var(--equilibrio)]/15 shadow-xl px-5 py-4 sm:px-7 sm:py-5 flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-sm leading-relaxed text-[color:var(--equilibrio)]/85 flex-1">
              Usamos cookies para medir de forma anónima el uso del sitio y mejorar tu
              experiencia. Podés aceptarlas o rechazarlas.{" "}
              <a
                href={`${BASE}/privacidad/`}
                className="underline underline-offset-2 hover:text-[color:var(--confianza)]"
              >
                Política de privacidad
              </a>
              .
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={() => decide("denied")}
                className="px-5 py-2.5 text-sm border border-[color:var(--equilibrio)]/40 text-[color:var(--equilibrio)] hover:bg-[color:var(--equilibrio)]/10 transition-colors"
              >
                Rechazar
              </button>
              <button
                onClick={() => decide("granted")}
                className="px-5 py-2.5 text-sm bg-[color:var(--equilibrio)] text-[color:var(--solidez)] hover:bg-[color:var(--confianza)] transition-colors"
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
