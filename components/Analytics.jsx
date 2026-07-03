"use client";

import { useEffect } from "react";
import Script from "next/script";

// ▸ Paste your GA4 Measurement ID here (GA4 → Admin → Data Streams → Web).
//   Until it's a real "G-XXXX" id, this component stays completely inert:
//   no scripts load, no events fire, no cookie notice shows.
const GA_ID = "G-48BZYM6NFH";
const ENABLED = /^G-[A-Z0-9]+$/.test(GA_ID) && !GA_ID.includes("XXXX");

function track(name, params) {
  window.gtag?.("event", name, params);
}

export default function Analytics() {
  useEffect(() => {
    if (!ENABLED) return;

    // --- scroll depth: 25 / 50 / 75 / 100 % ---
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

    // --- delegated CTA click tracking (covers every WhatsApp/CTA link) ---
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
  }, []);

  if (!ENABLED) return null;

  return (
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
  );
}
