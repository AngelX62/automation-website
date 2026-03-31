const createMailtoLink = (email: string, subject: string) =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}`;

export const SITE_CONTACT = {
  email: 'hello@auraautomation.com',
  careersEmail: 'careers@auraautomation.com',
} as const;

export const SITE_LINKS = {
  services: '/#services',
  work: '/#work',
  about: '/about',
  contact: '/#contact',
  bookDemo: '/book-demo',
  startProject: createMailtoLink(SITE_CONTACT.email, 'Lead Generation Inquiry'),
  openRoles: createMailtoLink(SITE_CONTACT.careersEmail, 'Open Roles Inquiry'),
} as const;
