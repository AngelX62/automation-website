import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowUpRight,
  CheckCircle2,
  Database,
  LayoutGrid,
  Menu,
  Paintbrush,
  Star,
  X,
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SITE_LINKS } from '../site';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -14, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -14, filter: 'blur(10px)' }}
      transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-6"
    >
      <div className="mx-auto flex max-w-[85rem] items-center justify-between gap-4 rounded-full border border-brand-border/70 bg-brand-dark/78 px-4 py-3 text-brand-creme shadow-[0_16px_48px_rgba(0,0,0,0.28)] backdrop-blur-md md:px-5">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-semibold tracking-tighter text-brand-creme"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-brand-accent to-brand-accent-alt" />
          Avitus
        </Link>
        <div className="hidden items-center gap-8 text-sm font-medium text-brand-muted md:flex">
          <Link to={SITE_LINKS.services} className="transition-colors hover:text-brand-creme">
            Inquiry Ops
          </Link>
          <Link to={SITE_LINKS.work} className="transition-colors hover:text-brand-creme">
            Workflow
          </Link>
          <Link to={SITE_LINKS.about} className="transition-colors hover:text-brand-creme">
            About
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to={SITE_LINKS.bookDemo}
            className="hidden items-center gap-2 rounded-full border border-brand-border bg-brand-surface px-5 py-2.5 text-sm font-medium text-brand-creme transition-all hover:bg-brand-border md:inline-flex"
          >
            Plan Your Walkthrough
            <ArrowUpRight size={14} />
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-border bg-brand-surface text-brand-creme md:hidden"
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
            className="mx-auto mt-4 max-w-[85rem] rounded-[1.9rem] border border-brand-border bg-brand-dark/95 p-5 text-brand-creme shadow-2xl shadow-black/30 backdrop-blur"
          >
            <div className="flex flex-col gap-3 text-sm font-semibold uppercase tracking-[0.12em]">
              <Link
                to={SITE_LINKS.services}
                className="rounded-2xl px-4 py-3 transition-colors hover:bg-brand-surface"
                onClick={() => setIsMenuOpen(false)}
              >
                Inquiry Ops
              </Link>
              <Link
                to={SITE_LINKS.work}
                className="rounded-2xl px-4 py-3 transition-colors hover:bg-brand-surface"
                onClick={() => setIsMenuOpen(false)}
              >
                Workflow
              </Link>
              <Link
                to={SITE_LINKS.about}
                className="rounded-2xl px-4 py-3 transition-colors hover:bg-brand-surface"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to={SITE_LINKS.bookDemo}
                className="mt-2 inline-flex justify-center rounded-full bg-brand-creme px-5 py-3 text-brand-dark transition-colors hover:bg-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Plan Your Walkthrough
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  );
}

export function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden px-6 pb-20 pt-28 text-center md:pb-24 md:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(96,135,176,0.16),transparent_23%),radial-gradient(circle_at_26%_62%,rgba(255,107,53,0.08),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(4,9,18,0)_36%,rgba(4,9,18,0.38)_72%,rgba(3,3,5,0.86)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:7rem_7rem] opacity-[0.035]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,5,0.12),rgba(3,3,5,0.34)_54%,rgba(3,3,5,0.92)_100%)]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto flex max-w-[68rem] flex-col items-center"
      >
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-brand-border/80 bg-brand-surface/70 px-3 py-1.5 text-xs font-medium text-brand-muted backdrop-blur-md">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--color-brand-orange)]" />
          Inquiry Operations For Commercial Interior Design Studios
        </div>

        <h1 className="mx-auto mb-6 max-w-[19ch] text-balance text-[9.6vw] font-semibold leading-[0.98] tracking-tighter text-brand-creme drop-shadow-[0_10px_40px_rgba(0,0,0,0.35)] md:max-w-[18ch] md:text-[6vw]">
          Give every serious studio inquiry a{' '}
          <span className="bg-gradient-to-r from-[var(--color-brand-accent)] to-[var(--color-brand-accent-alt)] bg-clip-text text-transparent">
            clear next step
          </span>
          .
        </h1>

        <p className="mb-9 max-w-2xl text-lg font-medium leading-relaxed text-brand-muted drop-shadow-[0_10px_30px_rgba(0,0,0,0.28)] md:text-xl">
          Avitus helps studios capture inquiries, filter out poor-fit requests, qualify the right opportunities, and
          keep consultation follow-up moving before the pipeline stalls.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link
            to={SITE_LINKS.services}
            className="group flex w-full items-center justify-center gap-3 rounded-full bg-[var(--color-brand-orange)] px-8 py-4 font-medium text-white transition-all hover:bg-opacity-90 sm:w-auto"
          >
            See Studio Workflow
            <div className="rounded-full bg-white/20 p-1.5 transition-colors group-hover:bg-white group-hover:text-[var(--color-brand-orange)]">
              <ArrowUpRight size={16} />
            </div>
          </Link>
          <Link
            to={SITE_LINKS.work}
            className="group flex w-full items-center justify-center gap-3 rounded-full border border-brand-border bg-brand-surface px-8 py-4 font-medium text-brand-creme transition-all hover:bg-brand-border sm:w-auto"
          >
            Plan Your Walkthrough
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto mt-16 w-full max-w-[74rem] overflow-hidden rounded-[2.75rem] border border-brand-border/70 bg-brand-surface shadow-[0_28px_100px_rgba(0,0,0,0.45)]"
      >
        <div className="relative flex h-14 items-center justify-between border-b border-brand-border/50 bg-brand-dark/65 px-6 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-brand-border/80 bg-brand-surface/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-muted md:flex">
            Routing live
          </div>
        </div>

        <div className="relative h-[20rem] md:h-[29rem]">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1080"
            alt="Architecture Dashboard"
            className="absolute inset-0 h-full w-full object-cover opacity-24 grayscale"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(162,120,182,0.11),transparent_28%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,14,0.2),rgba(5,8,14,0.72)_56%,rgba(5,8,14,0.94)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:7rem_7rem] opacity-[0.11]" />

          <div className="absolute right-5 top-5 rounded-full border border-brand-border/80 bg-brand-dark/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-muted md:right-6 md:top-6">
            5 studio inquiries ready for review
          </div>

          <div className="absolute inset-x-5 bottom-5 grid gap-4 md:grid-cols-[1.22fr_0.78fr] md:inset-x-6 md:bottom-6">
            <div className="rounded-[1.8rem] border border-brand-border/80 bg-brand-dark/78 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-md md:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-muted">
                    Inquiry flow
                  </p>
                  <h3 className="mt-2 text-xl font-medium tracking-tight text-brand-creme">
                    Studio pipeline
                  </h3>
                </div>
                <span className="rounded-full border border-[var(--color-brand-orange)]/25 bg-[var(--color-brand-orange)]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-orange)]">
                  Proposal request flagged
                </span>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted">
                    New inquiries
                  </p>
                  <p className="mt-2 text-[2rem] font-semibold tracking-tighter text-brand-creme">2,405</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted">
                    Good fit
                  </p>
                  <p className="mt-2 text-[2rem] font-semibold tracking-tighter text-brand-creme">318</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted">
                    Consults queued
                  </p>
                  <p className="mt-2 text-[2rem] font-semibold tracking-tighter text-brand-creme">42</p>
                </div>
              </div>

              <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-black/40">
                <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-[var(--color-brand-accent)] via-[var(--color-brand-accent-alt)] to-[var(--color-brand-orange)]" />
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-brand-muted">
                <span>Forms + inbox requests unified</span>
                <span className="hidden h-4 w-px bg-brand-border/70 md:block" />
                <span>Fit signals surfaced early</span>
                <span className="hidden h-4 w-px bg-brand-border/70 md:block" />
                <span>Owner reminders keep follow-up moving</span>
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-brand-border/80 bg-brand-dark/84 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-md md:p-6">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-muted">
                  Coordination now
                </p>
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[var(--color-brand-orange)]" />
              </div>

              <div className="mt-4 space-y-3 text-sm text-brand-muted">
                <div className="flex items-start justify-between gap-4 border-b border-brand-border/60 pb-3">
                  <div>
                    <p className="font-medium text-brand-creme">HQ fit-out inquiry</p>
                    <p className="mt-1 text-xs">Budget band and site-walk timing captured</p>
                  </div>
                  <span className="rounded-full bg-[var(--color-brand-accent)]/12 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-brand-accent)]">
                    Scored
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4 border-b border-brand-border/60 pb-3">
                  <div>
                    <p className="font-medium text-brand-creme">Showroom refresh brief</p>
                    <p className="mt-1 text-xs">Consultation request validated for scope and fit</p>
                  </div>
                  <span className="rounded-full bg-[var(--color-brand-accent-alt)]/12 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-brand-accent-alt)]">
                    Ready
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium text-brand-creme">Next action</p>
                    <p className="mt-1 text-xs">Assigned to Maya, summary sent, owner reminder queued</p>
                  </div>
                  <ArrowUpRight size={16} className="mt-1 text-brand-creme" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export function Features() {
  const operations = [
    {
      marker: '01',
      title: 'Inquiry Intake',
      description:
        'Capture website forms, inbox requests, referrals, and proposal inquiries in one structured intake layer.',
    },
    {
      marker: '02',
      title: 'Qualification Logic',
      description:
        'Filter poor-fit requests and surface budget, scope, timing, and stakeholder readiness before principals spend time on calls.',
    },
    {
      marker: '03',
      title: 'Ownership Routing',
      description:
        'Send the right summary, reminder, and next step to the right coordinator or principal before opportunities stall.',
    },
  ];

  return (
    <section id="services" className="relative z-10 bg-brand-dark px-6 py-20 md:py-24">
      <div className="mx-auto max-w-[85rem]">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <h2 className="max-w-2xl text-4xl font-medium leading-tight tracking-tighter text-brand-creme md:text-[2.85rem] lg:text-[3.55rem]">
            Pre-sales coordination for <br className="hidden md:block" /> studios where missed handoffs cost momentum.
          </h2>
          <p className="max-w-md text-lg font-medium leading-relaxed text-brand-muted">
            Most studios do not lose good work because demand disappears. They lose it when context gets scattered and
            the next owner is unclear.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.18fr_0.82fr]">
          <motion.div
            whileHover={{ y: -5 }}
            className="group relative flex min-h-[23rem] flex-col justify-between overflow-hidden rounded-[2.5rem] border border-brand-border bg-gradient-to-br from-[#131B2F] to-[#0A0F1A] p-8 md:p-10"
          >
            <div className="absolute right-0 top-0 h-[380px] w-[380px] translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-brand-accent)]/10 blur-[84px]" />

            <div className="relative z-10 flex items-start justify-between gap-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-brand-border bg-brand-dark text-brand-creme">
                <LayoutGrid size={24} />
              </div>
              <div className="rounded-full border border-brand-border/80 bg-brand-surface/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-muted">
                Operating layer
              </div>
            </div>

            <div className="relative z-10 mt-auto max-w-xl">
              <h3 className="mb-4 text-[1.85rem] font-medium tracking-tight text-brand-creme md:text-[2.25rem]">
                Studio Pipeline Console
              </h3>
              <p className="text-lg leading-relaxed text-brand-muted">
                Track every inquiry, surface fit, and keep next-step ownership visible in one coordination view built
                for commercial interior design teams.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-brand-border/70 pt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-muted">
                <span>Fit signals surfaced early</span>
                <span className="hidden h-4 w-px bg-brand-border/70 md:block" />
                <span>Ownership stays visible</span>
                <span className="hidden h-4 w-px bg-brand-border/70 md:block" />
                <span>Briefs and requests unified</span>
              </div>
            </div>

            <div className="absolute bottom-8 right-8 translate-x-4 opacity-0 text-[var(--color-brand-orange)] transition-all group-hover:translate-x-0 group-hover:opacity-100">
              <ArrowUpRight size={30} />
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="group relative flex min-h-[23rem] flex-col justify-between overflow-hidden rounded-[2.5rem] border border-brand-border p-8"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1080"
              alt="Interior Detail"
              className="absolute inset-0 h-full w-full object-cover opacity-40 grayscale transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-dark/45 to-brand-dark" />

            <div className="relative z-10 flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md">
                <Paintbrush size={20} />
              </div>
              <div className="rounded-full border border-white/15 bg-brand-dark/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">
                Fit screening
              </div>
            </div>

            <div className="relative z-10 mt-auto max-w-sm">
              <h3 className="mb-2 text-[1.65rem] font-medium tracking-tight text-white">Consultation Fit Screening</h3>
              <p className="leading-relaxed text-white/72">
                Review project fit, budget alignment, timeline, and stakeholder readiness before your team gives up
                calendar time.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 border-y border-brand-border/80">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {operations.map((operation, index) => (
              <div key={operation.title} className="px-0 py-8 md:px-8 md:py-10">
                <div
                  className={`h-full ${
                    index === 0 ? '' : 'border-t border-brand-border/70 pt-8 md:border-t-0 md:pt-0'
                  } ${index < operations.length - 1 ? 'md:border-r md:border-brand-border/70 md:pr-8' : ''}`}
                >
                  <div className="text-sm font-light tracking-[0.2em] text-brand-muted">{operation.marker}</div>
                  <h3 className="mt-4 text-[1.5rem] font-medium tracking-tight text-brand-creme">{operation.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-brand-muted">{operation.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Showcase() {
  return (
    <section id="work" className="relative border-t border-brand-border px-6 py-24 md:py-28">
      <div className="mx-auto max-w-[85rem]">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.84fr_1.16fr] lg:gap-10">
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-accent)]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-accent)]">
              <Star size={12} fill="currentColor" /> Pre-Sales Coordination Live
            </div>
            <h2 className="mb-6 text-4xl font-medium leading-[1.08] tracking-tighter text-brand-creme md:text-[3.3rem]">
              The workflow layer behind cleaner studio follow-through.
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-brand-muted">
              This is what the operating layer looks like when briefs, fit signals, and next actions stay visible in
              one place.
            </p>
            <Link
              to={SITE_LINKS.bookDemo}
              className="inline-flex rounded-full bg-brand-creme px-8 py-4 font-medium text-brand-dark transition-colors hover:bg-white"
            >
              Plan Your Walkthrough
            </Link>
          </div>

          <div className="relative min-h-[34rem] overflow-hidden rounded-[2.65rem] border border-brand-border bg-[radial-gradient(circle_at_55%_24%,rgba(148,119,171,0.12),transparent_20%),linear-gradient(180deg,#0c1220_0%,#090c14_100%)] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.35)] md:p-6">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:5.75rem_5.75rem] opacity-[0.09]" />

            <div className="absolute left-5 top-5 rounded-full border border-brand-border/80 bg-brand-dark/78 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-muted">
              Studio intake live
            </div>
            <div className="absolute bottom-5 right-5 rounded-full border border-brand-border/80 bg-brand-dark/78 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-muted">
              Owner reminders active
            </div>

            <div className="relative grid h-full gap-5 pt-12 md:grid-cols-[0.55fr_0.45fr] md:pt-10">
              <div className="rounded-[1.85rem] border border-brand-border/75 bg-brand-dark/55 p-5 backdrop-blur-sm md:p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-muted">Inquiry intake</p>
                <div className="mt-5 space-y-3">
                  <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.03] px-4 py-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-medium text-brand-creme">Cedar Workplace</p>
                        <p className="mt-1 text-xs text-brand-muted">Office fit-out inquiry for a 22,000 sq ft headquarters</p>
                      </div>
                      <span className="rounded-full bg-[var(--color-brand-orange)]/12 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-brand-orange)]">
                        New
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-b border-brand-border/60 pb-3 text-sm text-brand-muted">
                    <div>
                      <p className="font-medium text-brand-creme">Harbor & Finch</p>
                      <p className="mt-1 text-xs">Consultation request from a workplace design brief</p>
                    </div>
                    <span className="text-xs">02 min</span>
                  </div>

                  <div className="flex items-center justify-between border-b border-brand-border/60 pb-3 text-sm text-brand-muted">
                    <div>
                      <p className="font-medium text-brand-creme">Monroe Advisory</p>
                      <p className="mt-1 text-xs">Proposal request and email thread merged into one summary</p>
                    </div>
                    <span className="text-xs">05 min</span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-brand-muted">
                    <div>
                      <p className="font-medium text-brand-creme">Atelier West</p>
                      <p className="mt-1 text-xs">Stakeholder intro request with floorplan and site notes attached</p>
                    </div>
                    <span className="text-xs">09 min</span>
                  </div>
                </div>
              </div>

              <div className="grid gap-5 md:grid-rows-[1.02fr_0.98fr]">
                <div className="rounded-[1.85rem] border border-brand-border/75 bg-brand-dark/55 p-5 backdrop-blur-sm md:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-muted">
                        Qualification signal
                      </p>
                      <h3 className="mt-3 text-xl font-medium tracking-tight text-brand-creme">
                        Budget, scope, and timing surfaced early
                      </h3>
                    </div>
                    <div className="rounded-full bg-[var(--color-brand-accent)]/12 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-accent)]">
                      High intent
                    </div>
                  </div>

                  <div className="mt-5 rounded-[1.35rem] border border-white/8 bg-white/[0.03] p-4">
                    <p className="text-sm font-medium text-brand-creme">Tenant amenity redesign inquiry</p>
                    <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                      Budget band confirmed, leadership stakeholder identified, and a site walk requested within two
                      weeks.
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3 text-xs font-medium text-brand-muted">
                    <span className="rounded-full border border-brand-border px-3 py-1.5">Budget aligned</span>
                    <span className="rounded-full border border-brand-border px-3 py-1.5">Timeline clear</span>
                    <span className="rounded-full border border-brand-border px-3 py-1.5">Fit approved</span>
                  </div>
                </div>

                <div className="rounded-[1.85rem] border border-brand-border/75 bg-brand-dark/55 p-5 backdrop-blur-sm md:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-muted">
                        Consultation coordination
                      </p>
                      <h3 className="mt-3 text-xl font-medium tracking-tight text-brand-creme">
                        Owner reminders keep next steps moving
                      </h3>
                    </div>
                    <CheckCircle2 size={18} className="text-[var(--color-brand-accent-alt)]" />
                  </div>

                  <div className="mt-5 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-medium text-brand-creme">Assigned owner</p>
                        <p className="mt-1 text-sm text-brand-muted">Maya Chen</p>
                      </div>
                      <span className="rounded-full bg-[var(--color-brand-accent-alt)]/12 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-brand-accent-alt)]">
                        Confirmed
                      </span>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-medium text-brand-creme">Follow-up action</p>
                        <p className="mt-1 text-sm text-brand-muted">Consultation brief sent and principal reminder scheduled</p>
                      </div>
                      <Database size={18} className="mt-1 text-[var(--color-brand-orange)]" />
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-black/40">
                      <div className="h-full w-[84%] rounded-full bg-gradient-to-r from-[var(--color-brand-accent)] to-[var(--color-brand-orange)]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <section className="relative border-y border-brand-border bg-brand-surface px-6 py-20">
      <div className="mx-auto max-w-[85rem]">
        <div className="mb-14 text-center">
          <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-muted">PLANS</div>
          <h2 className="mb-4 text-[2.3rem] font-medium tracking-tighter text-brand-creme md:text-[2.9rem]">
            Engagements Structured by Scope.
          </h2>
          <p className="mx-auto max-w-xl text-lg text-brand-muted">
            Every Avitus engagement begins with implementation and continues through ongoing stewardship. The
            distinction between plans is not access to software. It is the depth of infrastructure we design and
            steward on your behalf.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex flex-col rounded-[2rem] border border-brand-border bg-brand-dark p-7 md:p-8">
            <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-muted">01</div>
            <div className="mb-2 text-3xl font-semibold tracking-tighter text-brand-creme">Foundation</div>
            <p className="mb-3 text-sm leading-relaxed text-brand-creme/80">
              For firms that need every serious inquiry captured. Qualified. Acknowledged with precision.
            </p>
            <p className="mb-7 text-sm leading-relaxed text-brand-muted">
              Foundation establishes the core acquisition infrastructure. We configure your intake flow. Your
              qualification logic. Your routing structure. Your first response layer. New opportunities are received
              and handled without delay. It is designed for firms that want operational discipline at the front of the
              pipeline without unnecessary complexity.
            </p>

            <div className="mb-9 flex-1 space-y-4">
              <p className="text-sm leading-relaxed text-brand-creme/80">
                <span className="font-medium text-brand-creme">Typically included.</span> Lead capture and
                consolidation. Qualification criteria and scoring. Routing logic. First response infrastructure. One
                foundational follow up sequence. Recurring reporting.
              </p>
              <p className="text-sm leading-relaxed text-brand-creme/80">
                <span className="font-medium text-brand-creme">Commercial structure.</span> Implementation fee. Monthly
                stewardship retainer.
              </p>
            </div>
            <Link
              to={SITE_LINKS.bookDemo}
              className="inline-flex w-full items-center justify-center rounded-full border border-brand-border bg-brand-surface py-4 font-medium text-brand-creme transition-colors hover:bg-brand-border"
            >
              Plan Your Walkthrough
            </Link>
          </div>

          <div className="relative flex flex-col rounded-[2rem] border border-transparent bg-gradient-to-b from-[var(--color-brand-orange)] to-[#d95c2b] p-7 shadow-2xl shadow-[var(--color-brand-orange)]/20 md:-translate-y-3 md:p-8">
            <div className="absolute right-8 top-0 rounded-b-lg bg-brand-dark px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-brand-orange)]">
              Most Common
            </div>
            <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">02</div>
            <div className="mb-2 text-3xl font-semibold tracking-tighter text-white">Signature</div>
            <p className="mb-3 text-sm leading-relaxed text-white/90">
              For firms that require stronger follow through. Clearer pipeline discipline. More deliberate conversion.
            </p>
            <p className="mb-7 text-sm leading-relaxed text-white/80">
              Signature extends beyond intake into the stewardship of active opportunities. We design the communication
              and sequencing layer that keeps strong leads moving. It surfaces stalled proposals. It reduces the quiet
              loss that often occurs between first contact and signed engagement. It is intended for firms where
              response quality and pipeline continuity are commercially significant.
            </p>

            <div className="mb-9 flex-1 space-y-4">
              <p className="text-sm leading-relaxed text-white/90">
                <span className="font-medium text-white">Typically included.</span> Everything in Foundation. Deeper
                follow up architecture. More nuanced routing logic. Escalation handling. Stronger proposal stage
                discipline. A more active reporting and refinement cadence.
              </p>
              <p className="text-sm leading-relaxed text-white/90">
                <span className="font-medium text-white">Commercial structure.</span> Implementation fee. Monthly
                stewardship retainer.
              </p>
            </div>
            <Link
              to={SITE_LINKS.bookDemo}
              className="inline-flex w-full items-center justify-center rounded-full bg-brand-dark py-4 font-medium text-white transition-colors hover:bg-black"
            >
              Plan Your Walkthrough
            </Link>
          </div>

          <div className="flex flex-col rounded-[2rem] border border-brand-border bg-brand-dark p-7 md:p-8">
            <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-muted">03</div>
            <div className="mb-2 text-3xl font-semibold tracking-tighter text-brand-creme">Bespoke</div>
            <p className="mb-3 text-sm leading-relaxed text-brand-creme/80">
              For firms with greater operational complexity. Broader requirements. A need for commissioned
              infrastructure beyond the core pipeline.
            </p>
            <p className="mb-7 text-sm leading-relaxed text-brand-muted">
              Bespoke engagements are structured individually. They may extend beyond acquisition and conversion into
              onboarding. Reporting design. Review and referral systems. Multi team routing. Private operational
              interfaces. Wider administrative infrastructure. Where conventional workflow infrastructure becomes too
              rigid, Avitus can also design more advanced decision layers for highly specific operational environments.
            </p>

            <div className="mb-9 flex-1 space-y-4">
              <p className="text-sm leading-relaxed text-brand-creme/80">
                <span className="font-medium text-brand-creme">Typically included.</span> Custom scope defined by
                operational need. Stakeholder structure. Channel complexity. Reporting requirements. Long term
                infrastructure strategy.
              </p>
              <p className="text-sm leading-relaxed text-brand-creme/80">
                <span className="font-medium text-brand-creme">Commercial structure.</span> Structured by scope.
              </p>
              <p className="text-sm leading-relaxed text-brand-creme/80">
                In select future engagements, advanced decision infrastructure and bespoke agent frameworks may be
                commissioned for unusually complex workflows. Always with strict control over permissions. Logic.
                Oversight.
              </p>
            </div>
            <Link
              to={SITE_LINKS.bookDemo}
              className="inline-flex w-full items-center justify-center rounded-full border border-brand-border bg-brand-surface py-4 font-medium text-brand-creme transition-colors hover:bg-brand-border"
            >
              Plan Your Walkthrough
            </Link>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-brand-muted">
          Every engagement begins with a review of your current intake. Your communication flow. Your operational
          constraints. We do not prescribe infrastructure before understanding the shape of the work. The aim is always
          the same. Fewer dropped opportunities. Cleaner communication. Infrastructure that operates quietly in the
          background.
        </p>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24 md:py-28">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-[var(--color-brand-accent)]/18 to-transparent blur-[120px]" />
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mx-auto mb-6 max-w-[15ch] text-balance text-[2.65rem] font-medium leading-[1.02] tracking-tighter text-brand-creme md:max-w-[14ch] md:text-[3.8rem]">
          Keep more good-fit studio inquiries moving.
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-lg font-medium text-brand-muted">
          Bring us the handoff gaps, ownership confusion, or fit decisions slowing your team down. We&apos;ll map the
          right rollout with you.
        </p>
        <Link
          to={SITE_LINKS.bookDemo}
          className="inline-flex rounded-full bg-brand-creme px-9 py-4 text-lg font-medium text-brand-dark transition-all duration-300 hover:bg-white"
        >
          Plan Your Walkthrough
        </Link>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-dark px-6 py-12">
      <div className="mx-auto flex max-w-[85rem] flex-col items-center justify-between gap-6 text-sm font-medium text-brand-muted md:flex-row">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded-full bg-gradient-to-tr from-brand-accent to-brand-accent-alt" />
          <span className="text-brand-creme">Avitus</span> © 2026.
        </div>
        <div className="flex gap-8">
          <Link to={SITE_LINKS.work} className="transition-colors hover:text-brand-creme">
            Workflow
          </Link>
          <Link to={SITE_LINKS.about} className="transition-colors hover:text-brand-creme">
            About
          </Link>
          <Link to={SITE_LINKS.bookDemo} className="transition-colors hover:text-brand-creme">
            Plan Your Walkthrough
          </Link>
        </div>
      </div>
    </footer>
  );
}
