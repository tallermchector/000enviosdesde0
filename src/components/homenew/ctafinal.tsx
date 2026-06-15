"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTAFinalSection() {
  const whatsappUrl = "https://wa.me/5492236602699?text=Hola%20Envios%20DosRuedas%2C%20vengo%20desde%20la%20web.";

  return (
    <section className="relative py-28 overflow-hidden section-even border-t-2 border-black">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
 
      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto p-12 md:p-16 rounded-none border-4 border-black bg-white shadow-[8px_8px_0px_#000] overflow-hidden text-center flex flex-col items-center"
        >
          {/* Warning stripe danger zone accent top bar */}
          <div className="absolute top-0 left-0 right-0 h-3 bg-[repeating-linear-gradient(45deg,#E9C400,#E9C400_10px,#000_10px,#000_20px)] border-b-2 border-black" />
 
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#E9C400] border-2 border-black text-black font-bold uppercase tracking-wider text-xs mb-6 mt-3 font-display shadow-[2px_2px_0px_#000]">
            ¡Empezá Ahora!
          </span>
 
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display uppercase tracking-wider mb-6 max-w-2xl leading-none text-black">
            ¿Listo para escalar la logística de tu E-Commerce?
          </h2>
 
          {/* Paragraph */}
          <p className="text-body-lg text-[#444556] max-w-xl mb-10 leading-relaxed">
            Olvidate de la gestión de paquetes y enfocate en vender más. Dejá la distribución urbana en manos de expertos.
          </p>
 
          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto h-12 rounded-none pl-5 pr-6 text-base font-bold font-sans bg-[#25D366] text-white hover:bg-white hover:text-[#25D366] border-2 border-black shadow-[3px_3px_0px_#000] hover:shadow-[5px_5px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-150"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <span className="relative flex h-2 w-2 mr-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-duration-1000"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                <MessageSquare className="w-5 h-5 shrink-0" />
                <span>Contactar Asesor</span>
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto h-12 rounded-none px-6 text-base font-bold font-sans bg-[#e9c400] text-black hover:bg-[#000833] hover:text-white border-2 border-black shadow-[3px_3px_0px_#000] hover:shadow-[5px_5px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-150"
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
