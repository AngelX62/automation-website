import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SITE_LINKS } from '../site';

export function About() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative min-h-screen px-6 pb-20 pt-28 md:pt-32"
    >
      <div className="absolute right-0 top-0 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-bl from-[var(--color-brand-accent)]/10 to-transparent blur-[100px]" />

      <div className="mx-auto max-w-[85rem]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 max-w-[52rem]"
        >
          <h1 className="mb-7 text-4xl font-medium leading-[0.92] tracking-tighter text-brand-creme md:text-[4.7rem] lg:text-[5.7rem]">
            Built for teams where <br />
            <span className="bg-gradient-to-r from-[var(--color-brand-accent)] to-[var(--color-brand-accent-alt)] bg-clip-text text-transparent">
              every inquiry
            </span>{' '}
            matters.
          </h1>
          <p className="max-w-xl text-lg font-medium leading-relaxed text-brand-muted md:text-[1.35rem]">
            Aura builds AI automation workflows with AI agents for real estate firms and interior design studios that
            need faster qualification, cleaner routing, and more consistent follow-up.
          </p>
        </motion.div>

        <div className="relative mb-24 h-[44vh] overflow-hidden rounded-[2.5rem] border border-brand-border shadow-2xl shadow-black/50 md:h-[58vh]">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1400"
            alt="Modern residential property exterior"
            className="h-full w-full object-cover opacity-62 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/25 to-transparent" />
          <div className="absolute bottom-6 left-6 rounded-full border border-brand-border/80 bg-brand-dark/72 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-muted">
            Real estate and design operations
          </div>
        </div>

        <div className="mb-24 grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-10">
          <div className="lg:sticky lg:top-32">
            <h2 className="mb-5 text-[2.15rem] font-medium leading-none tracking-tighter text-brand-creme md:text-[2.75rem]">
              Leadership
            </h2>
            <p className="max-w-md text-lg font-medium text-brand-muted">
              The team behind Aura comes from proptech, automation, and high-touch sales environments where response
              speed and workflow clarity directly affect revenue.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="rounded-[1.85rem] border border-brand-border bg-brand-surface/92 p-6 transition-colors hover:border-brand-border/80 md:p-7">
              <div className="grid gap-6 md:grid-cols-[13rem_1fr] md:items-start">
                <div className="relative h-56 overflow-hidden rounded-[1.25rem] border border-brand-border bg-brand-dark">
                  <ImageWithFallback
                    src="/images/laurentius-hanryan.png"
                    alt="Laurentius Hanryan"
                    className="h-full w-full object-cover object-top opacity-90"
                  />
                </div>
                <div>
                  <h3 className="text-[1.7rem] font-medium tracking-tight text-brand-creme md:text-[1.95rem]">
                    Laurentius Hanryan
                  </h3>
                  <div className="mb-5 mt-2 text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-orange)]">
                    Co-Founder & CEO
                  </div>
                  <p className="leading-relaxed text-brand-muted">
                    Former Head of AI at a leading prop-tech company. Laurentius designs automation systems that capture
                    demand, qualify intent, and move the next action to the right team without extra admin.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.85rem] border border-brand-border bg-brand-surface/92 p-6 transition-colors hover:border-brand-border/80 md:p-7">
              <div className="grid gap-6 md:grid-cols-[13rem_1fr] md:items-start">
                <div className="relative h-56 overflow-hidden rounded-[1.25rem] border border-brand-border bg-brand-dark">
                  <ImageWithFallback
                    src="/images/christopher-hanryan.jpeg"
                    alt="Christopher Hanryan"
                    className="h-full w-full object-cover object-center opacity-85"
                  />
                </div>
                <div>
                  <h3 className="text-[1.7rem] font-medium tracking-tight text-brand-creme md:text-[1.95rem]">
                    Christopher Hanryan
                  </h3>
                  <div className="mb-5 mt-2 text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-accent)]">
                    Co-Founder & CTO
                  </div>
                  <p className="leading-relaxed text-brand-muted">
                    Christopher leads Aura&apos;s technical strategy, building the AI systems, workflow logic, and
                    product infrastructure that keep intake, qualification, and routing fast, reliable, and scalable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative border-t border-brand-border pt-16 text-center">
          <div className="absolute left-1/2 top-0 -z-10 h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-[var(--color-brand-orange)]/6 blur-[85px]" />
          <h2 className="mx-auto mb-4 max-w-[14ch] text-balance text-[2rem] font-medium tracking-tighter text-brand-creme md:max-w-[13ch] md:text-[2.8rem]">
            See the product workflow live.
          </h2>
          <p className="mx-auto mb-7 max-w-lg text-base text-brand-muted">
            We’ll show the intake, qualification, and routing layer on a live walkthrough built around your team.
          </p>
          <Link
            to={SITE_LINKS.bookDemo}
            className="inline-flex rounded-full bg-[var(--color-brand-orange)] px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:bg-opacity-90"
          >
            Book Demo
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
