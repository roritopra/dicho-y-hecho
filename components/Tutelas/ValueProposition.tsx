"use client";

import { motion } from "motion/react";
import { Icon } from "@iconify/react";

export default function ValueProposition() {
  const cards = [
    {
      title: "Honorarios reducidos",
      description:
        "Al eliminar los altos costos de oficinas físicas, logramos reducir drásticamente los honorarios tradicionales directos.",
      icon: "heroicons:banknotes",
      primary: true,
    },
    {
      title: "Tecnología avanzada",
      description:
        "Optimizamos los procesos legales mediante tecnología avanzada, sin sacrificar el rigor jurídico de tu caso.",
      icon: "heroicons:cpu-chip",
      primary: false,
    },
    {
      title: "Modelo 100% digital",
      description:
        "Operar digitalmente nos permite ser más eficientes de inicio a fin mientras protegemos tu bolsillo.",
      icon: "heroicons:device-phone-mobile",
      primary: false,
    },
    {
      title: "Tranquilidad garantizada",
      description:
        "Este modelo eficiente nos permite asegurar una efectividad legal superior al 95% para nuestros clientes.",
      icon: "heroicons:shield-check",
      primary: false,
    },
  ];

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-24">
      {/* Header Area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16"
      >
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#212d51] leading-[1.1] tracking-tight max-w-lg">
            Rigor jurídico con precios justos
          </h2>
        </div>
        <div className="lg:w-1/2 flex flex-col items-start gap-6">
          <p className="text-lg md:text-xl text-[#444444b2] leading-relaxed max-w-xl font-medium">
            En <span className="text-[#212d51] font-semibold">Dicho y Hecho</span>,
            democratizamos el acceso a la justicia transformando la eficiencia en
            ahorro directo para ti.
          </p>
          <a
            href="https://wa.me/573052578933"
            target="_blank"
            rel="noopener noreferrer"
            className="group font-semibold text-[#003df5] flex items-center gap-2 hover:opacity-80 transition-opacity text-lg"
          >
            Empezar mi caso ahora 
            <Icon
              icon="heroicons:arrow-right"
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </motion.div>

      {/* Cards Area */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`rounded-[2rem] p-8 flex flex-col transition-transform hover:-translate-y-2 cursor-default ${
              card.primary
                ? "bg-linear-to-b from-[#0055ee] to-[#003df5] text-white shadow-xl shadow-blue-500/20"
                : "bg-[#f8f9fb] text-[#212d51] border border-gray-100 shadow-sm hover:shadow-md"
            }`}
          >
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shrink-0 ${
                card.primary
                  ? "bg-white text-[#003df5] shadow-sm"
                  : "bg-white text-[#212d51] border border-gray-100 shadow-sm"
              }`}
            >
              <Icon icon={card.icon} className="text-3xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4 leading-tight">
              {card.title}
            </h3>
            <p
              className={`leading-relaxed text-base ${
                card.primary ? "text-white/90" : "text-[#444444b2]"
              }`}
            >
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
