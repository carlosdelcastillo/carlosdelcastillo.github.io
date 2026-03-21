import type { Translations } from '@/types/translations';

export const es: Translations = {
  navigation: {
    home: 'Inicio',
    about: 'Sobre Mí',
    experience: 'Experiencia',
    education: 'Formación',
    contact: 'Contacto',
  },
  hero: {
    greeting: 'Soy Carlos del Castillo',
    description: [
      'Engineering Manager con una base técnica hands-on en ingeniería de software y arquitectura, trabajando en la intersección de fintech, desarrollo, data y producto.',
      'Construyo equipos, arquitectura y modelos de entrega que escalan negocio con seguridad, cumplimiento y fiabilidad.',
    ],
    cta: {
      about: 'Conoce Más',
      experience: 'Ver Experiencia',
      contact: 'Hablemos',
    },
  },
  about: {
    title: 'Sobre Mí',
    content: [
      'Desde 2009 trabajo en desarrollo de software, arquitectura y liderazgo de ingeniería.',
      'Mi perfil combina ejecución técnica y construcción organizativa: diseño de plataformas escalables, evolución de procesos y desarrollo de equipos de alto rendimiento.',
      'Me motiva llevar organizaciones desde fases de crecimiento inicial hasta modelos de entrega consolidados, manteniendo foco en impacto de negocio, regulación y excelencia operativa.',
    ],
    quickStats: [
      { value: 'Desde 2009', label: 'Experiencia en liderazgo de ingeniería' },
      { value: '~30 personas', label: 'Equipos creados y escalados' },
      { value: 'Agile', label: 'Implantación real' },
      { value: 'Arquitecturas Escalables', label: 'Diseño e implantación' },
      { value: 'Plataforma Cloud-Native', label: 'Construida desde cero' },
      { value: 'Sistemas Distribuidos', label: 'escalables' },
    ],
    coreExpertise: {
      title: 'Expertise Principal',
      categories: [
        {
          title: 'Arquitectura y Sistemas',
          skills: [
            'Sistemas Distribuidos',
            'Arquitectura de Plataforma',
            'Arquitectura Orientada a Eventos',
            'Microservicios a Escala',
            'Diseño de Sistemas',
            'Escalabilidad y Resiliencia',
            'Diseño Guiado por el Dominio (DDD)',
          ],
        },
        {
          title: 'Plataforma Cloud y DevOps',
          skills: ['Arquitectura Cloud en AWS', 'Kubernetes', 'Automatización CI/CD', 'Cultura DevOps', 'Observabilidad'],
        },
        {
          title: 'Liderazgo en Ingeniería',
          skills: [
            'Estrategia de Ingeniería',
            'Escalado Organizativo',
            'Equipos de Alto Rendimiento',
            'Hoja de Ruta Técnica',
            'Fintech y Sistemas Regulados',
            'Experiencia de Desarrollador (DevEx)',
            'Entrega Ágil',
          ],
        },
      ],
    },
  },
  experience: {
    title: 'Experiencia Profesional',
    technologiesLabel: 'Tecnologias clave',
    companies: {
      myinvestor: {
        name: 'MyInvestor',
        position: 'Backend Engineering Manager',
        period: 'Mayo 2019 - Presente',
        description: 'Junto a un gran equipo, lidero la construcción de la plataforma del propio neobanco digital. Me incorporé como primer ingeniero, creando la arquitectura backend y el equipo desde cero. He impulsado la evolución de sistemas, procesos e integraciones en un entorno bancario regulado para escalar producto, fiabilidad y velocidad de entrega.',
        technologies: ['Java', 'Python', 'React', 'Spring Boot', 'AWS', 'Microservices', 'Kubernetes', 'PostgreSQL', 'Oracle', 'RabbitMQ', 'kafka', 'REST APIs', 'Event Sourcing', 'CQRS'],
      },
      nfq: {
        name: 'Nfq Advisory',
        position: 'Software Development Lead',
        period: 'Mayo 2018 - Mayo 2019',
        description: 'Lideré la construcción de un equipo ágil multidisciplinar y la mejora de estándares de ingeniería, calidad y delivery. Participé en la evolución de productos ALM para la gestión integrada del balance bancario, incluyendo iniciativas de liquidez, riesgos y cumplimiento (PBC/FT), acompañando a entidades financieras en su transformación tecnológica y regulatoria.',
        technologies: ['Java', 'Python', 'Angular', 'Spring', 'ZeroMQ', 'Agile', 'Consulting', 'Fintech', 'ALM','Risk Management'],
      },
      deyde: {
        name: 'Deyde Calidad de Datos',
        position: 'Software Development Lead',
        period: 'Nov. 2009 - Mayo 2018',
        description: 'Colaboré en la evolución y expansión internacional de la suite MyDataQ, mejorando producto, arquitectura e integraciones. Participé en el crecimiento del negocio en distintos países junto a equipos técnicos y de negocio, adaptando soluciones a diferentes mercados y necesidades de clientes con grandes bases de datos.',
        technologies: ['Java', 'Oracle', 'GIS', 'Big Data', 'Spark', 'APIs', 'Consultoría', 'SaaS'],
      },
    },
  },
  education: {
    title: 'Formación Académica',
    sectionLabel: 'Formación académica',
    items: [
      {
        school: 'Escuela de Organización Industrial',
        degree: 'Curso Superior en Dirección de Proyectos - Metodología PMI',
        period: '2016 - 2017',
        description:
          'Formación avanzada en dirección de proyectos basada en estándares PMI y guía PMBOK: áreas de conocimiento, gestión de cartera, planificación, monitorización y control.\n\nEnfoque práctico en liderazgo, negociación y herramientas financieras para la ejecución de proyectos, con preparación orientada a certificación PMP.',
      },
      {
        school: 'Universidad de Castilla-La Mancha',
        degree: 'Ingeniería Informática (Computer Engineering)',
        period: '2005 - 2010',
        description:
          'Ingeniería informática con base sólida en arquitectura y desarrollo de software. Nota media: 7.9/10.\n\nProyecto Fin de Carrera: "Uso de la cámara inteligente Matrox Iris P en vigilancia" (Matrícula de Honor).',
      },
    ],
  },
  contact: {
    title: 'Contacto',
    subtitle: 'Hablemos sobre arquitectura backend y fintech',
    cta: 'Iniciar Conversación',
    emailSubject: 'Hablemos sobre una posible colaboración',
    description:
      'Siempre me interesa hablar sobre nuevas oportunidades, proyectos innovadores y posibles colaboraciones. Si buscas liderazgo tecnico, guia de arquitectura o explorar como podemos trabajar juntos, me encantara leerte.',
    emailButton: 'Enviar Email',
    linkedinButton: 'Conectar en LinkedIn',
    location: 'Madrid, España',
  },
  footer: {
    rights: 'Todos los derechos reservados.',
    brandDescription:
      'Backend Engineering Manager & Software Architect construyendo soluciones fintech escalables que marcan la diferencia.',
    quickLinksTitle: 'Accesos rápidos',
    connectTitle: 'Conecta',
    builtWith: 'Construido con Astro, React, TypeScript & Tailwind CSS · AI-assisted •',
    hostingPrefix: 'Alojado en',
    repositoryLabel: 'GitHub',
    hostingSuffix: 'y desplegado con GitHub Pages.',
  },
  theme: {
    light: 'Claro',
    dark: 'Oscuro',
    system: 'Sistema',
  },
  common: {
    viewProject: 'Ver Proyecto',
    learnMore: 'Saber Más',
    present: 'Presente',
  },
};
