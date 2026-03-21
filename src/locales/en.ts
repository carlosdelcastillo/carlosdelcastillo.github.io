import type { Translations } from '@/types/translations';

export const en: Translations = {
  navigation: {
    home: 'Home',
    about: 'About',
    experience: 'Experience',
    education: 'Education',
    contact: 'Contact',
  },
  hero: {
    greeting: "I'm Carlos del Castillo",
    description: [
      'Engineering Manager with a strong hands-on background in software engineering and architecture, operating at the intersection of fintech, development, data, and product.',
      'I build teams, architecture, and delivery models that scale, deliver impact, and create long-term business value.',
    ],
    cta: {
      about: 'About Me',
      experience: 'View Experience',
      contact: "Let's Talk",
    },
  },
  about: {
    title: 'About Me',
    content: [
      'Since 2009, I have worked across software development, architecture, and engineering leadership.',
      'My profile combines technical execution with organizational building: designing scalable platforms, evolving processes, and developing high-performing teams.',
      'I am motivated by guiding organizations from early growth stages to consolidated delivery models, while maintaining focus on business impact, regulation, and operational excellence.',
    ],
    quickStats: [
      { value: 'Since 2009', label: 'Engineering Leadership Experience' },
      { value: '~30 people', label: 'Built & Scaled Teams' },
      { value: 'Agile Methodologies', label: 'Real-World Implementation' },
      { value: 'Scalable Architectures', label: 'Designed & Delivered' },
      { value: 'Cloud-Native Platform', label: 'Built From Scratch' },
      { value: 'Distributed Systems', label: 'at Scale' },
    ],
    coreExpertise: {
      title: 'Core Expertise',
      categories: [
        {
          title: 'Architecture & Systems',
          skills: [
            'Distributed Systems',
            'Platform Architecture',
            'Event-Driven Architecture',
            'Microservices at Scale',
            'System Design',
            'Scalability & Resilience',
            'Domain-Driven Design',
          ],
        },
        {
          title: 'Cloud Platform & DevOps',
          skills: ['AWS Cloud Architecture', 'Kubernetes', 'CI/CD Automation', 'DevOps Culture', 'Observability'],
        },
        {
          title: 'Engineering Leadership',
          skills: [
            'Engineering Strategy',
            'Organizational Scaling',
            'High-Performance Teams',
            'Technical Roadmapping',
            'Fintech & Regulated Systems',
            'Developer Experience (DevEx)',
            'Agile Delivery',
          ],
        },
      ],
    },
  },
  experience: {
    title: 'Professional Experience',
    technologiesLabel: 'Key Technologies',
    companies: {
      myinvestor: {
        name: 'MyInvestor',
        position: 'Backend Engineering Manager',
        period: 'May 2019 - Present',
        description: 'With a great team, leading the build-out of the digital neobank platform itself, powering both MyInvestor app and web experiences. Joined as the first engineer, creating the backend architecture and engineering team from scratch . Drove the evolution of systems, processes, and integrations in a regulated banking environment to scale product, reliability, and delivery speed.',
        technologies: ['Java', 'Python', 'React', 'Spring Boot', 'AWS', 'Microservices', 'Kubernetes', 'PostgreSQL', 'Oracle', 'RabbitMQ', 'kafka', 'REST APIs', 'Event Sourcing', 'CQRS'],
      },
      nfq: {
        name: 'Nfq Advisory',
        position: 'Software Development Lead',
        period: 'May 2018 - May 2019',
        description: 'Led the creation of a multidisciplinary agile team while raising engineering, quality, and delivery standards. Contributed to the evolution of ALM products for integrated balance-sheet management, including liquidity, risk, and compliance (AML/CFT) initiatives for financial institutions.',
        technologies: ['Java', 'Python', 'Angular', 'Spring', 'ZeroMQ', 'Agile', 'Consulting', 'Fintech', 'ALM','Risk Management'],
      },
      deyde: {
        name: 'Deyde Calidad de Datos',
        position: 'Software Development Lead',
        period: 'Nov. 2009 - May 2018',
        description: "Contributed to the evolution and international expansion of the MyDataQ suite, improving product capabilities, architecture, and integrations. Supported business growth across multiple countries alongside technical and business teams, adapting solutions to different market and client needs.",
        technologies: ['Java', 'Oracle', 'GIS', 'Big Data', 'Spark', 'APIs', 'Consulting', 'SaaS'],
      },
    },
  },
  education: {
    title: 'Education',
    sectionLabel: 'Academic Background',
    items: [
      {
        school: 'Escuela de Organización Industrial',
        degree: 'Advanced Program in Project Management - PMI Methodology',
        period: '2016 - 2017',
        description:
          'Advanced training in project management aligned with PMI standards and the PMBOK guide: knowledge areas, portfolio management, planning, monitoring, and control.\n\nPractical focus on leadership, negotiation, and financial tools for project execution, with PMP certification-oriented preparation.',
      },
      {
        school: 'Universidad de Castilla-La Mancha',
        degree: 'Computer Engineering (Ingeniería Informática)',
        period: '2005 - 2010',
        description:
          'Computer engineering degree with a strong foundation in software architecture and development. Final grade: 7.9/10.\n\nFinal Degree Project: "Uso de la cámara inteligente Matrox Iris P en vigilancia" (Highest Honors).',
      },
    ],
  },
  contact: {
    title: 'Get In Touch',
    subtitle: "Let's talk about backend architecture and fintech",
    cta: 'Start a Conversation',
    emailSubject: "Let's talk about a possible collaboration",
    description:
      "I'm always interested in discussing new opportunities, innovative projects, and potential collaborations. Whether you're looking for technical leadership, architectural guidance, or want to explore how we can work together, I'd love to hear from you.",
    emailButton: 'Send Email',
    linkedinButton: 'Connect on LinkedIn',
    location: 'Madrid, Spain',
  },
  footer: {
    rights: 'All rights reserved.',
    brandDescription:
      'Backend Engineering Manager & Software Architect building scalable fintech solutions that make a difference.',
    quickLinksTitle: 'Quick Links',
    connectTitle: 'Connect',
    builtWith: 'Built with Astro, React, TypeScript & Tailwind CSS · AI-assisted •',
    hostingPrefix: 'Hosted on',
    repositoryLabel: 'GitHub',
    hostingSuffix: 'and deployed with GitHub Pages.',
  },
  theme: {
    light: 'Light',
    dark: 'Dark',
    system: 'System',
  },
  common: {
    viewProject: 'View Project',
    learnMore: 'Learn More',
    present: 'Present',
  },
};
