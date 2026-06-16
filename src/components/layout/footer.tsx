"use client";

import React from "react";
import Link from "next/link";
import { DIIcons } from "dicons";
import { useTheme } from "next-themes";
import { logo as defaultLogo } from "../../lib/navegacion";
import { cn } from "@/lib/utils";

function handleScrollTop() {
  if (typeof window !== "undefined") {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }
}

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    // Spacer during hydration
    return (
      <div className="flex items-center justify-center w-[120px] h-[38px]" />
    );
  }

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center rounded-md border border-white/20 p-1 bg-white/5 backdrop-blur-sm">
        <button
          onClick={() => setTheme("light")}
          className={`rounded-md p-1.5 transition-all ${
            theme === "light"
              ? "bg-[#FFE600] text-[#2D3277]"
              : "text-white/60 hover:text-white"
          }`}
          title="Modo Claro"
        >
          <DIIcons.Sun className="h-4 w-4" strokeWidth={1.5} />
          <span className="sr-only">Claro</span>
        </button>

        <button
          type="button"
          onClick={handleScrollTop}
          className="mx-2 text-white/60 hover:text-[#FFE600] p-1 transition-colors"
          title="Volver Arriba"
        >
          <DIIcons.ArrowUp className="h-3 w-3" />
          <span className="sr-only">Subir</span>
        </button>

        <button
          onClick={() => setTheme("dark")}
          className={`rounded-md p-1.5 transition-all ${
            theme === "dark"
              ? "bg-[#FFE600] text-[#2D3277]"
              : "text-white/60 hover:text-white"
          }`}
          title="Modo Oscuro"
        >
          <DIIcons.Moon className="h-4 w-4" strokeWidth={1.5} />
          <span className="sr-only">Oscuro</span>
        </button>
      </div>
    </div>
  );
};

const navigation = {
  categories: [
    {
      id: "dosruedas",
      name: "Dos Ruedas Pro",
      sections: [
        {
          id: "servicios",
          name: "Servicios",
          items: [
            { name: "Envíos Express", href: "/servicios/envios-express" },
            { name: "Envíos LowCost", href: "/servicios/envios-lowcost" },
            { name: "Envíos Flex (MeLi)", href: "/servicios/enviosflex" },
            { name: "Plan Emprendedores", href: "/servicios/plan-emprendedores" },
          ],
        },
        {
          id: "cotizaciones",
          name: "Cotizaciones",
          items: [
            { name: "Cotizar Express", href: "/cotizar/express" },
            { name: "Cotizar LowCost", href: "/cotizar/lowcost" },
          ],
        },
        {
          id: "nosotros",
          name: "Nosotros",
          items: [
            { name: "Sobre Nosotros", href: "/nosotros/sobre-nosotros" },
            { name: "Preguntas Frecuentes", href: "/nosotros/preguntas-frecuentes" },
            { name: "Nuestras Redes", href: "/nosotros/nuestras-redes" },
          ],
        },
        {
          id: "legal",
          name: "Legal",
          items: [
            { name: "Política de Privacidad", href: "/politica-de-privacidad" },
            { name: "Términos y Condiciones", href: "/terminos-y-condiciones" },
          ],
        },
      ],
    },
  ],
};

const NavigationLink = ({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) => (
  <Link
    href={href}
    className={cn(
      "text-sm text-white/70 hover:text-[#FFE600] transition-colors font-medium",
      className
    )}
  >
    {children}
  </Link>
);

export default function Footer() {
  const logo = defaultLogo;

  return (
    <footer className="w-full bg-[#2D3277] text-white">
      {/* Brand & Description Section */}
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between">
        <div className="flex flex-col items-center gap-4 md:flex-row md:text-left">
          <Link href="/" className="flex items-center gap-2">
            <img src={logo.src} className="h-8 w-auto brightness-0 invert" alt={logo.alt} />
            <span className="text-xl font-bold font-heading uppercase tracking-wider">
              <span>Envíos</span>
              <span className="text-[#FFE600] ml-1">DosRuedas</span>
            </span>
          </Link>
          <p className="max-w-xl text-center text-sm leading-relaxed text-white/70 md:text-left">
            <strong>Dos Ruedas Pro</strong> es la plataforma líder de logística y mensajería urbana en Mar del Plata.
            Optimizamos tus envíos con soluciones en tiempo real para envíos Express inmediatos, opciones
            programadas LowCost de bajo costo, y servicios especiales de MercadoLibre Flex y Fulfillment (3PL) para potenciar tu comercio.
          </p>
        </div>
      </div>

      {/* Navigation Links Columns */}
      <div className="border-t border-white/10 mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {navigation.categories.map((category) => (
            <div key={category.name} className="col-span-2 md:col-span-1">
              <h3 className="text-sm font-bold font-heading uppercase tracking-wider text-[#FFE600] mb-6">
                {category.name}
              </h3>
              <ul className="flex flex-col space-y-4">
                {category.sections.map((section) => (
                  <li key={section.name} className="flex flex-col">
                    <p className="text-xs font-semibold text-white/40 uppercase mb-2">{section.name}</p>
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li key={item.name}>
                          <NavigationLink href={item.href}>{item.name}</NavigationLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Social Icons & Theme Toggle */}
      <div className="border-t border-white/10 mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              aria="label"
              href="mailto:contacto@enviosdosruedas.com"
              className="text-white/70 hover:text-[#FFE600] transition-colors"
            >
              <DIIcons.Mail className="h-5 w-5" />
            </Link>
            <Link
              aria-label="X (Twitter)"
              href="https://x.com/enviosdosruedas"
              target="_blank"
              rel="noreferrer"
              className="text-white/70 hover:text-[#FFE600] transition-colors"
            >
              <DIIcons.X className="h-5 w-5" />
            </Link>
            <Link
              aria-label="Instagram"
              href="https://instagram.com/enviosdosruedas"
              target="_blank"
              rel="noreferrer"
              className="text-white/70 hover:text-[#FFE600] transition-colors"
            >
              <DIIcons.Instagram className="h-5 w-5" />
            </Link>
            <Link
              aria-label="WhatsApp"
              href="https://wa.me/5492236602699"
              target="_blank"
              rel="noreferrer"
              className="text-white/70 hover:text-[#FFE600] transition-colors"
            >
              <DIIcons.WhatsApp className="h-5 w-5" />
            </Link>
            <Link
              aria-label="Facebook"
              href="https://facebook.com/enviosdosruedas"
              target="_blank"
              rel="noreferrer"
              className="text-white/70 hover:text-[#FFE600] transition-colors"
            >
              <DIIcons.Facebook className="h-5 w-5" />
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </div>

      {/* Copyright & Made By */}
      <div className="border-t border-white/5 mx-auto max-w-7xl px-6 py-6 text-center text-xs text-white/40">
        <div className="flex flex-col items-center justify-center gap-1 md:flex-row">
          <span> © </span>
          <span>{new Date().getFullYear()}</span>
          <span>Hecho con</span>
          <DIIcons.Heart className="text-red-500 mx-1 h-4 w-4 animate-pulse" />
          <span> por </span>
          <Link
            aria-label="Dos Ruedas Pro"
            href="/"
            className="font-bold text-white hover:text-[#FFE600] transition-colors"
          >
            Dos Ruedas Pro
          </Link>
        </div>
      </div>
    </footer>
  );
}
