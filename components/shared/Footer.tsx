"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full rounded-t-[32px] border-t border-[#212d511a] bg-[#003df508] px-6 py-12 backdrop-blur-xl md:px-20 md:py-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Top Section */}
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <Image
              src="/logo.svg"
              alt="Dicho y Hecho Logo"
              width={180}
              height={45}
              className="h-auto w-auto"
            />
          </motion.div>

          {/* Links */}
          <motion.nav
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.3 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 md:gap-12"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link
                href="/terminos"
                className="text-base font-semibold text-[#212d51] transition-colors hover:text-[#0071f5]"
              >
                Términos & Condiciones
              </Link>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link
                href="/contacto"
                className="text-base font-semibold text-[#212d51] transition-colors hover:text-[#0071f5]"
              >
                Contacto
              </Link>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link
                href="/privacidad"
                className="text-base font-semibold text-[#212d51] transition-colors hover:text-[#0071f5]"
              >
                Politica de privacidad
              </Link>
            </motion.div>
          </motion.nav>

          {/* Social Icons */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.4 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-tr from-[#0042e9] via-[#0055ee] to-[#0071f5] text-white transition-transform hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon icon="mdi:facebook" className="text-xl" />
              </Link>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-tr from-[#0042e9] via-[#0055ee] to-[#0071f5] text-white transition-transform hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon icon="mdi:instagram" className="text-xl" />
              </Link>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-tr from-[#0042e9] via-[#0055ee] to-[#0071f5] text-white transition-transform hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon icon="mdi:linkedin" className="text-xl" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Separator */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
          className="my-10 h-px w-full bg-[#212d511a] origin-left"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center gap-8 text-center"
        >
          <p className="text-base font-bold text-[#212d51]">
            2018-2024 SupplAi S.A.S | Todos los derechos reservados
          </p>

          <div className="max-w-4xl">
            <p className="text-sm font-semibold leading-relaxed text-[#212d51] opacity-70">
              Este sitio web utiliza tecnología de inteligencia artificial para
              ofrecer asistencia y funcionalidades avanzadas. Sin embargo, es
              importante tener en cuenta que los resultados proporcionados por
              este asistente pueden variar y no deben considerarse como consejos
              definitivos. La precisión y la eficacia de la inteligencia
              artificial pueden estar sujetas a limitaciones y errores
              inherentes al proceso de aprendizaje automatizado. Por lo tanto,
              recomendamos siempre verificar la información proporcionada y
              consultar a un experto en caso de duda.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
