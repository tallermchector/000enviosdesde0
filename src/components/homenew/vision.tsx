"use client";

import React from "react";
import {
  ContainerAnimated,
  ContainerStagger,
  GalleryGrid,
  GalleryGridCell,
} from "@/components/ui/cta-section-with-gallery";
import { Clock, ShieldCheck } from "lucide-react";

const IMAGES = [
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1553413532-67617d54bbaa?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=600&auto=format&fit=crop",
];

export default function VisionSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-background text-foreground transition-colors duration-300 border-t border-border/10">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] dark:bg-primary/10" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] dark:bg-secondary/5" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-16 px-6 md:px-[60px] md:grid-cols-2">
        <ContainerStagger className="flex flex-col items-start max-w-xl">
          {/* Badge */}
          <ContainerAnimated className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-primary/10 border border-primary/20 text-primary mb-6 font-orbitron">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Partner Logístico Especializado
          </ContainerAnimated>

          {/* Title (H2) */}
          <ContainerAnimated className="text-3xl sm:text-4xl md:text-5xl font-bold font-orbitron tracking-tight mb-6 leading-tight">
            Nuestra Visión Logística
          </ContainerAnimated>

          {/* Description */}
          <ContainerAnimated className="text-lg leading-relaxed text-muted-foreground mb-8 font-roboto">
            Transformamos tus costos fijos en soluciones flexibles que acompañan el crecimiento de tu negocio.
          </ContainerAnimated>

          {/* Characteristics/Features */}
          <ContainerAnimated className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex gap-3 items-start p-3.5 rounded-lg border border-border/30 bg-card/25 hover:border-primary/30 hover:bg-card/45 transition-all duration-300">
              <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-sm font-orbitron">Entregas a Tiempo</h4>
                <p className="text-xs text-muted-foreground font-roboto mt-0.5">
                  Puntualidad garantizada en cada envío
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start p-3.5 rounded-lg border border-border/30 bg-card/25 hover:border-primary/30 hover:bg-card/45 transition-all duration-300">
              <ShieldCheck className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-sm font-orbitron">Envíos Seguros</h4>
                <p className="text-xs text-muted-foreground font-roboto mt-0.5">
                  Protección total de tus paquetes
                </p>
              </div>
            </div>
          </ContainerAnimated>

          {/* Trust Statistics */}
          <ContainerAnimated className="w-full border-t border-border/40 pt-8 flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <div className="text-2xl font-bold font-orbitron text-secondary mb-1">
                +5.000
              </div>
              <p className="text-xs text-muted-foreground font-roboto leading-normal">
                Confianza local comprobada
              </p>
            </div>
            <div className="flex-1">
              <div className="text-2xl font-bold font-orbitron text-secondary mb-1">
                7 Años
              </div>
              <p className="text-xs text-muted-foreground font-roboto leading-normal">
                Innovación constante en última milla
              </p>
            </div>
            <div className="flex-1">
              <div className="text-2xl font-bold font-orbitron text-secondary mb-1">
                Flota Exclusiva
              </div>
              <p className="text-xs text-muted-foreground font-roboto leading-normal">
                Motocicletas dedicadas para máxima agilidad urbana
              </p>
            </div>
          </ContainerAnimated>
        </ContainerStagger>

        {/* Gallery Grid */}
        <GalleryGrid className="w-full max-w-md mx-auto md:max-w-none">
          {IMAGES.map((imageUrl, index) => (
            <GalleryGridCell index={index} key={index}>
              <img
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 hover:scale-105 opacity-80 hover:opacity-100 transition-all duration-500"
                src={imageUrl}
                alt={`Visión Logística ${index + 1}`}
              />
            </GalleryGridCell>
          ))}
        </GalleryGrid>
      </div>
    </section>
  );
}
