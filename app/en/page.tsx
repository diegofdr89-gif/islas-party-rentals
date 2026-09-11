import type { Metadata } from "next";
import Image from "next/image";
import {
  Armchair,
  Table2,
  Umbrella,
  TentTree,
  Share2,
  Sparkles,
  Trees,
} from "lucide-react";

import QuoteForm from "../components/QuoteForm";
import LightboxImage from "../components/LightboxImage";
export const metadata: Metadata = {
  title: "Islas Party Rentals | Party Rentals in Salinas, CA",
  description:
    "Chair, table, umbrella, tent, dance floor and event rentals in Salinas, California. Request a quote from Islas Party Rentals.",

  keywords: [
    "party rentals Salinas CA",
    "event rentals Salinas CA",
    "chair rentals Salinas CA",
    "table rentals Salinas CA",
    "tent rentals Salinas CA",
    "dance floor rentals Salinas CA",
    "Islas Party Rentals",
  ],

  alternates: {
    canonical: "/en",
    languages: {
      "en-US": "/en",
      "es-US": "/",
      "x-default": "/en",
    },
  },

  openGraph: {
    url: "/en",
    title: "Islas Party Rentals | Party Rentals in Salinas, CA",
    description:
      "Chair, table, umbrella and tent rentals for parties, weddings and special events in Salinas, California.",
    type: "website",
    locale: "en_US",
    siteName: "Islas Party Rentals",
    images: [
      {
        url: "/images/social-share.png",
        width: 1200,
        height: 630,
        alt: "Islas Party Rentals - Salinas, California",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Islas Party Rentals | Party Rentals in Salinas, CA",
    description:
      "Chair, table, umbrella and tent rentals for parties, weddings and special events in Salinas, California.",
    images: ["/images/social-share.png"],
  },
};
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
        Home
      </a>

      <a
        href="#servicios"
        className="transition hover:text-amber-600"
      >
        Services
      </a>

      <a
        href="#galeria"
        className="transition hover:text-amber-600"
      >
        Gallery
      </a>

      <a
        href="#nosotros"
        className="transition hover:text-amber-600"
      >
        About Us
      </a>

      <a
        href="#contacto"
        className="transition hover:text-amber-600"
      >
        Contact
      </a>
    </nav>
<div className="hidden items-center gap-2 text-sm font-semibold md:flex">
  <a
  href="/"
  className="rounded-lg px-3 py-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
  aria-label="Ver sitio en español"
>
  ES
</a>

<a
  href="/en"
  className="rounded-lg bg-slate-950 px-3 py-2 text-white"
  aria-label="View site in English"
>
  EN
</a>
</div>

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
          className="block rounded-xl px-4 py-2 font-medium text-slate-900 transition hover:bg-slate-100 hover:text-amber-600"
        >
          Servicios
        </a>

        <a
          href="#galeria"
          className="block rounded-xl px-4 py-2 font-medium text-slate-900 transition hover:bg-slate-100 hover:text-amber-600"
        >
          Galería
        </a>

        <a
          href="#nosotros"
          className="block rounded-xl px-4 py-2 font-medium text-slate-900 transition hover:bg-slate-100 hover:text-amber-600"
        >
          Nosotros
        </a>

        <a
          href="#contacto"
          className="block rounded-xl px-4 py-2 font-medium text-slate-900 transition hover:bg-slate-100 hover:text-amber-600"
        >
          Contacto
        </a>
<div className="flex items-center gap-2 px-4 py-2">
  <div className="flex items-center gap-2 px-4 py-2">
  <a
    href="/"
    className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
    aria-label="Ver sitio en español"
  >
    ES
  </a>

  <a
    href="/en"
    className="rounded-lg bg-slate-950 px-3 py-2 text-sm font-semibold text-white"
    aria-label="View site in English"
  >
    EN
  </a>
</div>
</div>
        <div className="my-2 border-t border-slate-200" />

        <a
          href="tel:+18315400652"
          className="block rounded-xl bg-slate-950 px-4 py-3 text-center font-semibold text-white transition hover:bg-slate-800"
        >
          Call now
        </a>

      </nav>
    </details>

  </div>
</header>

        <section
  id="inicio"
  className="relative flex min-h-[650px] items-center overflow-hidden text-white md:min-h-[720px]"
>
  <Image
  src="/images/hero-evento.jpeg"
  alt="Event setup by Islas Party Rentals"
  fill
  priority
  fetchPriority="high"
  sizes="100vw"
  className="object-cover object-[center_45%] md:object-center"
/>

  <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
<div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />

  <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
    <div className="max-w-3xl">
      <p className="text-amber-400 font-semibold uppercase tracking-[0.2em] text-sm mb-5">
        EVENT FURNITURE RENTALS
      </p>

      <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
        Party Rentals in Salinas, CA for Unforgettable Events
      </h1>

      <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-8">
        Chair, table, umbrella, and tent rentals for weddings, parties, gatherings, and special events.
      </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">

  <a
  href="#contacto"
  className="inline-flex w-fit items-center justify-center rounded-full bg-slate-950 px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
>
  Request a Quote
</a>

  <a
    href="tel:+18315400652"
    className="inline-flex w-fit items-center justify-center rounded-full border border-white/70 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white hover:text-slate-950"
  >
    Call Now
  </a>

  <a
    href="#servicios"
    className="inline-flex w-fit items-center justify-center rounded-full border border-white/70 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white hover:text-slate-950"
  >
    View Services
      </a>

    </div>
  </div>
</div>
</section>
      <section id="servicios" className="bg-white py-16 md:py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-14 max-w-2xl">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
        Our Services
      </p>
      <h2 className="mb-5 text-4xl font-bold text-slate-950 md:text-5xl">
        Furniture Rentals for Parties and Events
      </h2>

      <p className="text-lg leading-relaxed text-slate-600">
        We offer furniture and solutions for gatherings, 
        celebrations, and special events.
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
      Chairs
    </h3>

    <p className="leading-relaxed text-slate-600">
  Styles for every type of event.
</p>
    <span className="mt-4 inline-block text-sm font-semibold text-amber-600">
      View Models →
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
      Tables
    </h3>

    <p className="leading-relaxed text-slate-600">
  Options for every celebration.
</p>

    <span className="mt-4 inline-block text-sm font-semibold text-amber-600">
      View Models →

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
      Umbrellas
    </h3>

    <p className="leading-relaxed text-slate-600">
  Comfort for outdoor events.
</p>

    <span className="mt-4 inline-block text-sm font-semibold text-amber-600">
      View Options →
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
      Tents
    </h3>

    <p className="leading-relaxed text-slate-600">
  Coverage for your celebrations.
</p>
    <span className="mt-4 inline-block text-sm font-semibold text-amber-600">
      View Options →
    </span>
  </a>

  {/* PISTA DE BAILE */}
  <div className="group rounded-3xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md md:p-6">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
      <Sparkles size={26} strokeWidth={1.8} />
    </div>

    <h3 className="mb-2 text-xl font-bold text-slate-950">
      Dance Floor
    </h3>

    <p className="leading-relaxed text-slate-600">
  he perfect space for dancing.
</p>

    <span className="mt-4 inline-block text-sm font-semibold text-slate-400">
      Coming Soon
    </span>
  </div>

  {/* CÉSPED */}
  <div className="group rounded-3xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md md:p-6">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
      <Trees size={26} strokeWidth={1.8} />
    </div>

    <h3 className="mb-2 text-xl font-bold text-slate-950">
      Grass
    </h3>

   <p className="leading-relaxed text-slate-600">
  An elegant touch for your event.
</p>

    <span className="mt-4 inline-block text-sm font-semibold text-slate-400">
      Coming Soon
    </span>
  </div>
</div>
  </div>
</section>
<section id="mobiliario" className="bg-slate-50 py-16 md:py-24">
  <div className="mx-auto max-w-7xl px-6">
    <div className="mb-14 max-w-3xl">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
        Our Furniture
      </p>

      <h2 className="mb-5 text-4xl font-bold text-slate-950 md:text-5xl">
        Options for Every Type of Event
      </h2>

      <p className="text-lg leading-relaxed text-slate-600">
        We offer a variety of furniture and equipment styles to suit
        the setting, size, and needs of your event.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-2">
      <div className="md:col-span-2">
  <div className="mb-8">
    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
      Furniture
    </p>

    <h3 className="mb-3 text-3xl font-bold text-slate-950">
      Chairs
    </h3>

    <p className="max-w-2xl leading-relaxed text-slate-600">
      A variety of styles for weddings, gatherings, parties, banquets,
      and special celebrations.
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
        <div className="relative aspect-[4/5] overflow-hidden bg-white">
  <Image
    src={src}
    alt="Chair available for rent"
    fill
    sizes="(max-width: 768px) 50vw, 33vw"
    className="object-contain transition duration-500 group-hover:scale-105"
  />
</div>
      </div>
    ))}
  </div>
</div>

<div className="md:col-span-2 mt-8">
  <div className="mb-8">
    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
      Furniture
    </p>

    <h3 className="mb-3 text-3xl font-bold text-slate-950">
      Tables
    </h3>

    <p className="max-w-2xl leading-relaxed text-slate-600">
      Tables for banquets, gatherings, cocktail events, and celebrations
      in a variety of styles and configurations.
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
        <div className="relative aspect-[4/3] overflow-hidden bg-white">
          <Image
  src={src}
  alt="Table available for rent"
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-contain transition duration-500 group-hover:scale-105"
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
            className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            Outdoor
          </p>

          <h3 className="mb-3 text-3xl font-bold text-slate-950">
            Umbrellas
          </h3>

          <p className="leading-relaxed text-slate-600">
            A comfortable and elegant solution for outdoor areas,
            gatherings, and daytime celebrations.
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
            Coverage
          </p>

          <h3 className="mb-3 text-3xl font-bold text-slate-950">
            Tents
          </h3>

          <p className="leading-relaxed text-slate-600">
            Coverage to keep your guests comfortable and provide
            structure for your outdoor event.
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
        Gallery
      </p>

      <h2 className="mb-5 text-4xl font-bold text-slate-950 md:text-5xl">
        Events That Speak for Themselves
      </h2>

      <p className="text-lg leading-relaxed text-slate-600">
        A look at some of our setups and event work designed to create
        special, comfortable, and memorable spaces.
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
<section id="nosotros" className="bg-slate-950 py-12 md:py-24 text-white">
  <div className="mx-auto max-w-7xl px-6">

    <div className="grid items-center gap-16 lg:grid-cols-2">

      {/* TEXTO */}
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
          About Us
        </p>

        <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
          More Than Furniture,
          <span className="text-amber-400"> We Create Spaces to Celebrate</span>
        </h2>

        <p className="mb-4 text-base leading-relaxed text-slate-300 md:mb-5 md:text-lg">
  At Islas Party Rentals, we provide furniture and equipment rentals for events in Salinas, California.

</p>

        <p className="text-base leading-relaxed text-slate-300 md:text-lg">
  From family gatherings to special events, we help you find the right options for every celebration.
</p>
      </div>

      {/* CARACTERÍSTICAS */}
      <div className="grid gap-5">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-7 transition duration-300 hover:bg-white/10">
          <div className="mb-3 text-2xl md:mb-4 md:text-3xl">01</div>

          <h3 className="mb-2 text-xl font-bold">
            Furniture Variety
          </h3>

          <p className="leading-relaxed text-slate-400">
            A variety of tables and chairs to suit the style
            and needs of every event.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-7 transition duration-300 hover:bg-white/10">
          <div className="mb-3 text-2xl md:mb-4 md:text-3xl">02</div>

          <h3 className="mb-2 text-xl font-bold">
            Outdoor Solutions
          </h3>

          <p className="leading-relaxed text-slate-400">
            Tents and umbrellas to create comfortable and functional spaces
            for outdoor celebrations.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-7 transition duration-300 hover:bg-white/10">
          <div className="mb-3 text-2xl md:mb-4 md:text-3xl">03</div>

          <h3 className="mb-2 text-xl font-bold">
            Personalized Service
          </h3>

          <p className="leading-relaxed text-slate-400">
            We help you find the options that best suit
            the type of celebration you're planning.
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
          Plan Your Event
        </p>

        <h2 className="mb-4 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
          Planning Your Next Event?
        </h2>

        <p className="text-lg leading-relaxed text-slate-900/80">
          Tell us what you need and we'll help you find the right furniture,
          tents, and options for your celebration.
        </p>
      </div>

      <a
  href="#contacto"
  className="inline-flex shrink-0 items-center justify-center rounded-full bg-slate-950 px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
>
  Request a Quote
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
          Contact
        </p>

        <h2 className="mb-6 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
          Let’s Bring Your Next Event to Life
        </h2>

        <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-600">
          Tell us what you're planning and what furniture you need.
          We're ready to help you find the best options
          for your celebration.
        </p>

        <div className="space-y-6">

          <div>
            <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-slate-400">
              Phone
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
              Service Area
            </p>

            <p className="text-xl font-semibold text-slate-950">
              Salinas, California
            </p>
          </div>

        </div>
      </div>

      {/* FORMULARIO DE COTIZACIÓN */}
<div className="rounded-3xl bg-slate-50 p-8 md:p-10">
  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
    Quote
  </p>

  <h3 className="mb-3 text-3xl font-bold text-slate-950">
    Request a Quote
  </h3>

  <p className="mb-8 leading-relaxed text-slate-600">
    Tell us a little about your event and we'll get in touch with you.
  </p>
<QuoteForm language="en" />
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
        Furniture and solutions for events.
      </p>
    </div>

    <div className="flex flex-wrap gap-6 text-sm text-slate-300">
      <a href="#" className="transition hover:text-amber-400">
        Home
      </a>

      <a href="#servicios" className="transition hover:text-amber-400">
        Services
      </a>

      <a href="#galeria" className="transition hover:text-amber-400">
        Gallery
      </a>

      <a href="#nosotros" className="transition hover:text-amber-400">
        About
      </a>

      <a href="#contacto" className="transition hover:text-amber-400">
        Contact
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
  aria-label="Instagram de Islas Party Rentals"
  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-amber-400 hover:text-amber-400"
>
  <svg
    viewBox="0 0 24 24"
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
</a>

  <a
  href="https://www.facebook.com/profile.php?id=100076482309292&mibextid=wwXIfr"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Facebook de Islas Party Rentals"
  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-amber-400 hover:text-amber-400"
>
  <svg
    viewBox="0 0 24 24"
    className="h-6 w-6"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M13.5 21v-8h2.8l.4-3h-3.2V8.1c0-.9.3-1.6 1.7-1.6H17V3.8c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5V10H7v3h3v8h3.5Z" />
  </svg>
</a>
</div>
  </div>
</footer>
{/* BOTÓN FLOTANTE REDES SOCIALES */}
<details className="group fixed bottom-24 right-3 z-50 md:bottom-6 md:right-6">
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
    aria-label="View social media"
    className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full bg-slate-950/90 text-white shadow-lg backdrop-blur-sm transition hover:bg-slate-800 md:h-16 md:w-16 md:bg-slate-950 md:shadow-xl"
  >
    <Share2 size={22} strokeWidth={2} />
  </summary>
</details>
      </section>
    </main>
  );
}
