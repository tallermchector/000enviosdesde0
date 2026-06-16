"use client";

import React from "react";
import { Building2, ShoppingBag, Store } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const SOLUTIONS = [
  {
    title: "Soluciones Corporativas",
    badge: "Corporativo",
    desc: "Optimización logística para empresas con Cuenta Corriente Flexible y beneficios de escala.",
    icon: Building2,
    colorClass: "text-[#000833]",
    tagBg: "bg-[#000833]",
    tagText: "text-[#e9c400]",
    items: [
      "Cuenta Corriente Flexible",
      "Facturación simplificada",
      "Gestión multi-usuario",
      "Reportes de impacto"
    ]
  },
  {
    title: "Envíos Flex MercadoLibre",
    badge: "MercadoLibre",
    desc: "Socio estratégico para potenciar tus ventas con entregas en el día.",
    icon: ShoppingBag,
    colorClass: "text-[#e9c400]",
    tagBg: "bg-[#e9c400]",
    tagText: "text-black",
    items: [
      "Cumplimiento de SLAs",
      "Mejora tu reputación",
      "Tarifas competitivas",
      "Soporte Flex dedicado"
    ]
  },
  {
    title: "Logística E-Commerce",
    badge: "PyMEs",
    desc: "Gestión integral de última milla para PyMEs en crecimiento.",
    icon: Store,
    colorClass: "text-[#13bb2e]",
    tagBg: "bg-[#13bb2e]",
    tagText: "text-white",
    items: [
      "Integración tecnológica",
      "Rutas optimizadas",
      "Flota especializada",
      "Seguimiento en tiempo real"
    ]
  }
];

export default function EmprendedoresSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-white text-[#000833] border-t-4 border-black">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#E9C400] border-2 border-black text-black font-bold uppercase tracking-wider text-xs mb-4 font-display shadow-[2px_2px_0px_#000]">
            Flexibilidad
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-display uppercase tracking-tighter mb-6 leading-[0.9] text-black">
            Soluciones para Emprendedores & PyMEs
          </h2>
          <p className="text-xl text-[#000833] font-sans max-w-2xl mx-auto">
            Adaptamos nuestra estructura a tus necesidades específicas. Impulsamos tus ventas con un servicio de última milla excelente.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {SOLUTIONS.map((sol, index) => {
            const Icon = sol.icon;
            return (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full h-full"
              >
                <div className="flex flex-col h-full border-4 border-black bg-white shadow-[10px_10px_0px_#000] hover:shadow-[14px_14px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 overflow-hidden">

                  {/* Top Color Bar */}
                  <div className={cn("h-3 w-full", sol.tagBg)} />

                  <div className="p-8 flex flex-col flex-1">
                    {/* Icon and Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 bg-white border-2 border-black shadow-[2px_2px_0px_#000]">
                        <Icon className={cn("w-7 h-7", sol.colorClass)} />
                      </div>
                      <span className="px-3 py-1 border-2 border-black bg-[#edeeef] text-black text-[10px] font-bold font-mono uppercase tracking-wider">
                        {sol.badge}
                      </span>
                    </div>

                    {/* Title & Desc */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold font-display uppercase tracking-tighter mb-3 text-black">
                        {sol.title}
                      </h3>
                      <p className="text-sm text-[#444556] leading-relaxed min-h-[40px]">
                        {sol.desc}
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="border-t-4 border-black mb-6" />

                    {/* Items List */}
                    <ul className="space-y-4 flex-1">
                      {sol.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <div className="w-5 h-5 border-2 border-black bg-[#E9C400] text-black flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[1px_1px_0px_#000] text-[10px] font-bold">
                            ✓
                          </div>
                          <span className="text-xs font-bold font-mono uppercase tracking-wider text-black self-center">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
