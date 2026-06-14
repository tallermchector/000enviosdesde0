"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTAFinalSection() {
  const whatsappUrl = "https://wa.me/5492236602699?text=Hola%20Envios%20DosRuedas%2C%20vengo%20desde%20la%20web.";

  return (
    <section className="relative py-28 overflow-hidden bg-background text-foreground transition-colors duration-300 border-t border-border/10">
      {/* Dynamic background glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] dark:bg-primary/15" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-[60px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto p-12 md:p-16 rounded-3xl border border-primary/20 bg-card/30 backdrop-blur-sm overflow-hidden text-center flex flex-col items-center shadow-xl"
        >
          {/* Border glowing accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-[#0084ff] to-primary/30" />

          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 border border-primary/20 text-primary mb-6 font-orbitron">
            ¡Empezá Ahora!
          </span>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-orbitron tracking-tight mb-6 max-w-2xl leading-[1.2]">
            ¿Listo para escalar la logística de tu E-Commerce?
          </h2>

          {/* Paragraph */}
          <p className="text-muted-foreground font-roboto text-base sm:text-lg max-w-xl mb-10 leading-relaxed">
            Olvidate de la gestión de paquetes y enfocate en vender más. Dejá la distribución urbana en manos de expertos.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto h-12 rounded-full pl-5 pr-6 text-base font-semibold font-roboto bg-[#25D366] text-white hover:bg-[#20ba56] hover:scale-[1.02] transition-all duration-200 shadow-md shadow-[#25D366]/20 border-none"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <span className="relative flex h-2 w-2 mr-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                <MessageSquare className="w-5 h-5 shrink-0" />
                <span>Contactar Asesor</span>
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto h-12 rounded-full px-6 text-base font-semibold font-roboto border-border hover:bg-accent/40 hover:scale-[1.01] transition-all duration-200"
            >
              <Link href="/servicios/plan-emprendedores" className="flex items-center gap-1.5">
                <span>Ver Planes</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
