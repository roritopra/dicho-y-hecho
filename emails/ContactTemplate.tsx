import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Text,
  Tailwind,
  pixelBasedPreset,
  Hr,
  Section,
} from "@react-email/components";
import * as React from "react";

interface ContactTemplateProps {
  name: string;
  email: string;
  phone: string;
  service: string;
  description: string;
}

export function ContactTemplate({
  name,
  email,
  phone,
  service,
  description,
}: Readonly<ContactTemplateProps>) {
  return (
    <Html lang="es">
      <Tailwind config={{ presets: [pixelBasedPreset] }}>
        <Head />
        <Preview>Nuevo mensaje de contacto de {name}</Preview>
        <Body className="bg-gray-100 font-sans">
          <Container className="mx-auto my-[40px] max-w-xl rounded-lg border border-solid border-gray-200 bg-white p-[20px] shadow-sm">
            <Section className="mt-[32px]">
              <Heading className="my-0 text-center text-2xl font-bold text-[#0042e9]">
                Dicho y Hecho
              </Heading>
              <Heading className="my-2 text-center text-xl font-bold text-gray-800">
                Nuevo Contacto de Sitio Web
              </Heading>
            </Section>

            <Hr className="mx-0 my-[26px] w-full border-solid border-gray-200" />

            <Section>
              <Text className="text-[16px] leading-[24px] text-gray-700">
                Has recibido un nuevo mensaje desde el formulario de contacto
                web.
              </Text>

              <Section className="rounded-md bg-gray-50 p-4 border border-solid border-gray-200 my-4">
                <Text className="m-0 mb-2 font-bold text-[#212d51] text-lg">
                  Detalles del contacto:
                </Text>
                <Text className="m-0 mb-1 text-gray-700">
                  <strong>Nombre:</strong> {name}
                </Text>
                <Text className="m-0 mb-1 text-gray-700">
                  <strong>Email:</strong> {email}
                </Text>
                <Text className="m-0 mb-1 text-gray-700">
                  <strong>Teléfono:</strong> {phone}
                </Text>
                <Text className="m-0 mb-2 text-gray-700">
                  <strong>Servicio de interés:</strong> {service}
                </Text>
              </Section>

              <Section className="rounded-md bg-gray-50 p-4 border border-solid border-gray-200 my-4">
                <Text className="m-0 mb-2 font-bold text-[#212d51] text-lg">
                  Mensaje de la consulta:
                </Text>
                <Text className="m-0 mt-1 whitespace-pre-wrap rounded-lg bg-white p-4 text-[14px] leading-[24px] text-gray-700 border border-solid border-gray-100">
                  {description}
                </Text>
              </Section>
            </Section>

            <Hr className="mx-0 my-[26px] w-full border-solid border-gray-200" />

            <Text className="text-[12px] leading-[24px] text-gray-500 text-center">
              Este mensaje fue enviado automáticamente desde el sitio web de
              Dicho y Hecho.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

// Para añadir tipado a PreviewProps asignando al FC. Aunque el linter lo marcaba porque usábamos React.FC antes.
// Al usar export function, podemos asignarle propiedades estáticas.
ContactTemplate.PreviewProps = {
  name: "María González",
  email: "correo@ejemplo.com",
  phone: "300 123 4567",
  service: "Acción de Tutela",
  description:
    "Necesito asesoría urgente sobre mi caso de tutela relacionado con temas de salud que no han sido atendidos adecuadamente.",
} satisfies ContactTemplateProps;

export default ContactTemplate;
