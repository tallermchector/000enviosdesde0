"use client";

import React from "react";
import { Clock, ShieldCheck, Users, Calendar, Bike, CheckCircle2 } from "lucide-react";

export default function VisionSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-background text-foreground transition-colors duration-300 border-t border-border/10">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] dark:bg-primary/10" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] dark:bg-secondary/5" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-[60px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Text & Features */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-primary/10 border border-primary/20 text-primary mb-6 font-orbitron">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Partner Logístico Especializado
            </span>

            {/* Title (H2) */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-orbitron tracking-tight mb-6 leading-tight">
              Nuestra Visión Logística
            </h2>

            {/* Description */}
            <p className="text-lg leading-relaxed text-muted-foreground mb-10 font-roboto max-w-2xl">
              Transformamos tus costos fijos en soluciones flexibles que acompañan el crecimiento de tu negocio.
            </p>

            {/* Features list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {/* Feature 1 */}
              <div className="flex gap-4 p-5 rounded-xl border border-border/55 bg-card/40 backdrop-blur-sm hover:border-primary/40 transition-colors duration-300">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base font-orbitron mb-1">Entregas a Tiempo</h3>
                  <p className="text-sm text-muted-foreground font-roboto">
                    Puntualidad garantizada en cada envío
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4 p-5 rounded-xl border border-border/55 bg-card/40 backdrop-blur-sm hover:border-primary/40 transition-colors duration-300">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base font-orbitron mb-1">Envíos Seguros</h3>
                  <p className="text-sm text-muted-foreground font-roboto">
                    Protección total de tus paquetes
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Statistics Grid */}
          <div className="lg:col-span-5 w-full flex flex-col gap-6">
            
            {/* Stat Card 1 */}
            <div className="group relative flex items-center gap-6 p-6 rounded-xl border border-border/55 bg-card/30 backdrop-blur-md hover:bg-card/50 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary border border-secondary/20 shadow-inner">
                <Users className="w-7 h-7" />
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold font-orbitron text-foreground mb-1">
                  +5.000
                </div>
                <div className="text-sm text-muted-foreground font-roboto font-medium uppercase tracking-wide">
                  Confianza local comprobada
                </div>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="group relative flex items-center gap-6 p-6 rounded-xl border border-border/55 bg-card/30 backdrop-blur-md hover:bg-card/50 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary border border-secondary/20 shadow-inner">
                <Calendar className="w-7 h-7" />
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold font-orbitron text-foreground mb-1">
                  7 Años
                </div>
                <div className="text-sm text-muted-foreground font-roboto font-medium uppercase tracking-wide">
                  Innovación constante en última milla
                </div>
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="group relative flex items-center gap-6 p-6 rounded-xl border border-border/55 bg-card/30 backdrop-blur-md hover:bg-card/50 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary border border-secondary/20 shadow-inner">
                <Bike className="w-7 h-7" />
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold font-orbitron text-foreground mb-1">
                  Flota Exclusiva
                </div>
                <div className="text-sm text-muted-foreground font-roboto font-medium uppercase tracking-wide">
                  Motocicletas dedicadas para máxima agilidad urbana
                </div>
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
