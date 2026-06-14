
import React from "react";
import Navegador from "@/components/layout/navegador";
import Footer from "@/components/layout/footer";
import HeroPrincipal from "@/components/homenew/heroprincipal";
import VisionSection from "@/components/homenew/vision";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navegador />
      
      <main className="flex-1">
        <HeroPrincipal />
        <VisionSection />
      </main>

      <Footer />
    </div>
  );
}
