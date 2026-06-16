"use client";

import React from 'react';
import Link from 'next/link';
import { PricingCardProps } from "@/components/ui/animated-glassy-pricing";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const BrutalistPricingCard = ({
  planName,
  description,
  price,
  features,
  buttonText,
  isPopular = false,
  href,
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={cn(
        "relative flex flex-col w-full border-4 border-black bg-white p-8 transition-all duration-200",
        isPopular
          ? "shadow-[12px_12px_0px_#000] z-20 scale-105 md:scale-110"
          : "shadow-[8px_8px_0px_#000] z-10",
        "hover:shadow-[12px_12px_0px_#000] hover:-translate-x-1 hover:-translate-y-1"
      )}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#E9C400] border-4 border-black px-4 py-1 font-display font-bold uppercase tracking-tighter text-sm shadow-[4px_4px_0px_#000] z-30 whitespace-nowrap">
          Más Popular
        </div>
      )}

      <div className="flex flex-col h-full">
        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-bold font-display uppercase tracking-tighter mb-2 leading-none">
            {planName}
          </h3>
          <p className="text-sm font-sans text-[#000833]/80 leading-relaxed min-h-[40px]">
            {description}
          </p>
        </div>

        <div className="mb-8">
          <span className="text-5xl font-bold font-display uppercase tracking-tighter">
            {price}
          </span>
        </div>

        <div className="border-t-4 border-black pt-6 mb-8 flex-1">
          <ul className="space-y-4">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 border-2 border-black bg-[#E9C400] flex items-center justify-center shadow-[1px_1px_0px_#000]">
                  <Check className="w-3 h-3 text-black stroke-[4px]" />
                </div>
                <span className="text-sm font-bold font-mono uppercase tracking-wider">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href={href || "#"}
          className={cn(
            "w-full py-4 border-4 border-black text-center font-display font-bold uppercase text-lg transition-all",
            isPopular
              ? "bg-[#E9C400] text-black shadow-[4px_4px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
              : "bg-white text-black shadow-[4px_4px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
          )}
        >
          {buttonText}
        </Link>
      </div>
    </motion.div>
  );
};

export default function BrutalistPricingPage({
  title,
  subtitle,
  plans,
}: {
  title: React.ReactNode;
  subtitle: string;
  plans: PricingCardProps[];
}): React.ReactNode {
  return (
    <section className="relative py-24 bg-[#f4f4f4] border-t-4 border-black overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#E9C400] border-2 border-black text-black font-bold uppercase tracking-wider text-xs mb-4 font-display shadow-[2px_2px_0px_#000]">
            Esquema Tarifario
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-display uppercase tracking-tighter mb-6 leading-[0.9] text-black">
            {title}
          </h2>
          <p className="text-xl text-[#000833] font-sans max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-stretch justify-center">
          {plans.map((plan, index) => (
            <BrutalistPricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
