import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactTemplate } from "@/emails/ContactTemplate";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone, service, description } = data;

    if (!name || !email || !phone || !service || !description) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 },
      );
    }

    const { data: emailData, error } = await resend.emails.send({
      from: "Dicho y Hecho <info@derechoalderecho.co>",
      to: ["info@derechoalderecho.co", email],
      replyTo: email,
      subject: `Nuevo contacto web - ${service}`,
      react: ContactTemplate({
        name,
        email,
        phone,
        service,
        description,
      }) as React.ReactElement,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(
      { message: "Email enviado correctamente", data: emailData },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 },
    );
  }
}
