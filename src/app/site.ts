const createMailtoLink = (email: string, subject: string) =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}`;

export const SITE_CONTACT = {
  email: 'hello@avenarc.com',
  careersEmail: 'careers@avenarc.com',
} as const;

export const SITE_LINKS = {
  services: '/solutions',
  work: '/process',
  about: '/about',
  contact: '/contact',
  bookDemo: '/book-demo',
  startProject: createMailtoLink(SITE_CONTACT.email, 'Project Consultation'),
  openRoles: createMailtoLink(SITE_CONTACT.careersEmail, 'Open Roles Inquiry'),
} as const;
