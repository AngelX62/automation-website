import React, { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight, Building2, CheckCircle2, Mail, Palette, Phone, Sparkles, Users } from 'lucide-react';
import { SITE_CONTACT, SITE_LINKS } from '../site';

type DemoFormValues = {
  fullName: string;
  workEmail: string;
  company: string;
  phone: string;
  sector: string;
  teamSize: string;
  monthlyInquiries: string;
  challenge: string;
};

type DemoFormErrors = Partial<Record<keyof DemoFormValues, string>>;

const INITIAL_VALUES: DemoFormValues = {
  fullName: '',
  workEmail: '',
  company: '',
  phone: '',
  sector: 'real-estate',
  teamSize: '',
  monthlyInquiries: '',
  challenge: '',
};

const FIELD_BASE_CLASSES =
  'w-full rounded-[1.2rem] border bg-brand-dark/70 px-4 py-3.5 text-base text-brand-creme outline-none transition-colors placeholder:text-brand-muted/60 focus:border-[var(--color-brand-accent)]';

function buildDemoMailto(values: DemoFormValues) {
  const subject = `Book Demo Request - ${values.company}`;
  const body = [
    'New demo request',
    '',
    `Name: ${values.fullName}`,
    `Work email: ${values.workEmail}`,
    `Company: ${values.company}`,
    `Phone: ${values.phone || 'Not provided'}`,
    `Sector: ${values.sector}`,
    `Team size: ${values.teamSize}`,
    `Monthly inquiries: ${values.monthlyInquiries}`,
    '',
    'What should we automate first?',
    values.challenge,
  ].join('\n');

  return `mailto:${SITE_CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function validate(values: DemoFormValues): DemoFormErrors {
  const nextErrors: DemoFormErrors = {};

  if (!values.fullName.trim()) {
    nextErrors.fullName = 'Please enter your name.';
  }

  if (!values.workEmail.trim()) {
    nextErrors.workEmail = 'Please enter your work email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.workEmail.trim())) {
    nextErrors.workEmail = 'Please use a valid email address.';
  }

  if (!values.company.trim()) {
    nextErrors.company = 'Please enter your company name.';
  }

  if (!values.teamSize.trim()) {
    nextErrors.teamSize = 'Please tell us how large your team is.';
  }

  if (!values.monthlyInquiries.trim()) {
    nextErrors.monthlyInquiries = 'Please estimate your monthly inquiry volume.';
  }

  if (!values.challenge.trim()) {
    nextErrors.challenge = 'Tell us what you want the demo to focus on.';
  }

  return nextErrors;
}

export function BookDemo() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState<DemoFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;

    setValues((current) => ({
      ...current,
      [name]: value,
    }));

    if (errors[name as keyof DemoFormValues]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[name as keyof DemoFormValues];
        return next;
      });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    window.location.href = buildDemoMailto(values);
  };

  const fieldClasses = (field: keyof DemoFormValues) =>
    `${FIELD_BASE_CLASSES} ${
      errors[field] ? 'border-red-400/80 focus:border-red-400' : 'border-brand-border'
    }`;

  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative min-h-screen overflow-hidden px-6 pb-20 pt-28 md:pt-32"
    >
      <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,rgba(109,165,192,0.18),transparent_42%),radial-gradient(circle_at_20%_30%,rgba(255,107,53,0.16),transparent_28%),linear-gradient(180deg,rgba(10,15,26,0.42),rgba(3,3,5,0))]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-[0.12]" />

      <div className="relative mx-auto max-w-[85rem]">
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-surface/75 px-4 py-2 text-sm font-medium text-brand-muted transition-colors hover:text-brand-creme"
          >
            <ArrowLeft size={15} />
            Back to home
          </Link>

          <div className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-surface/75 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-brand-muted">
            <Sparkles size={12} className="text-[var(--color-brand-orange)]" />
            Book Demo
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.08fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:pr-4"
          >
            <h1 className="max-w-[9ch] text-4xl font-semibold leading-[0.92] tracking-tighter text-brand-creme md:text-[4.9rem]">
              Tell us how your team handles lead workflows.
            </h1>
            <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-brand-muted md:text-lg">
              Share a few details and we&apos;ll tailor the demo around lead capture, qualification, routing, and
              follow-up workflows for your real estate or interior design team.
            </p>

            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
              className="relative mt-8 overflow-hidden rounded-[2rem] border border-brand-border bg-brand-surface/78 p-6 shadow-[0_26px_70px_rgba(0,0,0,0.3)] backdrop-blur-sm md:p-7"
            >
            <div className="absolute -right-20 top-[-4rem] h-56 w-56 rounded-full bg-[var(--color-brand-accent)]/14 blur-[90px]" />
            <div className="absolute bottom-[-6rem] left-[-3rem] h-64 w-64 rounded-full bg-[var(--color-brand-orange)]/12 blur-[110px]" />

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-muted">
                What We Tailor In The Demo
              </p>
              <div className="mt-6 space-y-4">
                <div className="rounded-[1.4rem] border border-brand-border/80 bg-brand-dark/55 p-4">
                  <div className="mb-3 flex items-center gap-3 text-brand-creme">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-brand-accent)]/14 text-[var(--color-brand-accent)]">
                      <Building2 size={20} />
                    </div>
                    <h2 className="text-xl font-medium tracking-tight">Lead capture across channels</h2>
                  </div>
                  <p className="text-sm leading-relaxed text-brand-muted">
                    We map how inquiries enter today and where agentic intake can reduce response lag.
                  </p>
                </div>

                <div className="rounded-[1.4rem] border border-brand-border/80 bg-brand-dark/55 p-4">
                  <div className="mb-3 flex items-center gap-3 text-brand-creme">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-brand-accent-alt)]/16 text-[var(--color-brand-accent-alt)]">
                      <Palette size={20} />
                    </div>
                    <h2 className="text-xl font-medium tracking-tight">Qualification for high-consideration work</h2>
                  </div>
                  <p className="text-sm leading-relaxed text-brand-muted">
                    For brokerages and studios alike, the demo shows how intent, fit, and urgency can be surfaced earlier.
                  </p>
                </div>

                <div className="rounded-[1.4rem] border border-brand-border/80 bg-brand-dark/55 p-4">
                  <div className="mb-3 flex items-center gap-3 text-brand-creme">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-brand-orange)]/14 text-[var(--color-brand-orange)]">
                      <Users size={20} />
                    </div>
                    <h2 className="text-xl font-medium tracking-tight">Routing and next-step ownership</h2>
                  </div>
                  <p className="text-sm leading-relaxed text-brand-muted">
                    We&apos;ll focus the walkthrough on who needs the lead next and how handoffs stay visible.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-brand-border/80 bg-brand-dark/65 p-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-surface text-brand-creme">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-muted">Direct contact</p>
                    <a
                      href={`mailto:${SITE_CONTACT.email}`}
                      className="mt-2 inline-flex items-center gap-2 text-lg font-medium text-brand-creme transition-colors hover:text-white"
                    >
                      {SITE_CONTACT.email}
                      <ArrowUpRight size={16} />
                    </a>
                    <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                      Submitting the form opens a prefilled email draft with your details so we can respond quickly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            onSubmit={handleSubmit}
            noValidate
            className="rounded-[2.1rem] border border-brand-border bg-brand-surface/88 p-7 shadow-[0_30px_80px_rgba(0,0,0,0.36)] backdrop-blur-sm md:p-8"
          >
            <div className="mb-7 flex items-center justify-between gap-4 border-b border-brand-border/70 pb-5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-muted">
                  Tailored walkthrough
                </p>
                <h2 className="mt-2 text-xl font-medium tracking-tight text-brand-creme">
                  Tell us where the workflow breaks today.
                </h2>
              </div>
              <span className="rounded-full border border-brand-border bg-brand-dark/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted">
                Response within 1 business day
              </span>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="fullName" className="mb-3 block text-sm font-semibold uppercase tracking-[0.14em] text-brand-muted">
                  Full name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  value={values.fullName}
                  onChange={handleChange}
                  className={fieldClasses('fullName')}
                  placeholder="Jordan Hayes"
                />
                {errors.fullName ? <p className="mt-2 text-sm text-red-300">{errors.fullName}</p> : null}
              </div>

              <div>
                <label htmlFor="workEmail" className="mb-3 block text-sm font-semibold uppercase tracking-[0.14em] text-brand-muted">
                  Work email
                </label>
                <input
                  id="workEmail"
                  name="workEmail"
                  type="email"
                  autoComplete="email"
                  value={values.workEmail}
                  onChange={handleChange}
                  className={fieldClasses('workEmail')}
                  placeholder="jordan@yourcompany.com"
                />
                {errors.workEmail ? <p className="mt-2 text-sm text-red-300">{errors.workEmail}</p> : null}
              </div>

              <div>
                <label htmlFor="company" className="mb-3 block text-sm font-semibold uppercase tracking-[0.14em] text-brand-muted">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={values.company}
                  onChange={handleChange}
                  className={fieldClasses('company')}
                  placeholder="Northline Properties"
                />
                {errors.company ? <p className="mt-2 text-sm text-red-300">{errors.company}</p> : null}
              </div>

              <div>
                <label htmlFor="phone" className="mb-3 block text-sm font-semibold uppercase tracking-[0.14em] text-brand-muted">
                  Phone
                </label>
                <div className="relative">
                  <Phone size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-brand-muted" />
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={values.phone}
                    onChange={handleChange}
                    className={`${FIELD_BASE_CLASSES} border-brand-border pl-11`}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="sector" className="mb-3 block text-sm font-semibold uppercase tracking-[0.14em] text-brand-muted">
                  Focus
                </label>
                <select
                  id="sector"
                  name="sector"
                  value={values.sector}
                  onChange={handleChange}
                  className={`${FIELD_BASE_CLASSES} border-brand-border appearance-none`}
                >
                  <option value="real-estate">Real estate</option>
                  <option value="interior-design">Interior design</option>
                  <option value="both">Both</option>
                </select>
              </div>

              <div>
                <label htmlFor="teamSize" className="mb-3 block text-sm font-semibold uppercase tracking-[0.14em] text-brand-muted">
                  Team size
                </label>
                <input
                  id="teamSize"
                  name="teamSize"
                  type="text"
                  value={values.teamSize}
                  onChange={handleChange}
                  className={fieldClasses('teamSize')}
                  placeholder="8 agents / 3 coordinators"
                />
                {errors.teamSize ? <p className="mt-2 text-sm text-red-300">{errors.teamSize}</p> : null}
              </div>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-[0.65fr_1.35fr]">
              <div>
                <label htmlFor="monthlyInquiries" className="mb-3 block text-sm font-semibold uppercase tracking-[0.14em] text-brand-muted">
                  Monthly inquiries
                </label>
                <input
                  id="monthlyInquiries"
                  name="monthlyInquiries"
                  type="text"
                  value={values.monthlyInquiries}
                  onChange={handleChange}
                  className={fieldClasses('monthlyInquiries')}
                  placeholder="80 to 120"
                />
                {errors.monthlyInquiries ? <p className="mt-2 text-sm text-red-300">{errors.monthlyInquiries}</p> : null}
              </div>

              <div>
                <label htmlFor="challenge" className="mb-3 block text-sm font-semibold uppercase tracking-[0.14em] text-brand-muted">
                  What should we automate first?
                </label>
                <textarea
                  id="challenge"
                  name="challenge"
                  rows={5}
                  value={values.challenge}
                  onChange={handleChange}
                  className={`${fieldClasses('challenge')} min-h-[8.5rem] resize-y`}
                  placeholder="For example: qualifying listing inquiries, routing design consultations, first-response follow-up, CRM handoff, or proposal requests."
                />
                {errors.challenge ? <p className="mt-2 text-sm text-red-300">{errors.challenge}</p> : null}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 border-t border-brand-border/80 pt-6">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-brand-orange)] px-7 py-4 text-base font-medium text-white transition-all hover:bg-opacity-90"
              >
                Request Demo
                <ArrowUpRight size={17} />
              </button>

              <p className="text-sm leading-relaxed text-brand-muted">
                No long intake process. This opens a prefilled email draft with your details so we can reply with the right next steps.
              </p>

              {submitted ? (
                <div className="inline-flex items-start gap-3 rounded-[1.3rem] border border-emerald-400/25 bg-emerald-400/10 px-4 py-4 text-sm text-emerald-100">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-300" />
                  <span>
                    Your draft should be opening in your mail app now. If it doesn&apos;t, email us directly at{' '}
                    <a href={`mailto:${SITE_CONTACT.email}`} className="font-medium text-white underline underline-offset-4">
                      {SITE_CONTACT.email}
                    </a>
                    .
                  </span>
                </div>
              ) : null}
            </div>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
}
