"use client";

import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import { Switch } from "@heroui/react";

export default function LogicalProof() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-24">
      {/* Encabezado */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="mb-12 flex flex-col items-center text-center"
      >
        <h2 className="text-3xl md:text-5xl font-semibold text-[#212d51] mb-6 tracking-tight">
          Resultados <span className="text-[#003df5]">comprobados</span>
        </h2>
        <p className="text-base md:text-lg text-[#444444b2] max-w-2xl leading-relaxed">
          Nuestras métricas hablan por sí solas. Organiza, prioriza y mantén el
          control de tu caso legal de la manera más rápida y eficiente mediante
          nuestra plataforma.
        </p>
      </motion.div>

      {/* Contenedor Bento Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="w-full rounded-[2.5rem] bg-[#f8f9fb] p-4 md:p-6 shadow-xs border border-gray-100"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 md:gap-6">
          
          {/* Card 1: Left Column (Spans 3 rows) - Zapier Integration equivalent */}
          <div className="md:col-span-1 md:row-span-3 flex flex-col bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-[#003df50a] via-transparent to-transparent opacity-50" />
            
            <div className="z-10 flex flex-col grow">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-br from-[#0069f3] to-[#003df5] text-white shadow-lg shadow-blue-500/30 mb-8 transition-transform group-hover:scale-110">
                <Icon icon="heroicons:bolt-solid" className="text-3xl" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-[#212d51] mb-4">
                Resolución en 10 días
              </h3>
              <p className="text-[#444444b2] text-sm md:text-base leading-relaxed mb-8">
                Es el tiempo máximo legal que tiene un juez para dar respuesta a tu caso. Nos aseguramos de impulsar el proceso para que se cumpla a cabalidad, resolviendo a tu favor rápidamente.
              </p>
            </div>

            <div className="z-10 flex items-center justify-between border-t border-gray-100 pt-6 mt-auto">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#212d51]">
                <Icon icon="heroicons:cog-8-tooth" className="text-xl text-[#003df5]" />
                Modo acelerado
              </div>
              <Switch defaultSelected size="sm" />
            </div>
          </div>

          {/* Middle Column Wrapper (contains top and bottom elements) */}
          <div className="md:col-span-1 md:row-span-3 flex flex-col gap-4 md:gap-6">
            
            {/* Card 2: Middle Top (Trackers Connected equivalent) */}
            <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex flex-col">
                <h4 className="text-base font-semibold text-[#212d51]">Canales oficiales</h4>
                <p className="text-xs text-[#444444b2]">Radicación flash</p>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-white bg-[#f0f4ff] text-[#003df5] z-30">
                  <Icon icon="ic:baseline-whatsapp" className="text-lg" />
                </div>
                <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-white bg-[#f8f9fb] text-[#212d51] -ml-2 z-20">
                  <Icon icon="heroicons:envelope" className="text-lg" />
                </div>
                <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-white bg-[#fff8eb] text-orange-500 -ml-2 z-10">
                  <Icon icon="heroicons:building-library" className="text-lg" />
                </div>
              </div>
            </div>

            {/* Card 3: Middle Center (Focusing 42% equivalent) */}
            <div className="flex-1 bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col">
              <div className="flex items-start justify-between mb-auto">
                <div className="flex flex-col gap-1">
                  <h4 className="text-base font-semibold text-[#212d51]">Efectividad</h4>
                  <p className="text-xs text-[#444444b2]">Casos de éxito</p>
                </div>
                <span className="text-[10px] font-medium text-[#003df5] bg-[#003df51a] px-2 py-1 rounded-md">
                  Comprobado
                </span>
              </div>
              
              <div className="flex items-baseline gap-2 mt-8 mb-4">
                <h2 className="text-6xl md:text-7xl font-bold text-black tracking-tighter leading-none">
                  +95%
                </h2>
              </div>
              
              <div className="flex items-center justify-between border-t border-gray-100 pt-3 mt-auto w-full">
                <span className="text-xs font-medium text-[#444444b2]">A favor del usuario</span>
                <span className="text-xs font-bold text-[#212d51]">Métrica global</span>
              </div>
            </div>

            {/* NEW Card 4: Middle Bottom (To fill space and mirror "Shortcut Keys" partially) */}
            <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-100 text-orange-500">
                  <Icon icon="heroicons:shield-check" className="text-lg" />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-sm font-semibold text-[#212d51]">Datos protegidos</h4>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column Wrapper */}
          <div className="md:col-span-1 md:row-span-3 flex flex-col gap-4 md:gap-6">

            {/* Card 5: Right Top (10X equivalent) */}
            <div className="flex-1 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm relative overflow-hidden flex flex-col">
              {/* Dot pattern background */}
              <div 
                className="absolute top-0 right-0 w-[150%] h-[150%] opacity-10 pointer-events-none" 
                style={{
                  backgroundImage: 'radial-gradient(#003df5 2px, transparent 2px)',
                  backgroundSize: '24px 24px',
                  transform: 'rotate(15deg) translateY(-20%) translateX(20%)'
                }}
              />
              
              <h2 className="text-7xl md:text-8xl font-black text-black tracking-tighter z-10 mb-auto">
                24<span className="text-5xl md:text-6xl font-bold">h</span>
              </h2>
              
              <div className="z-10 flex flex-col mt-8">
                <h4 className="text-lg font-semibold text-[#212d51] mb-2">
                  Tiempo de radicación
                </h4>
                <p className="text-sm text-[#444444b2] leading-relaxed">
                  Menos de 24 horas es el tiempo de operación. Red de conexión instantánea.
                </p>
              </div>
            </div>

            {/* Card 6: Right Bottom (Shortcut Keys equivalent part 2) */}
            <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm flex items-center justify-between">
               <div className="flex items-center gap-3">
                 <Icon icon="heroicons:bell-alert" className="text-lg text-orange-500" />
                 <span className="text-sm font-medium text-[#212d51]">Notificaciones</span>
               </div>
               
               <div className="flex items-center gap-1 bg-[#f8f9fb] px-3 py-1.5 rounded-lg border border-gray-100">
                  <Icon icon="logos:whatsapp-icon" className="text-base" />
                  <span className="text-gray-400 text-xs mx-1">+</span>
                  <Icon icon="heroicons:envelope-solid" className="text-base text-gray-500" />
               </div>
            </div>

          </div>

        </div>
      </motion.div>
    </section>
  );
}
