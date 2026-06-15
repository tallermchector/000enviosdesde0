"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { GlowCard } from "@/components/ui/spotlight-card";
import { motion } from "framer-motion";
import { 
  ChevronRight, 
  ClipboardList, 
  Package, 
  Bike, 
  CheckCircle2, 
  Activity
} from "lucide-react";

// --- CUSTOM E-COMMERCE BRAND ICONS ---

const ShopifyIcon: React.FC = () => (
  <svg viewBox="0 0 256 292" className="h-6 w-auto fill-current text-foreground opacity-75 hover:opacity-100 hover:text-[#96bf48] transition-all duration-300" xmlns="http://www.w3.org/2000/svg">
    <path d="M223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-1.703-1.703-5.029-1.185-6.32-.805-.19.056-3.388 1.043-8.678 2.68-5.18-14.906-14.322-28.604-30.405-28.604-.444 0-.901.018-1.358.044C129.31 3.407 123.644.779 118.75.779c-37.465 0-55.364 46.835-60.976 70.635-14.558 4.511-24.9 7.718-26.221 8.133-8.126 2.549-8.383 2.805-9.45 10.462C21.3 95.806.038 260.235.038 260.235l165.678 31.042 89.77-19.42S223.973 58.8 223.775 57.34zM156.49 40.848l-14.019 4.339c.005-.988.01-1.96.01-3.023 0-9.264-1.286-16.723-3.349-22.636 8.287 1.04 13.806 10.469 17.358 21.32zm-27.638-19.483c2.304 5.773 3.802 14.058 3.802 25.238 0 .572-.005 1.095-.01 1.624-9.117 2.824-19.024 5.89-28.953 8.966 5.575-21.516 16.025-31.908 25.161-35.828zm-11.131-10.537c1.617 0 3.246.549 4.805 1.622-12.007 5.65-24.877 19.88-30.312 48.297l-22.886 7.088C75.694 46.16 90.81 10.828 117.72 10.828z" fill="currentColor"/>
  </svg>
);

const MercadoLibreIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 150 104" className="h-6 w-auto text-foreground opacity-75 hover:opacity-100 hover:text-[#ffe600] transition-all duration-300">
    <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M114.082 56.274c-.186-.186-23.263-20.44-28.474-24.342-2.978-2.23-4.653-2.788-6.514-3.16-.93-.185-2.233 0-3.163.372-2.42.744-5.584 2.788-8.375 5.017-2.978 2.416-5.77 4.46-8.189 5.017-3.163.93-7.258 0-9.119-1.114-.744-.558-1.303-1.115-1.489-1.673-.744-1.486.559-2.787.745-2.973l6.327-6.875 2.233-2.23c-2.047.186-3.908.743-5.769 1.3-2.233.558-4.466 1.302-6.7 1.302-.93 0-5.955-.744-6.885-1.115-5.77-1.487-10.794-3.16-18.425-6.69C11.166 25.8 5.211 34.161 3.536 43.452c1.303.372 3.35.93 4.28 1.115 20.472 4.46 26.8 9.291 28.102 10.22 1.303-1.3 2.978-2.23 5.025-2.23 2.233 0 4.28 1.115 5.583 2.974 1.117-.93 2.792-1.673 4.839-1.673.93 0 1.86.186 2.977.558a6.83 6.83 0 0 1 4.095 3.716c.744-.372 1.675-.557 2.791-.557 1.117 0 2.233.185 3.35.743 3.722 1.672 4.28 5.389 4.094 8.176h.745c4.466 0 8.189 3.716 8.189 8.176 0 1.3-.373 2.601-.931 3.902 1.303.743 4.28 2.23 7.072 1.858 2.233-.186 2.978-.929 3.35-1.486.186-.372.372-.558.186-.93l-5.77-6.503s-.93-.93-.558-1.3c.373-.372.93.185 1.303.557 2.978 2.415 6.514 6.132 6.514 6.132s.372.557 1.675.743c1.116.186 3.163 0 4.652-1.115.373-.372.745-.743.93-1.115 1.49-1.858-.185-3.716-.185-3.716l-6.7-7.619s-.93-.929-.558-1.3c.372-.372.93.185 1.302.557a253.206 253.206 0 0 1 8.003 7.619c.558.371 3.164 2.044 6.513-.186 2.048-1.301 2.42-2.973 2.42-4.274-.186-1.672-1.489-2.787-1.489-2.787l-9.305-9.291s-.93-.744-.558-1.301c.372-.372.93.186 1.302.557 2.978 2.416 10.98 9.663 10.98 9.663.186 0 2.792 2.044 6.328-.186 1.303-.743 2.047-1.858 2.047-3.345-.372-2.044-2.047-3.53-2.047-3.53Z"/>
  </svg>
);

const TiendanubeIcon: React.FC = () => (
  <div className="flex items-center gap-2 opacity-75 hover:opacity-100 transition-all duration-300 font-semibold font-orbitron text-xs text-foreground">
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2 text-[#00b4ff]" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2v8M17 5v5M7 5v5M4 10h16c1.1 0 2 .9 2 2s-.9 2-2 2h-1c-.55 0-1 .45-1 1v2c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4v-2c0-.55-.45-1-1-1H2c-1.1 0-2-.9-2-2s.9-2 2-2z" />
    </svg>
    <span className="font-mono tracking-wider">TIENDANUBE</span>
  </div>
);

const WooCommerceIcon: React.FC = () => (
  <div className="flex items-center gap-2 opacity-75 hover:opacity-100 transition-all duration-300 font-semibold font-orbitron text-xs text-foreground">
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2 text-[#96588a]" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
    </svg>
    <span className="font-mono tracking-wider">WOOCOMMERCE</span>
  </div>
);

const TiendaWebIcon: React.FC = () => (
  <div className="flex items-center gap-2 opacity-75 hover:opacity-100 transition-all duration-300 font-semibold font-orbitron text-xs text-foreground">
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2 text-primary" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
    <span className="font-mono tracking-wider">TIENDAS WEB</span>
  </div>
);

// --- MAIN COMPONENT ---

export default function HeroPrincipal() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      title: "RECEPCIÓN",
      desc: "Paquete registrado en base de datos",
      time: "09:15 hs",
      icon: ClipboardList,
    },
    {
      title: "CLASIFICADO",
      desc: "Orden asignada a zona de ruteo Centro",
      time: "10:30 hs",
      icon: Package,
    },
    {
      title: "TRÁNSITO",
      desc: "Motociclista en ruta de entrega",
      time: "En camino",
      icon: Bike,
    },
    {
      title: "ENTREGADO",
      desc: "Firma digital confirmada",
      time: "Confirmado",
      icon: CheckCircle2,
    }
  ];

  return (
    <main className="overflow-x-hidden section-even relative">
      
      {/* Brutalist Grid Overlay for Background Context */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <section className="relative">
        <div className="py-20 md:pb-28 lg:pb-36 lg:pt-44">
          <div className="relative z-10 mx-auto max-w-[1280px] px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
              
              {/* Left Column: Headline and CTAs */}
              <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10 relative">
                
                {/* Badge with flat outline */}
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#E9C400] border-2 border-black text-black font-bold uppercase tracking-wider text-xs mb-8 font-display shadow-[2px_2px_0px_#000]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
                  </span>
                  LOGÍSTICA EXTREMA // MAR DEL PLATA
                </span>

                {/* H1 Title (Anton uppercase display) */}
                <h1 className="mt-2 text-balance text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold font-display uppercase tracking-wider leading-[1.0] text-white">
                  Mensajería y Logística{" "}
                  <span className="text-[#E9C400] underline decoration-4 decoration-white underline-offset-4">
                    E-Commerce
                  </span>{" "}
                  en Mar del Plata
                </h1>

                {/* Párrafo Descriptivo */}
                <p className="mt-6 max-w-xl text-pretty text-body-lg text-white/90 leading-relaxed border-l-4 border-[#E9C400] pl-6">
                  Somos tu solución confiable en servicios de mensajería y delivery en Mar del Plata.
                  Ofrecemos soluciones rápidas, seguras y económicas para todas tus necesidades de envío.
                </p>

                {/* Botones (Sharp corners, solid border, flat offset shadow) */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="w-full sm:w-auto h-12 rounded-none pl-6 pr-5 text-base font-bold font-display uppercase bg-[#E9C400] text-[#000833] border-2 border-[#000833] shadow-[4px_4px_0px_#000] hover:bg-white hover:text-[#000833] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all duration-150"
                  >
                    <Link href="/cotizar/express" className="flex items-center justify-center gap-1">
                      <span>Solicitar Servicio</span>
                      <ChevronRight className="w-5 h-5 ml-1" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="ghost"
                    className="w-full sm:w-auto h-12 rounded-none px-6 text-base font-bold font-display uppercase bg-transparent text-white border-2 border-white hover:bg-white/10 hover:text-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_#ffffff] transition-all duration-150"
                  >
                    <Link href="/servicios/plan-emprendedores">
                      <span>E-Commerce</span>
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right Column: Industrial Live Simulator Card */}
              <div className="lg:col-span-5 flex justify-center w-full relative z-10">
                <GlowCard 
                  glowColor="yellow" 
                  radius={0} 
                  border={2} 
                  borderColor="#000833" 
                  backdrop="#ffffff" 
                  customSize 
                  className="w-full max-w-md p-6 shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all duration-150"
                >
                  <div className="relative z-10 space-y-5 text-black">
                    {/* Header info */}
                    <div className="flex items-center justify-between border-b-2 border-dashed border-black pb-3">
                      <div className="flex items-center gap-2">
                        <Activity className="w-5 h-5 text-black animate-pulse" />
                        <span className="font-mono text-xs uppercase tracking-wider font-bold">DR-MONITOR // V4.1</span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 bg-black px-2.5 py-0.5 text-[9px] font-bold font-mono tracking-wider text-[#E9C400]">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                        </span>
                        EN VIVO
                      </span>
                    </div>

                    {/* Technical readouts */}
                    <div className="grid grid-cols-2 gap-3 bg-[#E9ECEF] border border-black p-3 font-mono text-[10px] uppercase font-bold tracking-wider">
                      <div>
                        <div className="text-black/50">Tracking ID:</div>
                        <div className="text-black text-xs font-bold">DR-8472-MDP</div>
                      </div>
                      <div>
                        <div className="text-black/50">Destino:</div>
                        <div className="text-black text-xs font-bold">ZONA CENTRO, MDP</div>
                      </div>
                    </div>

                    {/* Timeline */}
                    <div className="relative pl-8 space-y-4">
                      {/* Vertical line connector */}
                      <div className="absolute left-3.5 top-2 bottom-2 w-0.5 border-l-2 border-dashed border-black/30" />

                      {steps.map((step, idx) => {
                        const Icon = step.icon;
                        const isCompleted = idx < currentStep;
                        const isActive = idx === currentStep;
                        
                        return (
                          <div key={idx} className="relative flex items-start gap-4">
                            {/* Step Indicator Dot */}
                            <div className="absolute -left-[30px] flex items-center justify-center">
                              <motion.div 
                                className={`w-7 h-7 flex items-center justify-center border-2 border-black rounded-none ${
                                  isActive 
                                    ? "bg-[#E9C400] text-black shadow-[2px_2px_0px_#000]" 
                                    : isCompleted 
                                    ? "bg-[#000833] text-white" 
                                    : "bg-white text-black/40 border-dashed border-black/40"
                                }`}
                                animate={isActive ? { scale: [1, 1.08, 1] } : {}}
                                transition={{ repeat: Infinity, duration: 2 }}
                              >
                                <Icon className="w-4 h-4" />
                              </motion.div>
                            </div>

                            {/* Step Description */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h4 className={`text-xs font-bold font-display uppercase tracking-wider ${
                                  isActive ? "text-[#000833]" : isCompleted ? "text-black/80" : "text-black/40"
                                }`}>
                                  {step.title}
                                </h4>
                                <span className={`text-[9px] font-mono ${
                                  isActive ? "font-bold text-[#000833]" : isCompleted ? "text-black/60" : "text-black/30"
                                }`}>
                                  {isActive ? "ACTIVO" : isCompleted ? step.time : "ESPERANDO"}
                                </span>
                              </div>
                              <p className={`text-[10px] leading-relaxed mt-0.5 truncate ${
                                isActive ? "text-black font-semibold" : "text-black/50"
                              }`}>
                                {step.desc}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Horizontal animated path */}
                    <div className="border-t border-dotted border-black/30 pt-4">
                      <div className="relative h-7 bg-[#E9ECEF] border border-black px-4 flex items-center justify-between text-[8px] font-mono font-bold uppercase tracking-wider overflow-hidden">
                        <span className="text-black/50">MDP DEPÓSITO</span>
                        
                        {/* Connecting track line */}
                        <div className="absolute inset-x-20 top-1/2 -translate-y-1/2 h-0.5 border-t border-dashed border-black/40" />

                        {/* Moving bike along track */}
                        <div className="absolute left-16 right-16 top-0 bottom-0 pointer-events-none">
                          <motion.div 
                            className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                            animate={{ left: `${(currentStep / 3) * 100}%` }}
                            transition={{ type: "spring", stiffness: 80, damping: 12 }}
                          >
                            <div className="bg-[#E9C400] border border-black p-1 text-[#000833] shadow-[1px_1px_0px_#000]">
                              <Bike className="w-3.5 h-3.5" />
                            </div>
                          </motion.div>
                        </div>

                        <span className="text-black/50">DESTINO</span>
                      </div>
                    </div>

                    {/* Operational summary pill */}
                    <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-wider font-bold pt-2 border-t-2 border-dotted border-black">
                      <span>Ruta Estimada:</span>
                      <span className="text-green-700 bg-green-100 px-2 py-0.5 border border-green-700">OPTIMIZADA (98.4%)</span>
                    </div>
                  </div>
                </GlowCard>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Infinite Logo Slider Section */}
      <section className="bg-white py-12 border-t-2 border-black text-[#000833]">
        <div className="m-auto max-w-[1280px] px-6">
          {/* Brutalist Console Wrapper */}
          <div className="relative border-4 border-black bg-[#E9C400] shadow-[6px_6px_0px_#000] p-6 text-black">
            {/* Console top bar */}
            <div className="absolute -top-3 left-4 right-4 bg-white border border-black px-3 py-0.5 flex justify-between items-center text-[9px] font-mono font-bold uppercase tracking-widest z-10 w-fit">
              <div className="flex items-center gap-1.5 mr-6">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 border border-black" />
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 border border-black" />
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 border border-black" />
              </div>
              <span>INTEGRACIONES_API_MDP // ESTADO: ACTIVO</span>
            </div>

            <div className="flex flex-col items-center md:flex-row gap-6 mt-2">
              <div className="md:max-w-44 md:border-r-2 border-black md:pr-8 flex-shrink-0 w-full md:w-auto">
                <p className="text-xs font-bold font-display uppercase text-black tracking-wider text-center md:text-left">
                  Sincronización Directa
                </p>
                <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-black/60 text-center md:text-left mt-1">
                  Envíos Flex Automáticos
                </p>
              </div>
              
              <div className="relative py-4 w-full md:w-[calc(100%-11rem)] overflow-hidden">
                <InfiniteSlider durationOnHover={20} duration={40} gap={112}>
                  <div className="flex items-center text-[#000833]">
                    <ShopifyIcon />
                  </div>
                  <div className="flex items-center text-[#000833]">
                    <MercadoLibreIcon />
                  </div>
                  <div className="flex items-center text-[#000833]">
                    <TiendanubeIcon />
                  </div>
                  <div className="flex items-center text-[#000833]">
                    <WooCommerceIcon />
                  </div>
                  <div className="flex items-center text-[#000833]">
                    <TiendaWebIcon />
                  </div>
                </InfiniteSlider>

                {/* Gradient & progressive blur overlays */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#E9C400] to-transparent z-10"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#E9C400] to-transparent z-10"></div>
                
                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-20 z-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-20 z-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
