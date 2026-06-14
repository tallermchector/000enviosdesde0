"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { ArrowRight } from "lucide-react";

export default function HeroPrincipal() {
  return (
    <main className="overflow-x-hidden bg-background text-foreground transition-colors duration-300">
      <section className="relative">
        <div className="pb-16 pt-12 md:pb-24 lg:pb-36 lg:pt-28">
          <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block md:px-[60px]">
            {/* Left Content */}
            <div className="mx-auto max-w-2xl text-center lg:ml-0 lg:w-1/2 lg:text-left flex flex-col items-center lg:items-start z-10 relative">
              {/* Badge with micro-ping */}
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-primary/10 border border-primary/20 text-primary mb-6 font-orbitron">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                LOGÍSTICA EXTREMA // MAR DEL PLATA
              </span>

              {/* Title (H1) */}
              <h1 className="mt-2 max-w-2xl text-balance text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold font-orbitron tracking-tight leading-[1.1] text-foreground">
                Mensajería y Logística
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#0084ff] dark:from-primary dark:to-[#4fa3ff]">
                  E-Commerce
                </span>{" "}
                en Mar del Plata
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-xl text-pretty text-base sm:text-lg text-muted-foreground font-roboto leading-relaxed">
                Somos tu solución confiable en servicios de mensajería y delivery en Mar del Plata.
                Ofrecemos soluciones rápidas, seguras y económicas para todas tus necesidades de envío.
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto px-7 text-base font-semibold font-roboto bg-primary text-primary-foreground hover:bg-primary/90 hover:translate-x-0.5 transition-all duration-200 shadow-md shadow-primary/20"
                >
                  <Link href="/cotizar/express" className="flex items-center gap-2">
                    Solicitar Servicio
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto px-7 text-base font-medium font-roboto border-border/80 text-muted-foreground hover:text-foreground hover:bg-accent/40 transition-colors duration-200"
                >
                  <Link href="/servicios/plan-emprendedores">
                    E-Commerce
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Abstract Art */}
            <img
              className="pointer-events-none order-first ml-auto h-56 w-full object-cover invert sm:h-96 lg:absolute lg:inset-0 lg:-right-20 lg:-top-24 lg:order-last lg:h-max lg:w-1/2 lg:object-contain dark:mix-blend-lighten dark:invert-0 opacity-80 dark:opacity-90"
              src="https://ik.imagekit.io/lrigu76hy/tailark/abstract-bg.jpg?updatedAt=1745733473768"
              alt="Abstract Logistics Flow Representation"
              height="4000"
              width="3000"
            />
          </div>
        </div>
      </section>

      {/* Infinite Logo Slider */}
      <section className="bg-background pb-12 border-t border-border/10 pt-8">
        <div className="group relative m-auto max-w-[1400px] px-6 md:px-[60px]">
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

              {/* Gradient overlays */}
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
