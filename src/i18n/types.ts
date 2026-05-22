export type Language = "pt-BR" | "en"

export type TranslationDictionary = {
  nav: { projects: string; about: string; contact: string }
  hero: {
    badge: string
    name: string
    role: string
    intro: string
    ctaContact: string
    ctaProjects: string
    scrollHint: string
    emailLabel: string
    linkedinLabel: string
    githubLabel: string
  }
  about: { eyebrow: string; titleLead: string; emphasis: string; body: string }
  skills: {
    eyebrow: string
    title: string
    groups: Record<string, string>
    items: Record<string, string>
  }
  projects: {
    eyebrow: string
    title: string
    screenshotPending: string
    viewProject: string
  }
  contact: {
    eyebrow: string
    title: string
    body: string
    emailLabel: string
    linkedinLabel: string
    githubLabel: string
  }
  footer: { rights: string }
  notFound: { title: string; body: string; cta: string }
  a11y: {
    themeToggle: string
    languageToggle: string
    menu: string
    primaryNav: string
    lightboxClose: string
    lightboxPrev: string
    lightboxNext: string
    carouselPrev: string
    carouselNext: string
  }
  projectPage: {
    overview: string
    challenge: string
    process: string
    gallery: string
    outcome: string
    role: string
    year: string
    stack: string
    liveLink: string
    backToProjects: string
    nextProject: string
    prevProject: string
    projectNavigation: string
  }
  projectDetails: Record<string, string>
}

export type TranslationKey = string
