"use client";

import { Accordion, Button } from "@heroui/react";
import { motion } from "motion/react";
import { Icon } from "@iconify/react";

export default function FAQTutelas() {
  const faqs = [
    {
      question: "¿Cuál es el plan ideal para mi caso?",
      answer: (
        <div className="flex flex-col gap-6 mt-2">
          <div>
            <h4 className="font-semibold text-[#212d51] mb-1">Casos Sencillos:</h4>
            <p className="text-base text-[#444444b2] leading-relaxed">
              Suelen resolverse con un Derecho de Petición o una Tutela Ya.
              Ideales para derecho a la igualdad o equidad, solicitar
              información, certificados, o medicamentos de baja complejidad ya
              formulados que la EPS no ha entregado.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-[#212d51] mb-1">Casos complejos:</h4>
            <p className="text-base text-[#444444b2] leading-relaxed">
              Suelen requerir acompañamiento experto o gestión de varias
              instancias. Incluyen cirugías de urgencia, tratamientos para
              enfermedades de alto costo (Cáncer, VIH), prótesis, o cuando ya
              existe un desacato previo por parte de la EPS.
            </p>
          </div>
        </div>
      ),
    },
    {
      question: "¿Es realmente posible obtener una cirugía en menos de 48 horas?",
      answer:
        "Sí. Contamos con casos de éxito documentados, como el de Nancy López (Cáncer + Cirugía), donde logramos una resolución efectiva en menos de 48 horas gracias a nuestra tecnología legal y rapidez en el proceso.",
    },
    {
      question: "¿Tengo que ir a alguna oficina física?",
      answer:
        "No. Todo el proceso es 100% digital y en línea. Recibirás la asesoría, los documentos y el estado de tu trámite directamente en tu celular, ahorrándote filas y desplazamientos innecesarios.",
    },
    {
      question: "¿Qué pasa si mi caso es rechazado o la EPS no responde?",
      answer:
        "No todos los casos se resuelven en la primera instancia. Si la entidad no da respuesta, te acompañamos para que entiendas exactamente en qué punto está tu caso y cuál es el mejor camino a seguir para lograr una solución favorable.",
    },
  ];

  return (
    <section className="mx-auto flex max-w-7xl flex-col lg:flex-row items-start gap-12 lg:gap-16 px-6 py-24 mb-12">
      {/* Left Column: Titles & CTA */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex w-full lg:w-[40%] flex-col gap-10 sticky top-32"
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 rounded-full border border-[#003df51a] bg-[#003df50a] px-4 py-2 w-max text-sm font-semibold text-[#003df5]">
            <Icon icon="heroicons:scale" className="text-lg" />
            Dicho y Hecho Asesoría Legal
          </div>
          
          <h2 className="text-4xl font-semibold text-[#212d51] md:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
            Preguntas
            <br className="hidden lg:block" /> frecuentes
          </h2>
        </div>

        <div className="rounded-[2rem] bg-[#003df508] p-8 flex flex-col gap-4">
          <h3 className="text-2xl font-semibold text-[#212d51]">
            ¿Aún tienes dudas?
          </h3>
          <p className="text-base text-[#444444cc] leading-relaxed">
            ¿No encuentras la respuesta a tu pregunta? ¡Escríbenos y te
            responderemos lo antes posible!
          </p>
          <Button
            onPress={() => window.open('https://wa.me/573052578933', '_blank')}
            size="lg"
            className="mt-2 w-full sm:w-max rounded-xl bg-linear-to-r from-[#0042e9] via-[#0055ee] to-[#0071f5] text-base font-semibold text-white shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl active:scale-95"
          >
            Contactar soporte
          </Button>
        </div>
      </motion.div>

      {/* Right Column: Accordion List */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full lg:w-[60%]"
      >
        <Accordion allowsMultipleExpanded className="w-full flex flex-col gap-4 px-0">
          {faqs.map((faq, index) => (
            <Accordion.Item
              key={index}
              className="rounded-3xl bg-[#003df508] border-none px-2 sm:px-4 py-1 transition-all"
            >
              <Accordion.Heading>
                <Accordion.Trigger className="px-4 py-5 hover:bg-transparent transition-none">
                  <span className="text-lg md:text-xl font-medium text-[#212d51] text-left pr-4">
                    {faq.question}
                  </span>
                  <Accordion.Indicator>
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm border border-gray-100 shrink-0">
                      <Icon
                        icon="heroicons:chevron-down-20-solid"
                        className="text-xl text-[#003df5]"
                      />
                    </div>
                  </Accordion.Indicator>
                </Accordion.Trigger>
              </Accordion.Heading>
              <Accordion.Panel>
                <Accordion.Body className="px-4 pb-6 pt-0 text-base md:text-lg text-[#444444b2] leading-relaxed">
                  {faq.answer}
                </Accordion.Body>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}
