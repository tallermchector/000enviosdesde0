"use client";

import React from "react";
import { motion, useInView, Variants } from "framer-motion";

interface TimelineContentProps {
  children: React.ReactNode;
  animationNum?: number;
  timelineRef: React.RefObject<Element | null>;
  customVariants?: Variants;
  as?: string;
  className?: string;
}

export const TimelineContent: React.FC<TimelineContentProps> = ({
  children,
  animationNum = 0,
  timelineRef,
  customVariants,
  as = "div",
  className = "",
}) => {
  // Map standard tag names to their motion equivalents
  const motionKey = as as keyof typeof motion;
  const Component = (motionKey in motion ? motion[motionKey] : motion.div) as React.ComponentType<{
    children?: React.ReactNode;
    initial?: string;
    animate?: string | boolean | object;
    variants?: Variants;
    custom?: number;
    className?: string;
  }>;

  // Track if the container is in view to trigger the animation group
  const isInView = useInView(timelineRef, { once: true, amount: 0.1 });

  return (
    <Component
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={customVariants}
      custom={animationNum}
      className={className}
    >
      {children}
    </Component>
  );
};
