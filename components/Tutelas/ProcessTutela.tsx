"use client";

import { Icon } from "@iconify/react";
import { motion } from "motion/react";

export default function ProcessTutela() {
  return (
    <section className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 overflow-hidden px-6 py-24">
      {/* Background Decoration Path - Node ID eYFDc */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="absolute top-1/2 left-1/2 -z-10 w-full -translate-x-1/2 -translate-y-1/2"
      >
        <svg
          width="1380"
          height="476"
          viewBox="0 0 1380 476"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 431.00641c40.65858 30.76858 144.72258 76.4819 235.70996 13.18652 113.73422-79.1192 174.72211-173.38226 270.32477-147.00912 95.60266 26.37314 222.06433 158.63174 314.82941 107.0119 88.07836-49.0119 192.84756-180.58106 239.90686-242.9743 44.114-58.48826-8.3116-92.91236-38.2451-78.94337-29.93355 13.96899-169.62331 178.62714 57.8716 272.90577 227.4948 94.27862 177.0288-310.87113 299.1247-355.18381"
            stroke="#7bcd3c"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="8 8"
          />
        </svg>
      </motion.div>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-4 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-semibold text-[#212d51] mb-6 tracking-tight">
          Así llevamos <span className="text-[#003df5]">tu proceso</span>
        </h2>
        <p className="max-w-2xl text-lg font-normal leading-relaxed text-[#212d51] md:text-xl">
          Te acompañamos paso a paso, con un proceso claro, sencillo y sin
          complicaciones.
        </p>
      </motion.div>

      {/* Process Cards Grid */}
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
      >
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.5, type: "spring", bounce: 0.4 },
              },
            }}
            className="flex flex-col items-center gap-6 rounded-[200px] bg-[#f7f9fe] px-6 py-16 text-center backdrop-blur-[14px] transition-transform hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Icon Circle */}
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#0042e9] shadow-sm">
              <Icon icon={step.icon} className="text-3xl" />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4">
              <h3 className="bg-linear-to-r from-[#0042e9] via-[#0055ee] to-[#0071f5] bg-clip-text text-lg font-semibold text-transparent">
                {step.title}
              </h3>
              <p className="text-sm font-light leading-snug text-[#212d51]">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

const processSteps = [
  {
    title: "Escríbenos por Whatsapp",
    description:
      "Escríbenos por WhatsApp y cuéntanos tu situación de forma clara y sencilla.",
    icon: "heroicons:chat-bubble-oval-left",
  },
  {
    title: "Revisión legal inicial",
    description:
      "Un abogado revisa tu caso y analiza la viabilidad legal según tu situación.",
    icon: "heroicons:document-magnifying-glass",
  },
  {
    title: "Elaboración del documento",
    description:
      "Redactamos tu documento y gestionamos el proceso según el plan elegido.",
    icon: "heroicons:pencil-square",
  },
  {
    title: "Seguimiento de respuestas",
    description:
      "Monitoreamos las respuestas de las entidades dentro de los tiempos legales.",
    icon: "heroicons:clock",
  },
  {
    title: "Trámites adicionales necesarios",
    description:
      "Realizamos trámites adicionales cuando el caso lo requiere según el plan.",
    icon: "heroicons:folder-plus",
  },
];
