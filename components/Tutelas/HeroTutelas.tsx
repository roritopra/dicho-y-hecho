"use client";

import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "motion/react";

export default function HeroTutelas() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Hero Content */}
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 px-6 py-24 text-center">
        {/* Tag / News */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 rounded-full bg-blue-500/5 p-1 pr-4"
        >
          <span className="rounded-full bg-linear-to-r from-[#0042e9] to-[#0071f5] px-3 py-1 text-xs font-medium text-white">
            Gestiona
          </span>
          <div className="flex items-center gap-1 text-sm font-medium text-[#212d51]">
            En pocos pasos
            <Icon icon="heroicons:chevron-right-20-solid" className="text-lg" />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-2"
        >
          <h1 className="text-5xl font-semibold tracking-tight text-[#212d51] md:text-7xl">
            Defiende tus derechos
            <span className="flex items-center justify-center gap-2 text-[#003df5]">
              desde tu celular
              <Icon
                icon="heroicons:cursor-arrow-rays"
                className="text-4xl md:text-6xl"
              />
            </span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl text-lg font-light leading-relaxed text-[#444444b2] md:text-xl"
        >
          Gestionamos tus tutelas y derechos de petición con la mejor tecnología
          y respaldo jurídico profesional.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-5">
            <p className="text-center md:text-start text-[#0069f3]">
              Sin trámites <b>confusos</b> <br className="hidden md:block" />
              sin costos <b>ocultos</b> <br className="hidden md:block" />
              100% <b>WhatsApp</b>
            </p>
            <Button 
              onPress={() => window.open('https://wa.me/573052578933', '_blank')}
              className="h-14 w-full md:w-auto bg-linear-to-r from-[#0042e9] via-[#0069f3] to-[#0071f5] px-10 text-xl font-semibold text-white shadow-2xl shadow-blue-500/30 rounded-lg"
            >
              Empezar mi caso en WhatsApp
              <Icon icon="heroicons-mini/arrow-up-right" className="text-2xl" />
            </Button>
          </div>

          {/* Validation */}
          <div className="flex items-center gap-2 text-sm font-medium text-[#444444b2] md:text-base">
            <Icon
              icon="heroicons:shield-check"
              className="text-xl text-[#7d7d7d]"
            />
            Validado por expertos en Derecho Constitucional y Administrativo
          </div>
        </motion.div>
      </div>

      {/* Decorative Background Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
      </motion.div>
    </section>
  );
}
