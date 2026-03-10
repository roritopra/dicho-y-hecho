"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Icon } from "@iconify/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Tutelas y DDPP", href: "#" },
    { name: "Multas", href: "#" },
  ];

  return (
    <>
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
          className="flex items-center gap-2 z-50"
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

        {/* Desktop Menu */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden items-center gap-10 md:flex underline-offset-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-[#212d51] transition-colors hover:text-[#003df5]"
            >
              {link.name}
            </Link>
          ))}
        </motion.div>

        <div className="flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:block"
          >
            <Button className="bg-linear-to-r py-6 from-[#0042e9] via-[#0069f3] to-[#0071f5] px-6 text-lg font-medium text-white shadow-blue-500/20 rounded-lg">
              Empezar mi caso
            </Button>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-[#212d51] md:hidden z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <Icon
              icon={
                isOpen
                  ? "heroicons:x-mark-20-solid"
                  : "heroicons:bars-3-20-solid"
              }
              className="text-3xl"
            />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex flex-col bg-white p-6 md:hidden h-screen"
          >
            {/* Top spacing for Navbar height */}
            <div className="h-20" />

            <div className="flex flex-1 flex-col justify-center gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-bold text-[#212d51] hover:text-[#003df5]"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="mt-4"
              >
                <Button
                  fullWidth
                  className="bg-linear-to-r h-16 from-[#0042e9] via-[#0069f3] to-[#0071f5] text-xl font-bold text-white shadow-lg rounded-xl"
                  onClick={() => setIsOpen(false)}
                >
                  Empezar mi caso
                </Button>
              </motion.div>
            </div>

            {/* Bottom info or social */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-auto border-t py-8 text-center"
            >
              <p className="text-[#212d51] opacity-60">© 2024 Dicho y Hecho</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
