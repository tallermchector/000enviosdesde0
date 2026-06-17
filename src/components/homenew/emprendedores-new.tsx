'use client'

import React from "react";
import { Building2, ShoppingBag, Store, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Solution {
  title: string;
  badge: string;
  desc: string;
  icon: React.ElementType;
  accentColor: string;
  items: string[];
}

const SOLUTIONS: Solution[] = [
  {
    title: "Soluciones Corporativas",
    badge: "Corporativo",
    desc: "Optimización logística para empresas con Cuenta Corriente Flexible y beneficios de escala.",
    icon: Building2,
    accentColor: "text-[#2D3277]",
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
    accentColor: "text-[#2D3277]",
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
    accentColor: "text-[#2D3277]",
    items: [
      "Integración tecnológica",
      "Rutas optimizadas",
      "Flota especializada",
      "Seguimiento en tiempo real"
    ]
  }
];

export default function EmprendedoresSectionNew() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#F8F9FB] text-[#2D3277]">
      {/* Subtle Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none bg-[radial-gradient(#2D3277_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FFE600]/10 text-[#2D3277] font-bold uppercase tracking-widest text-xs mb-6 rounded-full border border-[#FFE600]/30">
            Flexibilidad
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight mb-6 text-[#2D3277]">
            Soluciones para Emprendedores & PyMEs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Adaptamos nuestra estructura a tus necesidades específicas. Impulsamos tus ventas con un servicio de última milla excelente.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {SOLUTIONS.map((sol, index) => {
            const Icon = sol.icon;
            return (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col h-full bg-white rounded-[16px] p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                {/* Icon and Badge */}
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#2D3277]/5 flex items-center justify-center text-[#2D3277]">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 bg-[#F3F4F6] text-[#2D3277] text-[10px] font-bold uppercase tracking-wider rounded-full">
                    {sol.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-bold mb-3 text-[#2D3277]">
                    {sol.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                    {sol.desc}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-4">
                    {sol.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm font-medium text-[#2D3277]/80">
                        <CheckCircle2 className="w-5 h-5 text-[#FFE600] drop-shadow-[0_0_2px_rgba(255,230,0,0.5)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
