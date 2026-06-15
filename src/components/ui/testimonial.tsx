"use client";

import { TimelineContent } from "@/components/ui/timeline-animation";
import { Variants } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { GlowCard } from "@/components/ui/spotlight-card";

function ClientFeedback() {
  const testimonialRef = useRef<HTMLDivElement>(null);

  const revealVariants: Variants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.25,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const, // modern ease-out
      },
    }),
    hidden: {
      filter: "blur(4px)",
      y: 20,
      opacity: 0,
    },
  };

  return (
    <section 
      className="relative w-full py-20 bg-[#f8f9fa] border-t-2 border-black overflow-hidden" 
      ref={testimonialRef}
      id="testimonios"
    >
      {/* Brutalist Grid Overlay for Background Context */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        {/* Section Header */}
        <article className="max-w-screen-md mx-auto text-center space-y-4 mb-14">
          <TimelineContent 
            as="span" 
            className="inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-black text-black font-bold uppercase tracking-wider text-xs font-display"
            animationNum={0} 
            customVariants={revealVariants} 
            timelineRef={testimonialRef}
          >
            <span className="w-2 h-2 bg-[#001de0]" />
            Testimonios y Casos de Éxito
          </TimelineContent>
          
          <TimelineContent 
            as="h2" 
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-display uppercase tracking-wider text-black leading-none" 
            animationNum={1} 
            customVariants={revealVariants} 
            timelineRef={testimonialRef}
          >
            Confiado por Emprendedores y Pymes Líderes
          </TimelineContent>
          
          <TimelineContent 
            as="p" 
            className="mx-auto text-body-md text-[#444556] max-w-xl" 
            animationNum={2} 
            customVariants={revealVariants} 
            timelineRef={testimonialRef}
          >
            Conocé la experiencia de quienes impulsan sus ventas y automatizan sus envíos con nuestra logística express y MercadoLibre Flex.
          </TimelineContent>
        </article>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full pb-8">
          
          {/* Column 1: White & Electric Blue */}
          <div className="flex flex-col gap-6">
            {/* Card 1: Guillermo Rauch - White Brutalist */}
            <TimelineContent 
              animationNum={3} 
              customVariants={revealVariants} 
              timelineRef={testimonialRef} 
              className="flex-1 flex flex-col"
            >
              <GlowCard
                glowColor="blue"
                radius={0}
                border={2}
                borderColor="#000"
                backdrop="#fff"
                customSize
                className="flex-1 flex flex-col justify-between p-6 shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none"></div>
                
                <div className="relative z-10 flex-1 flex flex-col justify-between">
                  <p className="font-sans text-body-md text-black leading-relaxed italic mb-8">
                    {'"Envíos DosRuedas ha sido un verdadero socio estratégico. Su servicio de entrega express en el día es impecable y su equipo responde al instante."'}
                  </p>
                  <div className="flex justify-between items-end border-t border-black/10 pt-4 mt-auto">
                    <div>
                      <h3 className="font-display text-base font-bold uppercase tracking-wider text-black">
                        Guillermo Rauch
                      </h3>
                      <p className="font-mono text-xs uppercase tracking-wider text-black/60 mt-0.5">
                        CEO de Enigma
                      </p>
                    </div>
                    <div className="relative w-14 h-14 border-2 border-black rounded-none overflow-hidden bg-white shrink-0">
                      <Image
                        src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop"
                        alt="Guillermo Rauch"
                        fill
                        className="object-cover rounded-none"
                      />
                    </div>
                  </div>
                </div>
              </GlowCard>
            </TimelineContent>

            {/* Card 2: Rika Shinoda - Electric Blue */}
            <TimelineContent 
              animationNum={4} 
              customVariants={revealVariants} 
              timelineRef={testimonialRef} 
              className="flex-shrink-0 flex flex-col"
            >
              <GlowCard
                glowColor="yellow"
                radius={0}
                border={2}
                borderColor="#000"
                backdrop="#001de0"
                customSize
                className="flex-1 flex flex-col justify-between p-6 shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all duration-300 overflow-hidden"
              >
                <div className="relative z-10 flex-1 flex flex-col justify-between">
                  <p className="font-sans text-body-md text-white leading-relaxed italic mb-8">
                    {'"Vimos un salto enorme en nuestras calificaciones de MercadoLibre. La puntualidad y cuidado en las entregas es insuperable."'}
                  </p>
                  <div className="flex justify-between items-end border-t border-white/20 pt-4 mt-auto">
                    <div>
                      <h3 className="font-display text-base font-bold uppercase tracking-wider text-white">
                        Rika Shinoda
                      </h3>
                      <p className="font-mono text-xs uppercase tracking-wider text-white/70 mt-0.5">
                        CEO de Kintsugi
                      </p>
                    </div>
                    <div className="relative w-14 h-14 border-2 border-black rounded-none overflow-hidden bg-white shrink-0">
                      <Image
                        src="https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?q=80&w=150&auto=format&fit=crop"
                        alt="Rika Shinoda"
                        fill
                        className="object-cover rounded-none"
                      />
                    </div>
                  </div>
                </div>
              </GlowCard>
            </TimelineContent>
          </div>

          {/* Column 2: Total Black Brutalist Stack */}
          <div className="flex flex-col gap-6">
            {/* Card 3: Reacher - Dark Card */}
            <TimelineContent 
              animationNum={5} 
              customVariants={revealVariants} 
              timelineRef={testimonialRef} 
              className="flex-1 flex flex-col"
            >
              <GlowCard
                glowColor="green"
                radius={0}
                border={2}
                borderColor="#000"
                backdrop="#000"
                customSize
                className="flex-1 flex flex-col justify-between p-6 shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all duration-300 overflow-hidden"
              >
                <div className="relative z-10 flex-1 flex flex-col justify-between">
                  <p className="font-sans text-body-md text-white leading-relaxed italic mb-8">
                    {'"El equipo es sumamente profesional. Sus soluciones de logística integrada y cadetería urbana transformaron nuestra operation."'}
                  </p>
                  <div className="flex justify-between items-end border-t border-white/20 pt-4 mt-auto">
                    <div>
                      <h3 className="font-display text-base font-bold uppercase tracking-wider text-white">
                        Reacher
                      </h3>
                      <p className="font-mono text-xs uppercase tracking-wider text-white/70 mt-0.5">
                        CEO de OdeaoLabs
                      </p>
                    </div>
                    <div className="relative w-14 h-14 border-2 border-black rounded-none overflow-hidden bg-white shrink-0">
                      <Image
                        src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=150&auto=format&fit=crop"
                        alt="Reacher"
                        fill
                        className="object-cover rounded-none"
                      />
                    </div>
                  </div>
                </div>
              </GlowCard>
            </TimelineContent>

            {/* Card 4: John - Dark Card */}
            <TimelineContent 
              animationNum={6} 
              customVariants={revealVariants} 
              timelineRef={testimonialRef} 
              className="flex-1 flex flex-col"
            >
              <GlowCard
                glowColor="purple"
                radius={0}
                border={2}
                borderColor="#000"
                backdrop="#000"
                customSize
                className="flex-1 flex flex-col justify-between p-6 shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all duration-300 overflow-hidden"
              >
                <div className="relative z-10 flex-1 flex flex-col justify-between">
                  <p className="font-sans text-body-md text-white leading-relaxed italic mb-8">
                    {'"Súper recomendados. Su conocimiento del terreno en Mar del Plata nos da una ventaja competitiva al entregar en horas."'}
                  </p>
                  <div className="flex justify-between items-end border-t border-white/20 pt-4 mt-auto">
                    <div>
                      <h3 className="font-display text-base font-bold uppercase tracking-wider text-white">
                        John
                      </h3>
                      <p className="font-mono text-xs uppercase tracking-wider text-white/70 mt-0.5">
                        CEO de Labsbo
                      </p>
                    </div>
                    <div className="relative w-14 h-14 border-2 border-black rounded-none overflow-hidden bg-white shrink-0">
                      <Image
                        src="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=150&auto=format&fit=crop"
                        alt="John"
                        fill
                        className="object-cover rounded-none"
                      />
                    </div>
                  </div>
                </div>
              </GlowCard>
            </TimelineContent>

            {/* Card 5: Steven Sunny - Dark Card */}
            <TimelineContent 
              animationNum={7} 
              customVariants={revealVariants} 
              timelineRef={testimonialRef} 
              className="flex-1 flex flex-col"
            >
              <GlowCard
                glowColor="orange"
                radius={0}
                border={2}
                borderColor="#000"
                backdrop="#000"
                customSize
                className="flex-1 flex flex-col justify-between p-6 shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all duration-300 overflow-hidden"
              >
                <div className="relative z-10 flex-1 flex flex-col justify-between">
                  <p className="font-sans text-body-md text-white leading-relaxed italic mb-8">
                    {'"El canal de soporte por WhatsApp es súper directo y eficiente. Saben resolver contingencias al instante y con excelente trato."'}
                  </p>
                  <div className="flex justify-between items-end border-t border-white/20 pt-4 mt-auto">
                    <div>
                      <h3 className="font-display text-base font-bold uppercase tracking-wider text-white">
                        Steven Sunny
                      </h3>
                      <p className="font-mono text-xs uppercase tracking-wider text-white/70 mt-0.5">
                        CEO de boxefi
                      </p>
                    </div>
                    <div className="relative w-14 h-14 border-2 border-black rounded-none overflow-hidden bg-white shrink-0">
                      <Image
                        src="https://images.unsplash.com/photo-1740102074295-c13fae3e4f8a?q=80&w=150&auto=format&fit=crop"
                        alt="Steven Sunny"
                        fill
                        className="object-cover rounded-none"
                      />
                    </div>
                  </div>
                </div>
              </GlowCard>
            </TimelineContent>
          </div>

          {/* Column 3: Electric Blue & Safety Yellow */}
          <div className="flex flex-col gap-6">
            {/* Card 6: Adrián Gómez - Electric Blue */}
            <TimelineContent 
              animationNum={8} 
              customVariants={revealVariants} 
              timelineRef={testimonialRef} 
              className="flex-shrink-0 flex flex-col"
            >
              <GlowCard
                glowColor="yellow"
                radius={0}
                border={2}
                borderColor="#000"
                backdrop="#001de0"
                customSize
                className="flex-1 flex flex-col justify-between p-6 shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all duration-300 overflow-hidden"
              >
                <div className="relative z-10 flex-1 flex flex-col justify-between">
                  <p className="font-sans text-body-md text-white leading-relaxed italic mb-8">
                    {'"Su integración directa nos ha permitido procesar despachos masivos de e-commerce sin demoras y sin errores de ruteo."'}
                  </p>
                  <div className="flex justify-between items-end border-t border-white/20 pt-4 mt-auto">
                    <div>
                      <h3 className="font-display text-base font-bold uppercase tracking-wider text-white">
                        Adrián Gómez
                      </h3>
                      <p className="font-mono text-xs uppercase tracking-wider text-white/70 mt-0.5">
                        CEO de TechSur
                      </p>
                    </div>
                    <div className="relative w-14 h-14 border-2 border-black rounded-none overflow-hidden bg-white shrink-0">
                      <Image
                        src="https://images.unsplash.com/photo-1563237023-b1e970526dcb?q=80&w=150&auto=format&fit=crop"
                        alt="Adrián Gómez"
                        fill
                        className="object-cover rounded-none"
                      />
                    </div>
                  </div>
                </div>
              </GlowCard>
            </TimelineContent>

            {/* Card 7: Paul Brauch - Safety Yellow Brutalist */}
            <TimelineContent 
              animationNum={9} 
              customVariants={revealVariants} 
              timelineRef={testimonialRef} 
              className="flex-1 flex flex-col"
            >
              <GlowCard
                glowColor="blue"
                radius={0}
                border={2}
                borderColor="#000"
                backdrop="#fed726"
                customSize
                className="flex-1 flex flex-col justify-between p-6 shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none"></div>
                
                <div className="relative z-10 flex-1 flex flex-col justify-between">
                  <p className="font-sans text-body-md text-black leading-relaxed italic mb-8">
                    {'"Un cambio estratégico para nuestro negocio. La velocidad de su flota y el compromiso con el cliente final tiene un impacto enorme en la recompra."'}
                  </p>
                  <div className="flex justify-between items-end border-t border-black/10 pt-4 mt-auto">
                    <div>
                      <h3 className="font-display text-base font-bold uppercase tracking-wider text-black">
                        Paul Brauch
                      </h3>
                      <p className="font-mono text-xs uppercase tracking-wider text-black/60 mt-0.5">
                        CTO de Spectrum
                      </p>
                    </div>
                    <div className="relative w-14 h-14 border-2 border-black rounded-none overflow-hidden bg-white shrink-0">
                      <Image
                        src="https://images.unsplash.com/photo-1590086782957-93c06ef21604?q=80&w=150&auto=format&fit=crop"
                        alt="Paul Brauch"
                        fill
                        className="object-cover rounded-none"
                      />
                    </div>
                  </div>
                </div>
              </GlowCard>
            </TimelineContent>
          </div>

        </div>

        {/* Decorative Grid footer detail */}
        <div className="absolute border-b-2 border-black bottom-4 h-16 z-[2] md:w-[calc(100%-3rem)] w-[90%] md:left-6 left-[5%] pointer-events-none">
          <div className="container mx-auto w-full h-full relative before:absolute before:-left-2 before:-bottom-2 before:w-4 before:h-4 before:bg-white before:border-2 before:border-black after:absolute after:-right-2 after:-bottom-2 after:w-4 after:h-4 after:bg-white after:border-2 after:border-black "></div>
        </div>
      </div>
    </section>
  );
}

export default ClientFeedback;
