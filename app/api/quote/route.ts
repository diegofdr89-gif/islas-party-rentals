import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      phone,
      email,
      eventDate,
      location,
      service,
      guests,
      message,
    } = body;

    if (!name || !phone || !email || !eventDate || !location || !service) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Islas Party Rentals <cotizaciones@islaspartyrentals.com>",
      to: ["islaspartyrentalsinc@gmail.com"],
      replyTo: email,
      subject: `Nueva solicitud de cotización - ${name}`,
      html: `
        <h2>Nueva solicitud de cotización</h2>

        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Fecha del evento:</strong> ${eventDate}</p>
        <p><strong>Ubicación:</strong> ${location}</p>
        <p><strong>Servicio:</strong> ${service}</p>
        <p><strong>Invitados aproximados:</strong> ${guests || "No especificado"}</p>

        <h3>Detalles del evento</h3>
        <p>${message || "Sin información adicional."}</p>

        <hr />

        <p>
          Esta solicitud fue enviada desde el formulario web de
          <strong>Islas Party Rentals</strong>.
        </p>
      `,
    });

    if (error) {
      console.error("Error de Resend:", error);

      return NextResponse.json(
        { error: "No se pudo enviar la cotización." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Error al procesar la cotización:", error);

    return NextResponse.json(
      { error: "Ocurrió un error al procesar la solicitud." },
      { status: 500 }
    );
  }
}