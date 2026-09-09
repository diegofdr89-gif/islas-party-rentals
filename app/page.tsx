import {
  Armchair,
  Table2,
  Umbrella,
  TentTree,
  Share2,
  Sparkles,
  Trees,
} from "lucide-react";

import QuoteForm from "./components/QuoteForm";
import LightboxImage from "./components/LightboxImage";
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
        Party Rentals en Salinas, CA para eventos inolvidables
      </h1>

      <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-8">
        Renta de sillas, mesas, sombrillas y toldos para bodas, fiestas, reuniones y todo tipo de eventos.
      </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">

  <a
  href="#contacto"
  className="inline-flex w-fit items-center justify-center rounded-full bg-slate-950 px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
>
  Solicitar cotización
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
        Renta de mobiliario para fiestas y eventos
      </h2>

      <p className="text-lg leading-relaxed text-slate-600">
        Contamos con mobiliario y soluciones para reuniones,
        celebraciones y eventos especiales.
      </p>
    </div>
    <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
  {/* SILLAS */}
  <a
    href="#mobiliario"
    className="group rounded-3xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md md:p-6"
  >
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
      <Armchair size={26} strokeWidth={1.8} />
    </div>

    <h3 className="mb-2 text-xl font-bold text-slate-950">
      Sillas
    </h3>

    <p className="leading-relaxed text-slate-600">
  Estilos para todo tipo de eventos.
</p>
    <span className="mt-4 inline-block text-sm font-semibold text-amber-600">
      Ver modelos →
    </span>
  </a>

  {/* MESAS */}
  <a
    href="#mobiliario"
    className="group rounded-3xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md md:p-6"
  >
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
      <Table2 size={26} strokeWidth={1.8} />
    </div>

    <h3 className="mb-2 text-xl font-bold text-slate-950">
      Mesas
    </h3>

    <p className="leading-relaxed text-slate-600">
  Opciones para cada celebración.
</p>

    <span className="mt-4 inline-block text-sm font-semibold text-amber-600">
      Ver modelos →

    </span>
  </a>

  {/* SOMBRILLAS */}
  <a
    href="#mobiliario"
    className="group rounded-3xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md md:p-6"
  >
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
      <Umbrella size={26} strokeWidth={1.8} />
    </div>

    <h3 className="mb-2 text-xl font-bold text-slate-950">
      Sombrillas
    </h3>

    <p className="leading-relaxed text-slate-600">
  Comodidad para eventos al aire libre.
</p>

    <span className="mt-4 inline-block text-sm font-semibold text-amber-600">
      Ver opciones →
    </span>
  </a>

  {/* TOLDOS */}
  <a
    href="#mobiliario"
    className="group rounded-3xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md md:p-6"
  >
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
      <TentTree size={26} strokeWidth={1.8} />
    </div>

    <h3 className="mb-2 text-xl font-bold text-slate-950">
      Toldos
    </h3>

    <p className="leading-relaxed text-slate-600">
  Cobertura para tus celebraciones.
</p>
    <span className="mt-4 inline-block text-sm font-semibold text-amber-600">
      Ver opciones →
    </span>
  </a>

  {/* PISTA DE BAILE */}
  <div className="group rounded-3xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md md:p-6">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
      <Sparkles size={26} strokeWidth={1.8} />
    </div>

    <h3 className="mb-2 text-xl font-bold text-slate-950">
      Pista de baile
    </h3>

    <p className="leading-relaxed text-slate-600">
  El espacio ideal para bailar.
</p>

    <span className="mt-4 inline-block text-sm font-semibold text-slate-400">
      Próximamente
    </span>
  </div>

  {/* CÉSPED */}
  <div className="group rounded-3xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md md:p-6">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
      <Trees size={26} strokeWidth={1.8} />
    </div>

    <h3 className="mb-2 text-xl font-bold text-slate-950">
      Césped
    </h3>

   <p className="leading-relaxed text-slate-600">
  Un toque elegante para tu evento.
</p>

    <span className="mt-4 inline-block text-sm font-semibold text-slate-400">
      Próximamente
    </span>
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
      <div className="md:col-span-2">
  <div className="mb-8">
    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
      Mobiliario
    </p>

    <h3 className="mb-3 text-3xl font-bold text-slate-950">
      Sillas
    </h3>

    <p className="max-w-2xl leading-relaxed text-slate-600">
      Diferentes estilos para bodas, reuniones, fiestas, banquetes y
      celebraciones especiales.
    </p>
  </div>

  <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
    {[
      "/images/white-resin.png",
      "/images/fruitwood.png",
      "/images/black-resin.png",
      "/images/crossback.png",
      "/images/gold-chiavari.png",
      "/images/clear-chiavari-black-cushion.png",
    ].map((src) => (
      <div
        key={src}
        className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
      >
        <div className="aspect-[4/5] overflow-hidden bg-white">
          <img
            src={src}
            alt="Silla disponible en renta"
            className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    ))}
  </div>
</div>

<div className="md:col-span-2 mt-8">
  <div className="mb-8">
    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
      Mobiliario
    </p>

    <h3 className="mb-3 text-3xl font-bold text-slate-950">
      Mesas
    </h3>

    <p className="max-w-2xl leading-relaxed text-slate-600">
      Mesas para banquetes, reuniones, coctelería y eventos con diferentes
      estilos y configuraciones.
    </p>
  </div>

  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
    {[
      "/images/large-round-banquet-table.png",
      "/images/modern-cocktail-table.png",
      "/images/rectangular-event-table.png",
      "/images/rustic-farmhouse-table.png",
    ].map((src) => (
      <div
        key={src}
        className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
      >
        <div className="aspect-[4/3] overflow-hidden bg-white">
          <img
            src={src}
            alt="Mesa disponible en renta"
            className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    ))}
  </div>
</div>
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
        <LightboxImage
  src="/images/galeria-evento-1.jpeg"
  alt="Montaje para evento de Islas Party Rentals"
  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
/>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-1 lg:gap-6">
        <div className="group overflow-hidden rounded-3xl">
          <LightboxImage
            src="/images/galeria-evento-2.jpeg"
            alt="Montaje interior de evento"
            className="h-[180px] w-full object-cover transition duration-500 group-hover:scale-105 lg:h-[250px]"
          />
        </div>

        <div className="group overflow-hidden rounded-3xl">
          <LightboxImage
            src="/images/galeria-evento-3.jpeg"
            alt="Decoración y montaje para evento"
            className="h-[180px] w-full object-cover transition duration-500 group-hover:scale-105 lg:h-[250px]"
          />
        </div>
      </div>
    </div>
  </div>
  <div className="mx-auto max-w-7xl px-6">
  <div className="mt-6 grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-3">
  <div className="group overflow-hidden rounded-3xl lg:row-span-2">
    <LightboxImage
      src="/images/galeria-evento-5.jpeg"
      alt="Evento bajo toldo con mesas y sillas"
      className="h-[180px] w-full object-cover transition duration-500 group-hover:scale-105 lg:h-full lg:min-h-[420px]"
    />
  </div>

  <div className="group overflow-hidden rounded-3xl">
    <LightboxImage
      src="/images/galeria-evento-6.jpeg"
      alt="Montaje exterior con mesas, sillas y sombrillas"
      className="h-[180px] lg:h-[320px] w-full object-cover transition duration-500 group-hover:scale-105"
    />
  </div>

  <div className="group overflow-hidden rounded-3xl">
    <LightboxImage
      src="/images/galeria-evento-8.jpeg"
      alt="Montaje elegante con mesas y sillas doradas"
      className="h-[180px] lg:h-[320px] w-full object-cover transition duration-500 group-hover:scale-105"
    />
  </div>

  <div className="group overflow-hidden rounded-3xl">
    <LightboxImage
      src="/images/galeria-evento-7.jpeg"
      alt="Mesa elegante con sillas transparentes"
      className="h-[180px] lg:h-[320px] w-full object-cover transition duration-500 group-hover:scale-105"
    />
  </div>

  <div className="group overflow-hidden rounded-3xl">
    <LightboxImage
      src="/images/galeria-evento-9.jpeg"
      alt="Mesa de madera decorada para celebración"
      className="h-[180px] lg:h-[320px] w-full object-cover transition duration-500 group-hover:scale-105"
    />
  </div>
  <div className="group overflow-hidden rounded-3xl">
  <LightboxImage
    src="/images/galeria-evento-10.jpeg"
    alt="Montaje elegante con mesas, sillas doradas y decoración en tonos rojo y negro"
    className="h-[180px] w-full object-cover transition duration-500 group-hover:scale-105 lg:h-[320px]"
  />
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
          En Islas Party Rentals ofrecemos renta de mobiliario y equipo para eventos en Salinas, California. Contamos con sillas, mesas, sombrillas y toldos para bodas, fiestas, reuniones y celebraciones, con opciones para crear el espacio que cada evento necesita.
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
  href="#contacto"
  className="inline-flex shrink-0 items-center justify-center rounded-full bg-slate-950 px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
>
  Solicitar cotización
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
              Telefono
            </p>

            <a
              href="tel:+18315400652"
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
<div className="flex items-center gap-5 md:pr-20">
  <a
    href="https://www.instagram.com/islas_party_rentals_831?igsi=MXN5MWg5ZjNmcWo4Yg=="
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold text-slate-400 transition hover:text-amber-400"
  >
    Instagram
  </a>

  <a
    href="https://www.facebook.com/profile.php?id=100076482309292&mibextid=wwXIfr"
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold text-slate-400 transition hover:text-amber-400"
  >
    Facebook
  </a>
</div>
  </div>
</footer>
{/* BOTÓN FLOTANTE REDES SOCIALES */}
<details className="group fixed bottom-20 right-4 z-50 md:bottom-6 md:right-6">
  <div className="absolute bottom-full right-0 mb-3 flex flex-col items-end gap-2">
    <a
      href="https://www.instagram.com/islas_party_rentals_831?igsi=MXN5MWg5ZjNmcWo4Yg=="
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full bg-white px-5 py-3 font-semibold text-slate-900 shadow-lg transition hover:bg-slate-100"
    >
      Instagram
    </a>

    <a
      href="https://www.facebook.com/profile.php?id=100076482309292&mibextid=wwXIfr"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full bg-white px-5 py-3 font-semibold text-slate-900 shadow-lg transition hover:bg-slate-100"
    >
      Facebook
    </a>
  </div>

  <summary
    aria-label="Ver redes sociales"
    className="flex h-14 w-14 cursor-pointer list-none items-center justify-center rounded-full bg-slate-950 text-white shadow-xl transition hover:bg-slate-800 md:h-16 md:w-16"
  >
    <Share2 size={28} strokeWidth={2} />
  </summary>
</details>
      </section>
    </main>
  );
}
