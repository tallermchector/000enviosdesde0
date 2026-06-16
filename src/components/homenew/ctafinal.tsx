"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTAFinalSection() {
  const whatsappUrl = "https://wa.me/5492236602699?text=Hola%20Envios%20DosRuedas%2C%20vengo%20desde%20la%20web.";

  return (
    <section className="relative py-28 overflow-hidden bg-white text-[#000833] border-t-4 border-black">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto p-12 md:p-16 rounded-none border-4 border-black bg-white shadow-[12px_12px_0px_#000] overflow-hidden text-center flex flex-col items-center"
        >
          {/* Warning stripe danger zone accent top bar */}
          <div className="absolute top-0 left-0 right-0 h-4 bg-[repeating-linear-gradient(45deg,#E9C400,#E9C400_15px,#000_15px,#000_30px)] border-b-4 border-black" />

          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#E9C400] border-2 border-black text-black font-bold uppercase tracking-wider text-xs mb-8 mt-4 font-display shadow-[2px_2px_0px_#000]">
            ¡Empezá Ahora!
          </span>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display uppercase tracking-tighter mb-6 max-w-2xl leading-[0.9] text-black">
            ¿Listo para escalar la logística de tu E-Commerce?
          </h2>

          {/* Paragraph */}
          <p className="text-xl text-[#000833] font-sans max-w-xl mb-12 leading-relaxed">
            Olvidate de la gestión de paquetes y enfocate en vender más. Dejá la distribución urbana en manos de expertos.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto h-14 rounded-none px-8 text-lg font-bold font-display uppercase bg-[#25D366] text-white hover:bg-white hover:text-[#25D366] border-4 border-black shadow-[6px_6px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150"
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
              className="w-full sm:w-auto h-14 rounded-none px-8 text-lg font-bold font-display uppercase bg-[#e9c400] text-black hover:bg-[#000833] hover:text-white border-4 border-black shadow-[6px_6px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150"
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
