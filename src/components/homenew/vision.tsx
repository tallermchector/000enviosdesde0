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

const IMAGES = [
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1553413532-67617d54bbaa?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=600&auto=format&fit=crop",
];

export default function VisionSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#f8f9fa] text-[#191c1d] transition-colors duration-300 border-t-2 border-black">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
        <ContainerStagger className="flex flex-col items-start max-w-xl">
          
          {/* Badge */}
          <ContainerAnimated className="inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-black text-black font-bold uppercase tracking-wider text-xs mb-6 font-display">
            <span className="w-2 h-2 bg-[#001de0]" />
            Partner Logístico Especializado
          </ContainerAnimated>

          {/* Title (H2 Anton uppercase) */}
          <ContainerAnimated className="text-3xl sm:text-4xl md:text-5xl font-bold font-display uppercase tracking-wider mb-6 leading-none text-black">
            Nuestra Visión Logística
          </ContainerAnimated>

          {/* Description */}
          <ContainerAnimated className="text-body-lg text-[#191c1d] mb-8">
            Transformamos tus costos fijos en soluciones flexibles que acompañan el crecimiento de tu negocio en toda la costa atlántica.
          </ContainerAnimated>

          {/* Characteristics/Features */}
          <ContainerAnimated className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex gap-3 items-start p-4 rounded-none border-2 border-black bg-white shadow-[3px_3px_0px_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#000] transition-all">
              <Clock className="w-5 h-5 text-[#001de0] mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-sm font-display uppercase tracking-wider">Entregas a Tiempo</h4>
                <p className="text-xs text-[#444556] font-mono uppercase tracking-wider mt-0.5">
                  Puntualidad garantizada en cada entrega.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start p-4 rounded-none border-2 border-black bg-white shadow-[3px_3px_0px_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#000] transition-all">
              <ShieldCheck className="w-5 h-5 text-[#001de0] mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-sm font-display uppercase tracking-wider">Envíos Seguros</h4>
                <p className="text-xs text-[#444556] font-mono uppercase tracking-wider mt-0.5">
                  Protección total de tus paquetes.
                </p>
              </div>
            </div>
          </ContainerAnimated>

          {/* Trust Statistics (Brutalist style) */}
          <ContainerAnimated className="w-full border-t-2 border-dotted border-black pt-8 flex flex-col sm:flex-row gap-4">
            <div className="flex-1 p-4 rounded-none border-2 border-black bg-white shadow-[4px_4px_0px_#000]">
              <div className="text-2xl font-bold font-display uppercase text-[#001de0] mb-1">
                +5.000
              </div>
              <p className="text-xs text-[#444556] font-mono uppercase tracking-wider font-semibold">
                Envíos locales al mes.
              </p>
            </div>
            <div className="flex-1 p-4 rounded-none border-2 border-black bg-white shadow-[4px_4px_0px_#000]">
              <div className="text-2xl font-bold font-display uppercase text-[#001de0] mb-1">
                7 Años
              </div>
              <p className="text-xs text-[#444556] font-mono uppercase tracking-wider font-semibold">
                De trayectoria urbana.
              </p>
            </div>
            <div className="flex-1 p-4 rounded-none border-2 border-black bg-white shadow-[4px_4px_0px_#000]">
              <div className="text-2xl font-bold font-display uppercase text-[#001de0] mb-1">
                Flota
              </div>
              <p className="text-xs text-[#444556] font-mono uppercase tracking-wider font-semibold">
                Motocicletas dedicadas.
              </p>
            </div>
          </ContainerAnimated>
        </ContainerStagger>

        {/* Gallery Grid */}
        <GalleryGrid className="w-full max-w-md mx-auto md:max-w-none">
          {IMAGES.map((imageUrl, index) => (
            <GalleryGridCell index={index} key={index} className="overflow-hidden rounded-none border-2 border-black bg-white relative h-full min-h-[150px] shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all duration-300">
              <Image
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover object-center grayscale hover:grayscale-0 opacity-90 hover:opacity-100 transition-all duration-300 cursor-zoom-in rounded-none"
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
