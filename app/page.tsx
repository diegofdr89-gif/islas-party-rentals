import { 
  Armchair, 
  Table2, 
  Umbrella, 
  TentTree, 
  MessageCircle, 
} from "lucide-react";
import QuoteForm from "./components/QuoteForm";
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="min-h-screen flex flex-col">
        <header className="relative z-50 w-full border-b border-slate-200 bg-white">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

    {/* LOGO / NOMBRE */}
    <a
      href="#inicio"
      className="text-2xl font-bold tracking-tight text-slate-950"
    >
      Islas Party Rentals
    </a>

    {/* MENÚ DE COMPUTADORA */}
    <nav className="hidden gap-8 text-sm font-medium md:flex">
      <a
        href="#inicio"
        className="transition hover:text-amber-600"
      >
        Inicio
      </a>

      <a
        href="#servicios"
        className="transition hover:text-amber-600"
      >
        Servicios
      </a>

      <a
        href="#galeria"
        className="transition hover:text-amber-600"
      >
        Galería
      </a>

      <a
        href="#nosotros"
        className="transition hover:text-amber-600"
      >
        Nosotros
      </a>

      <a
        href="#contacto"
        className="transition hover:text-amber-600"
      >
        Contacto
      </a>
    </nav>

    {/* MENÚ PARA CELULAR */}
    <details className="group relative md:hidden">

      <summary
        aria-label="Abrir menú"
        className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-slate-200 text-slate-950 transition hover:bg-slate-100 [&::-webkit-details-marker]:hidden"
      >
        <span className="text-2xl leading-none">☰</span>
      </summary>

      <nav className="absolute right-0 top-14 w-64 overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">

        <a
          href="#inicio"
          className="block rounded-xl px-4 py-3 font-medium text-slate-900 transition hover:bg-slate-100 hover:text-amber-600"
        >
          Inicio
        </a>

        <a
          href="#servicios"
          className="block rounded-xl px-4 py-3 font-medium text-slate-900 transition hover:bg-slate-100 hover:text-amber-600"
        >
          Servicios
        </a>

        <a
          href="#galeria"
          className="block rounded-xl px-4 py-3 font-medium text-slate-900 transition hover:bg-slate-100 hover:text-amber-600"
        >
          Galería
        </a>

        <a
          href="#nosotros"
          className="block rounded-xl px-4 py-3 font-medium text-slate-900 transition hover:bg-slate-100 hover:text-amber-600"
        >
          Nosotros
        </a>

        <a
          href="#contacto"
          className="block rounded-xl px-4 py-3 font-medium text-slate-900 transition hover:bg-slate-100 hover:text-amber-600"
        >
          Contacto
        </a>

        <div className="my-2 border-t border-slate-200" />

        <a
          href="tel:+18315400652"
          className="block rounded-xl bg-slate-950 px-4 py-3 text-center font-semibold text-white transition hover:bg-slate-800"
        >
          Llamar ahora
        </a>

      </nav>
    </details>

  </div>
</header>

        <section
  id="inicio"
  className="relative flex min-h-[650px] items-center overflow-hidden text-white md:min-h-[720px]"
>
  <div
  className="absolute inset-0 bg-cover bg-[center_45%] md:bg-center"
  style={{ backgroundImage: "url('/images/hero-evento.jpeg')" }}
/>

  <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
<div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />

  <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
    <div className="max-w-3xl">
      <p className="text-amber-400 font-semibold uppercase tracking-[0.2em] text-sm mb-5">
        Renta de mobiliario para eventos
      </p>

      <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
        Todo para que tu evento sea inolvidable
      </h1>

      <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-8">
        Sillas, mesas, sombrillas y toldos para reuniones,
        celebraciones y eventos especiales.
      </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">

  <a
    href="https://wa.me/18315400652?text=Hola%2C%20vi%20el%20sitio%20web%20de%20Islas%20Party%20Rentals%20y%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n%20para%20mi%20evento."
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex w-fit items-center justify-center rounded-full bg-slate-950 px-8 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-slate-800"
  >
    Cotizar por WhatsApp
  </a>

  <a
    href="tel:+18315400652"
    className="inline-flex w-fit items-center justify-center rounded-full border border-white/70 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white hover:text-slate-950"
  >
    Llamar ahora
  </a>

  <a
    href="#servicios"
    className="inline-flex w-fit items-center justify-center rounded-full border border-white/70 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white hover:text-slate-950"
  >
    Ver servicios
      </a>

    </div>
  </div>
</div>
</section>
      <section id="servicios" className="bg-white py-16 md:py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-14 max-w-2xl">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
        Nuestros servicios
      </p>

      <h2 className="mb-5 text-4xl font-bold text-slate-950 md:text-5xl">
        Todo lo que necesitas para tu evento
      </h2>

      <p className="text-lg leading-relaxed text-slate-600">
        Contamos con mobiliario y soluciones para reuniones,
        celebraciones y eventos especiales.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

      {/* SILLAS */}
      <div className="group rounded-3xl border border-slate-200 bg-white p-6 md:p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 transition group-hover:bg-amber-500 group-hover:text-white">
          <Armchair size={30} strokeWidth={1.8} />
        </div>

        <h3 className="mb-3 text-2xl font-bold text-slate-950">
          Sillas
        </h3>

        <p className="leading-relaxed text-slate-600">
          Opciones para todo tipo de reuniones, fiestas y eventos.
        </p>
      </div>

      {/* MESAS */}
      <div className="group rounded-3xl border border-slate-200 bg-white p-6 md:p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 transition group-hover:bg-amber-500 group-hover:text-white">
          <Table2 size={30} strokeWidth={1.8} />
        </div>

        <h3 className="mb-3 text-2xl font-bold text-slate-950">
          Mesas
        </h3>

        <p className="leading-relaxed text-slate-600">
          Mesas prácticas y versátiles para organizar cualquier celebración.
        </p>
      </div>

      {/* SOMBRILLAS */}
      <div className="group rounded-3xl border border-slate-200 bg-white p-6 md:p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 transition group-hover:bg-amber-500 group-hover:text-white">
          <Umbrella size={30} strokeWidth={1.8} />
        </div>

        <h3 className="mb-3 text-2xl font-bold text-slate-950">
          Sombrillas
        </h3>

        <p className="leading-relaxed text-slate-600">
          Ideales para crear espacios cómodos y agradables al aire libre.
        </p>
      </div>

      {/* TOLDOS */}
      <div className="group rounded-3xl border border-slate-200 bg-white p-6 md:p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 transition group-hover:bg-amber-500 group-hover:text-white">
          <TentTree size={30} strokeWidth={1.8} />
        </div>

        <h3 className="mb-3 text-2xl font-bold text-slate-950">
          Toldos
        </h3>

        <p className="leading-relaxed text-slate-600">
          Cobertura y comodidad para proteger tus eventos del clima.
        </p>
      </div>

    </div>
  </div>
</section>
<section id="mobiliario" className="bg-slate-50 py-16 md:py-24">
  <div className="mx-auto max-w-7xl px-6">
    <div className="mb-14 max-w-3xl">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
        Nuestro mobiliario
      </p>

      <h2 className="mb-5 text-4xl font-bold text-slate-950 md:text-5xl">
        Opciones para cada tipo de evento
      </h2>

      <p className="text-lg leading-relaxed text-slate-600">
        Contamos con diferentes estilos de mobiliario y equipo para adaptarnos
        al ambiente, tamaño y necesidades de tu celebración.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-2">
      <article className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="aspect-[4/3] overflow-hidden bg-slate-100">
          <img
            src="/images/sillas.jpeg"
            alt="Modelos de sillas disponibles en renta"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            Mobiliario
          </p>

          <h3 className="mb-3 text-3xl font-bold text-slate-950">
            Sillas
          </h3>

          <p className="leading-relaxed text-slate-600">
            Diferentes estilos para bodas, reuniones, fiestas, banquetes
            y celebraciones especiales.
          </p>
        </div>
      </article>

      <article className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="aspect-[4/3] overflow-hidden bg-slate-100">
          <img
            src="/images/mesas.jpeg"
            alt="Modelos de mesas disponibles en renta"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            Mobiliario
          </p>

          <h3 className="mb-3 text-3xl font-bold text-slate-950">
            Mesas
          </h3>

          <p className="leading-relaxed text-slate-600">
            Mesas para banquetes, reuniones, coctelería y eventos con
            diferentes estilos y configuraciones.
          </p>
        </div>
      </article>

      <article className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="aspect-[4/3] overflow-hidden bg-slate-100">
          <img
            src="/images/sombrilla.jpeg"
            alt="Sombrillas para eventos al aire libre"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            Exterior
          </p>

          <h3 className="mb-3 text-3xl font-bold text-slate-950">
            Sombrillas
          </h3>

          <p className="leading-relaxed text-slate-600">
            Una solución cómoda y elegante para áreas exteriores,
            reuniones y celebraciones durante el día.
          </p>
        </div>
      </article>

      <article className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="aspect-[4/3] overflow-hidden bg-slate-100">
          <img
            src="/images/toldo-blanco.jpeg"
            alt="Toldos para eventos"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            Cobertura
          </p>

          <h3 className="mb-3 text-3xl font-bold text-slate-950">
            Toldos
          </h3>

          <p className="leading-relaxed text-slate-600">
            Cobertura para mantener a tus invitados cómodos y darle
            estructura a tu evento al aire libre.
          </p>
        </div>
      </article>
    </div>
  </div>
</section>
<section id="galeria" className="bg-white py-16 md:py-24">
  <div className="mx-auto max-w-7xl px-6">
    <div className="mb-14 max-w-3xl">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
        Galería
      </p>

      <h2 className="mb-5 text-4xl font-bold text-slate-950 md:text-5xl">
        Eventos que hablan por sí solos
      </h2>

      <p className="text-lg leading-relaxed text-slate-600">
        Algunos de nuestros montajes y trabajos realizados para crear
        espacios especiales, cómodos y memorables.
      </p>
    </div>

    <div className="grid gap-6 lg:grid-cols-2">
      <div className="group overflow-hidden rounded-3xl">
        <img
          src="/images/galeria-evento-1.jpeg"
          alt="Montaje de evento con mesas y sillas"
          className="h-full min-h-[520px] w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="grid gap-6">
        <div className="group overflow-hidden rounded-3xl">
          <img
            src="/images/galeria-evento-2.jpeg"
            alt="Montaje interior de evento"
            className="h-[250px] w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="group overflow-hidden rounded-3xl">
          <img
            src="/images/galeria-evento-3.jpeg"
            alt="Decoración y montaje para evento"
            className="h-[250px] w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  </div>
</section>
{/* NOSOTROS */}
<section id="nosotros" className="bg-slate-950 py-16 md:py-24 text-white">
  <div className="mx-auto max-w-7xl px-6">

    <div className="grid items-center gap-16 lg:grid-cols-2">

      {/* TEXTO */}
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
          Sobre nosotros
        </p>

        <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
          Más que mobiliario,
          <span className="text-amber-400"> creamos espacios para celebrar</span>
        </h2>

        <p className="mb-5 text-lg leading-relaxed text-slate-300">
          En Islas Party Rentals sabemos que cada evento es diferente.
          Por eso ofrecemos distintas opciones de mobiliario, toldos y
          soluciones para exteriores, buscando que cada celebración tenga
          el espacio que necesita.
        </p>

        <p className="text-lg leading-relaxed text-slate-300">
          Desde reuniones familiares hasta eventos especiales, nuestro
          objetivo es ayudarte a encontrar las opciones adecuadas para
          cada ocasión.
        </p>
      </div>

      {/* CARACTERÍSTICAS */}
      <div className="grid gap-5">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:bg-white/10">
          <div className="mb-4 text-3xl">01</div>

          <h3 className="mb-2 text-xl font-bold">
            Variedad de mobiliario
          </h3>

          <p className="leading-relaxed text-slate-400">
            Diferentes opciones de mesas y sillas para adaptarse al estilo
            y necesidades de cada evento.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:bg-white/10">
          <div className="mb-4 text-3xl">02</div>

          <h3 className="mb-2 text-xl font-bold">
            Soluciones para exterior
          </h3>

          <p className="leading-relaxed text-slate-400">
            Toldos y sombrillas para crear espacios cómodos y funcionales
            en celebraciones al aire libre.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:bg-white/10">
          <div className="mb-4 text-3xl">03</div>

          <h3 className="mb-2 text-xl font-bold">
            Atención personalizada
          </h3>

          <p className="leading-relaxed text-slate-400">
            Te ayudamos a encontrar las opciones que mejor se adapten
            al tipo de celebración que estás organizando.
          </p>
        </div>

      </div>
    </div>
  </div>
</section>
{/* CTA COTIZACIÓN */}
<section className="bg-amber-500 py-20">
  <div className="mx-auto max-w-7xl px-6">
    <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

      <div className="max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950/70">
          Planea tu evento
        </p>

        <h2 className="mb-4 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
          ¿Planeando tu próximo evento?
        </h2>

        <p className="text-lg leading-relaxed text-slate-900/80">
          Cuéntanos qué necesitas y te ayudamos a encontrar el mobiliario,
          toldos y opciones adecuadas para tu celebración.
        </p>
      </div>

      <a
  href="https://wa.me/18315400652?text=Hola%2C%20vi%20el%20sitio%20web%20de%20Islas%20Party%20Rentals%20y%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n%20para%20mi%20evento."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex shrink-0 items-center justify-center rounded-full bg-slate-950 px-8 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-slate-800"
>
  Cotizar por WhatsApp
</a>
    </div>
  </div>
</section>
{/* CONTACTO */}
<section id="contacto" className="bg-white py-16 md:py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="grid gap-14 lg:grid-cols-2">

      {/* INFORMACIÓN */}
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
          Contacto
        </p>

        <h2 className="mb-6 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
          Hagamos realidad tu próximo evento
        </h2>

        <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-600">
          Cuéntanos qué estás planeando y qué mobiliario necesitas.
          Estamos listos para ayudarte a encontrar las mejores opciones
          para tu celebración.
        </p>

        <div className="space-y-6">

          <div>
            <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-slate-400">
              WhatsApp
            </p>

            <a
              href="https://wa.me/18315400652"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-slate-950 transition hover:text-amber-600"
            >
              +1 (831) 540-0652
            </a>
          </div>

          <div>
            <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-slate-400">
              Servicio
            </p>

            <p className="text-xl font-semibold text-slate-950">
              California, USA
            </p>
          </div>

        </div>
      </div>

      {/* FORMULARIO DE COTIZACIÓN */}
<div className="rounded-3xl bg-slate-50 p-8 md:p-10">
  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
    Cotización
  </p>

  <h3 className="mb-3 text-3xl font-bold text-slate-950">
    Solicita una cotización
  </h3>

  <p className="mb-8 leading-relaxed text-slate-600">
    Cuéntanos un poco sobre tu evento y nos pondremos en contacto contigo.
  </p>
<QuoteForm />
</div>
    </div>
  </div>
</section>
{/* FOOTER */}
<footer className="bg-slate-950 py-12 text-white">
  <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">

    <div>
      <h3 className="text-2xl font-bold">
        Islas Party Rentals
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        Mobiliario y soluciones para eventos.
      </p>
    </div>

    <div className="flex flex-wrap gap-6 text-sm text-slate-300">
      <a href="#" className="transition hover:text-amber-400">
        Inicio
      </a>

      <a href="#servicios" className="transition hover:text-amber-400">
        Servicios
      </a>

      <a href="#galeria" className="transition hover:text-amber-400">
        Galería
      </a>

      <a href="#nosotros" className="transition hover:text-amber-400">
        Nosotros
      </a>

      <a href="#contacto" className="transition hover:text-amber-400">
        Contacto
      </a>
    </div>

    <p className="text-sm text-slate-500">
      © 2026 Islas Party Rentals
    </p>

  </div>
</footer>
{/* BOTÓN FLOTANTE WHATSAPP */}
<a
  href="https://wa.me/18315400652?text=Hola%2C%20vi%20el%20sitio%20web%20de%20Islas%20Party%20Rentals%20y%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n%20para%20mi%20evento."
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Contactar por WhatsApp"
  className="fixed bottom-6 right-6 z-50 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-green-600"
>
  <MessageCircle size={30} strokeWidth={2} />
</a>
      </section>
    </main>
  );
}
