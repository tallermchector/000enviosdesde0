'use client'

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Crown, Zap, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Create a motion-enabled Link component
const MotionLink = motion(Link);

interface PricingPlan {
  planName: string;
  description: string;
  price: string;
  features: string[];
  buttonText: string;
  href: string;
  isPopular?: boolean;
}

const plans: PricingPlan[] = [
  {
    planName: "Envíos Express",
    description: "La solución premium de alta prioridad para operaciones de criticidad horaria.",
    price: "Express",
    features: [
      "Rango exacto de entrega",
      "Anticipación de solo 2 horas",
      "Prioridad y certeza total",
      "Seguimiento en tiempo real"
    ],
    buttonText: "Solicitar Express",
    href: "/cotizar/express"
  },
  {
    planName: "Envíos LowCost",
    description: "Máxima rentabilidad para e-commerce y ruteo masivo diario.",
    price: "LowCost",
    features: [
      "Entrega garantizada en el día (corte 13:00 hs)",
      "Ruteo optimizado masivo",
      "Tarifas sumamente competitivas",
      "Seguridad y cobertura completa"
    ],
    buttonText: "Ahorrá con LowCost",
    href: "/servicios/envios-lowcost",
    isPopular: true
  },
  {
    planName: "PyMEs & 3PL",
    description: "Optimización integral de última milla y almacenamiento para tu negocio.",
    price: "PyMEs",
    features: [
      "Almacenamiento y Fulfillment 3PL",
      "Cuenta Corriente Flexible",
      "Soporte MercadoLibre Flex dedicado",
      "Facturación y reportes de impacto"
    ],
    buttonText: "Ver Planes E-Commerce",
    href: "/servicios/plan-emprendedores"
  }
];

export default function PricingSectionNew() {
  return (
    <section className="relative py-24 overflow-hidden bg-white text-[#2D3277]">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[radial-gradient(#2D3277_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FFE600]/10 text-[#2D3277] font-bold uppercase tracking-widest text-xs mb-6 rounded-full border border-[#FFE600]/30">
            Tarifas
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight mb-6 text-[#2D3277]">
            Esquemas y <span className="text-[#2D3277]/80">Tarifas Flexibles</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Elegí el plan perfecto para los envíos de tu negocio. Sin costos ocultos, 100% transparente.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-end">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.planName}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={!plan.isPopular ? { scale: 1.02 } : {}}
              className={cn(
                "relative flex flex-col w-full bg-white rounded-[24px] p-8 border transition-all duration-300",
                plan.isPopular
                  ? "shadow-xl border-[#FFE600] scale-105 z-10"
                  : "shadow-sm border-gray-100 scale-100"
              )}
            >
              {plan.isPopular && (
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFE600] text-[#2D3277] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm"
                  aria-label="Plan más popular"
                >
                  Más Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-heading font-bold mb-2 text-[#2D3277]">
                  {plan.planName}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed min-h-[40px]">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-heading font-black text-[#2D3277]">{plan.price}</span>
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mt-1">
                  Modalidad de cobro
                </p>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-sm">
                    <Check className={cn("w-5 h-5 mt-0.5 flex-shrink-0", plan.isPopular ? "text-[#FFE600]" : "text-[#2D3277]/40")} />
                    <span className="text-[#2D3277]/80 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                asChild
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "w-full h-12 rounded-xl font-bold uppercase tracking-wider transition-all duration-200",
                  plan.isPopular
                    ? "bg-[#2D3277] text-white hover:bg-[#1a1e4d]"
                    : "bg-gray-50 text-[#2D3277] hover:bg-gray-100"
                )}
              >
                <MotionLink href={plan.href} className="flex items-center justify-center gap-2">
                  {plan.buttonText}
                </MotionLink>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
