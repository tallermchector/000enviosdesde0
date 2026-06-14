import React from "react";
import {
  Zap,
  Clock,
  Package,
  Building2,
  ShieldCheck,
  Mail,
  Share2,
  Calculator,
} from "lucide-react";

export const logo = {
  url: "/",
  src: "/LogoEnviosDosRuedas.webp",
  alt: "Logo Dos Ruedas",
  title: "Envíos DosRuedas",
};

export const menu = [
  { title: "Inicio", url: "/" },
  {
    title: "Servicios",
    url: "#",
    items: [
      {
        title: "Envíos Express",
        description: "Mensajería instantánea en menos de 2 horas",
        icon: <Zap className="size-5 shrink-0 text-primary" />,
        url: "/servicios/envios-express",
      },
      {
        title: "Envíos LowCost",
        description: "Envíos programados al mejor precio",
        icon: <Clock className="size-5 shrink-0 text-primary" />,
        url: "/servicios/envios-lowcost",
      },
      {
        title: "Envíos Flex (MeLi)",
        description: "Entregas en el día para e-commerce",
        icon: <Package className="size-5 shrink-0 text-primary" />,
        url: "/servicios/enviosflex",
      },
      {
        title: "E-Commerce & 3PL",
        description: "Soluciones de almacenamiento y distribución",
        icon: <Building2 className="size-5 shrink-0 text-primary" />,
        url: "/servicios/plan-emprendedores",
      },
    ],
  },
  {
    title: "Nosotros",
    url: "#",
    items: [
      {
        title: "Sobre Nosotros",
        description: "Nuestra historia y valores logísticos",
        icon: <ShieldCheck className="size-5 shrink-0 text-primary" />,
        url: "/nosotros/sobre-nosotros",
      },
      {
        title: "Preguntas Frecuentes",
        description: "Resolvé tus dudas sobre envíos y tarifas",
        icon: <Mail className="size-5 shrink-0 text-primary" />,
        url: "/nosotros/preguntas-frecuentes",
      },
      {
        title: "Nuestras Redes",
        description: "Conectá con nosotros en redes sociales",
        icon: <Share2 className="size-5 shrink-0 text-primary" />,
        url: "/nosotros/nuestras-redes",
      },
    ],
  },
  {
    title: "Cotizar",
    url: "#",
    items: [
      {
        title: "Cotizar Express",
        description: "Cotizador inmediato de mensajería",
        icon: <Calculator className="size-5 shrink-0 text-primary" />,
        url: "/cotizar/express",
      },
      {
        title: "Cotizar LowCost",
        description: "Cotizador de envíos económicos",
        icon: <Calculator className="size-5 shrink-0 text-primary" />,
        url: "/cotizar/lowcost",
      },
    ],
  },
  {
    title: "Contacto",
    url: "/contacto",
  },
];

export const mobileExtraLinks = [
  { name: "Sobre Nosotros", url: "/nosotros/sobre-nosotros" },
  { name: "Contacto", url: "/contacto" },
  { name: "Redes", url: "/nosotros/nuestras-redes" },
];
