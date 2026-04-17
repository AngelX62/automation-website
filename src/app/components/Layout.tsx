import { useEffect, useMemo, useState } from 'react';
import { Outlet, Link, ScrollRestoration, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

import { LayoutChromeContext } from './layout-chrome';
import { Logo } from './Logo';

const NAV_LINKS = [
  { name: 'Solutions', path: '/solutions' },
  { name: 'Process', path: '/process' },
  { name: 'About', path: '/about' },
] as const;

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export function Layout() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const chromeValue = useMemo(() => ({ showNavbar, setShowNavbar }), [showNavbar]);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <LayoutChromeContext.Provider value={chromeValue}>
      <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#F9F8F6] font-sans text-[#1A1A1A] antialiased selection:bg-[#4A5D4E] selection:text-[#F9F8F6]">
        <ScrollRestoration />
        <motion.div className="fixed left-0 right-0 top-0 z-[100] h-1 origin-left bg-[#4A5D4E]" style={{ scaleX }} />

        <AnimatePresence initial={false}>
          {showNavbar ? (
            <motion.header
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                'fixed left-0 right-0 top-0 z-50 border-b transition-all duration-500 ease-in-out',
                isScrolled
                  ? 'border-[#E5E3DB] bg-[#F9F8F6]/90 py-4 backdrop-blur-md'
                  : 'border-transparent bg-transparent py-6',
              )}
            >
              <div className="container mx-auto flex items-center justify-between px-6 md:px-12">
                <Link to="/" className="group flex items-center gap-3 transition-opacity hover:opacity-70">
                  <Logo className="h-5 w-5 text-[#1A1A1A] transition-colors group-hover:text-[#4A5D4E] md:h-6 md:w-6" />
                  <span className="text-xl font-medium tracking-tight md:text-2xl">Avelyx.</span>
                </Link>

                <nav className="hidden items-center gap-10 md:flex">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={cn(
                        'text-sm font-medium uppercase tracking-wide transition-colors hover:text-[#4A5D4E]',
                        location.pathname === link.path ? 'text-[#4A5D4E]' : 'text-[#1A1A1A]/60',
                      )}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Link
                    to="/contact"
                    className="ml-4 border border-[#1A1A1A] px-5 py-2.5 text-xs font-medium uppercase tracking-widest transition-all duration-300 hover:bg-[#1A1A1A] hover:text-[#F9F8F6]"
                  >
                    Book Consultation
                  </Link>
                </nav>

                <button
                  type="button"
                  className="p-2 -mr-2 text-[#1A1A1A] md:hidden"
                  aria-expanded={mobileMenuOpen}
                  aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                  onClick={() => setMobileMenuOpen((open) => !open)}
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </motion.header>
          ) : null}
        </AnimatePresence>

        <AnimatePresence>
          {showNavbar && mobileMenuOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-40 flex h-screen flex-col bg-[#F9F8F6] px-6 pb-6 pt-24"
            >
              <nav className="mt-12 flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <Link key={link.path} to={link.path} className="border-b border-[#E5E3DB] pb-4 text-3xl font-light tracking-tight">
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="mt-8 bg-[#1A1A1A] px-6 py-4 text-center text-sm font-medium uppercase tracking-widest text-[#F9F8F6]"
                >
                  Book Consultation
                </Link>
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <main className="flex-grow pt-24 md:pt-32">
          <AnimatePresence mode="wait">
            <Outlet key={location.pathname} />
          </AnimatePresence>
        </main>

        <footer className="mt-24 border-t border-[#E5E3DB] bg-[#F9F8F6] pt-16 pb-8 md:mt-40">
          <div className="container mx-auto px-6 md:px-12">
            <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">
              <div className="md:col-span-2">
                <Link to="/" className="group mb-6 flex w-fit items-center gap-3 transition-opacity hover:opacity-70">
                  <Logo className="h-6 w-6 text-[#1A1A1A] transition-colors group-hover:text-[#4A5D4E]" />
                  <span className="text-2xl font-medium tracking-tight">Avelyx.</span>
                </Link>
                <p className="max-w-sm text-sm leading-relaxed text-[#1A1A1A]/60">
                  Architecting intelligent automation and precise lead pipelines for design, real estate, and
                  structural practices.
                </p>
              </div>

              <div>
                <h4 className="mb-6 text-xs font-semibold uppercase tracking-widest text-[#1A1A1A]">Navigation</h4>
                <ul className="space-y-4">
                  {NAV_LINKS.map((link) => (
                    <li key={link.path}>
                      <Link to={link.path} className="text-sm text-[#1A1A1A]/70 transition-colors hover:text-[#4A5D4E]">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-6 text-xs font-semibold uppercase tracking-widest text-[#1A1A1A]">Contact</h4>
                <ul className="space-y-4">
                  <li>
                    <Link to="/brand" className="text-sm text-[#1A1A1A]/70 transition-colors hover:text-[#4A5D4E]">
                      Brand Assets
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-sm text-[#1A1A1A]/70 transition-colors hover:text-[#4A5D4E]">
                      Inquiries
                    </Link>
                  </li>
                  <li>
                    <a href="mailto:hello@avenarc.com" className="text-sm text-[#1A1A1A]/70 transition-colors hover:text-[#4A5D4E]">
                      hello@avenarc.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-4 border-t border-[#E5E3DB] pt-8 md:flex-row">
              <p className="text-xs text-[#1A1A1A]/50">© {new Date().getFullYear()} Avelyx Systems. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="text-xs text-[#1A1A1A]/50 hover:text-[#1A1A1A]">
                  Privacy Policy
                </a>
                <a href="#" className="text-xs text-[#1A1A1A]/50 hover:text-[#1A1A1A]">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </LayoutChromeContext.Provider>
  );
}
