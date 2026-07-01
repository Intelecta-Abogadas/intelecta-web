"use client";

import { useState } from "react";

const MODULES = [
  {
    n: "01",
    t: "Sistema de Marcas y Marco Legal",
    items: [
      "Función jurídica y económica de la marca",
      "Tipos de marcas",
      "Ley de Marcas Nº 22.362",
      "Prohibiciones absolutas y relativas",
      "Marcas fuertes y débiles",
      "Criterios actuales del INPI",
    ],
  },
  {
    n: "02",
    t: "Análisis de Registrabilidad y Búsqueda Previa",
    items: [
      "Importancia de la búsqueda previa",
      "Bases de datos del INPI",
      "Análisis fonético, gráfico y conceptual",
      "Casos prácticos",
    ],
  },
  {
    n: "03",
    t: "Clasificación de Niza Aplicada",
    items: [
      "Estructura del nomenclador",
      "Selección estratégica de clases",
      "Errores frecuentes",
    ],
  },
  {
    n: "04",
    t: "Procedimiento de Registro ante el INPI",
    items: ["Etapas del trámite", "Formularios", "Tasas y plazos", "Seguimiento de expedientes"],
  },
  {
    n: "05",
    t: "Vistas del INPI",
    items: ["Observaciones", "Motivos frecuentes", "Estrategias de respuesta"],
  },
  {
    n: "06",
    t: "Oposiciones Marcarias",
    items: ["Procedimiento", "Plazos", "Estrategias de defensa", "Casos reales"],
  },
  {
    n: "07",
    t: "Estrategia y Protección de Marca",
    items: [
      "Blindaje marcario",
      "Registro de variantes",
      "Vigilancia de marca",
      "Uso del símbolo ®",
      "Actuación ante infracciones",
    ],
  },
];

export default function ProgramAccordion() {
  const [open, setOpen] = useState("01");

  return (
    <div id="programa" className="lg:col-span-7">
      <div className="text-xs tracking-[0.3em] uppercase text-[color:var(--confianza)] mb-5">
        Programa
      </div>
      <div className="divide-y hairline border-y hairline">
        {MODULES.map((m) => {
          const isOpen = open === m.n;
          return (
            <div key={m.n}>
              <button
                onClick={() => setOpen(isOpen ? "" : m.n)}
                className="w-full py-6 flex items-start gap-6 text-left group"
              >
                <span className="font-display text-2xl text-[color:var(--confianza)] w-12 shrink-0">
                  {m.n}
                </span>
                <span className="font-display text-xl lg:text-2xl text-[color:var(--solidez)] flex-1">
                  {m.t}
                </span>
                <span
                  className={`text-2xl text-[color:var(--solidez)] transition-transform ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {isOpen && (
                <div className="pb-8 pl-[72px]">
                  <ul className="space-y-2 text-[color:var(--modernidad)]/75">
                    {m.items.map((it) => (
                      <li key={it}>· {it}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
