
import React from "react";
import Navegador from "@/components/layout/navegador";
import Footer from "@/components/layout/footer";
import HeroPrincipal from "@/components/homenew/heroprincipal";
import VisionSection from "@/components/homenew/vision";
import ServiciosSection from "@/components/homenew/servicios";
import EmprendedoresSection from "@/components/homenew/emprendedores";
import CTAFinalSection from "@/components/homenew/ctafinal";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navegador />
      
      <main className="flex-1">
        <HeroPrincipal />
        <VisionSection />
        <ServiciosSection />
        <EmprendedoresSection />
        <CTAFinalSection />
      </main>

      <Footer />
    </div>
  );
}
