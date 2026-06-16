'use client'

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

export default function ServiciosSectionNew() {
  const cards: CardData[] = [
    {
      title: "Envíos Express",
      subtitle: "Prioridad absoluta y certeza total.",
      description: "Diseñado para operaciones de alta criticidad horaria. Vos elegís el rango exacto de entrega con solo 2 horas de anticipación.",
      icon: <Zap className="w-6 h-6 text-[#2D3277]" />,
      tag: "ALTA PRIORIDAD",
      tagBg: "bg-[#FFE600]",
      tagText: "text-[#2D3277]",
      imageSrc: "https://images.unsplash.com/photo-1551829142-d9b810d7a0e5?q=80&w=800&auto=format&fit=crop",
      details: [
        { label: "TIPO DE ENVÍO", value: "EXPRESS // DIRECTO" },
        { label: "RANGO DE ENTREGA", value: "< 2 HORAS" },
        { label: "COBERTURA", value: "URBANA MDP" },
      ],
      buttonText: "Solicitar Express",
      buttonHref: "/cotizar/express",
      buttonBg: "bg-[#2D3277] text-white hover:bg-[#1a1e4d]",
    },
    {
      title: "Envíos LowCost",
      subtitle: "Rentabilidad y ruteo masivo.",
      description: "Variabilizá tus costos logísticos. Ingresá tus pedidos antes de las 13:00 hs y garantizamos entrega en el mismo día.",
      icon: <Percent className="w-6 h-6 text-[#2D3277]" />,
      tag: "RECOMENDADO",
      tagBg: "bg-[#FFE600]",
      tagText: "text-[#2D3277]",
      imageSrc: "https://images.unsplash.com/photo-1508974239729-dbb0f4cf1dd3?q=80&w=800&auto=format&fit=crop",
      details: [
        { label: "TIPO DE ENVÍO", value: "RUTEADO // FLEX" },
        { label: "RANGO DE ENTREGA", value: "MISMO DÍA (CORTE 13:00)" },
        { label: "COBERTURA", value: "INTERURBANA MDP" },
      ],
      buttonText: "Ahorrá con LowCost",
      buttonHref: "/servicios/envios-lowcost",
      buttonBg: "bg-[#2D3277] text-white hover:bg-[#1a1e4d]",
    },
    {
      title: "PyMEs & 3PL",
      subtitle: "Almacenamiento y logística integral.",
      description: "Delegá tu stock en nuestro centro de distribución de última milla. Nosotros preparamos, etiquetamos y despachamos.",
      icon: <Boxes className="w-6 h-6 text-[#2D3277]" />,
      tag: "FULFILLMENT",
      tagBg: "bg-[#2D3277]",
      tagText: "text-[#FFE600]",
      imageSrc: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
      details: [
        { label: "TIPO DE ENVÍO", value: "ALMACENAJE + 3PL" },
        { label: "RANGO DE ENTREGA", value: "DESPACHO CONTINUO 24H" },
        { label: "COBERTURA", value: "MDP + COSTA ATLÁNTICA" },
      ],
      buttonText: "Ver Planes E-Commerce",
      buttonHref: "/servicios/plan-emprendedores",
      buttonBg: "bg-[#FFE600] text-[#2D3277] hover:bg-[#FFD700]",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-[#F3F4F6] text-[#2D3277]">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[radial-gradient(#2D3277_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FFE600]/10 text-[#2D3277] font-bold uppercase tracking-widest text-xs mb-6 rounded-full border border-[#FFE600]/30">
            Nuestros Servicios
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tight mb-6 text-[#2D3277]">
            Soluciones a tu Medida
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Diseñamos servicios logísticos que se adaptan perfectamente al ritmo y las necesidades de tu negocio.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col h-full bg-white rounded-[12px] shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300"
            >
              {/* Image Header */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={card.imageSrc}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-[#2D3277]/5 rounded-xl text-[#2D3277]">
                    {card.icon}
                  </div>
                  <span className={cn("px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider", card.tagBg, card.tagText)}>
                    {card.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-heading font-bold mb-2 text-[#2D3277]">
                  {card.title}
                </h3>
                <p className="text-sm font-medium text-muted-foreground mb-6">
                  {card.subtitle}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                  {card.description}
                </p>

                {/* Details list */}
                <div className="space-y-3 mb-8 pt-6 border-t border-gray-100">
                  {card.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex justify-between text-xs">
                      <span className="text-muted-foreground font-medium uppercase tracking-wider">{detail.label}</span>
                      <span className="text-[#2D3277] font-bold">{detail.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <Button
                    asChild
                    className={cn(
                      "w-full h-12 rounded-lg font-bold uppercase tracking-wider transition-all duration-200",
                      card.buttonBg
                    )}
                  >
                    <Link href={card.buttonHref} className="flex items-center justify-center gap-2">
                      {card.buttonText}
                      <ArrowRight className="w-4 h-4" />
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
