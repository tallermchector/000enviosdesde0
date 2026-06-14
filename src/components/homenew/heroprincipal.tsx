"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { ChevronRight, Target, ShieldCheck, Clock, Users } from "lucide-react";

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
  return (
    <main className="overflow-x-hidden bg-[#f8f9fa] text-[#191c1d] transition-colors duration-300">
      
      {/* Brutalist Grid Overlay for Background Context */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <section className="relative">
        <div className="py-20 md:pb-28 lg:pb-36 lg:pt-44">
          <div className="relative z-10 mx-auto max-w-[1280px] px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
              
              {/* Left Column: Headline and CTAs */}
              <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10 relative">
                
                {/* Badge with flat outline */}
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#fed726] border-2 border-black text-black font-bold uppercase tracking-wider text-xs mb-8 font-display">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
                  </span>
                  LOGÍSTICA EXTREMA // MAR DEL PLATA
                </span>

                {/* H1 Title (Anton uppercase display) */}
                <h1 className="mt-2 text-balance text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold font-display uppercase tracking-wider leading-[1.0] text-black">
                  Mensajería y Logística{" "}
                  <span className="text-[#001de0] underline decoration-4 decoration-[#fed726] underline-offset-4">
                    E-Commerce
                  </span>{" "}
                  en Mar del Plata
                </h1>

                {/* Párrafo Descriptivo */}
                <p className="mt-6 max-w-xl text-pretty text-body-lg text-[#191c1d] leading-relaxed">
                  Somos tu solución confiable en servicios de mensajería y delivery en Mar del Plata.
                  Ofrecemos soluciones rápidas, seguras y económicas para todas tus necesidades de envío.
                </p>

                {/* Botones (Sharp corners, solid border, flat offset shadow) */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="w-full sm:w-auto h-12 rounded-none pl-6 pr-5 text-base font-semibold font-sans bg-[#001de0] hover:bg-[#0012a1] text-white border-2 border-black shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all duration-150"
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
                    className="w-full sm:w-auto h-12 rounded-none px-6 text-base font-bold font-sans bg-white hover:bg-[#fed726] text-black border-2 border-black shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all duration-150"
                  >
                    <Link href="/servicios/plan-emprendedores">
                      <span>E-Commerce</span>
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right Column: Industrial Card */}
              <div className="lg:col-span-5 flex justify-center w-full relative z-10">
                <div className="relative rounded-none border-2 border-black bg-white p-8 shadow-[6px_6px_0px_rgba(0,0,0,1)] w-full max-w-md">
                  
                  <div className="relative z-10 space-y-6">
                    {/* Header stat */}
                    <div className="flex items-center gap-4 border-b-2 border-dotted border-black pb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-none bg-[#001de0] border-2 border-black text-white">
                        <Target className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold tracking-tight text-black font-display uppercase leading-none">+5.000</div>
                        <div className="text-xs text-[#444556] font-mono uppercase tracking-wider font-semibold">Envíos Completados</div>
                      </div>
                    </div>

                    {/* Progress Bar Section (Industrial Meter) */}
                    <div className="space-y-3">
                      <div className="flex justify-between text-xs font-mono uppercase tracking-wider font-semibold">
                        <span>Satisfacción de Entrega</span>
                        <span className="font-bold">98.4%</span>
                      </div>
                      <div className="h-4 w-full overflow-hidden rounded-none border-2 border-black bg-white p-0.5">
                        <div className="h-full w-[98.4%] rounded-none bg-[#001de0]" />
                      </div>
                    </div>

                    <div className="border-b-2 border-dotted border-black" />

                    {/* Characteristics */}
                    <div className="space-y-4 text-xs font-mono uppercase tracking-wider font-semibold">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-[#001de0] shrink-0" />
                        <span>Entregas en el día (MercadoLibre Flex)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <ShieldCheck className="w-5 h-5 text-[#001de0] shrink-0" />
                        <span>Soporte Express Directo por WhatsApp</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-[#001de0] shrink-0" />
                        <span>Flota Propia de Motocicletas Activa</span>
                      </div>
                    </div>

                    {/* Solid Pills status */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t-2 border-dotted border-black">
                      <div className="inline-flex items-center gap-1.5 rounded-none border-2 border-black bg-[#13bb2e] px-3 py-1 text-[10px] font-bold font-mono tracking-wider text-white">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                        </span>
                        OPERATIVO MDP
                      </div>
                      <div className="inline-flex items-center gap-1.5 rounded-none border-2 border-black bg-white px-3 py-1 text-[10px] font-bold font-mono tracking-wider text-black">
                        PREMIUM LOGISTICS
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Infinite Logo Slider Section */}
      <section className="bg-white pb-12 border-t-2 border-b-2 border-black pt-8">
        <div className="group relative m-auto max-w-[1280px] px-6">
          <div className="flex flex-col items-center md:flex-row gap-6">
            <div className="md:max-w-44 md:border-r-2 border-black md:pr-8 flex-shrink-0">
              <p className="text-xs font-bold font-display uppercase text-black tracking-wider text-center md:text-left">
                Plataformas Integradas
              </p>
            </div>
            
            <div className="relative py-4 w-full md:w-[calc(100%-11rem)]">
              <InfiniteSlider durationOnHover={20} duration={40} gap={112}>
                <div className="flex items-center">
                  <ShopifyIcon />
                </div>
                <div className="flex items-center">
                  <MercadoLibreIcon />
                </div>
                <div className="flex items-center">
                  <TiendanubeIcon />
                </div>
                <div className="flex items-center">
                  <WooCommerceIcon />
                </div>
                <div className="flex items-center">
                  <TiendaWebIcon />
                </div>
              </InfiniteSlider>

              {/* Gradient & progressive blur overlays */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
              
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
      </section>
    </main>
  );
}
