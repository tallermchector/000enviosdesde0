"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import {
  ChevronRight,
  ClipboardList,
  Package,
  Bike,
  CheckCircle2,
  Activity,
} from "lucide-react";
import { useEffect, useState } from "react";
import BrutalistTrackingCard from "@/components/homenew/tracking-card";

const MotionButton = motion(Button);

/* ---------- KINETIC TEXT ---------- */
const KineticText = ({ children, color = "#E9C400", delay = 0, tag = "span", className }: any) => {
  const Tag = motion[tag as keyof typeof motion] as any;
  return (
    <Tag
      initial={{ opacity: 0, y: -10, color: "#999" }}
      animate={{ opacity: 1, y: 0, color }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={`inline-block ${className || ""}`}
    >
      {children}
    </Tag>
  );
};

/* ---------- PARTICLE OVERLAY ---------- */
const Particle = ({ position = "50% 50%" }: { position?: string }) => (
  <div className="absolute rounded-full bg-white opacity-15">
    <div className="w-2.5 h-2.5" style={{ left: position }} />
  </div>
);

/* ---------- MAIN COMPONENT ---------- */
export default function HeroPrincipal() {
  const [step, setStep] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setInView(true);
      },
      { threshold: 0.15 }
    );
    const heroEl = document.querySelector("[data-hero]");
    if (heroEl) observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  const steps = [
    { title: "RECEPCIÓN", desc: "Paquete registrado en base de datos", time: "09:15 hs", icon: ClipboardList },
    { title: "CLASIFICADO", desc: "Orden asignada a zona de ruteo Centro", time: "10:30 hs", icon: Package },
    { title: "TRÁNSITO", desc: "Motociclista en ruta de entrega", time: "En camino", icon: Bike },
    { title: "ENTREGADO", desc: "Firma digital confirmada", time: "Confirmado", icon: CheckCircle2 },
  ];

  /* ---- Gradient animation keyframes ---- */
  const gradientKey = `
    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `;

  /* ---- Button hover configuration ---- */
  const btnHover = { scale: 1, transition: { type: "spring" as const, stiffness: 260, damping: 20 } };
  const btnTap = { scale: 0.97 };

  /* ---- Entrance variants ---- */
  const fadeUp = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.7 },
  };

  /* ---- Particle spill component ---- */
  const ParticleSpill = () => (
    <>
      <Particle position="10% 20%" />
      <Particle position="30% 70%" />
      <Particle position="70% 15%" />
      <Particle position="90% 40%" />
    </>
  );

  return (
    <main className="relative overflow-x-hidden section-even" data-hero>
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 z-0 opacity-15 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, #fff 0%, transparent 40%, #fff 100%)",
          animation: "gradientShift 12s ease infinite",
        }}
      />
      <style>{gradientKey}</style>

      <section className="relative">
        <div className="py-20 md:pb-28 lg:pb-36 lg:pt-44">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">

              {/* LEFT COLUMN */}
              <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left lg:lg:mb-8 lg:lg:lg:lg">
                {/* Brand badge */}
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-[#E9C400] border-2 border-black rounded-md uppercase tracking-wider font-semibold text-xs shadow-[2px_2px_0px_#000] animate-pulse">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
                  </span>
                  LOGÍSTICA EXTREMA // MAR DEL PLATA
                </span>

                {/* Headline */}
                <h1 className="mt-3 text-balance text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-bold font-display uppercase tracking-wider leading-[1.08] relative animate-fade-in-up">
                  <KineticText color="#E9C400" tag="span" className="inline-block animate-pulse">
                    Mensajería y Logística
                  </KineticText>
                  <AnimatePresence>
                    <motion.span
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.5 }}
                    >
                      E‑Commerce
                    </motion.span>
                  </AnimatePresence>{" "}
                  <span className="inline-block text-[#E9C400] font-semibold">E‑Commerce</span>{" "}
                  en Mar del Plata
                </h1>

                {/* Description */}
                <p className="mt-4 max-w-xl text-pretty text-body-lg leading-relaxed text-white/90 border-l-4 border-[#E9C400] pl-6 animate-fade-in-up">
                  Somos tu solución confiable en servicios de mensajería y delivery en Mar del Plata.
                  Ofrecemos soluciones rápidas, seguras y económicas para todas tus necesidades de envío.
                </p>

                {/* CTA Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto lg:justify-start animate-fade-in-up" role="region" aria-label="CTA buttons">
                  <MotionButton
                    asChild
                    size="lg"
                    className="w-full sm:w-auto h-12 rounded-none pl-7 pr-6 text-base font-bold uppercase bg-[#E9C400] text-[#000833] border-2 border-[#000833] shadow-[4px_4px_0px_#000] hover:bg-white hover:text-[#000833] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[6px_6px_0px_#000] transition-all duration-200"
                    whileHover={btnHover}
                    whileTap={btnTap}
                  >
                    <Link href="/cotizar/express" className="flex items-center justify-center gap-1">
                      <span>Solicitar Servicio</span>
                      <ChevronRight className="w-5 h-5 ml-1 animate-float" />
                    </Link>
                  </MotionButton>

                  <MotionButton
                    asChild
                    size="lg"
                    variant="ghost"
                    className="w-full sm:w-auto h-12 rounded-none px-7 text-base font-bold uppercase bg-transparent text-white border-2 border-white hover:bg-white/20 hover:text-white hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[4px_4px_0px_#ffffff] transition-all duration-200"
                    whileHover={btnHover}
                    whileTap={btnTap}
                  >
                    <Link href="/servicios/plan-emprendedores" className="flex items-center justify-center gap-1">
                      <span>E‑Commerce</span>
                    </Link>
                  </MotionButton>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="lg:col-span-5 flex justify-center w-full relative z-10 lg:mt-12 lg:max-w-[720px]">
                <AnimatePresence>
                  <motion.div
                    key="tracking-card"
                    initial={{ opacity: 0, y: 20, scale: 0.96 }}
                    animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.96 }}
                    transition={{ duration: 0.7, type: "spring", stiffness: 320, damping: 20 }}
                  >
                    <BrutalistTrackingCard steps={steps} inView={inView} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS SLIDER */}
      <section className="bg-white py-12 border-t-2 border-black text-[#000833]">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="relative border-4 border-black bg-[#E9C400] shadow-[6px_6px_0px_#000] rounded-lg overflow-hidden animate-fade-in-up">
            {/* Top console bar */}
            <div className="absolute -top-3 left-4 right-4 bg-white border border-black px-3 py-0.5 flex justify-between items-center text-[9px] uppercase tracking-widest z-10">
              <div className="flex items-center gap-1.5 mr-6">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 border border-black" />
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 border border-black" />
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 border border-black" />
              </div>
              <span>
                INTEGRACIONES_API_MDP // ESTADO:{" "}
                <KineticText color="#E9C400" tag="strong">
                  ACTIVO
                </KineticText>
              </span>
            </div>

            {/* Integration icons */}
            <div className="flex flex-col items-center md:flex-row gap-6 mt-4">
              <div className="relative w-full md:max-w-45 md:border-r-2 border-black md:pr-6 flex-shrink-0">
                <p className="text-xs font-bold uppercase text-black tracking-wider text-center md:text-left mb-1">
                  Sincronización Directa
                </p>
                <p className="text-[10px] font-mono uppercase text-black/70 text-center md:text-left mb-2">
                  Envíos Flex Automáticos
                </p>
              </div>

              <div className="relative flex-1 w-full md:w-auto overflow-hidden animate-fade-in-up">
                <InfiniteSlider durationOnHover={25} duration={45} gap={120}>
                  {[
                    <div key="shopify" className="flex items-center justify-center">
                      <ShopifyIcon className="w-6 h-6 text-[#000833] animate-bounce" />
                    </div>,
                    <div key="mercado" className="flex items-center justify-center">
                      <MercadoLibreIcon className="w-6 h-6 text-[#000833] animate-bounce" />
                    </div>,
                    <div key="tienda" className="flex items-center justify-center">
                      <TiendanubeIcon className="w-6 h-6 text-[#000833] animate-bounce" />
                    </div>,
                    <div key="woocommerce" className="flex items-center justify-center">
                      <WooCommerceIcon className="w-6 h-6 text-[#000833] animate-bounce" />
                    </div>,
                    <div key="site" className="flex items-center justify-center">
                      <TiendaWebIcon className="w-6 h-6 text-[#000833] animate-bounce" />
                    </div>,
                  ]}
                </InfiniteSlider>

                {/* Gradient overlays */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#E9C400] to-transparent rounded-t-lg z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#E9C400] to-transparent rounded-t-lg z-10" />
                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-12 z-15"
                  direction="left"
                  blurIntensity={1.4}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-12 z-15"
                  direction="right"
                  blurIntensity={1.4}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- ICON COMPONENTS ---------- */
interface IconProps {
  className?: string;
}

const ShopifyIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 256 292" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-1.703-1.703-5.029-1.185-6.32-.805-.19.056-3.388 1.043-8.678 2.68-5.18-14.906-14.322-28.604-30.405-28.604-.444 0-.901.018-1.358.044C129.31 3.407 123.644.779 118.75.779c-37.465 0-55.364 46.835-60.976 70.635-14.558 4.511-24.9 7.718-26.221 8.133-8.126 2.549-8.383 2.805-9.45 10.462C21.3 95.806.038 260.235.038 260.235l165.678 31.042 89.77-19.42S223.973 58.8 223.775 57.34zM156.49 40.848l-14.019 4.339c.005-.988.01-1.96.01-3.023 0-9.264-1.286-16.723-3.349-22.636 8.287 1.04 13.806 10.469 17.358 21.32zm-27.638-19.483c2.304 5.773 3.802 14.058 3.802 25.238 0 .572-.005 1.095-.01 1.624-9.117 2.824-19.024 5.89-28.953 8.966 5.575-21.516 16.025-31.908 25.161-35.828zm-11.131-10.537c1.617 0 3.246.549 4.805 1.622-12.007 5.65-24.877 19.88-30.312 48.297l-22.886 7.088C75.694 46.16 90.81 10.828 117.72 10.828z" fill="currentColor" />
  </svg>
);

const MercadoLibreIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 150 104" className={className} xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M114.082 56.274c-.186-.186-23.263-20.44-28.474-24.342-2.978-2.23-4.653-2.788-6.514-3.16-.93-.185-2.233 0-3.163.372-2.42.744-5.584 2.788-8.375 5.017-2.978 2.416-5.77 4.46-8.189 5.017-3.163.93-7.258 0-9.119-1.114-.744-.558-1.303-1.115-1.489-1.673-.744-1.486.559-2.787.745-2.973l6.327-6.875 2.233-2.23c-2.047.186-3.908.743-5.769 1.3-2.233.558-4.466 1.302-6.7 1.302-.93 0-5.955-.744-6.885-1.115-5.77-1.487-10.794-3.16-18.425-6.69C11.166 25.8 5.211 34.161 3.536 43.452c1.303.372 3.35.93 4.28 1.115 20.472 4.46 26.8 9.291 28.102 10.22 1.303-1.3 2.978-2.23 5.025-2.23 2.233 0 4.28 1.115 5.583 2.974 1.117-.93 2.792-1.673 4.839-1.673.93 0 1.86.186 2.977.558a6.83 6.83 0 0 1 4.095 3.716c.744-.372 1.675-.557 2.791-.557 1.117 0 2.233.185 3.35.743 3.722 1.672 4.28 5.389 4.094 8.176h.745c4.466 0 8.189 3.716 8.189 8.176 0 1.3-.373 2.601-.931 3.902 1.303.743 4.28 2.23 7.072 1.858 2.233-.186 2.978-.929 3.35-1.486.186-.372.372-.558.186-.93l-5.77-6.503s-.93-.93-.558-1.3c.372-.372.93.185 1.303.557a253.206 253.206 0 0 1 8.003 7.619c.558.371 3.164 2.044 6.513-.186 2.048-1.301 2.42-2.973 2.42-4.274-.186-1.672-1.489-2.787-1.489-2.787l-9.305-9.291s-.93-.744-.558-1.301c.372-.372.93.186 1.303.557 2.978 2.416 10.98 9.663 10.98 9.663.186 0 2.792 2.044 6.328-.186 1.303-.743 2.047-1.858 2.047-3.345-.372-2.044-2.047-3.53-2.047-3.53Z" />
  </svg>
);

const TiendanubeIcon = ({ className }: IconProps) => (
  <div className="flex items-center gap-2 opacity-75 hover:opacity-100 transition-all duration-300 font-semibold font-orbitron text-xs text-foreground">
    <svg viewBox="0 0 24 24" className={`w-6 h-6 fill-none stroke-current stroke-2 text-[#00b4ff] ${className || ''}`} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2v8M17 5v5M7 5v5M4 10h16c1.1 0 2 .9 2 2s-.9 2-2 2h-1c-.55 0-1 .45-1 1v2c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4v-2c0-.55-.45-1-1-1H2c-1.1 0-2-.9-2-2s.9-2 2-2z" />
    </svg>
    <span className="font-mono tracking-wider">TIENDANUBE</span>
  </div>
);

const WooCommerceIcon = ({ className }: IconProps) => (
  <div className="flex items-center gap-2 opacity-75 hover:opacity-100 transition-all duration-300 font-semibold font-orbitron text-xs text-foreground">
    <svg viewBox="0 0 24 24" className={`w-6 h-6 fill-none stroke-current stroke-2 text-[#96588a] ${className || ''}`} xmlns="http://www.w3.org/2000/svg">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
    </svg>
    <span className="font-mono tracking-wider">WOOCOMMERCE</span>
  </div>
);

const TiendaWebIcon = ({ className }: IconProps) => (
  <div className="flex items-center gap-2 opacity-75 hover:opacity-100 transition-all duration-300 font-semibold font-orbitron text-xs text-foreground">
    <svg viewBox="0 0 24 24" className={`w-6 h-6 fill-none stroke-current stroke-2 text-primary ${className || ''}`} xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
    <span className="font-mono tracking-wider">TIENDAS WEB</span>
  </div>
);
