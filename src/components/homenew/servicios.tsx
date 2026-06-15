"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap, Percent, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";

export default function ServiciosSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-white text-[#000833] transition-colors duration-300 border-t-2 border-black">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-black text-black font-bold uppercase tracking-wider text-xs mb-4 font-display">
            Portafolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display uppercase tracking-wider mb-4 leading-none text-black">
            Nuestros Servicios Logísticos
          </h2>
          <p className="text-body-lg text-[#000833]">
            Soluciones de transporte urbano diseñadas para adaptarse al ritmo y presupuesto de tu negocio.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Envíos Express */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full h-full"
          >
            <GlowCard
              glowColor="blue"
              radius={0}
              border={2}
              borderColor="#000"
              backdrop="#fff"
              customSize
              className="group flex flex-col justify-between p-8 shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all duration-150 overflow-hidden h-full"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#000833] z-10" />

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-none bg-[#000833]/10 border-2 border-black text-[#000833] group-hover:scale-105 transition-transform duration-150">
                      <Zap className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-none border-2 border-black bg-[#ba1a1a] text-white text-[10px] font-bold font-mono uppercase tracking-wider">
                      ALTA PRIORIDAD
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-display uppercase tracking-wider mb-2 text-black">
                    Envíos Express
                  </h3>
                  <p className="text-xs font-bold text-[#000833] font-mono mb-4 uppercase tracking-wider">
                    Prioridad absoluta y certeza total.
                  </p>
                  <p className="text-body-md text-[#444556] leading-relaxed mb-6">
                    Diseñado para operaciones de alta criticidad horaria. Vos elegís el rango exacto de entrega con solo 2 horas de anticipación.
                  </p>
                </div>
                <Button
                  asChild
                  className="w-full bg-[#000833] hover:bg-[#00041a] text-white font-sans font-bold uppercase rounded-none border-2 border-black shadow-[2px_2px_0px_#000] flex items-center justify-center gap-2 transition-all"
                >
                  <Link href="/cotizar/express">
                    <span>Solicitar Express</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </GlowCard>
          </motion.div>

          {/* Card 2: Envíos LowCost */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full h-full"
          >
            <GlowCard
              glowColor="yellow"
              radius={0}
              border={2}
              borderColor="#000"
              backdrop="#fff"
              customSize
              className="group flex flex-col justify-between p-8 shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all duration-150 overflow-hidden h-full"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#e9c400] z-10" />

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-none bg-[#e9c400]/10 border-2 border-black text-black group-hover:scale-105 transition-transform duration-150">
                      <Percent className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-none border-2 border-black bg-[#13bb2e] text-white text-[10px] font-bold font-mono uppercase tracking-wider">
                      RECOMENDADO
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-display uppercase tracking-wider mb-2 text-black">
                    Envíos LowCost
                  </h3>
                  <p className="text-xs font-bold text-black font-mono mb-4 uppercase tracking-wider">
                    Rentabilidad y ruteo masivo.
                  </p>
                  <p className="text-body-md text-[#444556] leading-relaxed mb-6">
                    Variabilizá tus costos logísticos. Ingresá tus pedidos antes de las 13:00 hs y garantizamos entrega en el día.
                  </p>
                </div>
                <Button
                  asChild
                  className="w-full bg-[#e9c400] hover:bg-white hover:text-[#000833] text-black font-sans font-bold uppercase rounded-none border-2 border-black shadow-[2px_2px_0px_#000] flex items-center justify-center gap-2 transition-all"
                >
                  <Link href="/servicios/envios-lowcost">
                    <span>Ahorrá con LowCost</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
