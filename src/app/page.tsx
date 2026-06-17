'use client';
import dynamic from "next/dynamic";
import React from "react";
import Navegador from "@/components/layout/navegador";
import Footer from "@/components/layout/footer";

// Lazy‑load heavy UI components for improved initial load performance
const HeroPrincipal = dynamic(() => import("@/components/homenew/heroprincipal"), { ssr: false });
const VisionSection = dynamic(() => import("@/components/homenew/vision-new"), { ssr: false });
const ServiciosSection = dynamic(() => import("@/components/homenew/servicios-new"), { ssr: false });
const ComoFuncionaSection = dynamic(() => import("@/components/homenew/como-funciona-new"), { ssr: false });
const EmprendedoresSection = dynamic(() => import("@/components/homenew/emprendedores-new"), { ssr: false });
const PricingSection = dynamic(() => import("@/components/homenew/pricing-new"), { ssr: false });
const ClientFeedback = dynamic(() => import("@/components/ui/testimonial"), { ssr: false });
const CTAFinalSection = dynamic(() => import("@/components/homenew/ctafinal-new"), { ssr: false });

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navegador />

      <main className="flex-1" role="main">
        <HeroPrincipal />
        <VisionSection />
        <ServiciosSection />
        <ComoFuncionaSection />
        <EmprendedoresSection />
        <PricingSection />
        <ClientFeedback />
        <CTAFinalSection />
      </main>

      <Footer />
    </div>
  );
}
