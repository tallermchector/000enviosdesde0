"use client";

import React from 'react';
import ElegantTrackingCard from './elegant-tracking-card';

export default function TrackingCard({ steps, inView }: { steps: any[]; inView: boolean }) {
  return <ElegantTrackingCard steps={steps} inView={inView} />;
}
