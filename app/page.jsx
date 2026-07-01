import Header from "../components/Header";
import ProgramAccordion from "../components/ProgramAccordion";

// Prefix for static assets. Empty in local dev; "/intelecta-web" on GitHub Pages
// (set via NEXT_PUBLIC_BASE_PATH in the deploy workflow).
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

const SERVICES = [
  ["01", "Registro de Marcas", "Gestionamos el registro de tu marca ante el INPI para asegurar su titularidad y evitar conflictos futuros."],
  ["02", "Custodia y Vigilancia de Marcas", "Monitoreamos solicitudes de terceros que puedan afectar tu marca y actuamos preventivamente."],
  ["03", "Patentes, Modelos y Diseños Industriales", "Protegemos invenciones, modelos de utilidad y diseños industriales."],
  ["04", "Derechos de Autor", "Registramos y protegemos obras literarias, artísticas, software y contenido digital."],
  ["05", "Redacción de Contratos", "Contratos comerciales, términos y condiciones, políticas de privacidad y acuerdos a medida."],
  ["06", "Dominios Web", "Registro, transferencia y defensa de nombres de dominio."],
  ["07", "Recupero de Cuentas", "Recuperación de cuentas de Instagram, redes sociales y billeteras virtuales."],
  ["08", "Asistencia a Audiencias", "Representación legal y acompañamiento en audiencias administrativas y judiciales."],
  ["09", "Derecho Societario", "Constitución de sociedades, reformas de estatuto y asesoramiento corporativo."],
  ["10", "Derecho del Consumidor", "Defensa de empresas y consumidores ante reclamos y procedimientos administrativos."],
  ["11", "Derecho de Tecnología", "Asesoramiento en startups, fintech, e-commerce, inteligencia artificial, datos personales y compliance digital."],
  ["12", "Cartas Documento y Litigios", "Asuntos vinculados a propiedad intelectual, derecho tecnológico y conflictos empresariales."],
];

const CHARLAS = [
  "charla-315082cc.jpg",
  "charla-3b89eb35.jpg",
  "charla-f44e27c6.jpg",
  "charla-2ba38a2a.jpg",
  "charla-1acf3046.jpg",
];

const LOGOS = [
  "colilux.jpg",
  "mencanta.jpg",
  "sercamionero.jpg",
  "dulces-besos.jpg",
  "mjc-agropecuarios.jpg",
  "lonera-andina.jpg",
  "bio-didactika.jpg",
  "manteca-bakery.jpg",
  "don-hippo.jpg",
  "powerlimp-new.jpg",
  "conectar-cultura.jpg",
  "kira-home.jpg",
];

const WHY = [
  "Especialización exclusiva en Propiedad Intelectual",
  "Atención personalizada",
  "Alcance en toda Argentina",
  "Estrategia jurídica preventiva",
  "Respuestas ágiles",
  "Experiencia con empresas, emprendedores y profesionales",
  "Enfoque práctico y orientado a resultados",
  "Visión moderna de la práctica legal",
];

const MONITOR_FEATURES = [
  ["01", "Base de datos propia", "Tus marcas, ordenadas y siempre accesibles en un solo lugar."],
  ["02", "Monitoreo automático", "El sistema revisa por vos los boletines del INPI, todos los días."],
  ["03", "Alertas inteligentes", "Solo las coincidencias con riesgo real llegan a tus manos."],
  ["04", "Ahorro de tiempo", "Menos horas de revisión manual cada día, más foco en lo estratégico."],
];

const MONITOR_STEPS = [
  ["01", "Cargás tus marcas", "Tu base de datos organizada en un solo lugar."],
  ["02", "El sistema monitorea publicaciones", "Cruce automático con los boletines del INPI."],
  ["03", "Recibís alertas relevantes", "Solo coincidencias con riesgo real, listas para actuar."],
];

const MONITOR_CHECKS = [
  "Alertas automáticas sobre riesgos reales",
  "Todas tus marcas organizadas en un solo lugar",
  "Más control, menos trabajo manual",
  "Detección temprana de posibles conflictos",
  "Seguimiento permanente de publicaciones del INPI",
  "Protección continua de tus activos intangibles",
];

const DIFERENCIAL = [
  "Servicio jurídico especializado",
  "Herramientas tecnológicas propias",
  "Estamos en constante formación profesional.",
  "Acompañamiento preventivo y estratégico",
];

const TESTIMONIALS = [
  ["Un lugar donde te brindan soluciones. Recomiendo. Trabajan excelente y a tiempo.", "Fede Bonacina"],
  ["Excelente asesoramiento por parte de las chicas!", "Lisana Ibarra"],
  ["Súper claras, profesionales y rápidas!", "Mariana Fernandez Blanco"],
  ["Excelentes profesionales 🙌", "Facundo Donate"],
  ["Muy buena atención.", "Analia Nicotra"],
  ["Registramos la marca de nuestra pyme con total tranquilidad. Atentas a cada detalle y siempre disponibles.", "Martín Sosa"],
  ["Me asesoraron en todo el proceso de registro. Profesionales, claras y muy humanas.", "Carolina Pérez"],
  ["Resolvieron una oposición compleja en tiempo récord. 100% recomendables.", "Joaquín Méndez"],
  ["Muy buena experiencia. Te explican cada paso sin tecnicismos.", "Sofía Ramírez"],
  ["El monitor de marcas nos cambió la forma de trabajar. Estrategia y tecnología al servicio del cliente.", "Diego Larrosa"],
  ["Confianza absoluta. Saben de lo que hablan y acompañan en serio.", "Valentina Ríos"],
  ["Atención impecable de principio a fin. Volvería a elegirlas sin dudarlo.", "Nicolás Acosta"],
  ["Cercanía y profesionalismo en partes iguales. Gracias por cuidar nuestra marca.", "Camila Ferreyra"],
];

const WHATSAPP = "https://wa.me/5492915724707";

export default function Home() {
  return (
    <div className="bg-[color:var(--equilibrio)] text-[color:var(--modernidad)]">
      <Header />

      <main>
        {/* HERO */}
        <section
          id="top"
          className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--equilibrio)] via-[color:var(--equilibrio)] to-[#e4e0e7]" />
            <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[color:var(--confianza)]/30 blur-3xl" />
            <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full bg-[color:var(--solidez)]/10 blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center w-full">
            <div className="lg:col-span-7 fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border hairline rounded-full text-xs tracking-[0.2em] uppercase text-[color:var(--solidez)] mb-8">
                <span className="w-1.5 h-1.5 bg-[color:var(--solidez)] rounded-full" /> Estudio
                jurídico · Argentina
              </div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-[color:var(--solidez)] text-balance">
                Protegemos lo que hace{" "}
                <em className="not-italic text-[color:var(--modernidad)]">única</em> a tu marca.
              </h1>
              <p className="mt-8 text-lg text-[color:var(--modernidad)]/75 max-w-2xl leading-relaxed">
                Estudio jurídico boutique con foco exclusivo en propiedad intelectual, marcas,
                patentes y derecho tecnológico. Acompañamos a empresas y pymes de todo el país con
                cercanía, criterio y estrategia.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contacto"
                  className="group inline-flex items-center gap-3 px-7 py-4 bg-[color:var(--solidez)] text-[color:var(--equilibrio)] hover:bg-[color:var(--modernidad)] transition-all"
                >
                  Agendar consulta{" "}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-3 px-7 py-4 border border-[color:var(--solidez)] text-[color:var(--solidez)] hover:bg-[color:var(--solidez)] hover:text-[color:var(--equilibrio)] transition-all"
                >
                  Solicitar presupuesto
                </a>
              </div>
              <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
                {[
                  ["100%", "Especialización en PI"],
                  ["Nacional", "Alcance en Argentina"],
                  ["INPI", "Trámites integrales"],
                ].map(([big, small]) => (
                  <div key={small}>
                    <div className="font-display text-2xl text-[color:var(--solidez)]">{big}</div>
                    <div className="text-xs text-[color:var(--modernidad)]/60 mt-1">{small}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 fade-up fade-up-delay-2">
              <div className="relative">
                <img
                  src={`${BASE}/assets/oficina.jpg`}
                  alt="Oficina Intelecta Abogadas"
                  className="relative w-full aspect-[4/5] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* NOSOTRAS */}
        <section id="nosotras" className="py-28 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <div className="text-xs tracking-[0.3em] uppercase mb-5 text-[color:var(--solidez)]">
                Quiénes Somos
              </div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance text-[color:var(--solidez)]">
                Un estudio boutique con visión{" "}
                <em className="not-italic text-[color:var(--confianza)]">moderna</em> de la práctica
                legal.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[color:var(--modernidad)]/70">
                Somos un estudio jurídico conformado por abogadas especializadas en Propiedad
                Intelectual, Derecho Tecnológico y asesoramiento empresarial. Nuestro objetivo es
                brindar soluciones jurídicas claras, estratégicas y personalizadas para proteger los
                activos más valiosos de nuestros clientes.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-10 mt-20">
              {[
                [
                  "bianca.jpeg",
                  "Dra. Bianca Massarella Martinez",
                  "https://www.linkedin.com/in/bianca-massarella-martinez-5909b02a3",
                ],
                [
                  "delfina.jpeg",
                  "Dra. Delfina Alvarez",
                  "https://www.linkedin.com/in/delfinaalvarezp",
                ],
              ].map(([img, name, link]) => (
                <article key={name} className="group">
                  <div className="relative overflow-hidden">
                    <img
                      src={`${BASE}/assets/${img}`}
                      alt={name}
                      className="w-full aspect-[4/5] object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--solidez)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="mt-7">
                    <h3 className="font-display text-3xl text-[color:var(--solidez)]">{name}</h3>
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 mt-3 text-sm text-[color:var(--solidez)] border-b border-[color:var(--solidez)]/30 hover:border-[color:var(--solidez)] pb-0.5"
                    >
                      Ver perfil profesional →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* EN ACCIÓN (charlas marquee) */}
        <section className="py-28 lg:py-36 bg-[color:var(--modernidad)] text-[color:var(--equilibrio)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <div className="text-xs tracking-[0.3em] uppercase mb-5 text-[color:var(--confianza)]">
                En Acción
              </div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance text-[color:var(--equilibrio)]">
                Compartiendo conocimiento{" "}
                <em className="not-italic text-[color:var(--confianza)]">con la comunidad</em>.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[color:var(--equilibrio)]/70">
                Participamos activamente en charlas, capacitaciones y espacios de divulgación sobre
                propiedad intelectual, derecho tecnológico y la protección de activos intangibles.
              </p>
            </div>
          </div>
          <div className="mt-16 overflow-hidden">
            <div className="flex gap-6 marquee-track w-max">
              {[...CHARLAS, ...CHARLAS].map((img, i) => (
                <div
                  key={i}
                  className="w-[320px] sm:w-[420px] aspect-[4/5] shrink-0 overflow-hidden"
                >
                  <img src={`${BASE}/assets/${img}`} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="py-28 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <div className="text-xs tracking-[0.3em] uppercase mb-5 text-[color:var(--solidez)]">
                Nuestros Servicios
              </div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance text-[color:var(--solidez)]">
                Soluciones jurídicas{" "}
                <em className="not-italic text-[color:var(--confianza)]">integrales</em>.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[color:var(--modernidad)]/70">
                Acompañamos cada etapa de tu proyecto con estrategia preventiva y mirada empresarial.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[color:var(--confianza)]/40 mt-16 border hairline">
              {SERVICES.map(([n, title, desc]) => (
                <div
                  key={n}
                  className="bg-[color:var(--equilibrio)] p-8 lg:p-10 group hover:bg-white transition-colors"
                >
                  <div className="font-display text-xs text-[color:var(--confianza)]">{n}</div>
                  <h3 className="font-display text-2xl text-[color:var(--solidez)] mt-3 leading-tight">
                    {title}
                  </h3>
                  <p className="mt-4 text-sm text-[color:var(--modernidad)]/70 leading-relaxed">
                    {desc}
                  </p>
                  <div className="mt-6 w-8 h-px bg-[color:var(--solidez)] group-hover:w-16 transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MARCAS QUE CONFÍAN (logos marquee) */}
        <section className="py-24 lg:py-32 bg-[color:var(--equilibrio)] border-y hairline">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-7">
                <div className="text-xs tracking-[0.3em] uppercase text-[color:var(--solidez)] mb-5">
                  Marcas que confían en nosotras
                </div>
                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[color:var(--solidez)] text-balance">
                  Llevamos más de{" "}
                  <em className="not-italic text-[color:var(--confianza)]">1.000 marcas</em>{" "}
                  registradas.
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-[color:var(--modernidad)]/75 leading-relaxed">
                  Empresas, pymes y emprendedores de toda Argentina ya protegieron sus activos con
                  nosotras. Cada marca registrada es una historia que acompañamos con criterio,
                  estrategia y cercanía.
                </p>
              </div>
            </div>
            <div className="mt-14 overflow-hidden">
              <div className="flex gap-12 lg:gap-16 marquee-track w-max items-center">
                {[...LOGOS, ...LOGOS].map((img, i) => (
                  <div
                    key={i}
                    className="shrink-0 h-20 lg:h-24 w-40 lg:w-48 flex items-center justify-center"
                  >
                    <img
                      src={`${BASE}/assets/${img}`}
                      alt=""
                      className="max-h-full max-w-full object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* POR QUÉ ELEGIRNOS */}
        <section className="relative overflow-hidden py-28 lg:py-36 lg:min-h-[880px] bg-[color:var(--solidez)] text-[color:var(--equilibrio)]">
          {/* Decorative stamp treatment (desktop): the photo and its cutout are
              rendered at the exact same size/position so the crisp stamp registers
              pixel-for-pixel over the photo. The plum color fades in between them. */}
          <div className="hidden lg:block" aria-hidden="true">
            {/* full photo — tinted paper, imprint and real cast shadow */}
            <img
              src={`${BASE}/assets/stamp.jpg`}
              alt=""
              className="pointer-events-none select-none absolute bottom-0 left-0 w-[46%] max-w-[560px] min-w-[300px]"
              style={{
                WebkitMaskImage:
                  "radial-gradient(82% 84% at 8% 95%, #000 0%, #000 44%, transparent 76%)",
                maskImage:
                  "radial-gradient(82% 84% at 8% 95%, #000 0%, #000 44%, transparent 76%)",
              }}
            />
            {/* brand color fading into the image */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(72% 78% at 6% 94%, rgba(70,53,62,0.12) 0%, rgba(70,53,62,0.36) 34%, rgba(70,53,62,0.80) 60%, rgba(70,53,62,0.97) 82%)",
              }}
            />
            {/* crisp stamp on top of the fade */}
            <img
              src={`${BASE}/assets/stamp-cutout.png`}
              alt="Sello de Intelecta Abogadas"
              className="pointer-events-none select-none absolute bottom-0 left-0 w-[46%] max-w-[560px] min-w-[300px] drop-shadow-[0_16px_28px_rgba(0,0,0,0.35)]"
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-xs tracking-[0.3em] uppercase text-[color:var(--confianza)] mb-5">
                ¿Por qué elegirnos?
              </div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[color:var(--equilibrio)] text-balance">
                Más que un estudio jurídico.
              </h2>
              <p className="mt-6 text-[color:var(--equilibrio)]/75 leading-relaxed max-w-lg">
                Combinamos experiencia legal, estrategia de negocios y tecnología para ofrecer
                soluciones integrales que protegen el valor de las marcas, empresas y proyectos de
                nuestros clientes.
              </p>
              {/* mobile stamp (the desktop treatment is the absolute layers above) */}
              <img
                src={`${BASE}/assets/stamp-cutout.png`}
                alt="Sello de Intelecta Abogadas"
                className="lg:hidden mt-12 w-60 drop-shadow-[0_16px_28px_rgba(0,0,0,0.4)]"
              />
            </div>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
              {WHY.map((item, i) => (
                <li
                  key={item}
                  className="flex gap-4 border-t border-[color:var(--equilibrio)]/15 pt-5"
                >
                  <span className="font-display text-[color:var(--confianza)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[color:var(--equilibrio)]/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* MONITOR DE MARCAS */}
        <section
          id="monitor"
          className="relative py-28 lg:py-36 overflow-hidden bg-[color:var(--equilibrio)]"
        >
          <div
            className="absolute inset-0 -z-10 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(var(--solidez) 1px, transparent 1px), linear-gradient(90deg, var(--solidez) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-[color:var(--solidez)]/40 rounded-full text-[10px] tracking-[0.3em] uppercase text-[color:var(--solidez)] mb-6">
                  <span className="w-1.5 h-1.5 bg-[color:var(--solidez)] rounded-full animate-pulse" />{" "}
                  LegalTech · Tecnología propia
                </div>
                <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-[color:var(--solidez)] text-balance">
                  Monitor de <em className="not-italic text-[color:var(--solidez)]">Marcas</em>.
                </h2>
                <p className="mt-4 font-display text-2xl text-[color:var(--solidez)] italic">
                  Protección inteligente para tus activos más valiosos.
                </p>
              </div>
              <div className="lg:col-span-5">
                <p className="text-[color:var(--solidez)] leading-relaxed">
                  Está pensada tanto para abogados que quieran sumar esta herramienta a su práctica,
                  como para que nuestros clientes se queden tranquilos: vamos a proteger su marca
                  desde el primer momento.
                </p>
                <p className="mt-4 text-[color:var(--solidez)] text-sm leading-relaxed">
                  Dejá de revisar boletines manualmente. Nuestro Monitor detecta posibles conflictos
                  en las publicaciones del INPI para que no pierdas tiempo ni oportunidades.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {MONITOR_FEATURES.map(([n, title, desc]) => (
                <div
                  key={n}
                  className="border border-[color:var(--solidez)]/30 bg-white/40 p-7 hover:border-[color:var(--solidez)] transition-all"
                >
                  <div className="font-display text-3xl text-[color:var(--solidez)]">{n}</div>
                  <h3 className="font-display text-xl text-[color:var(--solidez)] mt-4">{title}</h3>
                  <p className="text-sm text-[color:var(--solidez)] mt-3 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-20 border-t border-[color:var(--solidez)]/30 pt-16">
              <div className="text-xs tracking-[0.3em] uppercase text-[color:var(--solidez)] mb-4">
                Cómo funciona
              </div>
              <h3 className="font-display text-3xl sm:text-4xl text-[color:var(--solidez)] max-w-2xl">
                Tres pasos. Cero fricción.
              </h3>
              <div className="grid md:grid-cols-3 gap-px bg-[color:var(--solidez)]/30 mt-10 border border-[color:var(--solidez)]/30">
                {MONITOR_STEPS.map(([n, title, desc]) => (
                  <div key={n} className="bg-[color:var(--equilibrio)] p-8">
                    <div className="font-display text-5xl text-[color:var(--solidez)]">{n}</div>
                    <h4 className="font-display text-xl text-[color:var(--solidez)] mt-4">
                      {title}
                    </h4>
                    <p className="text-sm text-[color:var(--solidez)] mt-3 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center border-t border-[color:var(--solidez)]/30 pt-16">
              <ul className="grid sm:grid-cols-2 gap-4">
                {MONITOR_CHECKS.map((c) => (
                  <li key={c} className="flex gap-3 text-sm text-[color:var(--solidez)]">
                    <span className="text-[color:var(--solidez)] font-bold">✓</span> {c}
                  </li>
                ))}
              </ul>
              <div className="border border-[color:var(--solidez)]/40 p-10 bg-[color:var(--solidez)]">
                <h3 className="font-display text-3xl text-[color:var(--equilibrio)] leading-tight">
                  Custodiamos tu marca, vos seguí creciendo.
                </h3>
                <p className="text-[color:var(--equilibrio)] mt-4 text-sm leading-relaxed">
                  Tu marca es uno de los activos más valiosos de tu negocio. Nosotras la vigilamos
                  por vos: detectamos riesgos, te avisamos a tiempo y actuamos para defenderla. Dejá
                  que nuestra tecnología y nuestro equipo se ocupen de protegerla.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdijnQfyTL4A1xUUvv52aIk1XjQsT7PTMmk-6wtpfndv_8a3A/viewform"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 px-7 py-4 bg-[color:var(--equilibrio)] text-[color:var(--solidez)] hover:bg-[color:var(--confianza)] transition-all text-sm"
                  >
                    Quiero que custodien mi marca →
                  </a>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 px-7 py-4 border border-[color:var(--equilibrio)] text-[color:var(--equilibrio)] hover:bg-[color:var(--equilibrio)] hover:text-[color:var(--solidez)] transition-all text-sm"
                  >
                    Hablar por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DIFERENCIAL */}
        <section className="py-28 lg:py-36 bg-[color:var(--equilibrio)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <img src={`${BASE}/assets/isotipo.jpg`} alt="" className="w-full max-w-sm mx-auto" />
            </div>
            <div className="lg:col-span-7">
              <div className="max-w-3xl">
                <div className="text-xs tracking-[0.3em] uppercase mb-5 text-[color:var(--solidez)]">
                  Diferencial
                </div>
                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance text-[color:var(--solidez)]">
                  Experiencia legal, estrategia{" "}
                  <em className="not-italic text-[color:var(--confianza)]">y tecnología</em>.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-[color:var(--modernidad)]/70">
                  Combinamos experiencia legal, estrategia de negocios y tecnología para ofrecer
                  soluciones integrales que protegen el valor de las marcas, empresas y proyectos de
                  nuestros clientes.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5 mt-10">
                {DIFERENCIAL.map((d) => (
                  <div key={d} className="flex gap-3 border-t hairline pt-4">
                    <span className="font-display text-[color:var(--confianza)]">◆</span>
                    <span className="text-[color:var(--modernidad)]/80 text-sm">{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CURSO */}
        <section id="curso" className="py-28 lg:py-36 bg-[color:var(--equilibrio)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
                <div className="text-xs tracking-[0.3em] uppercase text-[color:var(--solidez)] mb-5">
                  Formación profesional
                </div>
                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[color:var(--solidez)] text-balance">
                  Curso de Registro de Marcas{" "}
                  <em className="not-italic text-[color:var(--confianza)]">para Abogados</em>.
                </h2>
                <p className="mt-6 text-[color:var(--modernidad)]/75 leading-relaxed">
                  Brindamos un curso dirigido a abogados/as interesados/as en capacitarse en el
                  registro y la gestión de marcas. Una formación estructurada en módulos progresivos
                  que combina contenido jurídico, práctico y estratégico para que puedas aplicar lo
                  aprendido desde el primer momento.
                </p>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[
                    ["7", "Módulos"],
                    ["★", "Certificado"],
                    ["∞", "Acceso"],
                  ].map(([big, small]) => (
                    <div key={small} className="border-t hairline pt-3">
                      <div className="font-display text-2xl text-[color:var(--solidez)]">{big}</div>
                      <div className="text-[11px] tracking-wider uppercase text-[color:var(--modernidad)]/60 mt-1">
                        {small}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#contacto"
                    className="px-6 py-3.5 bg-[color:var(--solidez)] text-[color:var(--equilibrio)] hover:bg-[color:var(--modernidad)] transition-colors text-sm"
                  >
                    Inscribirme al curso
                  </a>
                  <a
                    href="#programa"
                    className="px-6 py-3.5 border border-[color:var(--solidez)] text-[color:var(--solidez)] hover:bg-[color:var(--solidez)] hover:text-[color:var(--equilibrio)] transition-colors text-sm"
                  >
                    Ver programa
                  </a>
                </div>
                <ul className="mt-10 space-y-2 text-sm text-[color:var(--modernidad)]/75">
                  <li>· Dirigido a abogados/as</li>
                  <li>· Clases grabadas</li>
                  <li>· eBook complementario</li>
                  <li>· Modelos de escritos listos para usar</li>
                  <li>· Certificado de finalización</li>
                </ul>
              </div>
              <ProgramAccordion />
            </div>
          </div>
        </section>

        {/* TESTIMONIOS */}
        <section className="py-28 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <div className="text-xs tracking-[0.3em] uppercase mb-5 text-[color:var(--solidez)]">
                Testimonios
              </div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance text-[color:var(--solidez)]">
                Lo que dicen{" "}
                <em className="not-italic text-[color:var(--confianza)]">nuestros clientes</em>.
              </h2>
            </div>
            <div className="flex items-center justify-center gap-6 mt-10 mb-4">
              <div className="font-display text-5xl text-[color:var(--confianza)]">5,0</div>
              <div>
                <div className="text-[color:var(--solidez)] text-xl tracking-widest">★★★★★</div>
                <div className="text-xs tracking-[0.2em] uppercase text-[color:var(--modernidad)]/60 mt-1">
                  Basado en reseñas de Google
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 overflow-hidden">
            <div className="flex gap-6 marquee-track w-max">
              {[...TESTIMONIALS, ...TESTIMONIALS].map(([quote, author], i) => (
                <figure
                  key={i}
                  className="w-[320px] sm:w-[380px] shrink-0 border hairline p-7 bg-white/60"
                >
                  <div className="text-[color:var(--solidez)] text-lg tracking-widest">★★★★★</div>
                  <blockquote className="font-display text-lg text-[color:var(--solidez)] mt-4 leading-snug">
                    &quot;{quote}&quot;
                  </blockquote>
                  <figcaption className="mt-6 text-xs tracking-[0.2em] uppercase text-[color:var(--modernidad)]/60">
                    — {author} · Google
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section
          id="contacto"
          className="py-28 lg:py-36 bg-[color:var(--modernidad)] text-[color:var(--equilibrio)]"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <div className="text-xs tracking-[0.3em] uppercase text-[color:var(--confianza)] mb-5">
                Contacto
              </div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[color:var(--equilibrio)] text-balance">
                Protegé hoy el{" "}
                <em className="not-italic text-[color:var(--confianza)]">valor de tu marca</em>.
              </h2>
              <p className="mt-6 text-[color:var(--equilibrio)]/70 leading-relaxed">
                Coordinamos una consulta inicial para entender tu proyecto y diseñar la estrategia
                más adecuada.
              </p>
              <div className="mt-10 space-y-4 text-sm text-[color:var(--equilibrio)]/80">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:text-[color:var(--confianza)]"
                >
                  <span className="w-8 h-8 border border-[color:var(--equilibrio)]/30 flex items-center justify-center">
                    →
                  </span>{" "}
                  WhatsApp directo
                </a>
                <a
                  href="https://www.instagram.com/intelecta.abogadas"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:text-[color:var(--confianza)]"
                >
                  <span className="w-8 h-8 border border-[color:var(--equilibrio)]/30 flex items-center justify-center">
                    @
                  </span>{" "}
                  @intelecta.abogadas
                </a>
              </div>
            </div>
            <form className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
              <input
                required
                type="text"
                placeholder="Nombre"
                className="bg-transparent border-b border-[color:var(--equilibrio)]/30 py-3 text-[color:var(--equilibrio)] placeholder:text-[color:var(--equilibrio)]/50 focus:outline-none focus:border-[color:var(--confianza)]"
              />
              <input
                required
                type="email"
                placeholder="Email"
                className="bg-transparent border-b border-[color:var(--equilibrio)]/30 py-3 text-[color:var(--equilibrio)] placeholder:text-[color:var(--equilibrio)]/50 focus:outline-none focus:border-[color:var(--confianza)]"
              />
              <input
                required
                type="tel"
                placeholder="Teléfono"
                className="bg-transparent border-b border-[color:var(--equilibrio)]/30 py-3 text-[color:var(--equilibrio)] placeholder:text-[color:var(--equilibrio)]/50 focus:outline-none focus:border-[color:var(--confianza)]"
              />
              <input
                required
                type="text"
                placeholder="Empresa"
                className="bg-transparent border-b border-[color:var(--equilibrio)]/30 py-3 text-[color:var(--equilibrio)] placeholder:text-[color:var(--equilibrio)]/50 focus:outline-none focus:border-[color:var(--confianza)]"
              />
              <textarea
                required
                rows={5}
                placeholder="Tu consulta"
                className="sm:col-span-2 bg-transparent border-b border-[color:var(--equilibrio)]/30 py-3 text-[color:var(--equilibrio)] placeholder:text-[color:var(--equilibrio)]/50 focus:outline-none focus:border-[color:var(--confianza)] resize-none"
              />
              <div className="sm:col-span-2 flex flex-wrap gap-4 mt-4">
                <button
                  type="submit"
                  className="px-7 py-4 bg-[color:var(--confianza)] text-[color:var(--solidez)] hover:bg-[color:var(--equilibrio)] transition-colors text-sm"
                >
                  Solicitar presupuesto →
                </button>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="px-7 py-4 border border-[color:var(--equilibrio)]/40 text-[color:var(--equilibrio)] hover:bg-[color:var(--equilibrio)] hover:text-[color:var(--solidez)] transition-colors text-sm"
                >
                  Agendar consulta
                </a>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[color:var(--solidez)] text-[color:var(--equilibrio)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div className="leading-tight">
                <div className="font-display text-2xl tracking-wide">INTELECTA</div>
                <div className="text-[10px] tracking-[0.3em] text-[color:var(--confianza)] uppercase">
                  Abogadas
                </div>
              </div>
              <p className="font-display text-2xl mt-8 max-w-md leading-snug">
                Protegemos marcas, ideas e innovación en toda Argentina.
              </p>
            </div>
            <div className="lg:col-span-3">
              <div className="text-xs tracking-[0.3em] uppercase text-[color:var(--confianza)] mb-5">
                Navegación
              </div>
              <ul className="space-y-2 text-sm">
                {[
                  ["#nosotras", "Nosotras"],
                  ["#servicios", "Servicios"],
                  ["#monitor", "Monitor de Marcas"],
                  ["#curso", "Curso"],
                  ["#contacto", "Contacto"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a href={href} className="hover:text-[color:var(--confianza)]">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-4">
              <div className="text-xs tracking-[0.3em] uppercase text-[color:var(--confianza)] mb-5">
                Conectá con nosotras
              </div>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.instagram.com/intelecta.abogadas"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[color:var(--confianza)]"
                  >
                    Instagram · @intelecta.abogadas
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/bianca-massarella-martinez-5909b02a3"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[color:var(--confianza)]"
                  >
                    LinkedIn · Bianca Massarella Martinez
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/delfinaalvarezp"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[color:var(--confianza)]"
                  >
                    LinkedIn · Delfina Alvarez
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[color:var(--equilibrio)]/15 mt-16 pt-8 text-xs text-[color:var(--equilibrio)]/60">
            © 2026 Intelecta Abogadas. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
          <path d="M20.52 3.48A11.93 11.93 0 0 0 12.04 0C5.48 0 .15 5.33.15 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.32-1.66a11.86 11.86 0 0 0 5.72 1.46h.01c6.56 0 11.9-5.33 11.9-11.9 0-3.18-1.24-6.17-3.43-8.42zM12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.75.98 1-3.66-.24-.38a9.86 9.86 0 1 1 18.3-5.25c0 5.45-4.45 9.9-9.91 9.9zm5.43-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z" />
        </svg>
      </a>
    </div>
  );
}
