"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HeroPrincipal() {
  return (
    <main className="overflow-x-hidden bg-background text-foreground transition-colors duration-300">
      <section className="relative">
        <div className="py-20 md:pb-28 lg:pb-32 lg:pt-48">
          <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left flex flex-col items-center lg:items-start z-10 relative">
              {/* Badge with micro-ping */}
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-primary/10 border border-primary/20 text-primary mb-8 font-orbitron">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                LOGÍSTICA EXTREMA // MAR DEL PLATA
              </span>

              {/* H1 Title */}
              <h1 className="mt-2 max-w-2xl text-balance text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold font-orbitron tracking-tight leading-[1.1] text-foreground">
                Mensajería y Logística{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#0084ff] dark:from-primary dark:to-[#4fa3ff]">
                  E-Commerce
                </span>{" "}
                en Mar del Plata
              </h1>

              {/* Párrafo Descriptivo */}
              <p className="mt-6 max-w-2xl text-pretty text-base sm:text-lg text-muted-foreground font-roboto leading-relaxed">
                Somos tu solución confiable en servicios de mensajería y delivery en Mar del Plata.
                Ofrecemos soluciones rápidas, seguras y económicas para todas tus necesidades de envío.
              </p>

              {/* Botones */}
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto h-12 rounded-full pl-6 pr-4 text-base font-semibold font-roboto bg-primary text-primary-foreground hover:bg-primary/90 hover:translate-x-0.5 transition-all duration-200 shadow-md shadow-primary/20"
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
                  className="w-full sm:w-auto h-12 rounded-full px-6 text-base font-medium font-roboto hover:bg-zinc-950/5 dark:hover:bg-white/5 transition-colors duration-200"
                >
                  <Link href="/servicios/plan-emprendedores">
                    <span>E-Commerce</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Background Video Aspect Frame */}
          <div className="aspect-[2/3] absolute inset-1 overflow-hidden rounded-3xl border border-black/10 sm:aspect-video lg:rounded-[3rem] dark:border-white/5 z-0 pointer-events-none">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="size-full object-cover opacity-50 invert dark:opacity-35 dark:invert-0 dark:lg:opacity-75"
              src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477"
            ></video>
          </div>
        </div>
      </section>

      {/* Infinite Logo Slider Section */}
      <section className="bg-background pb-12 border-t border-border/10 pt-8">
        <div className="group relative m-auto max-w-7xl px-6">
          <div className="flex flex-col items-center md:flex-row gap-6">
            <div className="md:max-w-44 md:border-r border-border/40 md:pr-8 flex-shrink-0">
              <p className="text-sm font-medium font-orbitron uppercase text-muted-foreground tracking-wider text-center md:text-left">
                Plataformas Integradas
              </p>
            </div>
            
            <div className="relative py-4 w-full md:w-[calc(100%-11rem)]">
              <InfiniteSlider durationOnHover={20} duration={40} gap={112}>
                <div className="flex items-center">
                  <img
                    className="mx-auto h-5 w-auto dark:invert opacity-60 hover:opacity-100 transition-opacity"
                    src="https://html.tailus.io/blocks/customers/nvidia.svg"
                    alt="Nvidia Logo"
                    height="20"
                    width="auto"
                  />
                </div>
                <div className="flex items-center">
                  <img
                    className="mx-auto h-4 w-auto dark:invert opacity-60 hover:opacity-100 transition-opacity"
                    src="https://html.tailus.io/blocks/customers/column.svg"
                    alt="Column Logo"
                    height="16"
                    width="auto"
                  />
                </div>
                <div className="flex items-center">
                  <img
                    className="mx-auto h-4 w-auto dark:invert opacity-60 hover:opacity-100 transition-opacity"
                    src="https://html.tailus.io/blocks/customers/github.svg"
                    alt="GitHub Logo"
                    height="16"
                    width="auto"
                  />
                </div>
                <div className="flex items-center">
                  <img
                    className="mx-auto h-5 w-auto dark:invert opacity-60 hover:opacity-100 transition-opacity"
                    src="https://html.tailus.io/blocks/customers/nike.svg"
                    alt="Nike Logo"
                    height="20"
                    width="auto"
                  />
                </div>
                <div className="flex items-center">
                  <img
                    className="mx-auto h-5 w-auto dark:invert opacity-60 hover:opacity-100 transition-opacity"
                    src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                    alt="Lemon Squeezy Logo"
                    height="20"
                    width="auto"
                  />
                </div>
                <div className="flex items-center">
                  <img
                    className="mx-auto h-4 w-auto dark:invert opacity-60 hover:opacity-100 transition-opacity"
                    src="https://html.tailus.io/blocks/customers/laravel.svg"
                    alt="Laravel Logo"
                    height="16"
                    width="auto"
                  />
                </div>
                <div className="flex items-center">
                  <img
                    className="mx-auto h-7 w-auto dark:invert opacity-60 hover:opacity-100 transition-opacity"
                    src="https://html.tailus.io/blocks/customers/lilly.svg"
                    alt="Lilly Logo"
                    height="28"
                    width="auto"
                  />
                </div>
                <div className="flex items-center">
                  <img
                    className="mx-auto h-6 w-auto dark:invert opacity-60 hover:opacity-100 transition-opacity"
                    src="https://html.tailus.io/blocks/customers/openai.svg"
                    alt="OpenAI Logo"
                    height="24"
                    width="auto"
                  />
                </div>
              </InfiniteSlider>

              {/* Gradient & progressive blur overlays */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
              
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
