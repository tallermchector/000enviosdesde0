'use client'

import React from "react";
import Image from "next/image";
import { ContainerAnimated, ContainerStagger, GalleryGrid, GalleryGridCell } from "@/components/ui/cta-section-with-gallery";
import { Clock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const IMAGES = [
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1553413532-67617d54bba?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=600&auto=format&fit=crop",
];

const IMAGE_LABELS = [
  "CÁM_01_MDP // RECEPCIÓN",
  "CÁM_02_MDP // CLASIFICACIÓN",
  "CÁM_03_MDP // DESPACHO_EXPRESS",
  "CÁM_04_MDP // FLOTA_RUTA",
];

export default function VisionSectionNew() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white text-[#2D3277] transition-colors duration-300">
      {/* Subtle Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#FFE600]/5 rounded-full blur-3xl -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#2D3277]/5 rounded-full blur-3xl -ml-20 -mb-20" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <ContainerAnimated className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FFE600]/10 text-[#2D3277] font-bold uppercase tracking-widest text-xs mb-6 rounded-full border border-[#FFE600]/20">
            Nuestra Visión
          </ContainerAnimated>
          <ContainerAnimated className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tight mb-6 leading-[1.1] text-[#2D3277]">
            Transformamos la Logística
          </ContainerAnimated>
          <ContainerAnimated className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Convertimos la complejidad de tus envíos en una ventaja competitiva. Tecnología, rapidez y seguridad en cada kilómetro.
          </ContainerAnimated>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <ContainerAnimated className="flex items-center gap-6 p-8 bg-white rounded-[12px] shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#2D3277]/5 flex items-center justify-center text-[#2D3277]">
              <Clock className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#2D3277] mb-1">Entregas a Tiempo</h4>
              <p className="text-sm text-muted-foreground">Puntualidad garantizada en cada entrega mediante ruteo inteligente.</p>
            </div>
          </ContainerAnimated>

          <ContainerAnimated className="flex items-center gap-6 p-8 bg-white rounded-[12px] shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#00A650]/10 flex items-center justify-center text-[#00A650]">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#2D3277] mb-1">Seguridad Total</h4>
              <p className="text-sm text-muted-foreground">Tus paquetes están protegidos desde la recogida hasta la entrega final.</p>
            </div>
          </ContainerAnimated>
        </div>

        {/* Gallery Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-[#2D3277]/5 rounded-[24px] -rotate-1 scale-105 -z-10" />
          <GalleryGrid className="w-full max-w-[1280px] mx-auto md:max-w-none">
            {IMAGES.map((imageUrl, index) => (
              <GalleryGridCell
                key={index}
                index={index}
                className="overflow-hidden rounded-[12px] border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="relative h-full min-h-[200px]">
                  <Image
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    src={imageUrl}
                    alt={`Visión Logística ${index + 1}`}
                  />
                  <div className="absolute bottom-3 left-3 z-10 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-[#2D3277] uppercase tracking-tighter shadow-sm">
                    {IMAGE_LABELS[index]}
                  </div>
                </div>
              </GalleryGridCell>
            ))}
          </GalleryGrid>
        </div>
      </div>
    </section>
  );
}
