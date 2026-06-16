"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Step {
  title: string;
  desc: string;
  time: string;
  icon: React.ElementType;
}

interface ElegantTrackingCardProps {
  steps: Step[];
  inView: boolean;
}

const ElegantTrackingCard = ({ steps, inView }: ElegantTrackingCardProps) => {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.96 }}
      transition={{ duration: 0.7, type: "spring", stiffness: 320, damping: 20 }}
      className="w-full max-w-md p-8 bg-white rounded-[12px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden relative"
    >
      {/* Subtle decoration */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFE600]/5 rounded-full -mr-12 -mt-12 blur-2xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#2D3277]/5 rounded-full -ml-12 -mb-12 blur-2xl" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-[#2D3277]/10 rounded-lg">
            <Activity className="w-5 h-5 text-[#2D3277] animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#2D3277]/60">Estado de Envío</span>
            <span className="text-xs font-bold text-[#2D3277]">En Tiempo Real</span>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-3 px-3 py-1 bg-gray-50 rounded-full border border-gray-100">
           <span className="text-[10px] font-mono font-semibold text-[#2D3277]/60">ID: DR-8472</span>
           <div className="w-[1px] h-3 bg-gray-200" />
           <span className="text-[10px] font-mono font-semibold text-[#2D3277]/60">MDP</span>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative pl-8 space-y-8">
        <div className="absolute left-3.5 top-2 bottom-2 w-[2px] bg-gray-100" />

        {steps.map((step, idx) => {
          const isCompleted = idx < activeStep;
          const isActive = idx === activeStep;

          return (
            <div key={idx} className="relative flex items-start gap-5">
              <div className="absolute -left-[28px] flex items-center justify-center">
                <motion.div
                  className={cn(
                    "w-7 h-7 flex items-center justify-center rounded-full transition-colors duration-300 shadow-sm",
                    isActive
                      ? "bg-[#FFE600] text-[#2D3277] ring-4 ring-[#FFE600]/20"
                      : isCompleted
                        ? "bg-[#2D3277] text-white"
                        : "bg-white border-2 border-gray-200 text-gray-300"
                  )}
                  animate={{ scale: isActive ? 1.1 : 1 }}
                >
                  <step.icon className={cn("w-4 h-4", isActive ? "animate-pulse" : "")} />
                </motion.div>
              </div>

              <div className="flex-1 pt-0.5">
                <div className="flex items-center justify-between">
                  <h4 className={cn(
                    "text-sm font-bold uppercase tracking-wide transition-colors duration-300",
                    isActive ? "text-[#2D3277]" : isCompleted ? "text-[#2D3277]/60" : "text-gray-400"
                  )}>
                    {step.title}
                  </h4>
                  <span className={cn(
                    "text-[10px] font-medium",
                    isActive ? "text-[#FFE600]" : isCompleted ? "text-gray-400" : "text-gray-300"
                  )}>
                    {step.time}
                  </span>
                </div>
                <p className={cn(
                  "text-sm leading-relaxed transition-colors duration-300",
                  isActive ? "text-gray-700 font-medium" : isCompleted ? "text-gray-400" : "text-gray-300"
                )}>
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 pt-4 border-t border-gray-100 flex justify-between items-center">
        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Eficiencia de Ruta</span>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-[#00A650]">98.4%</span>
          <div className="w-12 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '98%' }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full bg-[#00A650]"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ElegantTrackingCard;
