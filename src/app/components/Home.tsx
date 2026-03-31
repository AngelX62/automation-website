import React from 'react';
import { Hero, Features, Showcase, Pricing, CTA } from './AuraApp';
import { motion } from 'motion/react';

export function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <Hero />
      <Features />
      <Showcase />
      <Pricing />
      <CTA />
    </motion.div>
  );
}
