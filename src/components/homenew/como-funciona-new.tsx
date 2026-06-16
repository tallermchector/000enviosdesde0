'use client'

import React from "react";
import { motion } from "framer-motion";
import { Calculator, Package, Truck, Activity, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export default function ComoFuncionaSectionNew() {
  const steps: Step[] = [
    {
      number: "01",
      title: "Cotizá tu envío",
      description: "Ingresá los datos de tu envío y obtené una tarifa inmediata y sin compromisos.",
      icon: <Calculator className="w-6 h-6" />,
      color: "text-[#2D3277]",
    },
    {
      number: "02",
      title: "Prepará tu paquete",
      description: "Empacá tus artículos de forma segura siguiendo nuestras recomendaciones de embalaje.",
      icon: <Package className="w-6 h-6" />,
      color: "text-[#2D3277]",
    },
    {
      number: "03",
      title: "Solicitá la recogida",
      description: "Elegí el horario que mejor te convenga y nosotros pasamos a buscar tu pedido.",
      icon: <Truck className="w-6 h-6" />,
      color: "text-[#2D3277]",
    },
    {
      number: "04",
      title: "Seguí tu envío",
      description: "Monitorizá el trayecto de tu paquete en tiempo real hasta que llegue a su destino.",
      icon: <Activity className="w-6 h-6" />,
      color: "text-[#2D3277]",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-white text-[#2D3277]">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[radial-gradient(#2D3277_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FFE600]/10 text-[#2D3277] font-bold uppercase tracking-widest text-xs mb-6 rounded-full border border-[#FFE600]/30">
            Proceso
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tight mb-6 text-[#2D3277]">
            Cómo Funciona
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tu logística simplificada en cuatro pasos rápidos y eficientes.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col w-full bg-white rounded-[12px] p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              {/* Step Number & Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#2D3277]/5 flex items-center justify-center text-[#2D3277]">
                  {step.icon}
                </div>
                <span className="text-2xl font-heading font-black text-[#FFE600]/20">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-bold uppercase tracking-tight mb-3 text-[#2D3277]">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              {/* Progress indicator line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-[2px] bg-gray-100 z-0" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
