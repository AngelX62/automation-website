import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Link, useLocation } from 'react-router';

import { useLayoutChrome } from './layout-chrome';
import { HoverBorderGradient } from './ui/hover-border-gradient';

const DEFAULT_NAV_OFFSET = 96;

const LazyDottedSurface = React.lazy(async () => {
  const module = await import('./ui/dotted-surface');
  return { default: module.DottedSurface };
});

const getScrollOffset = () => {
  const nav = document.querySelector('header');
  if (!nav) {
    return DEFAULT_NAV_OFFSET;
  }

  return nav.getBoundingClientRect().height + 16;
};

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (!element) {
    return;
  }

  const top = element.getBoundingClientRect().top + window.scrollY - getScrollOffset();
  window.scrollTo({ top: Math.max(top, 0), left: 0, behavior: 'smooth' });
};

function IntroSurfaceFallback() {
  return (
    <>
      <div className="pointer-events-none absolute inset-x-[-18%] inset-y-[-6%] translate-y-[30%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.045),rgba(255,255,255,0.012)_30%,transparent_68%)] opacity-75 blur-[70px] md:translate-y-[22%]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,5,0.98)_0%,rgba(3,3,5,0.9)_18%,rgba(3,3,5,0.42)_40%,rgba(3,3,5,0.08)_58%,rgba(3,3,5,0.16)_78%,rgba(3,3,5,0.4)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[46%] bg-[radial-gradient(ellipse_at_center,rgba(3,3,5,0.86),rgba(3,3,5,0.36)_46%,rgba(3,3,5,0)_100%)] opacity-80" />
    </>
  );
}

function IntroSplash({
  onDismiss,
  buttonRef,
}: {
  onDismiss: () => void;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: reduceMotion ? 0 : -20,
        filter: reduceMotion ? 'blur(0px)' : 'blur(12px)',
      }}
      transition={{
        duration: reduceMotion ? 0.2 : 0.55,
        ease: [0.16, 1, 0.3, 1],
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="intro-title"
      onKeyDown={(event) => {
        if (event.key === 'Tab') {
          event.preventDefault();
          buttonRef.current?.focus();
        }
      }}
      onWheelCapture={(event) => {
        event.preventDefault();
      }}
      onTouchMoveCapture={(event) => {
        event.preventDefault();
      }}
      className="fixed inset-0 z-[120] overflow-hidden overscroll-none touch-none bg-[var(--color-brand-dark)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.035),transparent_18%),linear-gradient(180deg,rgba(4,5,8,0.02)_0%,rgba(4,5,8,0.08)_100%)]" />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-[-14%] inset-y-[-10%] translate-y-[30%] scale-[1.12] md:translate-y-[20%] md:scale-[1.06]">
          <Suspense fallback={<IntroSurfaceFallback />}>
            <LazyDottedSurface variant="immersive" className="opacity-100" />
          </Suspense>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,5,0.98)_0%,rgba(3,3,5,0.88)_18%,rgba(3,3,5,0.42)_40%,rgba(3,3,5,0.08)_58%,rgba(3,3,5,0.16)_78%,rgba(3,3,5,0.4)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-[48%] bg-[radial-gradient(ellipse_at_center,rgba(3,3,5,0.88),rgba(3,3,5,0.42)_44%,rgba(3,3,5,0)_100%)] opacity-85" />
        <div className="absolute inset-x-0 bottom-[-4%] h-[28%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.032),transparent_74%)] opacity-60 blur-[64px]" />
      </div>

      <div className="absolute inset-0 z-20 flex items-start justify-center overflow-hidden px-6 pt-[17vh] pb-10 text-center md:pt-[16vh]">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0.2 : 0.7,
            delay: 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mx-auto flex w-full max-w-[72rem] flex-col items-center"
        >
          <h1
            id="intro-title"
            className="relative mt-[1.25rem] max-w-[11ch] text-balance text-center text-[2.75rem] font-sans font-medium leading-[0.94] tracking-tighter text-brand-creme drop-shadow-[0_12px_44px_rgba(0,0,0,0.42)] md:mt-[1.75rem] md:max-w-none md:text-[4.2rem]"
          >
            Never Let A{' '}
            <span className="bg-gradient-to-r from-[var(--color-brand-accent)] to-[var(--color-brand-accent-alt)] bg-clip-text text-transparent">
              Studio Inquiry
            </span>{' '}
            Stall
          </h1>

          <HoverBorderGradient
            type="button"
            onClick={onDismiss}
            ref={buttonRef}
            duration={10.5}
            containerClassName="mt-[clamp(14.5rem,34vh,19.5rem)] md:mt-[clamp(17.5rem,40vh,24rem)]"
          >
            Enter Avitus
            <span className="rounded-full border border-white/8 bg-white/7 p-1.5 text-[var(--color-brand-accent)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-white/10">
              <ArrowUpRight size={16} />
            </span>
          </HoverBorderGradient>
        </motion.div>
      </div>
    </motion.div>
  );
}

function HomeLanding() {
  return (
    <div className="w-full">
      <section id="home-hero" className="container mx-auto px-6 pt-16 pb-24 md:px-12 lg:pt-24 lg:pb-32">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex h-full flex-col justify-between lg:col-span-7"
          >
            <div>
              <h1 className="mb-8 text-5xl font-medium tracking-tighter leading-[0.9] text-[#1A1A1A] md:text-7xl lg:text-8xl">
                Intelligent <br className="hidden md:block" />
                Revenue <br className="hidden md:block" />
                <span className="text-[#4A5D4E]">Architecture.</span>
              </h1>
              <p className="mt-8 max-w-lg text-lg font-light leading-relaxed text-[#1A1A1A]/70 md:text-xl">
                Avitus designs lead handling and operational infrastructure for architecture, interior design, and
                select property firms. We create systems that capture inquiries, preserve discretion, and move
                opportunities forward with clarity.
              </p>
            </div>

            <div className="mt-16 lg:mt-32">
              <Link
                to="/process"
                className="inline-flex items-center gap-4 border-b border-[#1A1A1A] pb-1 text-sm font-semibold uppercase tracking-widest transition-colors hover:border-[#4A5D4E] hover:text-[#4A5D4E]"
              >
                Discover Our Methodology
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="aspect-[3/4] w-full overflow-hidden lg:col-span-5"
          >
            <img
              src="https://images.unsplash.com/photo-1769516923374-db476c12f92b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwbW9kZXJuJTIwYXJjaGl0ZWN0dXJlJTIwZXh0ZXJpb3IlMjBuZXV0cmFsfGVufDF8fHx8MTc3NjA2NzIyNHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Minimalist modern architecture"
              className="h-full w-full object-cover object-center opacity-90 grayscale-[20%] sepia-[10%]"
            />
          </motion.div>
        </div>
      </section>

      <section className="border-y border-[#E5E3DB] bg-[#F4F3EF]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 divide-y divide-[#E5E3DB] md:grid-cols-3 md:divide-y-0 md:divide-x">
            <div className="py-16 md:py-24 md:pr-12">
              <span className="mb-4 block text-sm font-medium text-[#4A5D4E]">01 Precision</span>
              <h3 className="mb-4 text-2xl font-medium tracking-tight">Engineered Systems</h3>
              <p className="font-light leading-relaxed text-[#1A1A1A]/70">
                We replace scattered lead handling with ordered pipelines that qualify, route, and respond with
                consistency. The result is a structure your firm can rely on.
              </p>
            </div>
            <div className="py-16 md:px-12 md:py-24">
              <span className="mb-4 block text-sm font-medium text-[#4A5D4E]">02 Discretion</span>
              <h3 className="mb-4 text-2xl font-medium tracking-tight">Invisible Intelligence</h3>
              <p className="font-light leading-relaxed text-[#1A1A1A]/70">
                The best systems are never noticed. Communication remains personal, timely, and aligned with the
                standards of a premium practice.
              </p>
            </div>
            <div className="py-16 md:py-24 md:pl-12">
              <span className="mb-4 block text-sm font-medium text-[#4A5D4E]">03 Scale</span>
              <h3 className="mb-4 text-2xl font-medium tracking-tight">Compounding Leverage</h3>
              <p className="font-light leading-relaxed text-[#1A1A1A]/70">
                When the structure is sound, growth no longer creates equal administrative weight. Capacity expands
                while operations remain composed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="disciplines" className="container mx-auto px-6 py-32 md:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="sticky top-32 text-4xl font-medium tracking-tighter md:text-5xl">Disciplines.</h2>
          </div>
          <div className="flex flex-col lg:col-span-7">
            {[
              {
                title: 'Client Acquisition Pipelines',
                desc: 'Structured intake systems that capture, qualify, and route serious inquiries with speed and precision.',
              },
              {
                title: 'Communication Architecture',
                desc: 'Response systems designed to feel thoughtful, measured, and entirely consistent with a premium client experience.',
              },
              {
                title: 'Pipeline Stewardship',
                desc: 'Follow through that protects momentum from first inquiry to consultation, proposal, and signed engagement.',
              },
              {
                title: 'Operational Reporting',
                desc: 'Clear visibility into lead flow, response quality, and conversion so decisions are made from signal rather than assumption.',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group flex flex-col justify-between gap-6 border-b border-[#E5E3DB] py-10 first:pt-0 last:border-0 md:flex-row md:items-baseline"
              >
                <div className="flex-1">
                  <h3 className="text-2xl font-medium tracking-tight transition-colors group-hover:text-[#4A5D4E] md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 max-w-md font-light leading-relaxed text-[#1A1A1A]/60">{service.desc}</p>
                </div>
                <div className="hidden duration-300 md:ml-auto md:block md:translate-x-0 md:translate-y-0 md:opacity-0 md:transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100">
                  <ArrowUpRight size={24} className="text-[#4A5D4E]" />
                </div>
              </div>
            ))}
            <div className="mt-12">
              <h3 className="text-3xl font-medium tracking-tighter md:text-4xl">Commissioned Infrastructure for Growth.</h3>
              <p className="mt-4 max-w-2xl font-light leading-relaxed text-[#1A1A1A]/70">
                We do not begin with software. We begin with structure. Every Avitus engagement is designed to reduce
                friction, protect brand quality, and support growth without unnecessary noise.
              </p>
              <Link
                to="/solutions"
                className="mt-8 inline-block border border-[#1A1A1A] px-6 py-3 text-xs font-medium uppercase tracking-widest transition-colors hover:bg-[#1A1A1A] hover:text-[#F9F8F6]"
              >
                View all solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [pendingScrollTarget, setPendingScrollTarget] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();
  const { setShowNavbar } = useLayoutChrome();
  const location = useLocation();
  const introButtonRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    setShowNavbar(!showIntro);

    return () => {
      setShowNavbar(true);
    };
  }, [showIntro, setShowNavbar]);

  useEffect(() => {
    if (!showIntro) {
      return;
    }

    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousHtmlOverscroll = document.documentElement.style.overscrollBehavior;
    const previousOverflow = document.body.style.overflow;
    const previousBodyOverscroll = document.body.style.overscrollBehavior;
    const previousTouchAction = document.body.style.touchAction;
    const previousPosition = document.body.style.position;
    const previousTop = document.body.style.top;
    const previousWidth = document.body.style.width;

    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.overscrollBehavior = 'none';
    document.body.style.overflow = 'hidden';
    document.body.style.overscrollBehavior = 'none';
    document.body.style.touchAction = 'none';
    document.body.style.position = 'fixed';
    document.body.style.top = '0';
    document.body.style.width = '100%';
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.documentElement.style.overscrollBehavior = previousHtmlOverscroll;
      document.body.style.overflow = previousOverflow;
      document.body.style.overscrollBehavior = previousBodyOverscroll;
      document.body.style.touchAction = previousTouchAction;
      document.body.style.position = previousPosition;
      document.body.style.top = previousTop;
      document.body.style.width = previousWidth;
    };
  }, [showIntro]);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) {
      return;
    }

    if (showIntro) {
      content.setAttribute('aria-hidden', 'true');
      content.setAttribute('inert', '');
    } else {
      content.removeAttribute('aria-hidden');
      content.removeAttribute('inert');
    }

    return () => {
      content.removeAttribute('aria-hidden');
      content.removeAttribute('inert');
    };
  }, [showIntro]);

  useEffect(() => {
    if (!showIntro) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      introButtonRef.current?.focus();
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [showIntro]);

  const handleDismissIntro = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    setPendingScrollTarget(location.hash ? location.hash.replace('#', '') : 'home-hero');
    setShowIntro(false);
  };

  return (
    <div className="relative">
      <motion.div
        ref={contentRef}
        initial={false}
        animate={
          showIntro
            ? {
                opacity: 0.88,
                y: reduceMotion ? 0 : 18,
                scale: reduceMotion ? 1 : 0.988,
              }
            : {
                opacity: 1,
                y: 0,
                scale: 1,
              }
        }
        transition={{
          duration: reduceMotion ? 0.2 : 0.72,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <HomeLanding />
      </motion.div>

      <AnimatePresence
        onExitComplete={() => {
          if (pendingScrollTarget) {
            scrollToSection(pendingScrollTarget);
            setPendingScrollTarget(null);
          }
        }}
      >
        {showIntro ? <IntroSplash onDismiss={handleDismissIntro} buttonRef={introButtonRef} /> : null}
      </AnimatePresence>
    </div>
  );
}
