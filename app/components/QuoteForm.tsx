"use client";

import { FormEvent, useState } from "react";

export default function QuoteForm() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSending(true);
    setStatus("idle");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      eventDate: formData.get("eventDate"),
      location: formData.get("location"),
      service: formData.get("service"),
      guests: formData.get("guests"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar la solicitud.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Nombre completo
        </label>

        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          required
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-amber-500"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Teléfono
          </label>

          <input
            type="tel"
            name="phone"
            placeholder="(831) 000-0000"
            required
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-amber-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Correo electrónico
          </label>

          <input
            type="email"
            name="email"
            placeholder="correo@email.com"
            required
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-amber-500"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Fecha del evento
          </label>

          <input
            type="date"
            name="eventDate"
            required
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-amber-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Ciudad / Ubicación
          </label>

          <input
            type="text"
            name="location"
            placeholder="Salinas, CA"
            required
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-amber-500"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          ¿Qué necesitas para tu evento?
        </label>

        <select
          name="service"
          required
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-amber-500"
        >
          <option value="">Selecciona una opción</option>
<option value="chairs">Sillas</option>
<option value="tables">Mesas</option>
<option value="umbrellas">Sombrillas</option>
<option value="tents">Toldos</option>
<option value="dance-floor">Pista de baile</option>
<option value="grass">Césped</option>
<option value="multiple">Varios servicios</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Número aproximado de invitados
        </label>

        <input
          type="number"
          name="guests"
          min="1"
          placeholder="Ej. 100"
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-amber-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Cuéntanos sobre tu evento
        </label>

        <textarea
          name="message"
          rows={4}
          placeholder="Ej. Necesito mesas, sillas y un toldo para una fiesta de aproximadamente 100 personas..."
          className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-amber-500"
        />
      </div>

      <button
        type="submit"
        disabled={isSending}
        className="w-full rounded-full bg-amber-500 px-6 py-4 font-semibold text-slate-950 transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSending ? "Enviando..." : "Solicitar cotización"}
      </button>

      {status === "success" && (
        <p className="text-center text-sm font-semibold text-green-700">
          ¡Gracias! Tu solicitud de cotización fue enviada correctamente.
        </p>
      )}

      {status === "error" && (
        <p className="text-center text-sm font-semibold text-red-600">
          Ocurrió un error al enviar la solicitud. Inténtalo nuevamente.
        </p>
      )}
    </form>
  );
}