"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex items-center gap-2"
      >
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Dicho y Hecho"
            width={114}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="hidden items-center gap-10 md:flex"
      >
        <Link
          href="#"
          className="text-lg font-medium text-[#003df5] transition-colors hover:opacity-80"
        >
          Tutelas y DDPP
        </Link>
        <Link
          href="#"
          className="text-lg font-medium text-[#212d51] transition-colors hover:opacity-80"
        >
          Multas
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Button className="bg-linear-to-r py-6 from-[#0042e9] via-[#0069f3] to-[#0071f5] px-6 text-lg font-medium text-white shadow-blue-500/20 rounded-lg">
          Empezar mi caso
        </Button>
      </motion.div>
    </motion.nav>
  );
}
