"use client";

import { FormEvent, useState } from "react";
type QuoteFormProps = {
  language?: "es" | "en";
};
export default function QuoteForm({ language = "es" }: QuoteFormProps) {
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
          {language === "en" ? "Full Name" : "Nombre completo"}
          </label>

        <input
          type="text"
          name="name"
          placeholder={language === "en" ? "Your name" : "Tu nombre"}
          required
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-amber-500"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            {language === "en" ? "Phone" : "Teléfono"}
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
            {language === "en" ? "Email" : "Correo electrónico"}
          </label>

          <input
            type="email"
            name="email"
            placeholder={language === "en" ? "email@example.com" : "correo@email.com"}
            required
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-amber-500"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            {language === "en" ? "Event Date" : "Fecha del evento"}
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
            {language === "en" ? "City / Location" : "Ciudad / Ubicación"}
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
          {language === "en" ? "What do you need for your event?" : "¿Qué necesitas para tu evento?"}
        </label>

        <select
          name="service"
          required
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-amber-500"
        >
          <option value="">Selecciona una opción</option>
<option value="">
  {language === "en" ? "Select an option" : "Selecciona una opción"}
</option>
<option value="chairs">
  {language === "en" ? "Chairs" : "Sillas"}
</option>
<option value="tables">
  {language === "en" ? "Tables" : "Mesas"}
</option>
<option value="umbrellas">
  {language === "en" ? "Umbrellas" : "Sombrillas"}
</option>
<option value="tents">
  {language === "en" ? "Tents" : "Toldos"}
</option>
<option value="dance-floor">
  {language === "en" ? "Dance Floor" : "Pista de baile"}
</option>
<option value="grass">
  {language === "en" ? "Grass" : "Césped"}
</option>
<option value="multiple">
  {language === "en" ? "Multiple Services" : "Varios servicios"}
</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          {language === "en" ? "Approximate Number of Guests" : "Número aproximado de invitados"}
        </label>

        <input
          type="number"
          name="guests"
          min="1"
          placeholder={language === "en" ? "E.g. 100" : "Ej. 100"}
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-amber-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          {language === "en" ? "Tell us about your event" : "Cuéntanos sobre tu evento"}
        </label>

        <textarea
          name="message"
          rows={4}
          placeholder={
  language === "en"
    ? "E.g. I need tables, chairs, and a tent for a party of approximately 100 people..."
    : "Ej. Necesito mesas, sillas y un toldo para una fiesta de aproximadamente 100 personas..."
}
        />
      </div>

      <button
        type="submit"
        disabled={isSending}
        className="w-full rounded-full bg-amber-500 px-6 py-4 font-semibold text-slate-950 transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSending
  ? language === "en"
    ? "Sending..."
    : "Enviando..."
  : language === "en"
    ? "Request a Quote"
    : "Solicitar cotización"}
      </button>

      {status === "success" && (
        <p className="text-center text-sm font-semibold text-green-700">
          {language === "en"
  ? "Thank you! We received your request and will contact you soon."
  : "¡Gracias! Recibimos tu solicitud y te contactaremos pronto."}
        </p>
      )}

      {status === "error" && (
        <p className="text-center text-sm font-semibold text-red-600">
          {language === "en"
  ? "We couldn't send your request. Please try again."
  : "No pudimos enviar tu solicitud. Intenta de nuevo."}
        </p>
      )}
    </form>
  );
}