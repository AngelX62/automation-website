import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SITE_LINKS } from '../site';

export function About() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="pb-24 pt-32 px-6 min-h-screen"
    >
      <div className="max-w-[85rem] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mb-24"
        >
          <h1 className="text-5xl md:text-7xl lg:text-[8vw] leading-[0.9] font-medium tracking-tighter text-brand-dark mb-8">
            The architects of <br />
            <span className="text-brand-muted italic font-light">automated</span> luxury.
          </h1>
          <p className="text-xl md:text-2xl text-brand-dark/70 font-medium max-w-2xl leading-relaxed">
            We are a collective of engineers, designers, and real estate veterans united by a single vision: to eliminate the friction between creative intent and operational reality.
          </p>
        </motion.div>

        <div className="w-full h-[50vh] md:h-[70vh] rounded-[2.5rem] overflow-hidden relative mb-32">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1743760521201-ddb298df18cd?q=80&w=1080"
            alt="Minimalist office"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-brand-dark/20 mix-blend-multiply" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start mb-32">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
             <h2 className="text-4xl md:text-5xl font-medium tracking-tighter leading-none mb-6">
               Leadership
             </h2>
             <p className="text-lg text-brand-dark/70 font-medium max-w-md">
               Our founding team combines deep expertise in artificial intelligence with a nuanced understanding of high-end spatial design.
             </p>
          </div>
          
          <div className="lg:col-span-7 flex flex-col gap-24">
            {/* Founder 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-start group">
              <div className="w-full md:w-64 h-80 shrink-0 rounded-2xl overflow-hidden bg-brand-dark/5">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1571062206768-cae921164c44?q=80&w=1080"
                  alt="Julian Vance"
                  className="w-full h-full object-cover object-top grayscale group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div>
                <h3 className="text-3xl font-medium tracking-tight mb-2">Julian Vance</h3>
                <div className="text-sm font-semibold tracking-widest uppercase text-brand-muted mb-6">Co-Founder & CEO</div>
                <p className="text-brand-dark/80 leading-relaxed font-medium">
                  Former Head of AI at a leading prop-tech decacorn. Julian recognized the massive gap between raw AI capabilities and the bespoke needs of luxury real estate. He leads the technical vision at Aura, focusing on deploying autonomous agents that augment human creativity rather than replacing it.
                </p>
              </div>
            </div>

            {/* Founder 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-start group">
              <div className="w-full md:w-64 h-80 shrink-0 rounded-2xl overflow-hidden bg-brand-dark/5">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1762341116682-cef250137a24?q=80&w=1080"
                  alt="Elena Rostova"
                  className="w-full h-full object-cover object-top grayscale group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div>
                <h3 className="text-3xl font-medium tracking-tight mb-2">Elena Rostova</h3>
                <div className="text-sm font-semibold tracking-widest uppercase text-brand-muted mb-6">Co-Founder & CCO</div>
                <p className="text-brand-dark/80 leading-relaxed font-medium">
                  With over a decade leading interior design for high-net-worth commercial properties globally, Elena bridges the gap between spatial aesthetics and digital implementation. She ensures that every generative output meets the uncompromising standards of luxury architecture.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-dark/10 pt-24 text-center pb-12">
           <h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-8">
             Build with us.
           </h2>
           <a
             href={SITE_LINKS.openRoles}
             className="inline-flex rounded-full bg-brand-dark px-10 py-5 text-lg font-medium text-brand-creme transition-all duration-300 hover:bg-brand-accent hover:shadow-2xl hover:shadow-brand-accent/20"
           >
             View Open Roles
           </a>
        </div>
      </div>
    </motion.div>
  );
}
