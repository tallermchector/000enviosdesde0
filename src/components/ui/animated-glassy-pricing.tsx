"use client";

import React from 'react';
import Link from 'next/link';
import { GlowCard } from "@/components/ui/spotlight-card";

// --- Internal Helper Components (Not exported) --- //

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16" height="16" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="3"
    strokeLinecap="round" strokeLinejoin="round"
    className={className}
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);



// --- EXPORTED Building Blocks --- //
 
/**
 * We export the Props interface so you can easily type the data for your plans.
 */
export interface PricingCardProps {
  planName: string;
  description: string;
  price: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  buttonVariant?: 'primary' | 'secondary';
  href?: string;
}
 
/**
 * We export the PricingCard component itself in case you want to use it elsewhere.
 */
export const PricingCard = ({
  planName, description, price, features, buttonText, isPopular = false, href
}: PricingCardProps) => {
  const isLowCost = planName.toLowerCase().includes("lowcost") || isPopular;
 
  const cardClasses = `
    bg-white text-[#000833] shadow-[4px_4px_0px_#000833] flex-1 w-full max-w-sm px-7 py-8 flex flex-col transition-all duration-300
    border-2 border-[#000833] z-10 rounded-none hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000833]
    ${isPopular ? 'scale-100 md:scale-105 relative ring-2 ring-[#000833] shadow-[8px_8px_0px_#000833] hover:shadow-[10px_10px_0px_#000833]' : ''}
  `;
  
  const btnClasses = isLowCost
    ? "w-full py-3 bg-[#E9C400] text-[#000833] border-2 border-black hover:bg-[#000833] hover:text-white font-display uppercase font-bold text-[16px] transition-colors rounded-none justify-center flex items-center shadow-[2px_2px_0px_#000]"
    : "w-full py-3 bg-white text-[#000833] border-2 border-black hover:bg-[#E9C400] font-display uppercase font-bold text-[16px] transition-colors rounded-none justify-center flex items-center shadow-[2px_2px_0px_#000]";
 
  const buttonContent = (
    <button className={btnClasses}>
      {buttonText}
    </button>
  );
 
  return (
    <GlowCard
      glowColor={isLowCost ? "yellow" : "blue"}
      radius={0}
      border={2}
      borderColor="#000833"
      backdrop="#fff"
      customSize
      className={cardClasses.trim()}
    >
      <div className="relative z-10 flex flex-col h-full flex-1">
        {/* Conditional Header */}
        <div className={`p-4 border-b-2 border-[#000833] -mx-7 -mt-8 mb-8 flex justify-between items-center ${isLowCost ? 'bg-[#000833] text-white' : 'bg-[#E9ECEF] text-[#000833]'}`}>
          <h3 className="text-2xl font-bold font-display uppercase tracking-wider leading-none">{planName}</h3>
          {isPopular && (
            <span className="bg-[#E9C400] text-[10px] font-mono font-bold px-2 py-0.5 border-2 border-black uppercase text-black leading-none">
              Masivo
            </span>
          )}
        </div>
 
        <div className="mb-4">
          <p className="text-sm text-foreground/75 mt-2 font-sans min-h-10 leading-relaxed">{description}</p>
        </div>
        <div className="my-6 flex items-baseline gap-1">
          <span className="text-4xl font-bold font-display text-foreground tracking-tight uppercase">
            {price}
          </span>
        </div>
        <div className="w-full mb-6 border-b border-dotted border-[#000833]"></div>
        <ul className="flex flex-col gap-3 text-[14px] text-foreground/90 mb-8 font-sans flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2.5">
              <CheckIcon className="text-primary w-4.5 h-4.5 mt-0.5 flex-shrink-0" /> 
              <span className="text-sm font-semibold font-mono uppercase tracking-wider text-black">{feature}</span>
            </li>
          ))}
        </ul>
        {href ? (
          <Link href={href} className="w-full mt-auto block">
            {buttonContent}
          </Link>
        ) : (
          <div className="mt-auto w-full">
            {buttonContent}
          </div>
        )}
      </div>
    </GlowCard>
  );
};
 
 
// --- EXPORTED Customizable Page Component --- //
 
interface ModernPricingPageProps {
  /** The main title. Can be a string or a ReactNode for more complex content. */
  title: React.ReactNode;
  /** The subtitle text appearing below the main title. */
  subtitle: React.ReactNode;
  /** An array of plan objects that conform to PricingCardProps. */
  plans: PricingCardProps[];
  /** Whether to show the animated WebGL background. Defaults to true. */
  showAnimatedBackground?: boolean;
}
 
export const ModernPricingPage = ({
  title,
  subtitle,
  plans,
}: ModernPricingPageProps) => {
  return (
    <div className="bg-white text-[#000833] py-24 min-h-screen w-full relative flex items-center border-t-2 border-black overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]"></div>
 
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-[60px] flex flex-col items-center justify-center">
        <div className="w-full max-w-3xl text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-black text-black font-bold uppercase tracking-wider text-xs mb-4 font-display">
            Esquema Tarifario
          </span>
          <h2 className="text-[36px] md:text-[54px] font-bold leading-tight tracking-tight text-foreground font-display uppercase">
            {title}
          </h2>
          <p className="mt-4 text-[16px] md:text-[18px] text-[#000833] max-w-2xl mx-auto font-sans leading-relaxed">
            {subtitle}
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-6 justify-center items-stretch w-full max-w-5xl">
          {plans.map((plan) => <PricingCard key={plan.planName} {...plan} />)}
        </div>
      </div>
    </div>
  );
};
