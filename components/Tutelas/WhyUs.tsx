"use client";

import { useState } from "react";
import { Accordion } from "@heroui/react";
import type { Key } from "@heroui/react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion } from "motion/react";

export default function WhyUs() {
  const [expandedKeys, setExpandedKeys] = useState<Set<Key>>(new Set(["1"]));

  const handleExpandedChange = (keys: Set<Key>) => {
    if (keys.size > 0) {
      setExpandedKeys(keys);
    }
  };

  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 py-24">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-4 text-center"
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-base font-normal text-[#003df5]">
            Acceso real a la justicia
          </span>
          <h2 className="text-3xl font-medium text-[#212d51] md:text-4xl">
            ¿Por qué nosotros?
          </h2>
        </div>
        <p className="max-w-2xl text-lg font-normal leading-relaxed text-[#444444b2]">
          Facilitamos el acceso a soluciones legales claras y confiables,
          combinando tecnología y acompañamiento experto para que puedas ejercer
          tus derechos de forma sencilla, rápida y sin fricciones.
        </p>
      </motion.div>

      {/* Content Section: Accordions + Image */}
      <div className="flex w-full flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left: Accordions (~45%) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex w-full lg:w-[45%] flex-col"
        >
          <Accordion
            className="w-full"
            variant="surface"
            expandedKeys={expandedKeys}
            onExpandedChange={handleExpandedChange}
          >
            {whyUsItems.map((item, index) => (
              <Accordion.Item
                key={index}
                id={(index + 1).toString()}
                className="mb-4 rounded-xl border-none bg-[#003df508] p-2"
              >
                <Accordion.Heading>
                  <Accordion.Trigger className="flex w-full items-center justify-between px-4 py-4 hover:bg-transparent">
                    <div className="flex items-center gap-4">
                      {/* Brand Line Indicator */}
                      <div className="h-6 w-0.5 bg-[#003df5]" />
                      <span className="text-lg font-bold text-[#212d51]">
                        {item.title}
                      </span>
                    </div>
                    <Accordion.Indicator>
                      <Icon
                        icon="heroicons:chevron-down-20-solid"
                        className="text-2xl text-[#212d51]"
                      />
                    </Accordion.Indicator>
                  </Accordion.Trigger>
                </Accordion.Heading>
                <Accordion.Panel>
                  <Accordion.Body className="px-10 pb-6 text-lg font-normal text-[#212d51]">
                    {item.content}
                  </Accordion.Body>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </motion.div>

        {/* Right: Image (Restante ~55%) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative aspect-4/3 lg:aspect-square w-full lg:flex-1"
        >
          <Image
            src="/why_us.png"
            alt="¿Por qué elegir Dicho y Hecho?"
            fill
            className="rounded-2xl object-cover lg:object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}

const whyUsItems = [
  {
    title: "Rápido y confiable",
    content:
      "Recibe respuesta en tiempo récord. Nuestro equipo jurídico y tecnológico trabaja para darte una solución de calidad en el menor tiempo posible.",
  },
  {
    title: "Sin trámites innecesarios",
    content:
      "Olvídate de procesos complejos. Nos encargamos de cada paso para que puedas ejercer tus derechos desde casa, de forma simple y directa.",
  },
  {
    title: "Resultados comprobados",
    content:
      "Contamos con una efectividad superior al 90%, respaldada por tecnología y experiencia legal que garantizan soluciones claras y bien fundamentadas.",
  },
];
