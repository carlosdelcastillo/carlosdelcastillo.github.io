export interface Translations {
  navigation: {
    home: string;
    about: string;
    experience: string;
    education: string;
    contact: string;
  };
  hero: {
    greeting: string;
    description: string[];
    cta: {
      about: string;
      experience: string;
      contact: string;
    };
  };
  about: {
    title: string;
    content: string[];
    quickStats: {
      value: string;
      label: string;
    }[];
    coreExpertise: {
      title: string;
      categories: {
        title: string;
        skills: string[];
      }[];
    };
  };
  experience: {
    title: string;
    technologiesLabel: string;
    companies: {
      myinvestor: {
        name: string;
        position: string;
        period: string;
        description: string;
        technologies: string[];
      };
      nfq: {
        name: string;
        position: string;
        period: string;
        description: string;
        technologies: string[];
      };
      deyde: {
        name: string;
        position: string;
        period: string;
        description: string;
        technologies: string[];
      };
    };
  };
  education: {
    title: string;
    sectionLabel: string;
    items: {
      degree: string;
      school: string;
      period: string;
      description?: string;
    }[];
  };
  certifications: {
    title: string;
    items: string[];
  };
  contact: {
    title: string;
    subtitle: string;
    cta: string;
    emailSubject: string;
    description: string;
    emailButton: string;
    linkedinButton: string;
    location: string;
  };
  footer: {
    rights: string;
    brandDescription: string;
    quickLinksTitle: string;
    connectTitle: string;
    builtWith: string;
    hostingPrefix: string;
    repositoryLabel: string;
    hostingSuffix: string;
  };
  theme: {
    light: string;
    dark: string;
    system: string;
  };
  common: {
    viewProject: string;
    learnMore: string;
    present: string;
  };
}
