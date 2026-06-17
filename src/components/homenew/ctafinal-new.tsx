'use client'

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function CTAFinalSectionNew() {
  const whatsappUrl = "https://wa.me/5492236602699?text=Hola%20Envios%20DosRuedas%2C%20vengo%20desde%20la%20web.";

  return (
    <section className="relative py-24 overflow-hidden bg-[#2D3277] text-white">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFE600]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm text-[#FFE600] font-bold uppercase tracking-widest text-xs mb-8 rounded-full border border-white/20">
            <Sparkles className="w-3.5 h-3.5" />
            ¡Empezá Ahora!
          </div>

          <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tight mb-8 leading-[1.1]">
            ¿Listo para escalar la logística de tu <span className="text-[#FFE600]">E-Commerce?</span>
          </h2>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            Olvidate de la gestión de paquetes y enfocate en vender más. Dejá la distribución urbana en manos de expertos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto h-14 px-8 text-lg font-bold rounded-xl bg-[#25D366] text-white hover:bg-[#1ebe57] shadow-lg shadow-[#25D366]/20 transition-all duration-200"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <span className="relative flex h-3 w-3 mr-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
                <MessageSquare className="w-6 h-6 shrink-0" />
                <span>Contactar Asesor</span>
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto h-14 px-8 text-lg font-bold rounded-xl border-white/20 bg-white/5 text-white hover:bg-white/10 transition-all duration-200"
            >
              <Link href="/servicios/plan-emprendedores" className="flex items-center gap-2">
                <span>Ver Planes</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
