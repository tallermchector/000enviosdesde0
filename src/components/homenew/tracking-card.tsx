"use client";

import React from 'react';
import ElegantTrackingCard from './elegant-tracking-card';

interface Step {
  title: string;
  desc: string;
  time: string;
  icon: React.ElementType;
}

export default function TrackingCard({ steps, inView }: { steps: Step[]; inView: boolean }) {
  return <ElegantTrackingCard steps={steps} inView={inView} />;
}
