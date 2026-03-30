import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Navbar, Footer } from './AuraApp';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';

export function Layout() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const location = useLocation();

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    if (location.hash) {
      const id = location.hash.replace('#', '');
      timeoutId = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-[var(--color-brand-creme)] text-[var(--color-brand-dark)] selection:bg-[var(--color-brand-dark)] selection:text-[var(--color-brand-creme)] font-sans antialiased overflow-x-hidden flex flex-col">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand-dark origin-left z-[100]" 
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
