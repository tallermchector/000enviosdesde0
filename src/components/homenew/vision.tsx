"use client";

import React from "react";
import Image from "next/image";
import {
  ContainerAnimated,
  ContainerStagger,
  GalleryGrid,
  GalleryGridCell,
} from "@/components/ui/cta-section-with-gallery";
import { Clock, ShieldCheck } from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";

const IMAGES = [
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1553413532-67617d54bbaa?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=600&auto=format&fit=crop",
];

const IMAGE_LABELS = [
  "CÁM_01_MDP // RECEPCIÓN",
  "CÁM_02_MDP // CLASIFICACIÓN",
  "CÁM_03_MDP // DESPACHO_EXPRESS",
  "CÁM_04_MDP // FLOTA_RUTA",
];

export default function VisionSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white text-[#000833] transition-colors duration-300 border-t-2 border-black">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]"></div>
 
      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
        <ContainerStagger className="flex flex-col items-start max-w-xl">
          
          {/* Badge */}
          <ContainerAnimated className="inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-black text-black font-bold uppercase tracking-wider text-xs mb-6 font-display shadow-[2px_2px_0px_#000]">
            <span className="w-2 h-2 bg-[#000833]" />
            Partner Logístico Especializado
          </ContainerAnimated>
 
          {/* Title (H2 Anton uppercase) */}
          <ContainerAnimated className="text-3xl sm:text-4xl md:text-5xl font-bold font-display uppercase tracking-wider mb-6 leading-none text-black">
            Nuestra Visión Logística
          </ContainerAnimated>
 
          {/* Description */}
          <ContainerAnimated className="text-body-lg text-[#000833] mb-8 leading-relaxed">
            Transformamos tus costos fijos en soluciones flexibles que acompañan el crecimiento de tu negocio en toda la costa atlántica.
          </ContainerAnimated>
 
          {/* Characteristics/Features */}
          <ContainerAnimated className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <GlowCard 
              glowColor="yellow"
              radius={0}
              border={2}
              borderColor="#000"
              backdrop="#fff"
              customSize
              className="flex gap-3 items-start p-4 shadow-[3px_3px_0px_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#000] transition-all duration-150"
            >
              <Clock className="w-5 h-5 text-[#000833] mt-0.5 flex-shrink-0 z-10" />
              <div className="z-10">
                <h4 className="font-bold text-sm font-display uppercase tracking-wider">Entregas a Tiempo</h4>
                <p className="text-xs text-[#444556] font-mono uppercase tracking-wider mt-0.5">
                  Puntualidad garantizada en cada entrega.
                </p>
              </div>
            </GlowCard>
            <GlowCard 
              glowColor="yellow"
              radius={0}
              border={2}
              borderColor="#000"
              backdrop="#fff"
              customSize
              className="flex gap-3 items-start p-4 shadow-[3px_3px_0px_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#000] transition-all duration-150"
            >
              <ShieldCheck className="w-5 h-5 text-[#000833] mt-0.5 flex-shrink-0 z-10" />
              <div className="z-10">
                <h4 className="font-bold text-sm font-display uppercase tracking-wider">Envíos Seguros</h4>
                <p className="text-xs text-[#444556] font-mono uppercase tracking-wider mt-0.5">
                  Protección total de tus paquetes.
                </p>
              </div>
            </GlowCard>
          </ContainerAnimated>
 
          {/* Trust Statistics (Brutalist style) */}
          <ContainerAnimated className="w-full border-t-2 border-dotted border-black pt-8 flex flex-col sm:flex-row gap-4">
            <GlowCard 
              glowColor="yellow"
              radius={0}
              border={2}
              borderColor="#000"
              backdrop="#fff"
              customSize
              className="flex-1 p-4 shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all duration-150 group"
            >
              <div className="relative z-10">
                <div className="text-2xl font-bold font-display uppercase text-[#000833] mb-1 group-hover:scale-105 transition-transform duration-150 origin-left">
                  +5.000
                </div>
                <p className="text-[10px] text-[#444556] font-mono uppercase tracking-wider font-semibold">
                  Envíos locales al mes.
                </p>
              </div>
            </GlowCard>
            <GlowCard 
              glowColor="yellow"
              radius={0}
              border={2}
              borderColor="#000"
              backdrop="#fff"
              customSize
              className="flex-1 p-4 shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all duration-150 group"
            >
              <div className="relative z-10">
                <div className="text-2xl font-bold font-display uppercase text-[#000833] mb-1 group-hover:scale-105 transition-transform duration-150 origin-left">
                  7 Años
                </div>
                <p className="text-[10px] text-[#444556] font-mono uppercase tracking-wider font-semibold">
                  De trayectoria urbana.
                </p>
              </div>
            </GlowCard>
            <GlowCard 
              glowColor="yellow"
              radius={0}
              border={2}
              borderColor="#000"
              backdrop="#fff"
              customSize
              className="flex-1 p-4 shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all duration-150 group"
            >
              <div className="relative z-10">
                <div className="text-2xl font-bold font-display uppercase text-[#000833] mb-1 group-hover:scale-105 transition-transform duration-150 origin-left">
                  Flota
                </div>
                <p className="text-[10px] text-[#444556] font-mono uppercase tracking-wider font-semibold">
                  Motocicletas activas.
                </p>
              </div>
            </GlowCard>
          </ContainerAnimated>
        </ContainerStagger>

        {/* Gallery Grid */}
        <GalleryGrid className="w-full max-w-md mx-auto md:max-w-none">
          {IMAGES.map((imageUrl, index) => (
            <GalleryGridCell index={index} key={index} className="overflow-hidden rounded-none border-2 border-black bg-white relative h-full min-h-[160px] shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all duration-300 group">
              
              {/* Technical camera label overlay */}
              <span className="absolute top-2.5 left-2.5 z-10 bg-black/85 border border-[#E9C400]/40 text-[#E9C400] text-[8px] font-mono font-bold tracking-wider px-1.5 py-0.5 pointer-events-none uppercase">
                {IMAGE_LABELS[index]}
              </span>

              {/* Blinking recording point overlay */}
              <span className="absolute bottom-2.5 right-2.5 z-10 bg-black/60 border border-white/10 text-white text-[8px] font-mono font-bold tracking-wider px-1.5 py-0.5 pointer-events-none uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                REC
              </span>

              <Image
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover object-center grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100 transition-all duration-300 cursor-zoom-in rounded-none"
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
