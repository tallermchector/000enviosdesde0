"use client";

import React from "react";
import BrutalistPricingPage from "@/components/homenew/pricing-brutalist";
import { PricingCardProps } from "@/components/ui/animated-glassy-pricing";

const myPricingPlans: PricingCardProps[] = [
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
    buttonVariant: "secondary",
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
    isPopular: true,
    buttonVariant: "primary",
    href: "/servicios/envios-lowcost"
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
    buttonVariant: "primary",
    href: "/servicios/plan-emprendedores"
  }
];

export default function PricingSection() {
  return (
    <BrutalistPricingPage
      title={
        <>
          Esquemas y <span className="text-[#ba1a1a]">Tarifas Flexibles</span>
        </>
      }
      subtitle="Elegí el plan perfecto para los envíos de tu negocio. Sin costos ocultos, 100% transparente."
      plans={myPricingPlans}
    />
  );
}
