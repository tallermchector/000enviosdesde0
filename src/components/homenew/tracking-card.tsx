"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Bike, CheckCircle2, ClipboardList, Package } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Step {
  title: string;
  desc: string;
  time: string;
  icon: React.ElementType;
}

interface BrutalistTrackingCardProps {
  steps: Step[];
  inView: boolean;
}

const BrutalistTrackingCard = ({ steps, inView }: BrutalistTrackingCardProps) => {
  const [activeStep, setActiveStep] = React.useState(0);

  // Simulate step progression for visual effect if desired,
  // but here we'll just use the provided steps.
  // For a real hero, maybe we want it to animate through the steps.

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.96 }}
      transition={{ duration: 0.7, type: "spring", stiffness: 320, damping: 20 }}
      className="w-full max-w-md p-8 border-4 border-black bg-white shadow-[8px_8px_0px_#000] hover:shadow-[12px_12px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b-4 border-black pb-4 mb-6">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-black animate-pulse" />
          <span className="inline-flex items-center gap-1.5 bg-black px-2.5 py-0.5 text-[10px] font-bold font-mono tracking-wider text-[#E9C400] animate-pulse">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            EN VIVO
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 bg-[#E9ECEF] border-2 border-black p-2 font-mono text-[10px] uppercase font-bold tracking-wider">
          <div className="flex flex-col">
            <span className="text-black/50">ID:</span>
            <span className="text-black font-bold">DR-8472</span>
          </div>
          <div className="flex flex-col">
            <span className="text-black/50">DEST:</span>
            <span className="text-black font-bold">MDP</span>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative pl-8 space-y-6">
        <div className="absolute left-4 top-2 bottom-2 w-1 border-l-2 border-dashed border-black/30" />

        {steps.map((step, idx) => {
          const isCompleted = idx < activeStep;
          const isActive = idx === activeStep;

          return (
            <div key={idx} className="relative flex items-start gap-4">
              <div className="absolute -left-[26px] flex items-center justify-center">
                <motion.div
                  className={cn(
                    "w-6 h-6 flex items-center justify-center border-2 rounded-none transition-colors duration-300",
                    isActive ? "bg-[#E9C400] border-black text-black shadow-[2px_2px_0px_#000]" :
                    isCompleted ? "bg-black border-black text-white" : "bg-white border-dashed border-black/30 text-black/30"
                  )}
                  animate={{ scale: isActive ? 1.1 : 1 }}
                >
                  <step.icon className="w-3.5 h-3.5" />
                </motion.div>
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className={cn(
                    "text-xs font-bold uppercase tracking-wider",
                    isActive ? "text-black" : isCompleted ? "text-black/70" : "text-black/30"
                  )}>
                    {step.title}
                  </h4>
                  <span className={cn(
                    "text-[9px] font-mono",
                    isActive ? "font-bold text-black" : isCompleted ? "text-black/50" : "text-black/30"
                  )}>
                    {step.time}
                  </span>
                </div>
                <p className={cn(
                  "text-[10px] leading-relaxed",
                  isActive ? "text-black font-medium" : "text-black/50"
                )}>
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 pt-4 border-t-2 border-dotted border-black flex justify-between items-center">
        <span className="text-[10px] font-bold uppercase font-mono text-black/60">Optimización:</span>
        <span className="text-[10px] font-bold uppercase font-mono bg-green-500 text-white px-2 py-0.5 shadow-[2px_2px_0px_#000]">
          98.4%
        </span>
      </div>
    </motion.div>
  );
};

export default BrutalistTrackingCard;
