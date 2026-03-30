const createMailtoLink = (email: string, subject: string) =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}`;

export const SITE_CONTACT = {
  email: 'hello@auraautomation.com',
  careersEmail: 'careers@auraautomation.com',
} as const;

export const NAV_LINKS = [
  { label: 'Services', to: '/#services' },
  { label: 'Work', to: '/#work' },
  { label: 'About', to: '/about' },
] as const;

export const SITE_LINKS = {
  contact: '/#contact',
  services: '/#services',
  work: '/#work',
  about: '/about',
  startProject: createMailtoLink(SITE_CONTACT.email, 'Start Project Inquiry'),
  consultation: createMailtoLink(SITE_CONTACT.email, 'Private Consultation Request'),
  openRoles: createMailtoLink(SITE_CONTACT.careersEmail, 'Open Roles Inquiry'),
} as const;
