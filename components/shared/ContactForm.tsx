"use client";

import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  ListBox,
  Select,
  TextArea,
  TextField,
  Alert,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { motion } from "motion/react";
import React, { useState } from "react";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("idle");
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error al enviar formulario:", error);
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="mx-auto flex flex-col items-center gap-12 md:gap-16 px-6 py-16 md:py-24">
      <div className="flex w-full max-w-6xl flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Column: Form */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-1 flex-col gap-8 w-full"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-medium text-[#212d51] md:text-4xl text-center lg:text-left"
          >
            Contáctanos
          </motion.h2>

          <Form
            className="flex w-full flex-col gap-6 md:gap-8"
            onSubmit={onSubmit}
          >
            {/* Nombre y Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col md:flex-row gap-6 w-full"
            >
              <TextField isRequired name="name" className="flex-1">
                <Label className="text-base md:text-lg font-bold text-[#444444b2]">
                  Nombre
                </Label>
                <Input
                  variant="secondary"
                  className="bg-[#003df508] border-none text-base md:text-lg"
                  placeholder="Ej: María González"
                />
                <FieldError className="text-danger text-xs" />
              </TextField>

              <TextField
                isRequired
                name="email"
                type="email"
                className="flex-1"
              >
                <Label className="text-base md:text-lg font-bold text-[#444444b2]">
                  Email
                </Label>
                <Input
                  variant="secondary"
                  className="bg-[#003df508] border-none text-base md:text-lg"
                  placeholder="correo@ejemplo.com"
                />
                <FieldError className="text-danger text-xs" />
              </TextField>
            </motion.div>

            {/* Telefono y Servicio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col md:flex-row gap-6 w-full"
            >
              <TextField isRequired name="phone" className="flex-1">
                <Label className="text-base md:text-lg font-bold text-[#444444b2]">
                  Teléfono
                </Label>
                <Input
                  variant="secondary"
                  className="bg-[#003df508] border-none text-base md:text-lg"
                  placeholder="Ej: 300 123 4567"
                />
                <FieldError className="text-danger text-xs" />
              </TextField>

              <Select
                name="service"
                variant="secondary"
                isRequired
                className="flex-1"
                placeholder="Selecciona un servicio"
              >
                <Label className="text-base md:text-lg font-bold text-[#444444b2]">
                  Servicio
                </Label>
                <Select.Trigger className="w-full bg-[#003df508] border-none text-base md:text-lg px-3">
                  <Select.Value />
                  <Select.Indicator className="ml-auto">
                    <Icon icon="heroicons:chevron-down" className="text-xl" />
                  </Select.Indicator>
                </Select.Trigger>
                <Select.Popover>
                  <ListBox className="bg-white border border-[#003df51a] rounded-lg shadow-lg">
                    <ListBox.Item id="tutela" textValue="Acción de Tutela">
                      Acción de Tutela
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="peticion" textValue="Derecho de Petición">
                      Derecho de Petición
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="asesoria" textValue="Asesoría Legal">
                      Asesoría Legal
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
                <FieldError className="text-danger text-xs" />
              </Select>
            </motion.div>

            {/* Descripción */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-full"
            >
              <TextField isRequired name="description" className="w-full">
                <Label className="text-lg font-bold text-[#444444b2]">
                  Descripción
                </Label>
                <TextArea
                  variant="secondary"
                  className="min-h-[120px] bg-[#003df508] border-none text-lg p-4"
                  placeholder="Cuéntanos brevemente tu caso"
                />
                <FieldError className="text-danger text-xs" />
              </TextField>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-full mt-2"
            >
              <Button
                size="lg"
                type="submit"
                isDisabled={isLoading}
                className="w-full rounded-lg bg-linear-to-r from-[#0042e9] via-[#0055ee] to-[#0071f5] text-base md:text-lg font-semibold text-white shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl active:scale-95"
              >
                {isLoading ? "Enviando..." : "Enviar y proteger mi derecho"}
                {!isLoading && (
                  <Icon
                    icon="heroicons:arrow-up-right-20-solid"
                    className="text-2xl"
                  />
                )}
              </Button>
            </motion.div>

            {/* Alerts Feedback */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full"
              >
                <Alert status="success">
                  <Alert.Indicator />
                  <Alert.Content>
                    <Alert.Title>Mensaje enviado correctamente</Alert.Title>
                    <Alert.Description>
                      Nos pondremos en contacto contigo lo más pronto posible.
                    </Alert.Description>
                  </Alert.Content>
                </Alert>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full"
              >
                <Alert status="danger">
                  <Alert.Indicator />
                  <Alert.Content>
                    <Alert.Title>Ocurrió un error</Alert.Title>
                    <Alert.Description>
                      No se pudo enviar tu mensaje. Por favor intenta de nuevo
                      más tarde o comunícate vía WhatsApp.
                    </Alert.Description>
                  </Alert.Content>
                </Alert>
              </motion.div>
            )}
          </Form>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="hidden lg:flex flex-1 justify-center"
        >
          <div className="relative aspect-4/5 w-full max-w-[500px] min-h-[400px] md:min-h-[500px] overflow-hidden rounded-3xl shadow-xl">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              <Image
                src="/form_image.png"
                alt="Contacto"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
