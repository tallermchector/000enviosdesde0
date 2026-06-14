"use client";

import React from "react";
import Link from "next/link";
import { DIcons } from "dicons";
import { useTheme } from "next-themes";
import { logo as defaultLogo } from "../../lib/navegacion";

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
      <div className="flex items-center rounded-full border border-dotted border-border p-1 bg-background">
        <button
          onClick={() => setTheme("light")}
          className={`rounded-full p-1.5 transition-colors ${
            theme === "light"
              ? "bg-accent text-accent-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
          title="Modo Claro"
        >
          <DIcons.Sun className="h-4 w-4" strokeWidth={1} />
          <span className="sr-only">Claro</span>
        </button>

        <button
          type="button"
          onClick={handleScrollTop}
          className="mx-2 text-muted-foreground hover:text-foreground p-1 transition-colors"
          title="Volver Arriba"
        >
          <DIcons.ArrowUp className="h-3 w-3" />
          <span className="sr-only">Subir</span>
        </button>

        <button
          onClick={() => setTheme("dark")}
          className={`rounded-full p-1.5 transition-colors ${
            theme === "dark"
              ? "bg-accent text-accent-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
          title="Modo Oscuro"
        >
          <DIcons.Moon className="h-4 w-4" strokeWidth={1} />
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

const Underline = "hover:-translate-y-1 border border-dotted border-border rounded-xl p-2.5 transition-transform flex items-center justify-center bg-background hover:bg-accent text-muted-foreground hover:text-foreground";

export default function Footer() {
  const logo = defaultLogo;

  return (
    <footer className="mx-auto w-full border-t border-border bg-background px-4">
      {/* Brand & Description Section */}
      <div className="relative mx-auto grid max-w-7xl items-center justify-center gap-6 p-10 pb-0 md:flex">
        <Link href="/" className="flex items-center gap-2">
          <img src={logo.src} className="w-8 h-auto" alt={logo.alt} />
          <span className="text-lg font-semibold font-orbitron">{logo.title}</span>
        </Link>
        <p className="bg-transparent text-center text-xs leading-5 text-muted-foreground md:text-left font-roboto max-w-3xl">
          <strong>Dos Ruedas Pro</strong> es la plataforma líder de logística y mensajería urbana en Mar del Plata.
          Optimizamos tus envíos con soluciones en tiempo real para envíos Express inmediatos, opciones
          programadas LowCost de bajo costo, y servicios especiales de MercadoLibre Flex y Fulfillment (3PL) para potenciar tu comercio.
          Garantizamos velocidad, tecnología de geolocalización avanzada y seguridad en cada entrega.
        </p>
      </div>

      {/* Navigation Links Columns */}
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="border-b border-dotted border-border"> </div>
        <div className="py-10">
          {navigation.categories.map((category) => (
            <div
              key={category.name}
              className="grid grid-cols-2 justify-between gap-8 leading-6 md:flex"
            >
              {category.sections.map((section) => (
                <div key={section.name} className="flex flex-col">
                  <h3 className="text-sm font-semibold font-orbitron text-foreground mb-4 tracking-wider">
                    {section.name}
                  </h3>
                  <ul
                    role="list"
                    aria-labelledby={`${category.id}-${section.id}-heading`}
                    className="flex flex-col space-y-2.5"
                  >
                    {section.items.map((item) => (
                      <li key={item.name} className="flow-root">
                        <Link
                          href={item.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors font-roboto md:text-xs"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="border-b border-dotted border-border"> </div>
      </div>

      {/* Social Icons & Theme Toggle */}
      <div className="flex flex-col items-center justify-center gap-6 py-6 md:flex-row">
        <div className="flex flex-wrap items-center justify-center gap-4 px-6">
          <Link
            aria-label="Email"
            href="mailto:contacto@enviosdosruedas.com"
            className={Underline}
          >
            <DIcons.Mail strokeWidth={1.5} className="h-5 w-5" />
          </Link>
          <Link
            aria-label="X (Twitter)"
            href="https://x.com/enviosdosruedas"
            target="_blank"
            rel="noreferrer"
            className={Underline}
          >
            <DIcons.X className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Instagram"
            href="https://instagram.com/enviosdosruedas"
            target="_blank"
            rel="noreferrer"
            className={Underline}
          >
            <DIcons.Instagram className="h-5 w-5" />
          </Link>
          <Link
            aria-label="WhatsApp"
            href="https://wa.me/5492236602699"
            target="_blank"
            rel="noreferrer"
            className={Underline}
          >
            <DIcons.WhatsApp className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Facebook"
            href="https://facebook.com/enviosdosruedas"
            target="_blank"
            rel="noreferrer"
            className={Underline}
          >
            <DIcons.Facebook className="h-5 w-5" />
          </Link>
        </div>
        <ThemeToggle />
      </div>

      {/* Copyright & Made By */}
      <div className="mx-auto mb-10 mt-6 flex flex-col justify-between text-center text-xs md:max-w-7xl">
        <div className="flex flex-row items-center justify-center gap-1 text-muted-foreground font-roboto">
          <span> © </span>
          <span>{new Date().getFullYear()}</span>
          <span>Hecho con</span>
          <DIcons.Heart className="text-red-600 mx-1 h-4 w-4 animate-pulse" />
          <span> por </span>
          <span className="font-bold text-foreground hover:text-primary transition-colors cursor-pointer">
            <Link
              aria-label="Dos Ruedas Pro"
              href="/"
            >
              Dos Ruedas Pro
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
