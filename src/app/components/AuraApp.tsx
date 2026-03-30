import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowUpRight, Database, Layers, Menu, X, Zap } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { NAV_LINKS, SITE_LINKS } from '../site';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 text-brand-creme mix-blend-difference md:px-6">
      <div className="mx-auto flex max-w-[85rem] items-center justify-between gap-4">
        <Link
          to="/"
          className="font-semibold tracking-tighter text-lg"
          onClick={() => setIsMenuOpen(false)}
        >
          Aura
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <Link key={link.to} to={link.to} className="hover:opacity-70 transition-opacity">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={SITE_LINKS.startProject}
            className="hidden rounded-full border border-brand-creme/20 px-4 py-2 text-sm font-medium transition-colors hover:border-brand-accent hover:bg-brand-accent hover:text-brand-creme md:inline-flex"
          >
            Start Project
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-creme/20 md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-4 max-w-[85rem] rounded-[2rem] border border-brand-creme/10 bg-brand-dark/95 p-5 shadow-2xl shadow-brand-dark/25 backdrop-blur"
          >
            <div className="flex flex-col gap-3 text-base font-medium">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="rounded-2xl px-4 py-3 transition-colors hover:bg-brand-creme/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={SITE_LINKS.startProject}
                className="mt-2 inline-flex justify-center rounded-full bg-brand-creme px-5 py-3 text-brand-dark transition-colors hover:bg-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Start Project
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-end px-6 pb-24 pt-32 overflow-hidden">
      <div className="max-w-[85rem] w-full mx-auto flex flex-col md:flex-row justify-between items-end gap-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <h1 className="text-[12vw] md:text-[8vw] leading-[0.9] font-medium tracking-tighter text-brand-dark">
            Intelligence<br />
            <span className="text-brand-muted italic font-light">for</span> Spaces.
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-sm"
        >
          <p className="text-lg text-brand-dark/70 leading-relaxed mb-8 font-medium">
            We build automated workflows and generative AI solutions exclusively for high-end real estate and visionary interior design studios.
          </p>
          <Link
            to={SITE_LINKS.services}
            className="group flex w-max items-center gap-3 rounded-full bg-brand-dark px-6 py-4 font-medium text-brand-creme transition-colors hover:bg-brand-accent"
          >
            Explore Capabilities
            <div className="bg-brand-creme/10 p-1.5 rounded-full group-hover:bg-brand-creme group-hover:text-brand-dark transition-colors">
              <ArrowUpRight size={16} />
            </div>
          </Link>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 right-0 w-[60%] md:w-[45%] h-[70vh] -z-10 origin-top-right mix-blend-multiply opacity-80"
      >
        <div className="w-full h-full rounded-bl-[4rem] overflow-hidden relative">
           <ImageWithFallback 
             src="https://images.unsplash.com/photo-1760072513442-9872656c1b07?q=80&w=1080" 
             alt="Modern architectural interior" 
             className="w-full h-full object-cover object-center grayscale opacity-80" 
           />
           <div className="absolute inset-0 bg-brand-creme/10 backdrop-blur-[2px]" />
        </div>
      </motion.div>
    </section>
  );
}

export function Features() {
  return (
    <section id="services" className="scroll-mt-28 py-24 px-6 bg-brand-dark text-brand-creme rounded-[2.5rem] mx-2 md:mx-6 my-12 relative overflow-hidden">
      <div className="max-w-[85rem] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tighter leading-none max-w-2xl">
            Systems that <br className="hidden md:block"/> work while you design.
          </h2>
          <p className="max-w-md text-brand-creme/60 text-lg leading-relaxed font-medium">
            Eliminate operational drag. Our AI agents handle lead qualification, virtual staging, and predictive market analysis seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[24rem]">
          {/* Card 1 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-7 bg-[#132235] rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group border border-brand-creme/5"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-creme/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="w-12 h-12 rounded-full bg-brand-creme/10 flex items-center justify-center mb-6 text-brand-creme z-10">
              <Zap size={20} />
            </div>
            
            <div className="relative z-10 mt-auto">
              <h3 className="text-3xl font-medium tracking-tight mb-3">Predictive Lead Nurture</h3>
              <p className="text-brand-creme/60 max-w-sm leading-relaxed">Automate your inbound pipeline. Smart agents qualify prospects and schedule viewings with high-intent buyers.</p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-5 bg-brand-creme text-brand-dark rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="w-12 h-12 rounded-full bg-brand-dark/5 flex items-center justify-center mb-6 z-10">
              <Layers size={20} />
            </div>
            
            <div className="absolute -right-12 -bottom-12 w-64 h-64 border-[1px] border-brand-dark/10 rounded-full" />
            <div className="absolute -right-4 -bottom-4 w-48 h-48 border-[1px] border-brand-dark/10 rounded-full" />
            
            <div className="relative z-10 mt-auto">
              <h3 className="text-3xl font-medium tracking-tight mb-3">Generative Staging</h3>
              <p className="text-brand-dark/70 leading-relaxed">Transform empty spaces in seconds. Deploy customized AI models trained on your specific aesthetic.</p>
            </div>
          </motion.div>

          {/* Card 3 - Image based */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-5 rounded-3xl overflow-hidden relative group h-[24rem] md:h-auto"
          >
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1771039621899-fbb8873b407d?q=80&w=1080" 
              alt="Detail" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-2xl font-medium tracking-tight text-white mb-2">Automated RFPs</h3>
              <p className="text-white/70 text-sm">Draft proposals 10x faster using historical project data.</p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-7 bg-[#132235] rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group border border-brand-creme/5"
          >
             <div className="w-12 h-12 rounded-full bg-brand-creme/10 flex items-center justify-center mb-6 text-brand-creme z-10">
              <Database size={20} />
            </div>
            
            <div className="relative z-10 mt-auto">
              <h3 className="text-3xl font-medium tracking-tight mb-3">Asset Intelligence Engine</h3>
              <p className="text-brand-creme/60 max-w-md leading-relaxed">Centralize your floor plans, renderings, and supplier catalogs. Ask questions naturally and instantly retrieve any asset.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Showcase() {
  return (
    <section id="work" className="scroll-mt-28 py-24 px-6 relative">
      <div className="max-w-[85rem] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-center">
          <div className="relative max-w-xl">
            <h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-brand-dark mb-6 leading-tight">
              Flawless implementation.
            </h2>
            <p className="text-lg text-brand-dark/70 leading-relaxed font-medium mb-10">
              We don't just sell software; we embed intelligent operations deeply into your existing firm's DNA. No generic outputs, no rigid templates. Just bespoke tools tailored for luxury.
            </p>
            
            <div className="flex gap-4 mb-12">
               <div className="bg-brand-dark text-brand-creme rounded-full px-5 py-2 text-sm font-medium">Bespoke AI Agents</div>
               <div className="border border-brand-dark/20 text-brand-dark rounded-full px-5 py-2 text-sm font-medium">Data Pipelines</div>
            </div>
            
            <div className="flex items-center gap-12 pt-8 border-t border-brand-dark/10">
              <div>
                <div className="text-4xl font-semibold tracking-tight text-brand-dark mb-1">98%</div>
                <div className="text-sm font-medium text-brand-muted">Task Automation</div>
              </div>
              <div>
                <div className="text-4xl font-semibold tracking-tight text-brand-dark mb-1">2.4x</div>
                <div className="text-sm font-medium text-brand-muted">Lead Conversion</div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[600px] w-full">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="absolute top-0 right-0 w-[80%] h-[80%] rounded-3xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1718013064534-010ca043a797?q=80&w=1080" 
                alt="Architecture" 
                className="w-full h-full object-cover" 
              />
            </motion.div>
            
            <motion.div 
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-0 left-0 w-[55%] h-[50%] rounded-2xl overflow-hidden border-8 border-brand-creme shadow-xl"
            >
              <div className="w-full h-full bg-brand-dark flex flex-col justify-center p-8">
                <div className="flex gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                </div>
                <div className="space-y-3">
                  <div className="h-2 w-3/4 bg-brand-creme/20 rounded-full" />
                  <div className="h-2 w-full bg-brand-creme/20 rounded-full" />
                  <div className="h-2 w-5/6 bg-brand-creme/20 rounded-full" />
                  <div className="h-2 w-1/2 bg-brand-creme/10 rounded-full mt-4" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section id="contact" className="scroll-mt-28 py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-brand-dark mb-8">
          Ready to scale your <br/> agency's output?
        </h2>
        <p className="text-xl text-brand-dark/60 font-medium mb-10 max-w-xl mx-auto">
          Schedule a private consultation to discuss how custom automation can transform your operations.
        </p>
        <a
          href={SITE_LINKS.consultation}
          className="inline-flex rounded-full bg-brand-dark px-10 py-5 text-lg font-medium text-brand-creme transition-all duration-300 hover:bg-brand-accent hover:shadow-2xl hover:shadow-brand-accent/20"
        >
          Book Consultation
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-brand-dark/10 py-12 px-6">
      <div className="max-w-[85rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-brand-dark/60 font-medium text-sm">
        <div>© 2026 Aura Automation.</div>
        <div className="flex gap-8">
          <Link to={SITE_LINKS.services} className="hover:text-brand-dark transition-colors">Services</Link>
          <Link to={SITE_LINKS.about} className="hover:text-brand-dark transition-colors">About</Link>
          <a href={SITE_LINKS.consultation} className="hover:text-brand-dark transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
