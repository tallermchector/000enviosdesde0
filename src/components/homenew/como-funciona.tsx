"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calculator, Package, Truck, Activity, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export default function ComoFuncionaSection() {
  const steps: Step[] = [
    {
      number: "01",
      title: "Cotizá tu envío",
      description: "Ingresá los datos de tu envío y obtené una tarifa inmediata y sin compromisos.",
      icon: <Calculator className="w-8 h-8" />,
      color: "text-[#ba1a1a]",
    },
    {
      number: "02",
      title: "Prepará tu paquete",
      description: "Empacá tus artículos de forma segura siguiendo nuestras recomendaciones de embalaje.",
      icon: <Package className="w-8 h-8" />,
      color: "text-[#e9c400]",
    },
    {
      number: "03",
      title: "Solicitá la recogida",
      description: "Elegí el horario que mejor te convenga y nosotros pasamos a buscar tu pedido.",
      icon: <Truck className="w-8 h-8" />,
      color: "text-[#13bb2e]",
    },
    {
      number: "04",
      title: "Seguí tu envío",
      description: "Monitorizá el trayecto de tu paquete en tiempo real hasta que llegue a su destino.",
      icon: <Activity className="w-8 h-8" />,
      color: "text-[#000833]",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-[#f4f4f4] text-[#000833] transition-colors duration-300 border-t-2 border-black">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-black text-black font-bold uppercase tracking-wider text-xs mb-4 font-display shadow-[2px_2px_0px_#000]">
            Proceso
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display uppercase tracking-wider mb-4 leading-none text-black">
            Cómo Funciona
          </h2>
          <p className="text-body-lg text-[#000833]">
            Tu logística simplificada en cuatro pasos rápidos y eficientes.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-black/10 -translate-y-1/2 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative z-10 group"
            >
              <div className="flex flex-col items-center text-center">
                {/* Number & Icon Container */}
                <div className="relative mb-6">
                  <div className={cn(
                    "w-20 h-20 flex items-center justify-center bg-white border-2 border-black shadow-[4px_4px_0px_#000] transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-[6px_6px_0px_#000]",
                    step.color
                  )}>
                    {step.icon}
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-black text-white font-mono text-xs font-bold px-2 py-1 shadow-[2px_2px_0px_#000]">
                    {step.number}
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-bold font-display uppercase tracking-wider mb-3 text-black">
                  {step.title}
                </h3>
                <p className="text-sm text-[#000833]/80 leading-relaxed max-w-[280px]">
                  {step.description}
                </p>

                {/* Decorative Arrow (Tablet/Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 translate-y-[-50%] z-10 text-black/20">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
