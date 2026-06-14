"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroPrincipal() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center py-16 lg:py-24 overflow-hidden bg-background text-foreground transition-colors duration-300">
      {/* Subtle brand color gradient overlays (custom design system blue/neon yellow accents) */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Glow from bottom-left */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-70" />
        {/* Glow from top-right */}
        <div className="absolute inset-0 bg-gradient-to-bl from-secondary/5 via-transparent to-transparent opacity-50" />
        {/* Overall background overlay to guarantee text readability in both light & dark mode */}
        <div className="absolute inset-0 bg-background/80 dark:bg-background/90" />
      </div>

      {/* Hero Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-35 dark:opacity-20 filter grayscale contrast-125 transition-opacity duration-1000"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://mybycketvercelprojecttest.s3.sa-east-1.amazonaws.com/animation-bg.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-[60px] flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16 lg:gap-24">
        
        {/* Left Block: Content */}
        <div className="max-w-[850px] flex flex-col items-start">
          {/* Badge with micro-animation */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-primary/10 border border-primary/20 text-primary mb-8 font-orbitron">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            LOGÍSTICA EXTREMA // MAR DEL PLATA
          </span>

          {/* Main Title (H1) with Turing Landing spacing & Orbitron font */}
          <h1 className="text-[40px] sm:text-[56px] lg:text-[76px] font-light leading-[1.15] mb-8 tracking-[-2px] font-orbitron text-foreground">
            Mensajería y Logística
            <br />
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#0084ff] dark:from-primary dark:to-[#4fa3ff]">
              E-Commerce
            </span>{" "}
            en Mar del Plata
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-12 font-normal max-w-xl font-roboto">
            Somos tu solución confiable en servicios de mensajería y delivery en Mar del Plata.
            Ofrecemos soluciones rápidas, seguras y económicas para todas tus necesidades de envío.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-5 items-center">
            <Link
              href="/cotizar/express"
              className="group inline-flex items-center gap-2.5 bg-primary text-primary-foreground py-3.5 px-7 rounded-md text-base font-semibold font-roboto hover:bg-primary/90 hover:translate-x-1 transition-all duration-200 shadow-md shadow-primary/25"
            >
              Solicitar Servicio
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/servicios/plan-emprendedores"
              className="inline-flex items-center bg-transparent border border-border/80 text-muted-foreground hover:text-foreground hover:bg-accent/40 py-3.5 px-7 rounded-md text-base font-medium font-roboto transition-colors duration-200"
            >
              E-Commerce
            </Link>
          </div>
        </div>

        {/* Right Block: Statistics */}
        <div className="flex gap-12 sm:gap-20 items-end w-full lg:w-auto border-t border-border/40 lg:border-t-0 pt-10 lg:pt-0">
          <div className="text-left">
            <div className="text-5xl sm:text-[64px] font-light font-orbitron leading-none mb-3 text-secondary tracking-tight">
              +5.000
            </div>
            <div className="text-sm sm:text-base text-muted-foreground font-roboto font-normal tracking-wide whitespace-nowrap">
              Envíos mensuales
            </div>
          </div>
          <div className="text-left">
            <div className="text-5xl sm:text-[64px] font-light font-orbitron leading-none mb-3 text-secondary tracking-tight">
              7+ Años
            </div>
            <div className="text-sm sm:text-base text-muted-foreground font-roboto font-normal tracking-wide whitespace-nowrap">
              Trayectoria
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
