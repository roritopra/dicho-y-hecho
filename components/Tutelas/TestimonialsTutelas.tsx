"use client";

import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { motion } from "motion/react";

export default function TestimonialsTutelas() {
  return (
    <section className="relative mx-auto overflow-hidden flex px-6 lg:px-96 flex-col items-center gap-10 py-24 text-center">
      {/* Main CTA Part */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex w-full flex-col items-center gap-4"
      >
        <h2 className="text-3xl font-medium text-[#212d51] md:text-4xl">
          El primer paso para defender tus derechos es gratuito
        </h2>
        <p className="max-w-2xl text-lg font-normal leading-relaxed text-[#444444b2]">
          Creemos que exigir tus derechos no debería tener barreras. Por eso
          ponemos a tu disposición una herramienta que te permite redactar
          Derechos de Petición cumpliendo con la normativa vigente.
        </p>
      </motion.div>

      {/* Action Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col items-center gap-4"
      >
        <Button
          variant="outline"
          className="h-12 border-2 border-[#003df5] rounded-lg bg-transparent px-8 text-lg font-semibold text-[#003df5] transition-all hover:bg-[#003df5] hover:text-white"
        >
          Crear derecho de petición
        </Button>
        <div className="flex items-center gap-2 text-lg font-normal text-[#212d51]">
          <Icon
            icon="heroicons:rocket-launch"
            className="text-2xl text-[#0042e9]"
          />
          <p className="flex items-center gap-1 text-base md:text-lg">
            <span className="font-bold text-[#0042e9]">100% gratis,</span> en
            línea y sin filas ni papeleo
          </p>
        </div>
      </motion.div>

      {/* Testimonials Mapping Section - Vertical Layout per uHDbP */}
      <div className="relative mt-24 md:mt-34 flex w-full flex-col gap-12">
        {/* Background Circle */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute -top-30 left-1/2 -z-10 h-[800px] w-[1600px] -translate-x-1/2 rounded-t-[800px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 113, 245, 0.1) 0%, rgba(0, 113, 245, 0) 100%)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-3"
        >
          <h2 className="text-3xl font-medium text-[#212d51]">
            Casos reales atendidos por nuestro equipo jurídico
          </h2>
          <p className="text-lg font-normal text-[#444444b2]">
            Casos reales atendidos por nuestro equipo jurídico
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex w-full flex-col items-center gap-12"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
              }}
              className="flex w-full flex-col md:flex-row items-center gap-6 md:gap-8"
            >
              {/* Avatar */}
              <div className="relative h-32 w-32 md:h-40 md:w-40 shrink-0 overflow-hidden rounded-full bg-gray-100 shadow-sm">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col md:items-start items-center">
                <div className="flex flex-col text-center md:text-start">
                  <span className="text-6xl font-medium leading-none text-[#212d51] opacity-50">
                    “
                  </span>
                  <p className="text-lg md:text-xl font-normal text-[#212d51] -mt-2 md:-mt-4">
                    {t.text}
                  </p>
                </div>

                {/* Info Part */}
                <div className="mt-4 flex flex-col items-center md:items-start gap-2 md:gap-3">
                  <span className="text-xl font-bold text-[#212d51]">
                    {t.name}
                  </span>
                  <div className="flex items-center gap-1 text-[#212d51]">
                    {[...Array(5)].map((_, star) => (
                      <Icon
                        key={star}
                        icon="heroicons:star-20-solid"
                        className="text-2xl text-[#f39c12]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Marco Lopez",
    text: "La asesoría para mi tutela de salud fue impecable. No solo redactaron el documento, sino que el abogado me explicó con paciencia qué esperar del proceso. Logramos la cirugía en tiempo récord.",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Luisa Torres",
    text: "Me ayudaron con una tutela de salud. No solo redactaron el documento, también me explicaron todo el proceso con claridad. Gracias a eso, obtuve respuesta rápidamente.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Andrea Caicedo",
    text: "Cuando tuvimos problemas con la EPS, estábamos muy perdidos al inicio. Recibimos una orientación clara y un acompañamiento constante que hizo que todo fuera mucho más fácil.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
  },
];
