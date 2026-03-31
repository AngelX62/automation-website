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
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-6">
      <div className="mx-auto flex max-w-[85rem] items-center justify-between gap-4 rounded-full border border-brand-border/70 bg-brand-dark/78 px-4 py-3 text-brand-creme shadow-[0_16px_48px_rgba(0,0,0,0.28)] backdrop-blur-md md:px-5">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-semibold tracking-tighter text-brand-creme"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-brand-accent to-brand-accent-alt" />
          Aura
        </Link>
        <div className="hidden items-center gap-8 text-sm font-medium text-brand-muted md:flex">
          <Link to={SITE_LINKS.services} className="transition-colors hover:text-brand-creme">
            Lead Engine
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
            Book Demo
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
                Lead Engine
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
                Book Demo
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pb-20 pt-28 text-center md:pb-24 md:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(96,135,176,0.18),transparent_23%),radial-gradient(circle_at_26%_62%,rgba(255,107,53,0.12),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:7rem_7rem] opacity-[0.08]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto flex max-w-[68rem] flex-col items-center"
      >
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-surface px-3 py-1.5 text-xs font-medium text-brand-muted">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--color-brand-orange)]" />
          Agentic Lead Engine
        </div>

        <h1 className="mx-auto mb-6 max-w-[15ch] text-balance text-[9.6vw] font-semibold leading-[0.98] tracking-tighter text-brand-creme md:max-w-[14ch] md:text-[6vw]">
          AI agents that turn inquiries into{' '}
          <span className="bg-gradient-to-r from-[var(--color-brand-accent)] to-[var(--color-brand-accent-alt)] bg-clip-text text-transparent">
            qualified leads
          </span>
          .
        </h1>

        <p className="mb-9 max-w-2xl text-lg font-medium leading-relaxed text-brand-muted md:text-xl">
          Agentic lead generation tailored for high-end real estate firms and visionary interior design studios.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link
            to={SITE_LINKS.services}
            className="group flex w-full items-center justify-center gap-3 rounded-full bg-[var(--color-brand-orange)] px-8 py-4 font-medium text-white transition-all hover:bg-opacity-90 sm:w-auto"
          >
            See Lead Engine
            <div className="rounded-full bg-white/20 p-1.5 transition-colors group-hover:bg-white group-hover:text-[var(--color-brand-orange)]">
              <ArrowUpRight size={16} />
            </div>
          </Link>
          <Link
            to={SITE_LINKS.work}
            className="group flex w-full items-center justify-center gap-3 rounded-full border border-brand-border bg-brand-surface px-8 py-4 font-medium text-brand-creme transition-all hover:bg-brand-border sm:w-auto"
          >
            View Workflow
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto mt-16 w-full max-w-[74rem] overflow-hidden rounded-[2.75rem] border border-brand-border/70 bg-brand-surface shadow-[0_28px_100px_rgba(0,0,0,0.45)]"
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
            7 leads ready for handoff
          </div>

          <div className="absolute inset-x-5 bottom-5 grid gap-4 md:grid-cols-[1.22fr_0.78fr] md:inset-x-6 md:bottom-6">
            <div className="rounded-[1.8rem] border border-brand-border/80 bg-brand-dark/78 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-md md:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-muted">
                    Lead velocity
                  </p>
                  <h3 className="mt-2 text-xl font-medium tracking-tight text-brand-creme">
                    Northline portfolio
                  </h3>
                </div>
                <span className="rounded-full border border-[var(--color-brand-orange)]/25 bg-[var(--color-brand-orange)]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-orange)]">
                  Priority inquiry detected
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
                    Qualified
                  </p>
                  <p className="mt-2 text-[2rem] font-semibold tracking-tighter text-brand-creme">318</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted">
                    Response lag
                  </p>
                  <p className="mt-2 text-[2rem] font-semibold tracking-tighter text-brand-creme">4m</p>
                </div>
              </div>

              <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-black/40">
                <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-[var(--color-brand-accent)] via-[var(--color-brand-accent-alt)] to-[var(--color-brand-orange)]" />
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-brand-muted">
                <span>Portal + web forms synced</span>
                <span className="hidden h-4 w-px bg-brand-border/70 md:block" />
                <span>Urgency surfaced instantly</span>
                <span className="hidden h-4 w-px bg-brand-border/70 md:block" />
                <span>Ownership assigned before follow-up stalls</span>
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-brand-border/80 bg-brand-dark/84 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-md md:p-6">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-muted">
                  Routing now
                </p>
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[var(--color-brand-orange)]" />
              </div>

              <div className="mt-4 space-y-3 text-sm text-brand-muted">
                <div className="flex items-start justify-between gap-4 border-b border-brand-border/60 pb-3">
                  <div>
                    <p className="font-medium text-brand-creme">Penthouse inquiry</p>
                    <p className="mt-1 text-xs">Budget and move-in window captured</p>
                  </div>
                  <span className="rounded-full bg-[var(--color-brand-accent)]/12 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-brand-accent)]">
                    Scored
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4 border-b border-brand-border/60 pb-3">
                  <div>
                    <p className="font-medium text-brand-creme">Chelsea showroom</p>
                    <p className="mt-1 text-xs">Design consultation request validated</p>
                  </div>
                  <span className="rounded-full bg-[var(--color-brand-accent-alt)]/12 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-brand-accent-alt)]">
                    Ready
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium text-brand-creme">Next action</p>
                    <p className="mt-1 text-xs">Assigned to Julian, CRM updated, follow-up queued</p>
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
      title: 'Lead Capture',
      description:
        'Pull forms, email, WhatsApp, and listing portals into one intake workflow with clean records from the first touch.',
    },
    {
      marker: '02',
      title: 'Agentic Qualification',
      description:
        'AI agents read context, score intent, and surface which opportunities need immediate human follow-up.',
    },
    {
      marker: '03',
      title: 'Pipeline Handoff',
      description:
        'Route qualified opportunities to the right agent, studio lead, or follow-up workflow without manual reassignment.',
    },
  ];

  return (
    <section id="services" className="relative z-10 bg-brand-dark px-6 py-20 md:py-24">
      <div className="mx-auto max-w-[85rem]">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <h2 className="max-w-2xl text-4xl font-medium leading-tight tracking-tighter text-brand-creme md:text-[2.85rem] lg:text-[3.55rem]">
            Automation workflows for <br className="hidden md:block" /> teams where speed closes deals.
          </h2>
          <p className="max-w-md text-lg font-medium leading-relaxed text-brand-muted">
            Capture every inquiry, qualify intent instantly, and route the next step across sales and design without
            manual chasing.
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
                Visibility layer
              </div>
            </div>

            <div className="relative z-10 mt-auto max-w-xl">
              <h3 className="mb-4 text-[1.85rem] font-medium tracking-tight text-brand-creme md:text-[2.25rem]">
                AI Lead Console
              </h3>
              <p className="text-lg leading-relaxed text-brand-muted">
                Track every inquiry, score urgency, and assign next-step ownership in one workflow view built for
                fast-moving property teams.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-brand-border/70 pt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-muted">
                <span>Urgency scoring live</span>
                <span className="hidden h-4 w-px bg-brand-border/70 md:block" />
                <span>Next-step ownership visible</span>
                <span className="hidden h-4 w-px bg-brand-border/70 md:block" />
                <span>Channels unified</span>
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
              <h3 className="mb-2 text-[1.65rem] font-medium tracking-tight text-white">Design Intake Agent</h3>
              <p className="leading-relaxed text-white/72">
                Screen consultation requests for project fit, budget, and timeline before your team spends time on
                calls.
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
              <Star size={12} fill="currentColor" /> Agentic Workflow
            </div>
            <h2 className="mb-6 text-4xl font-medium leading-[1.08] tracking-tighter text-brand-creme md:text-[3.3rem]">
              AI workflows that keep lead momentum moving.
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-brand-muted">
              From first inquiry to booked call, AI agents qualify demand, trigger follow-up, and push the right next
              action to your team.
            </p>
            <Link
              to={SITE_LINKS.bookDemo}
              className="inline-flex rounded-full bg-brand-creme px-8 py-4 font-medium text-brand-dark transition-colors hover:bg-white"
            >
              Book Demo
            </Link>
          </div>

          <div className="relative min-h-[34rem] overflow-hidden rounded-[2.65rem] border border-brand-border bg-[radial-gradient(circle_at_55%_24%,rgba(148,119,171,0.12),transparent_20%),linear-gradient(180deg,#0c1220_0%,#090c14_100%)] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.35)] md:p-6">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:5.75rem_5.75rem] opacity-[0.09]" />

            <div className="absolute left-5 top-5 rounded-full border border-brand-border/80 bg-brand-dark/78 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-muted">
              Inquiry intake live
            </div>
            <div className="absolute bottom-5 right-5 rounded-full border border-brand-border/80 bg-brand-dark/78 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-muted">
              CRM synced automatically
            </div>

            <div className="relative grid h-full gap-5 pt-12 md:grid-cols-[0.55fr_0.45fr] md:pt-10">
              <div className="rounded-[1.85rem] border border-brand-border/75 bg-brand-dark/55 p-5 backdrop-blur-sm md:p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-muted">Inquiry intake</p>
                <div className="mt-5 space-y-3">
                  <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.03] px-4 py-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-medium text-brand-creme">Miller Estate</p>
                        <p className="mt-1 text-xs text-brand-muted">Listing portal inquiry from Tribeca penthouse</p>
                      </div>
                      <span className="rounded-full bg-[var(--color-brand-orange)]/12 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-brand-orange)]">
                        New
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-b border-brand-border/60 pb-3 text-sm text-brand-muted">
                    <div>
                      <p className="font-medium text-brand-creme">Vale Studio</p>
                      <p className="mt-1 text-xs">Design consultation request</p>
                    </div>
                    <span className="text-xs">02 min</span>
                  </div>

                  <div className="flex items-center justify-between border-b border-brand-border/60 pb-3 text-sm text-brand-muted">
                    <div>
                      <p className="font-medium text-brand-creme">Northline Group</p>
                      <p className="mt-1 text-xs">Website form and email merged</p>
                    </div>
                    <span className="text-xs">05 min</span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-brand-muted">
                    <div>
                      <p className="font-medium text-brand-creme">Harbor Loft</p>
                      <p className="mt-1 text-xs">Appointment request with floorplan attached</p>
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
                        Budget, intent, and timing surfaced early
                      </h3>
                    </div>
                    <div className="rounded-full bg-[var(--color-brand-accent)]/12 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-accent)]">
                      High intent
                    </div>
                  </div>

                  <div className="mt-5 rounded-[1.35rem] border border-white/8 bg-white/[0.03] p-4">
                    <p className="text-sm font-medium text-brand-creme">3-bedroom residence inquiry</p>
                    <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                      Move-in within 30 days, viewing requested, approval status confirmed, premium segment matched.
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3 text-xs font-medium text-brand-muted">
                    <span className="rounded-full border border-brand-border px-3 py-1.5">Urgency 92%</span>
                    <span className="rounded-full border border-brand-border px-3 py-1.5">Budget confirmed</span>
                    <span className="rounded-full border border-brand-border px-3 py-1.5">Fit approved</span>
                  </div>
                </div>

                <div className="rounded-[1.85rem] border border-brand-border/75 bg-brand-dark/55 p-5 backdrop-blur-sm md:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-muted">
                        Assignment and follow-up
                      </p>
                      <h3 className="mt-3 text-xl font-medium tracking-tight text-brand-creme">
                        Next-step ownership stays visible
                      </h3>
                    </div>
                    <CheckCircle2 size={18} className="text-[var(--color-brand-accent-alt)]" />
                  </div>

                  <div className="mt-5 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-medium text-brand-creme">Assigned owner</p>
                        <p className="mt-1 text-sm text-brand-muted">Julian Vance</p>
                      </div>
                      <span className="rounded-full bg-[var(--color-brand-accent-alt)]/12 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-brand-accent-alt)]">
                        Confirmed
                      </span>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-medium text-brand-creme">Follow-up action</p>
                        <p className="mt-1 text-sm text-brand-muted">Phone call queued with property summary attached</p>
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
          <h2 className="mb-4 text-[2.3rem] font-medium tracking-tighter text-brand-creme md:text-[2.9rem]">
            Choose your rollout
          </h2>
          <p className="mx-auto max-w-xl text-lg text-brand-muted">
            Start with one channel or deploy AI automation workflows across your real estate or interior design
            pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex flex-col rounded-[2rem] border border-brand-border bg-brand-dark p-7 md:p-8">
            <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-muted">Starter</div>
            <div className="mb-2 text-5xl font-semibold tracking-tighter text-brand-creme">
              $2990<span className="text-lg font-normal text-brand-muted">/mo</span>
            </div>
            <p className="mb-7 text-sm text-brand-muted">For one funnel and one team.</p>

            <ul className="mb-9 flex-1 space-y-4">
              <li className="flex items-center gap-3 text-sm text-brand-creme/80">
                <CheckCircle2 size={16} className="text-brand-muted" /> AI intake across web and listing portals
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-creme/80">
                <CheckCircle2 size={16} className="text-brand-muted" /> Qualification rules and routing for one
                workflow
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-creme/80">
                <CheckCircle2 size={16} className="text-brand-muted" /> Weekly reporting and workflow tuning
              </li>
            </ul>
            <Link
              to={SITE_LINKS.bookDemo}
              className="inline-flex w-full items-center justify-center rounded-full border border-brand-border bg-brand-surface py-4 font-medium text-brand-creme transition-colors hover:bg-brand-border"
            >
              Book Demo
            </Link>
          </div>

          <div className="relative flex flex-col rounded-[2rem] border border-transparent bg-gradient-to-b from-[var(--color-brand-orange)] to-[#d95c2b] p-7 shadow-2xl shadow-[var(--color-brand-orange)]/20 md:-translate-y-3 md:p-8">
            <div className="absolute right-8 top-0 rounded-b-lg bg-brand-dark px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-brand-orange)]">
              Most Chosen
            </div>
            <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">Growth</div>
            <div className="mb-2 text-5xl font-semibold tracking-tighter text-white">
              $4990<span className="text-lg font-normal text-white/70">/mo</span>
            </div>
            <p className="mb-7 text-sm text-white/80">For firms scaling lead volume and response time.</p>

            <ul className="mb-9 flex-1 space-y-4">
              <li className="flex items-center gap-3 text-sm text-white">
                <CheckCircle2 size={16} className="text-white/60" /> Multi-channel lead capture
              </li>
              <li className="flex items-center gap-3 text-sm text-white">
                <CheckCircle2 size={16} className="text-white/60" /> AI-agent follow-up and appointment routing
              </li>
              <li className="flex items-center gap-3 text-sm text-white">
                <CheckCircle2 size={16} className="text-white/60" /> CRM handoff with workflow reporting
              </li>
              <li className="flex items-center gap-3 text-sm text-white">
                <CheckCircle2 size={16} className="text-white/60" /> Ongoing workflow tuning and support
              </li>
            </ul>
            <Link
              to={SITE_LINKS.bookDemo}
              className="inline-flex w-full items-center justify-center rounded-full bg-brand-dark py-4 font-medium text-white transition-colors hover:bg-black"
            >
              Book Demo
            </Link>
          </div>

          <div className="flex flex-col rounded-[2rem] border border-brand-border bg-brand-dark p-7 md:p-8">
            <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-muted">Portfolio</div>
            <div className="mb-2 text-5xl font-semibold tracking-tighter text-brand-creme">
              $6990<span className="text-lg font-normal text-brand-muted">/mo</span>
            </div>
            <p className="mb-7 text-sm text-brand-muted">For multi-team property groups and studios.</p>

            <ul className="mb-9 flex-1 space-y-4">
              <li className="flex items-center gap-3 text-sm text-brand-creme/80">
                <CheckCircle2 size={16} className="text-[var(--color-brand-accent)]" /> Custom agent logic for multiple
                segments
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-creme/80">
                <CheckCircle2 size={16} className="text-[var(--color-brand-accent)]" /> Sales and design intake
                workflows
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-creme/80">
                <CheckCircle2 size={16} className="text-[var(--color-brand-accent)]" /> Cross-team routing and shared
                pipeline visibility
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-creme/80">
                <CheckCircle2 size={16} className="text-[var(--color-brand-accent)]" /> Dedicated rollout and reporting
                support
              </li>
            </ul>
            <Link
              to={SITE_LINKS.bookDemo}
              className="inline-flex w-full items-center justify-center rounded-full border border-brand-border bg-brand-surface py-4 font-medium text-brand-creme transition-colors hover:bg-brand-border"
            >
              Book Demo
            </Link>
          </div>
        </div>
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
          Turn more inquiries into qualified conversations.
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-lg font-medium text-brand-muted">
          We’ll walk you through lead capture, qualification, routing, and follow-up workflows for your real estate or
          interior design team.
        </p>
        <Link
          to={SITE_LINKS.bookDemo}
          className="inline-flex rounded-full bg-brand-creme px-9 py-4 text-lg font-medium text-brand-dark transition-all duration-300 hover:bg-white"
        >
          Book Demo
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
          <span className="text-brand-creme">Aura</span> © 2026.
        </div>
        <div className="flex gap-8">
          <Link to={SITE_LINKS.work} className="transition-colors hover:text-brand-creme">
            Workflow
          </Link>
          <Link to={SITE_LINKS.about} className="transition-colors hover:text-brand-creme">
            About
          </Link>
          <Link to={SITE_LINKS.bookDemo} className="transition-colors hover:text-brand-creme">
            Book Demo
          </Link>
        </div>
      </div>
    </footer>
  );
}
