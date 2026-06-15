"use client";

import { TimelineContent } from "@/components/ui/timeline-animation";
import { Variants } from "framer-motion";
import { useRef } from "react";
import { GlowCard } from "@/components/ui/spotlight-card";
import { testimonials } from "@/lib/testimonials";

const cardStyles = [
  {
    backdrop: "#fff",
    textColor: "text-black",
    borderColor: "#000",
    glowColor: "yellow" as const,
    avatarBg: "bg-[#000833]",
    avatarTextColor: "text-[#E9C400]"
  },
  {
    backdrop: "#000833",
    textColor: "text-white",
    borderColor: "#000",
    glowColor: "yellow" as const,
    avatarBg: "bg-[#E9C400]",
    avatarTextColor: "text-[#000833]"
  },
  {
    backdrop: "#E9C400",
    textColor: "text-black",
    borderColor: "#000",
    glowColor: "blue" as const,
    avatarBg: "bg-[#000833]",
    avatarTextColor: "text-white"
  },
  {
    backdrop: "#000833",
    textColor: "text-white",
    borderColor: "#000",
    glowColor: "yellow" as const,
    avatarBg: "bg-[#E9C400]",
    avatarTextColor: "text-[#000833]"
  },
  {
    backdrop: "#fff",
    textColor: "text-black",
    borderColor: "#000",
    glowColor: "yellow" as const,
    avatarBg: "bg-[#000833]",
    avatarTextColor: "text-[#E9C400]"
  }
];

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
      className="relative w-full py-20 section-even border-t-2 border-black overflow-hidden" 
      ref={testimonialRef}
      id="testimonios"
    >
      {/* Brutalist Grid Overlay for Background Context */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
 
      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        {/* Section Header */}
        <article className="max-w-screen-md mx-auto text-center space-y-4 mb-14">
          <TimelineContent 
            as="span" 
            className="inline-flex items-center gap-2 px-3 py-1 bg-[#E9C400] border-2 border-black text-black font-bold uppercase tracking-wider text-xs font-display shadow-[2px_2px_0px_#000]"
            animationNum={0} 
            customVariants={revealVariants} 
            timelineRef={testimonialRef}
          >
            <span className="w-2 h-2 bg-black" />
            Testimonios y Casos de Éxito
          </TimelineContent>
          
          <TimelineContent 
            as="h2" 
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-display uppercase tracking-wider text-white leading-none" 
            animationNum={1} 
            customVariants={revealVariants} 
            timelineRef={testimonialRef}
          >
            Confiado por Emprendedores y Pymes Líderes
          </TimelineContent>
          
          <TimelineContent 
            as="p" 
            className="mx-auto text-body-md text-white/90 max-w-xl" 
            animationNum={2} 
            customVariants={revealVariants} 
            timelineRef={testimonialRef}
          >
            Conocé la experiencia de quienes impulsan sus ventas y automatizan sus envíos con nuestra logística express y MercadoLibre Flex.
          </TimelineContent>
        </article>
 
        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full pb-8">
          
          {/* Column 1: Testimonials 0 and 1 */}
          <div className="flex flex-col gap-6">
            {[0, 1].map((idx) => {
              const t = testimonials[idx];
              if (!t) return null;
              const style = cardStyles[idx];
              return (
                <TimelineContent 
                  key={t.id}
                  animationNum={3 + idx} 
                  customVariants={revealVariants} 
                  timelineRef={testimonialRef} 
                  className="flex-1 flex flex-col"
                >
                  <GlowCard
                    glowColor={style.glowColor}
                    radius={0}
                    border={2}
                    borderColor={style.borderColor}
                    backdrop={style.backdrop}
                    customSize
                    className={`flex-1 flex flex-col justify-between p-6 shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all duration-300 overflow-hidden ${style.textColor}`}
                  >
                    {/* Visual details for white card */}
                    {style.backdrop === "#fff" && (
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none"></div>
                    )}
                    
                    <div className="relative z-10 flex-1 flex flex-col justify-between">
                      {/* Platform & Stars Technical Badge */}
                      <div className="flex justify-between items-center mb-6 font-mono text-[9px] uppercase tracking-wider font-bold opacity-80">
                        <span>{t.platform}</span>
                        <span className={style.backdrop === "#E9C400" ? "text-black" : "text-[#E9C400]"}>{"★".repeat(t.rating)}</span>
                      </div>

                      <p className="font-sans text-body-md leading-relaxed italic mb-8">
                        {`"${t.content}"`}
                      </p>
                      
                      <div className={`flex justify-between items-end border-t pt-4 mt-auto ${style.backdrop === "#000833" ? "border-white/20" : "border-black/10"}`}>
                        <div>
                          <h3 className="font-display text-base font-bold uppercase tracking-wider">
                            {t.name}
                          </h3>
                          <p className={`font-mono text-xs uppercase tracking-wider mt-0.5 ${style.backdrop === "#000833" ? "text-white/70" : "text-black/60"}`}>
                            {t.role}
                          </p>
                        </div>
                        
                        <div className={`w-12 h-12 border-2 border-black flex items-center justify-center font-display text-base font-black shadow-[2px_2px_0px_#000] shrink-0 ${style.avatarBg} ${style.avatarTextColor}`}>
                          {t.avatarPlaceholder}
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                </TimelineContent>
              );
            })}
          </div>

          {/* Column 2: Testimonials 2 and 3 */}
          <div className="flex flex-col gap-6">
            {[2, 3].map((idx) => {
              const t = testimonials[idx];
              if (!t) return null;
              const style = cardStyles[idx];
              return (
                <TimelineContent 
                  key={t.id}
                  animationNum={5 + idx} 
                  customVariants={revealVariants} 
                  timelineRef={testimonialRef} 
                  className="flex-1 flex flex-col"
                >
                  <GlowCard
                    glowColor={style.glowColor}
                    radius={0}
                    border={2}
                    borderColor={style.borderColor}
                    backdrop={style.backdrop}
                    customSize
                    className={`flex-1 flex flex-col justify-between p-6 shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all duration-300 overflow-hidden ${style.textColor}`}
                  >
                    {/* Visual details for yellow card */}
                    {style.backdrop === "#E9C400" && (
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none"></div>
                    )}
                    
                    <div className="relative z-10 flex-1 flex flex-col justify-between">
                      {/* Platform & Stars Technical Badge */}
                      <div className="flex justify-between items-center mb-6 font-mono text-[9px] uppercase tracking-wider font-bold opacity-80">
                        <span>{t.platform}</span>
                        <span className={style.backdrop === "#E9C400" ? "text-black" : "text-[#E9C400]"}>{"★".repeat(t.rating)}</span>
                      </div>

                      <p className="font-sans text-body-md leading-relaxed italic mb-8">
                        {`"${t.content}"`}
                      </p>
                      
                      <div className={`flex justify-between items-end border-t pt-4 mt-auto ${style.backdrop === "#000833" ? "border-white/20" : "border-black/10"}`}>
                        <div>
                          <h3 className="font-display text-base font-bold uppercase tracking-wider">
                            {t.name}
                          </h3>
                          <p className={`font-mono text-xs uppercase tracking-wider mt-0.5 ${style.backdrop === "#000833" ? "text-white/70" : "text-black/60"}`}>
                            {t.role}
                          </p>
                        </div>
                        
                        <div className={`w-12 h-12 border-2 border-black flex items-center justify-center font-display text-base font-black shadow-[2px_2px_0px_#000] shrink-0 ${style.avatarBg} ${style.avatarTextColor}`}>
                          {t.avatarPlaceholder}
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                </TimelineContent>
              );
            })}
          </div>

          {/* Column 3: Testimonial 4 */}
          <div className="flex flex-col gap-6">
            {[4].map((idx) => {
              const t = testimonials[idx];
              if (!t) return null;
              const style = cardStyles[idx];
              return (
                <TimelineContent 
                  key={t.id}
                  animationNum={9} 
                  customVariants={revealVariants} 
                  timelineRef={testimonialRef} 
                  className="flex-1 flex flex-col"
                >
                  <GlowCard
                    glowColor={style.glowColor}
                    radius={0}
                    border={2}
                    borderColor={style.borderColor}
                    backdrop={style.backdrop}
                    customSize
                    className={`flex-1 flex flex-col justify-between p-6 shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all duration-300 overflow-hidden ${style.textColor}`}
                  >
                    {style.backdrop === "#fff" && (
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none"></div>
                    )}
                    
                    <div className="relative z-10 flex-1 flex flex-col justify-between">
                      {/* Platform & Stars Technical Badge */}
                      <div className="flex justify-between items-center mb-6 font-mono text-[9px] uppercase tracking-wider font-bold opacity-80">
                        <span>{t.platform}</span>
                        <span className={style.backdrop === "#E9C400" ? "text-black" : "text-[#E9C400]"}>{"★".repeat(t.rating)}</span>
                      </div>

                      <p className="font-sans text-body-md leading-relaxed italic mb-8">
                        {`"${t.content}"`}
                      </p>
                      
                      <div className={`flex justify-between items-end border-t pt-4 mt-auto ${style.backdrop === "#000833" ? "border-white/20" : "border-black/10"}`}>
                        <div>
                          <h3 className="font-display text-base font-bold uppercase tracking-wider">
                            {t.name}
                          </h3>
                          <p className={`font-mono text-xs uppercase tracking-wider mt-0.5 ${style.backdrop === "#000833" ? "text-white/70" : "text-black/60"}`}>
                            {t.role}
                          </p>
                        </div>
                        
                        <div className={`w-12 h-12 border-2 border-black flex items-center justify-center font-display text-base font-black shadow-[2px_2px_0px_#000] shrink-0 ${style.avatarBg} ${style.avatarTextColor}`}>
                          {t.avatarPlaceholder}
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                </TimelineContent>
              );
            })}
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
