"use client";

import React from "react";
import { CheckCircle2, Building2, ShoppingBag, Store } from "lucide-react";
import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";

const SOLUTIONS = [
  {
    title: "Soluciones Corporativas",
    badge: "Corporativo",
    desc: "Optimización logística para empresas con Cuenta Corriente Flexible y beneficios de escala.",
    icon: Building2,
    colorClass: "text-[#001de0]",
    topBg: "bg-[#001de0]",
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
    topBg: "bg-[#e9c400]",
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
    topBg: "bg-[#13bb2e]",
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
    <section className="relative py-24 overflow-hidden bg-[#f8f9fa] text-[#191c1d] transition-colors duration-300 border-t-2 border-black">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-black text-black font-bold uppercase tracking-wider text-xs mb-4 font-display">
            Flexibilidad
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display uppercase tracking-wider mb-4 leading-none text-black">
            Soluciones para Emprendedores & PyMEs
          </h2>
          <p className="text-body-lg text-[#191c1d]">
            Adaptamos nuestra estructura a tus necesidades específicas. Impulsamos tus ventas con un servicio de última milla excelente.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {SOLUTIONS.map((sol, index) => {
            const Icon = sol.icon;
            const glowColor = sol.topBg.includes("001de0") 
              ? "blue" 
              : sol.topBg.includes("e9c400") 
              ? "yellow" 
              : "green";
            return (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full h-full"
              >
                <GlowCard
                  glowColor={glowColor}
                  radius={0}
                  border={2}
                  borderColor="#000"
                  backdrop="#fff"
                  customSize
                  className="group flex flex-col p-8 shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all duration-150 overflow-hidden h-full"
                >
                  {/* Top solid accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 ${sol.topBg} z-10`} />

                  <div className="relative z-10 flex flex-col justify-between h-full flex-1">
                    <div>
                      {/* Icon and Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="p-3.5 rounded-none bg-white border-2 border-black text-black group-hover:scale-105 transition-transform duration-150">
                          <Icon className={`w-6 h-6 ${sol.colorClass}`} />
                        </div>
                        <span className="px-3 py-1 rounded-none border-2 border-black bg-[#edeeef] text-black text-[10px] font-bold font-mono uppercase tracking-wider">
                          {sol.badge}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold font-display uppercase tracking-wider mb-3 group-hover:text-[#001de0] transition-colors duration-150 text-black">
                        {sol.title}
                      </h3>

                      {/* Desc */}
                      <p className="text-body-sm text-[#444556] leading-relaxed mb-6 min-h-[40px]">
                        {sol.desc}
                      </p>
                    </div>

                    <div>
                      {/* Divider */}
                      <div className="border-b border-dotted border-black mb-6" />

                      {/* Items List */}
                      <ul className="space-y-3.5">
                        {sol.items.map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#13bb2e] mt-0.5 flex-shrink-0" />
                            <span className="text-sm font-semibold font-mono uppercase tracking-wider text-black">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
