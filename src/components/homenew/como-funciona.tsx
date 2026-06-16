"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calculator, Package, Truck, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  tagBg: string;
  tagText: string;
}

export default function ComoFuncionaSection() {
  const steps: Step[] = [
    {
      number: "01",
      title: "Cotizá tu envío",
      description: "Ingresá los datos de tu envío y obtené una tarifa inmediata y sin compromisos.",
      icon: <Calculator className="w-8 h-8 text-black" />,
      tagBg: "bg-[#ba1a1a]",
      tagText: "text-white",
    },
    {
      number: "02",
      title: "Prepará tu paquete",
      description: "Empacá tus artículos de forma segura siguiendo nuestras recomendaciones de embalaje.",
      icon: <Package className="w-8 h-8 text-black" />,
      tagBg: "bg-[#e9c400]",
      tagText: "text-black",
    },
    {
      number: "03",
      title: "Solicitá la recogida",
      description: "Elegí el horario que mejor te convenga y nosotros pasamos a buscar tu pedido.",
      icon: <Truck className="w-8 h-8 text-black" />,
      tagBg: "bg-[#13bb2e]",
      tagText: "text-white",
    },
    {
      number: "04",
      title: "Seguí tu envío",
      description: "Monitorizá el trayecto de tu paquete en tiempo real hasta que llegue a su destino.",
      icon: <Activity className="w-8 h-8 text-black" />,
      tagBg: "bg-[#000833]",
      tagText: "text-[#e9c400]",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-white text-[#000833] border-t-4 border-black">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#E9C400] border-2 border-black text-black font-bold uppercase tracking-wider text-xs mb-4 font-display shadow-[2px_2px_0px_#000]">
            Proceso
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-display uppercase tracking-tighter mb-6 leading-[0.9] text-black">
            Cómo Funciona
          </h2>
          <p className="text-xl text-[#000833] font-sans max-w-2xl mx-auto">
            Tu logística simplificada en cuatro pasos rápidos y eficientes.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col w-full border-4 border-black bg-white shadow-[10px_10px_0px_#000] hover:shadow-[14px_14px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 overflow-hidden"
            >
              {/* Step Header: Number & Icon */}
              <div className={cn("p-6 border-b-4 border-black flex items-center justify-between", step.tagBg)}>
                <div className="bg-white border-2 border-black p-2 shadow-[2px_2px_0px_#000]">
                  {step.icon}
                </div>
                <span className={cn("font-mono font-bold text-xl tracking-tighter shadow-[2px_2px_0px_#000] px-2 py-1", step.tagText)}>
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold font-display uppercase tracking-tighter mb-3 text-black">
                  {step.title}
                </h3>
                <p className="text-sm text-black/80 leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
