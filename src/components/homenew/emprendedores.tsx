"use client";

import React from "react";
import { CheckCircle2, Building2, ShoppingBag, Store } from "lucide-react";
import { motion } from "framer-motion";

const SOLUTIONS = [
  {
    title: "Soluciones Corporativas",
    badge: "Corporativo",
    desc: "Optimización logística para empresas con Cuenta Corriente Flexible y beneficios de escala",
    icon: Building2,
    colorClass: "from-[#0084ff] to-[#4fa3ff] text-[#0084ff]",
    borderColor: "hover:border-[#0084ff]/30",
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
    desc: "Socio estratégico para potenciar tus ventas con entregas en el día",
    icon: ShoppingBag,
    colorClass: "from-amber-500 to-yellow-500 text-amber-500",
    borderColor: "hover:border-amber-500/30",
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
    desc: "Gestión integral de última milla para PyMEs en crecimiento",
    icon: Store,
    colorClass: "from-[#9B99FE] to-[#2BC8B7] text-[#9B99FE]",
    borderColor: "hover:border-[#9B99FE]/30",
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
    <section className="relative py-24 overflow-hidden bg-background text-foreground transition-colors duration-300 border-t border-border/10">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] dark:bg-secondary/5" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-[60px]">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 border border-primary/20 text-primary mb-4 font-orbitron">
            Flexibilidad
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-orbitron tracking-tight mb-4 leading-tight">
            Soluciones para Emprendedores & PyMEs
          </h2>
          <p className="text-muted-foreground font-roboto text-base sm:text-lg">
            Adaptamos nuestra estructura a tus necesidades específicas. Impulsamos tus ventas con un servicio de última milla excelente.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {SOLUTIONS.map((sol, index) => {
            const Icon = sol.icon;
            return (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group flex flex-col p-8 rounded-2xl border border-border/40 bg-card/30 transition-all duration-300 shadow-sm ${sol.borderColor}`}
              >
                {/* Icon and Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-primary/5 border border-border/40 group-hover:scale-105 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${sol.colorClass}`} />
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-muted/80 border border-border/40 text-muted-foreground font-orbitron">
                    {sol.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-orbitron mb-3 group-hover:text-primary transition-colors duration-200">
                  {sol.title}
                </h3>

                {/* Desc */}
                <p className="text-sm text-muted-foreground font-roboto leading-relaxed mb-6">
                  {sol.desc}
                </p>

                {/* Divider */}
                <div className="h-px bg-border/40 mb-6" />

                {/* Items List */}
                <ul className="flex-1 space-y-3.5">
                  {sol.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-medium font-roboto text-foreground/90">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
