"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { Variants } from "framer-motion";
import { testimonials as sourceTestimonials, Testimonial } from "@/lib/testimonials";
import { cn } from "@/lib/utils";

const cardStyles = [
  {
    backdrop: "#fff",
    textColor: "text-black",
    borderColor: "#000000",
    glowColor: "yellow" as const,
    avatarBg: "bg-[#000833]",
    avatarTextColor: "text-[#E9C400]"
  },
  {
    backdrop: "#000833",
    textColor: "text-white",
    borderColor: "#000000",
    glowColor: "yellow" as const,
    avatarBg: "bg-[#E9C400]",
    avatarTextColor: "text-[#000833]"
  },
  {
    backdrop: "#E9C400",
    textColor: "text-black",
    borderColor: "#000000",
    glowColor: "blue" as const,
    avatarBg: "bg-[#000833]",
    avatarTextColor: "text-white"
  },
  {
    backdrop: "#000833",
    textColor: "text-white",
    borderColor: "#000000",
    glowColor: "yellow" as const,
    avatarBg: "bg-[#E9C400]",
    avatarTextColor: "text-[#000833]"
  },
  {
    backdrop: "#fff",
    textColor: "text-black",
    borderColor: "#000000",
    glowColor: "yellow" as const,
    avatarBg: "bg-[#000833]",
    avatarTextColor: "text-[#E9C400]"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: Testimonial & { tempId: number };
  handleMove: (steps: number) => void;
  cardSize: number;
  styleIdx: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize,
  styleIdx
}) => {
  const isCenter = position === 0;
  const style = cardStyles[styleIdx % cardStyles.length];

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-7 transition-all duration-500 ease-in-out select-none flex flex-col justify-between",
        isCenter 
          ? "z-10 shadow-[6px_6px_0px_#000]" 
          : "z-0 opacity-40 hover:opacity-75"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        backgroundColor: style.backdrop,
        color: style.textColor.includes("text-white") ? "#fff" : "#000",
        borderColor: style.borderColor,
        clipPath: `polygon(40px 0%, calc(100% - 40px) 0%, 100% 40px, 100% 100%, calc(100% - 40px) 100%, 40px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.4) * position}px)
          translateY(${isCenter ? -30 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 3 : -3}deg)
          scale(${isCenter ? 1.05 : 0.9})
        `,
      }}
    >
      {/* Brutalist Diagonal Fold Line */}
      <span
        className="absolute block origin-top-right rotate-45"
        style={{
          right: -2,
          top: 38,
          width: Math.sqrt(40 * 40 * 2),
          height: 2,
          backgroundColor: style.textColor.includes("text-white") ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)"
        }}
      />

      <div className="relative z-10 flex flex-col justify-between h-full flex-1">
        <div>
          {/* Header Stats */}
          <div className="flex justify-between items-center mb-4 font-mono text-[9px] uppercase tracking-wider font-bold opacity-80">
            <span>{testimonial.platform}</span>
            <span className="text-[#E9C400]">{"★".repeat(testimonial.rating)}</span>
          </div>

          {/* Quote Text */}
          <h3 className={cn(
            "text-sm sm:text-base font-medium font-sans leading-relaxed italic line-clamp-6",
            isCenter ? "opacity-100" : "opacity-80"
          )}>
            &ldquo;{testimonial.content}&rdquo;
          </h3>
        </div>

        {/* Footer Info */}
        <div className={cn(
          "flex justify-between items-end border-t pt-3 mt-4",
          style.backdrop === "#000833" ? "border-white/20" : "border-black/10"
        )}>
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider">
              {testimonial.name}
            </h4>
            <p className={cn(
              "font-mono text-[10px] uppercase tracking-wider mt-0.5",
              style.backdrop === "#000833" ? "text-white/70" : "text-black/60"
            )}>
              {testimonial.role}
            </p>
          </div>

          {/* Text Avatar Initial */}
          <div 
            className={cn(
              "w-10 h-10 border-2 border-black flex items-center justify-center font-display text-sm font-black shadow-[2px_2px_0px_#000] shrink-0",
              style.avatarBg,
              style.avatarTextColor
            )}
          >
            {testimonial.avatarPlaceholder}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ClientFeedback() {
  const testimonialRef = useRef<HTMLDivElement>(null);
  const [cardSize, setCardSize] = useState(365);
  
  // Set initial testimonials state with tempId
  const [testimonialsList, setTestimonialsList] = useState(() => 
    sourceTestimonials.map((t, idx) => ({ ...t, tempId: idx }))
  );

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 295);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const revealVariants: Variants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.25,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
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
 
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 flex flex-col items-center">
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

        {/* Carousel Container */}
        <div 
          className="relative w-full flex items-center justify-center overflow-visible"
          style={{ height: 500 }}
        >
          {testimonialsList.map((testimonial, index) => {
            const position = index - Math.floor(testimonialsList.length / 2);
            // We determine a consistent style index from the testimonial ID
            const styleIdx = parseInt(testimonial.id) - 1;

            return (
              <TestimonialCard
                key={testimonial.tempId}
                testimonial={testimonial}
                handleMove={handleMove}
                position={position}
                cardSize={cardSize}
                styleIdx={styleIdx}
              />
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-6 z-20">
          <button
            onClick={() => handleMove(-1)}
            className={cn(
              "flex h-12 w-12 items-center justify-center text-xl transition-all duration-150 rounded-none border-2 border-black",
              "bg-white text-black hover:bg-[#E9C400] shadow-[3px_3px_0px_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#000]"
            )}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => handleMove(1)}
            className={cn(
              "flex h-12 w-12 items-center justify-center text-xl transition-all duration-150 rounded-none border-2 border-black",
              "bg-[#E9C400] text-black hover:bg-white shadow-[3px_3px_0px_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#000]"
            )}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
