import React, { useEffect } from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router';
import { Navbar, Footer } from './AuraApp';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';

const DEFAULT_NAV_OFFSET = 96;

const getScrollOffset = () => {
  const nav = document.querySelector('nav');
  if (!nav) {
    return DEFAULT_NAV_OFFSET;
  }

  return nav.getBoundingClientRect().height + 16;
};

export function Layout() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      let frameId: number | undefined;
      let attempts = 0;

      const scrollToTarget = () => {
        const element = document.getElementById(id);
        if (element) {
          const top = element.getBoundingClientRect().top + window.scrollY - getScrollOffset();
          window.scrollTo({ top: Math.max(top, 0), left: 0, behavior: 'smooth' });
          return;
        }

        if (attempts < 20) {
          attempts += 1;
          frameId = window.requestAnimationFrame(scrollToTarget);
        }
      };

      frameId = window.requestAnimationFrame(scrollToTarget);

      return () => {
        if (frameId !== undefined) {
          window.cancelAnimationFrame(frameId);
        }
      };
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-[var(--color-brand-dark)] text-[var(--color-brand-creme)] selection:bg-[var(--color-brand-accent)] selection:text-[var(--color-brand-dark)] font-sans antialiased overflow-x-hidden flex flex-col relative">
      <ScrollRestoration />
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[var(--color-brand-orange)] origin-left z-[100]" 
        style={{ scaleX }} 
      />
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
