'use client';
import dynamic from "next/dynamic";
import React from "react";
import Navegador from "@/components/layout/navegador";
import Footer from "@/components/layout/footer";
import { SkeletonSection } from "@/components/ui/skeleton-section";

// Lazy‑load heavy UI components for improved initial load performance
const HeroPrincipal = dynamic(() => import("@/components/homenew/heroprincipal"), { ssr: false, loading: () => <SkeletonSection /> });
const VisionSection = dynamic(() => import("@/components/homenew/vision-new"), { ssr: false, loading: () => <SkeletonSection /> });
const ServiciosSection = dynamic(() => import("@/components/homenew/servicios-new"), { ssr: false, loading: () => <SkeletonSection /> });
const ComoFuncionaSection = dynamic(() => import("@/components/homenew/como-funciona-new"), { ssr: false, loading: () => <SkeletonSection /> });
const EmprendedoresSection = dynamic(() => import("@/components/homenew/emprendedores-new"), { ssr: false, loading: () => <SkeletonSection /> });
const PricingSection = dynamic(() => import("@/components/homenew/pricing-new"), { ssr: false, loading: () => <SkeletonSection /> });
const ClientFeedback = dynamic(() => import("@/components/ui/testimonial"), { ssr: false, loading: () => <SkeletonSection /> });
const CTAFinalSection = dynamic(() => import("@/components/homenew/ctafinal-new"), { ssr: false, loading: () => <SkeletonSection /> });

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
