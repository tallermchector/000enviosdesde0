"use client";

import React from "react";
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
      buttonBg: "bg-[#ba1a1a] hover:bg-black text-white border-black",
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
      buttonBg: "bg-[#e9c400] hover:bg-black text-black border-black",
    },
    {
      title: "PyMEs & 3PL",
      subtitle: "Almacenamiento y logística integral.",
      description: "Delegá tu stock en nuestro centro de distribución de última milla. Nosotros preparamos, etiquetamos y despachamos.",
      icon: <Boxes className="w-6 h-6 text-[#13bb2e]" />,
      tag: "FULFILLMENT",
      tagBg: "bg-[#000833]",
      tagText: "text-[#e9c400]",
      imageSrc: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
      details: [
        { label: "TIPO DE ENVÍO", value: "ALMACENAJE + 3PL" },
        { label: "RANGO DE ENTREGA", value: "DESPACHO CONTINUO 24H" },
        { label: "COBERTURA", value: "MDP + COSTA ATLÁNTICA" },
      ],
      buttonText: "Planes E-Commerce",
      buttonHref: "/servicios/plan-emprendedores",
      buttonBg: "bg-[#13bb2e] hover:bg-black text-white border-black",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-white text-[#000833] border-t-4 border-black">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6">

        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#E9C400] border-2 border-black text-black font-bold uppercase tracking-wider text-xs mb-4 font-display shadow-[2px_2px_0px_#000]">
            Portafolio
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-display uppercase tracking-tighter mb-6 leading-[0.9] text-black">
            Nuestros Servicios Logísticos
          </h2>
          <p className="text-xl text-[#000833] font-sans max-w-2xl mx-auto">
            Soluciones de transporte urbano diseñadas para adaptarse al ritmo y presupuesto de tu negocio.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col w-full border-4 border-black bg-white shadow-[10px_10px_0px_#000] hover:shadow-[14px_14px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 overflow-hidden"
            >
              {/* Image Header */}
              <div className="relative h-48 w-full border-b-4 border-black overflow-hidden">
                <img
                  src={card.imageSrc}
                  alt={card.title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Header: Icon + Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 border-2 border-black bg-white text-black shadow-[2px_2px_0px_#000]">
                    {card.icon}
                  </div>
                  <span className={cn("px-2 py-0.5 border-2 border-black font-bold font-mono text-[10px] uppercase tracking-wider shadow-[2px_2px_0px_#000]", card.tagBg, card.tagText)}>
                    {card.tag}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold font-display uppercase tracking-tighter mb-1 text-black">
                  {card.title}
                </h3>
                <p className="text-xs font-bold text-[#000833]/70 font-mono uppercase tracking-wider mb-4">
                  {card.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-black/80 leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* Details Table (Receipt Style) */}
                <div className="border-t-2 border-b-2 border-dotted border-black/20 py-4 mb-6 font-mono text-[10px] uppercase tracking-wider space-y-1.5 text-black/70">
                  {card.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex justify-between">
                      <span>{detail.label}:</span>
                      <span className="text-black font-bold">{detail.value}</span>
                    </div>
                  ))}
                </div>

                {/* Footer: Button */}
                <div className="mt-auto">
                  <Button
                    asChild
                    className={cn(
                      "w-full font-display font-bold uppercase text-sm border-4 border-black shadow-[4px_4px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150",
                      card.buttonBg
                    )}
                  >
                    <Link href={card.buttonHref}>
                      <span>{card.buttonText}</span>
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
