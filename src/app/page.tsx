'use client';
import dynamic from "next/dynamic";
import React from "react";
import { HeroSection } from "@/components/blocks/hero-section-4";
import Footer from "@/components/layout/footer";

// Lazy‑load heavy UI components for improved initial load performance
const VisionSection = dynamic(() => import("@/components/homenew/vision"), { ssr: false });
const ServiciosSection = dynamic(() => import("@/components/homenew/servicios"), { ssr: false });
const ComoFuncionaSection = dynamic(() => import("@/components/homenew/como-funciona"), { ssr: false });
const EmprendedoresSection = dynamic(() => import("@/components/homenew/emprendedores"), { ssr: false });
const PricingSection = dynamic(() => import("@/components/homenew/pricing"), { ssr: false });
const ClientFeedback = dynamic(() => import("@/components/ui/testimonial"), { ssr: false });
const CTAFinalSection = dynamic(() => import("@/components/homenew/ctafinal"), { ssr: false });

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1" role="main">
        <HeroSection />
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
