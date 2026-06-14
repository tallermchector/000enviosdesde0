"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap, Percent, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ServiciosSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-background text-foreground transition-colors duration-300 border-t border-border/10">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px] dark:bg-primary/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-[60px]">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 border border-primary/20 text-primary mb-4 font-orbitron">
            Portafolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-orbitron tracking-tight mb-4 leading-tight">
            Nuestros Servicios Logísticos
          </h2>
          <p className="text-muted-foreground font-roboto text-base sm:text-lg">
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
            className="group relative flex flex-col justify-between p-8 rounded-2xl border border-border/40 bg-card/30 hover:bg-card/50 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden"
          >
            {/* Glowing top line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-[#001de0] opacity-70 group-hover:opacity-100 transition-opacity" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-xl bg-primary/10 border border-primary/25 text-primary group-hover:scale-105 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-red-500/10 border border-red-500/20 text-red-500 font-orbitron">
                  ALTA PRIORIDAD
                </span>
              </div>
              <h3 className="text-2xl font-bold font-orbitron mb-2 text-foreground group-hover:text-primary transition-colors">
                Envíos Express
              </h3>
              <p className="text-sm font-semibold text-primary/90 font-roboto mb-4 uppercase tracking-wider">
                Prioridad absoluta y certeza total.
              </p>
              <p className="text-muted-foreground font-roboto text-sm leading-relaxed mb-6">
                Diseñado para operaciones de alta criticidad horaria. Vos elegís el rango exacto de entrega con solo 2 horas de anticipación.
              </p>
            </div>
            <Button
              asChild
              className="w-full bg-primary hover:bg-primary/95 text-primary-foreground font-roboto font-semibold flex items-center justify-center gap-2 transition-all hover:scale-[1.01] shadow-md shadow-primary/10"
            >
              <Link href="/cotizar/express">
                <span>Solicitar Express</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          {/* Card 2: Envíos LowCost */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative flex flex-col justify-between p-8 rounded-2xl border border-border/40 bg-card/30 hover:bg-card/50 hover:border-secondary/40 hover:shadow-xl hover:shadow-secondary/5 transition-all duration-300 overflow-hidden"
          >
            {/* Glowing top line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-[#e9c400] opacity-70 group-hover:opacity-100 transition-opacity" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-xl bg-secondary/10 border border-secondary/25 text-secondary group-hover:scale-105 transition-transform">
                  <Percent className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-green-500/10 border border-green-500/20 text-green-500 font-orbitron">
                  RECOMENDADO
                </span>
              </div>
              <h3 className="text-2xl font-bold font-orbitron mb-2 text-foreground group-hover:text-secondary transition-colors">
                Envíos LowCost
              </h3>
              <p className="text-sm font-semibold text-secondary font-roboto mb-4 uppercase tracking-wider">
                Rentabilidad y ruteo masivo.
              </p>
              <p className="text-muted-foreground font-roboto text-sm leading-relaxed mb-6">
                Variabilizá tus costos logísticos. Ingresá tus pedidos antes de las 13:00 hs y garantizamos entrega en el día.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="w-full border-secondary/60 text-secondary hover:bg-secondary/15 font-roboto font-semibold flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
            >
              <Link href="/servicios/envios-lowcost">
                <span>Ahorrá con LowCost</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
