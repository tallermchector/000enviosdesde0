"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTAFinalSection() {
  const whatsappUrl = "https://wa.me/5492236602699?text=Hola%20Envios%20DosRuedas%2C%20vengo%20desde%20la%20web.";

  return (
    <section className="relative py-28 overflow-hidden bg-[#f8f9fa] text-[#191c1d] transition-colors duration-300 border-t-2 border-black">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto p-12 md:p-16 rounded-none border-2 border-black bg-white shadow-[6px_6px_0px_#000] overflow-hidden text-center flex flex-col items-center"
        >
          {/* Border glowing accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#001de0]" />

          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#edeeef] border-2 border-black text-black font-bold uppercase tracking-wider text-xs mb-6 font-display">
            ¡Empezá Ahora!
          </span>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display uppercase tracking-wider mb-6 max-w-2xl leading-none text-black">
            ¿Listo para escalar la logística de tu E-Commerce?
          </h2>

          {/* Paragraph */}
          <p className="text-body-lg text-[#444556] max-w-xl mb-10">
            Olvidate de la gestión de paquetes y enfocate en vender más. Dejá la distribución urbana en manos de expertos.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto h-12 rounded-none pl-5 pr-6 text-base font-bold font-sans bg-[#25D366] text-white hover:bg-[#20ba56] hover:scale-[1.01] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_#000] border-2 border-black shadow-[2px_2px_0px_#000] transition-all"
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
              className="w-full sm:w-auto h-12 rounded-none px-6 text-base font-bold font-sans bg-[#e9c400] hover:bg-[#ffd700] text-black hover:scale-[1.01] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_#000] border-2 border-black shadow-[2px_2px_0px_#000] transition-all"
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
