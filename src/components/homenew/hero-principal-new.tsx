'use client'

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  ClipboardList,
  Package,
  Bike,
  CheckCircle2,
  Activity
} from "lucide-react";
import { useEffect, useState } from "react";
import BrutalistTrackingCard from "@/components/homenew/tracking-card";

const btnHover = { scale: 1, transition: { type: "spring" as const, stiffness: 260, damping: 20 } };
const btnTap = { scale: 0.97 };

const steps = [
  { title: "RECEPCIÓN", desc: "Paquete registrado en base de datos", time: "09:15 hs", icon: ClipboardList },
  { title: "CLASIFICADO", desc: "Orden asignada a zona de ruteo Centro", time: "10:30 hs", icon: Package },
  { title: "TRÁNSITO", desc: "Motociclista en ruta de entrega", time: "En camino", icon: Bike },
  { title: "ENTREGADO", desc: "Firma digital confirmada", time: "Confirmado", icon: CheckCircle2 },
];

export default function HeroPrincipalNew() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setInView(true);
      },
      { threshold: 0.15 }
    );
    const heroEl = document.querySelector("[data-hero-new]");
    if (heroEl) observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative overflow-x-hidden section-light" data-hero-new>
      <section className="relative">
        <div className="py-20 md:pb-28 lg:pb-36 lg:pt-44">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* LEFT COLUMN */}
              <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
                {/* Brand badge */}
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFE600] text-[#2D3277] rounded-md uppercase tracking-wider font-bold text-xs shadow-sm animate-pulse">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2D3277] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2D3277]"></span>
                  </span>
                  LOGÍSTICA EXTREMA // MAR DEL PLATA
                </span>

                {/* Headline */}
                <h1 className="mt-6 text-balance text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-heading font-black uppercase tracking-tight leading-[1.1]">
                  <span className="text-[#2D3277]">Mensajería y Logística</span>
                  <br />
                  <span className="text-[#FFE600]">E‑Commerce</span>
                </h1>

                {/* Description */}
                <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground border-l-4 border-[#FFE600] pl-6">
                  Somos tu solución confiable en servicios de mensajería y delivery en Mar del Plata.
                  Ofrecemos soluciones rápidas, seguras y económicas para todas tus necesidades de envío.
                </p>

                {/* CTA Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="w-full sm:w-auto h-14 rounded-none px-8 text-base font-bold uppercase bg-[#FFE600] text-[#2D3277] shadow-[4px_4px_0px_#2D3277] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#2D3277] transition-all duration-200"
                    whileHover={btnHover}
                    whileTap={btnTap}
                  >
                    <Link href="/cotizar/express" className="flex items-center justify-center gap-2">
                      <span>Solicitar Servicio</span>
                      <ChevronRight className="w-5 h-5" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto h-14 rounded-none px-8 text-base font-bold uppercase border-2 border-[#2D3277] text-[#2D3277] hover:bg-[#2D3277]/5"
                    whileHover={btnHover}
                    whileTap={btnTap}
                  >
                    <Link href="/servicios/plan-emprendedores" className="flex items-center justify-center gap-2">
                      <span>E‑Commerce</span>
                    </Link>
                  </Button>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="lg:col-span-5 flex justify-center w-full relative z-10 lg:mt-12 lg:max-w-[720px]">
                <AnimatePresence>
                  <motion.div
                    key="tracking-card"
                    initial={{ opacity: 0, y: 20, scale: 0.96 }}
                    animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.96 }}
                    transition={{ duration: 0.7, type: "spring", stiffness: 320, damping: 20 }}
                  >
                    <BrutalistTrackingCard steps={steps} inView={inView} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
