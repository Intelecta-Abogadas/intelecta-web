const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata = {
  title: "Política de Privacidad | Intelecta Abogadas",
  description:
    "Cómo Intelecta Abogadas trata los datos de navegación y las cookies analíticas de intelectaabogadas.com.ar.",
  alternates: { canonical: "https://intelectaabogadas.com.ar/privacidad/" },
};

export default function Privacidad() {
  return (
    <div className="bg-[color:var(--equilibrio)] text-[color:var(--modernidad)] min-h-screen">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <a
          href={`${BASE}/`}
          className="text-sm text-[color:var(--solidez)] border-b border-[color:var(--solidez)]/30 hover:border-[color:var(--solidez)] pb-0.5"
        >
          ← Volver al inicio
        </a>

        <h1 className="font-display text-4xl sm:text-5xl text-[color:var(--solidez)] mt-8 leading-tight">
          Política de Privacidad
        </h1>
        <p className="mt-4 text-sm text-[color:var(--modernidad)]/60">
          Última actualización: julio de 2026
        </p>

        <div className="mt-10 space-y-8 text-[color:var(--modernidad)]/80 leading-relaxed">
          <section>
            <p>
              En <strong>Intelecta Abogadas</strong> respetamos tu privacidad. Este sitio
              (<span className="whitespace-nowrap">intelectaabogadas.com.ar</span>) es
              informativo: no vendemos productos ni gestionamos pagos, y no incluye un
              formulario de contacto. Las consultas se coordinan directamente por WhatsApp o
              redes sociales.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[color:var(--solidez)] mb-3">
              Datos que recopilamos
            </h2>
            <p>
              No solicitamos ni almacenamos datos personales identificables a través del
              sitio. Si nos escribís por WhatsApp, Instagram o LinkedIn, se aplican las
              políticas de privacidad de esas plataformas, además del tratamiento que hagamos
              de la información que voluntariamente nos compartas para tu consulta.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[color:var(--solidez)] mb-3">
              Cookies y analítica
            </h2>
            <p>
              Utilizamos <strong>Google Analytics 4</strong> para entender de forma agregada y
              anónima cómo se usa el sitio (páginas vistas, secciones que se leen, clics en los
              botones). Esta herramienta puede instalar cookies en tu navegador. Solo se activa
              si prestás tu consentimiento en el aviso de cookies:
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>
                Si elegís <strong>Rechazar</strong>, Google Analytics no se carga y no se
                registra ninguna actividad.
              </li>
              <li>
                Si elegís <strong>Aceptar</strong>, se cargan las cookies analíticas
                mencionadas.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[color:var(--solidez)] mb-3">
              Cómo cambiar tu decisión
            </h2>
            <p>
              Podés revocar o modificar tu consentimiento en cualquier momento borrando las
              cookies y los datos del sitio desde la configuración de tu navegador; la próxima
              vez que ingreses volverá a aparecer el aviso. También podés instalar el{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noreferrer"
                className="text-[color:var(--solidez)] underline underline-offset-2"
              >
                complemento de inhabilitación de Google Analytics
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[color:var(--solidez)] mb-3">
              Tus derechos
            </h2>
            <p>
              De acuerdo con la Ley 25.326 de Protección de los Datos Personales de la
              República Argentina, podés solicitar el acceso, la rectificación o la supresión
              de tus datos. La Agencia de Acceso a la Información Pública (AAIP) es el órgano de
              control y atiende denuncias por incumplimientos.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-[color:var(--solidez)] mb-3">Contacto</h2>
            <p>
              Ante cualquier consulta sobre esta política podés escribirnos por{" "}
              <a
                href="https://wa.me/5492915724707"
                target="_blank"
                rel="noreferrer"
                className="text-[color:var(--solidez)] underline underline-offset-2"
              >
                WhatsApp
              </a>{" "}
              o a través de{" "}
              <a
                href="https://www.instagram.com/intelecta.abogadas"
                target="_blank"
                rel="noreferrer"
                className="text-[color:var(--solidez)] underline underline-offset-2"
              >
                @intelecta.abogadas
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
