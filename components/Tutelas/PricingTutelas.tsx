"use client";

import { Button, Card } from "@heroui/react";
import { motion } from "motion/react";

export default function PricingTutelas() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 py-24">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-4 text-center"
      >
        <h2 className="text-3xl font-medium text-[#444444] md:text-5xl">
          Planes claros para ejercer tus derechos
        </h2>
        <p className="max-w-3xl text-lg font-normal leading-relaxed text-[#444444b2] md:text-xl">
          Elige la opción que mejor se ajusta a tu caso. Sin costos ocultos ni
          trámites innecesarios.
        </p>
      </motion.div>

      {/* Pricing Cards Grid */}
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, type: "spring", bounce: 0.4 },
              },
            }}
            className="relative flex flex-col h-full"
          >
            {plan.isRecommended && (
              <div className="absolute -top-10 left-0 right-0 z-10 flex justify-center">
                <div className="rounded-t-xl bg-[#003df51a] px-5 py-2">
                  <span className="text-sm font-semibold text-[#003df5]">
                    Recomendado
                  </span>
                </div>
              </div>
            )}

            <Card className="flex h-full flex-col p-8 backdrop-blur-[87.5px] bg-[#003df508] transition-transform hover:-translate-y-2 hover:shadow-xl">
              <div className="flex flex-1 flex-col gap-6">
                {/* Title */}
                <h3 className="text-xl font-semibold text-[#444444]">
                  {plan.title}
                </h3>

                {/* Description */}
                <p className="text-sm font-normal leading-relaxed text-[#444444cc]">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mt-auto pt-4 flex items-baseline text-[#444444]">
                  {plan.price.includes(".") ? (
                    <>
                      <span className="text-4xl font-bold">
                        {plan.price.split(".")[0]}
                      </span>
                      <span className="text-2xl font-bold">
                        .{plan.price.split(".")[1]}
                      </span>
                    </>
                  ) : (
                    <span className="text-4xl font-bold">{plan.price}</span>
                  )}
                </div>

                {/* Action Button */}
                <Button
                  size="lg"
                  className="w-full text-lg rounded-lg font-semibold transition-all text-[#003df5] border border-[#003df5]"
                  variant="outline"
                >
                  {plan.buttonText}
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

const pricingPlans = [
  {
    title: "Derecho de petición",
    description:
      "Te ayudamos a redactar tu Derecho de Petición de forma clara, para exigir respuestas oportunas y cumplir con la normativa vigente.",
    price: "$0",
    buttonText: "Iniciar mi caso",
    primary: false,
    isHighlight: false,
    isRecommended: false,
  },
  {
    title: "Tutela Ya",
    description:
      "Cuéntanos tu caso para redactar y radicar una acción de tutela estructurada de forma clara. Plan efectivo para casos sencillos.",
    price: "$50.000",
    buttonText: "Iniciar mi caso",
    primary: true,
    isHighlight: false,
    isRecommended: false,
  },
  {
    title: "Tutela Acompañada",
    description:
      "Todo lo incluido en Tutela Ya. Además, recibes orientación legal constante de nuestro equipo para que entiendas qué esperar de tu caso y poder tomar decisiones informadas en cada etapa.",
    price: "$120.000",
    buttonText: "Iniciar mi caso",
    primary: true,
    isHighlight: false,
    isRecommended: false,
  },
  {
    title: "Gestión total de la Tutela",
    description:
      "Asumimos la gestión integral del proceso en todas las instancias a las que pueda escalar el caso, desde la primera decisión hasta eventuales impugnaciones, defendiendo tus derechos con todas las herramientas que permite la ley.",
    price: "$300.000",
    buttonText: "Iniciar mi caso",
    primary: true,
    isHighlight: true,
    isRecommended: true,
  },
];
