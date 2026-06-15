"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap, Percent, Boxes, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardData {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  tag: string;
  tagBg: string;
  tagText: string;
  imageSrc: string;
  details: { label: string; value: string }[];
  buttonText: string;
  buttonHref: string;
  buttonBg: string;
}

export default function ServiciosSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  const cards: CardData[] = [
    {
      title: "Envíos Express",
      subtitle: "Prioridad absoluta y certeza total.",
      description: "Diseñado para operaciones de alta criticidad horaria. Vos elegís el rango exacto de entrega con solo 2 horas de anticipación.",
      icon: <Zap className="w-6 h-6 text-[#ba1a1a]" />,
      tag: "ALTA PRIORIDAD",
      tagBg: "bg-[#ba1a1a]",
      tagText: "text-white",
      imageSrc: "https://images.unsplash.com/photo-1551829142-d9b810d7a0e5?q=80&w=800&auto=format&fit=crop",
      details: [
        { label: "TIPO DE ENVÍO", value: "EXPRESS // DIRECTO" },
        { label: "RANGO DE ENTREGA", value: "< 2 HORAS" },
        { label: "COBERTURA", value: "URBANA MDP" },
      ],
      buttonText: "Solicitar Express",
      buttonHref: "/cotizar/express",
      buttonBg: "bg-[#ba1a1a] hover:bg-white hover:text-black text-white border-black",
    },
    {
      title: "Envíos LowCost",
      subtitle: "Rentabilidad y ruteo masivo.",
      description: "Variabilizá tus costos logísticos. Ingresá tus pedidos antes de las 13:00 hs y garantizamos entrega en el mismo día.",
      icon: <Percent className="w-6 h-6 text-[#e9c400]" />,
      tag: "RECOMENDADO",
      tagBg: "bg-[#13bb2e]",
      tagText: "text-white",
      imageSrc: "https://images.unsplash.com/photo-1508974239729-dbb0f4cf1dd3?q=80&w=800&auto=format&fit=crop",
      details: [
        { label: "TIPO DE ENVÍO", value: "RUTEADO // FLEX" },
        { label: "RANGO DE ENTREGA", value: "MISMO DÍA (CORTE 13:00)" },
        { label: "COBERTURA", value: "INTERURBANA MDP" },
      ],
      buttonText: "Ahorrá con LowCost",
      buttonHref: "/servicios/envios-lowcost",
      buttonBg: "bg-[#e9c400] hover:bg-white hover:text-black text-black border-black",
    },
    {
      title: "PyMEs & 3PL",
      subtitle: "Almacenamiento y logística integral.",
      description: "Delegá tu stock en nuestro centro de distribución de última milla. Nosotros preparamos, etiquetamos y despachamos.",
      icon: <Boxes className="w-6 h-6 text-[#13bb2e]" />,
      tag: "FULFILLMENT",
      tagBg: "bg-[#000833] border-white/20",
      tagText: "text-[#e9c400]",
      imageSrc: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
      details: [
        { label: "TIPO DE ENVÍO", value: "ALMACENAJE + 3PL" },
        { label: "RANGO DE ENTREGA", value: "DESPACHO CONTINUO 24H" },
        { label: "COBERTURA", value: "MDP + COSTA ATLÁNTICA" },
      ],
      buttonText: "Planes E-Commerce",
      buttonHref: "/servicios/plan-emprendedores",
      buttonBg: "bg-[#13bb2e] hover:bg-white hover:text-black text-white border-black",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-white text-[#000833] transition-colors duration-300 border-t-2 border-black">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-black text-black font-bold uppercase tracking-wider text-xs mb-4 font-display shadow-[2px_2px_0px_#000]">
            Portafolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display uppercase tracking-wider mb-4 leading-none text-black">
            Nuestros Servicios Logísticos
          </h2>
          <p className="text-body-lg text-[#000833]">
            Soluciones de transporte urbano diseñadas para adaptarse al ritmo y presupuesto de tu negocio.
          </p>
        </div>

        {/* Cards Grid (3 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => {
            const isHovered = hovered === index;
            return (
              <div
                key={index}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className={cn(
                  "group relative overflow-hidden h-[540px] w-full transition-all duration-300 ease-out border-2 border-black bg-[#000833] text-white shadow-[4px_4px_0px_#000] rounded-none",
                  hovered !== null && !isHovered && "blur-sm scale-[0.98] opacity-60",
                  isHovered && "shadow-[8px_8px_0px_#000] -translate-x-1 -translate-y-1"
                )}
              >
                {/* Background Image */}
                <img
                  src={card.imageSrc}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay Mask */}
                <div
                  className={cn(
                    "absolute inset-0 z-10 transition-colors duration-300",
                    isHovered 
                      ? "bg-[#000833]/92" 
                      : "bg-[#000833]/80"
                  )}
                />

                {/* Content */}
                <div className="relative z-20 flex flex-col justify-between h-full p-6 sm:p-8">
                  {/* Top Section */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-white/10 border border-white/20 text-white rounded-none">
                      {card.icon}
                    </div>
                    <span className={cn("px-3 py-1 border border-black font-bold font-mono text-[10px] uppercase tracking-wider rounded-none", card.tagBg, card.tagText)}>
                      {card.tag}
                    </span>
                  </div>

                  {/* Bottom Section */}
                  <div className="flex flex-col justify-end">
                    <h3 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-wider mb-1 text-white leading-none">
                      {card.title}
                    </h3>
                    <p className="text-xs font-bold text-[#e9c400] font-mono uppercase tracking-wider mb-3">
                      {card.subtitle}
                    </p>

                    {/* Collapsible Content */}
                    <motion.div
                      initial={false}
                      animate={{ 
                        height: isHovered ? "auto" : 0, 
                        opacity: isHovered ? 1 : 0 
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-2">
                        <p className="text-xs text-white/80 leading-relaxed mb-4">
                          {card.description}
                        </p>

                        {/* Receipt Table */}
                        <div className="border-t border-b border-dashed border-white/30 py-2.5 mb-4 font-mono text-[9px] uppercase font-bold tracking-wider space-y-1 text-white/70">
                          {card.details.map((detail, dIdx) => (
                            <div key={dIdx} className="flex justify-between">
                              <span>{detail.label}:</span>
                              <span className="text-white">{detail.value}</span>
                            </div>
                          ))}
                        </div>

                        <Button
                          asChild
                          className={cn(
                            "w-full font-sans font-bold uppercase rounded-none border border-black shadow-[2px_2px_0px_#000] hover:shadow-[4px_4px_0px_#000] flex items-center justify-center gap-2 transition-all duration-150 py-2 text-xs",
                            card.buttonBg
                          )}
                        >
                          <Link href={card.buttonHref}>
                            <span>{card.buttonText}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </Button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
