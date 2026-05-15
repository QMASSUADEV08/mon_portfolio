import {
  FaBootstrap,
  FaCss3Alt,
  FaFacebook,
  FaGithub,
  FaHtml5,
  FaInstagram,
  FaJs,
  FaLaravel,
  FaLinkedin,
  FaPhp,
  FaPython,
  FaReact,
  FaTiktok,
  FaWhatsapp,
} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { SiMysql } from 'react-icons/si'

const translations = {
  fr: {
    navLinks: [
      { label: 'A propos', href: '#apropos' },
      { label: 'Competences', href: '#competences' },
      { label: 'Projets', href: '#projets' },
      { label: 'Contact', href: '#contact' },
    ],
    stats: [{ value: '02', label: 'ans d apprentissage' }],
    hero: {
      eyebrow: 'Developpeuse full-stack passionnee par le backend',
      text: 'Je suis KOUADIO QMASSUA MONDESIRE PHILOMENE, future developpeuse backend et ingenieure IA.',
      primaryAction: 'Voir mes projets',
      secondaryAction: 'Me contacter',
    },
    valueCards: [
      {
        title: 'Interfaces utiles',
        text: 'Je construis des pages lisibles, rapides a comprendre et agreables a utiliser.',
      },
      {
        title: 'Logique backend',
        text: 'J aime structurer les donnees, securiser les traitements et penser aux vrais flux metier.',
      },
      {
        title: 'Progression continue',
        text: 'Chaque projet devient un terrain pour mieux coder, mieux documenter et mieux livrer.',
      },
    ],
    about: {
      eyebrow: 'A propos de moi',
      paragraphs: [
        "Etudiante en deuxieme annee d'informatique, option genie logiciel a l'Universite Internationale de Yamoussoukro, je construis petit a petit un profil full-stack avec une affinite marquee pour le backend.",
        "Mon objectif est clair : evoluer vers l'ingenierie en intelligence artificielle, sans perdre la rigueur du web, l'experience utilisateur et la qualite d'execution.",
      ],
    },
    skillsEyebrow: 'Competences',
    skillGroups: [
      {
        title: 'Frontend',
        text: 'Creation d interfaces responsives, animees et coherentes.',
        tags: [
          { name: 'HTML', level: 80 },
          { name: 'CSS', level: 40 },
          { name: 'JavaScript', level: 58 },
          { name: 'React', level: 40 },
          { name: 'Bootstrap', level: 80 },
        ],
      },
      {
        title: 'Backend',
        text: 'Fondations serveur, bases de donnees et logique applicative.',
        tags: [
          { name: 'PHP', level: 55 },
          { name: 'Laravel', level: 38 },
          { name: 'Python', level: 48 },
          { name: 'MySQL', level: 60 },
        ],
      },
      {
        title: 'Outils',
        text: 'Environnement de travail propre pour developper, tester et collaborer.',
        tags: [
          { name: 'Git', level: 60 },
          { name: 'GitHub', level: 70 },
          { name: 'VS Code', level: 75 },
          { name: 'Postman', level: 20 },
        ],
      },
    ],
    projectsHeading: {
      eyebrow: 'Mes projets',
      text: 'Applications web, interfaces et projets academiques',
    },
    projects: [
      {
        title: 'Bibliotheque en ligne - UIYA',
        description:
          "Plateforme academique, ce projet m'as permis d'apprendre a travailler en equipe d'ou j'ai travailler sur le coté dynamique(backend).",
        image: 'projet-bibliotheque.png',
        technologies: ['React', 'CSS', 'Bootstrap', 'PHP', 'MySQL'],
        accent: 'Projet academique',
        category: 'fullstack',
      },
      {
        title: 'Resolution d equations non-lineaires',
        description:
          "Interface de calcul permettant d'entrer une equation, de choisir une methode de resolution et de visualiser les resultats.",
        image: 'projet-equations.png',
        technologies: ['Python', 'NumPy', 'Matplotlib'],
        accent: 'Projet de calcul',
        category: 'data',
      },
      {
        title: 'Fleur Emotion',
        description:
          "Site vitrine floral au design elegant et immersif, concu pour mettre en valeur une marque avec une interface responsive.",
        image: 'photo_site_fleur.jpeg',
        technologies: ['CSS', 'React'],
        accent: 'Projet de design',
        category: 'fullstack',
      },
      {
        title: 'Interface d authentification',
        description:
          "Premiere interface full-stack avec authentification, creee pour apprendre les bases du backend et la gestion des utilisateurs.",
        image: 'interface_de_connection.jpeg',
        technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
        accent: 'Projet de base',
        category: 'fullstack',
      },
    ],
    projectFilters: [
      { label: 'Tous', value: 'all' },
      { label: 'Full-stack', value: 'fullstack' },
      { label: 'Calcul', value: 'data' },
    ],
    timeline: [
      { label: 'Formation', value: 'Genie logiciel - UIYA' },
      { label: 'Preference', value: 'Developpement backend' },
      { label: 'Vision', value: 'Web et intelligence artificielle' },
      { label: 'Qualites', value: 'Curieuse et determinee' },
    ],
    contact: {
      eyebrow: 'Contact',
      title: 'Un projet, un stage ou une collaboration en tete ? Parlons-en.',
      text: 'Disponible pour apprendre, contribuer et transformer une idee en experience web soignee.',
      emailAction: 'M ecrire',
      topAction: 'Retour en haut',
    },
    footerText: 'Copyright 2026 KOUADIO QMASSUA MONDESIRE. Portfolio personnel.',
    themeLabels: {
      dark: 'Activer le theme sombre',
      light: 'Activer le theme clair',
    },
    languageLabel: 'Passer le site en anglais',
  },
  en: {
    navLinks: [
      { label: 'About', href: '#apropos' },
      { label: 'Skills', href: '#competences' },
      { label: 'Projects', href: '#projets' },
      { label: 'Contact', href: '#contact' },
    ],
    stats: [{ value: '02', label: 'years learning' }],
    hero: {
      eyebrow: 'Full-stack developer passionate about backend',
      text: 'I am KOUADIO QMASSUA MONDESIRE PHILOMENE, a future backend developer and AI engineer.',
      primaryAction: 'View my projects',
      secondaryAction: 'Contact me',
    },
    valueCards: [
      {
        title: 'Useful interfaces',
        text: 'I build readable pages that are easy to understand and pleasant to use.',
      },
      {
        title: 'Backend logic',
        text: 'I enjoy structuring data, securing processes, and thinking through real workflows.',
      },
      {
        title: 'Continuous progress',
        text: 'Each project helps me write better code, document better, and deliver better.',
      },
    ],
    about: {
      eyebrow: 'About me',
      paragraphs: [
        'Second-year computer science student in software engineering at the International University of Yamoussoukro, I am gradually building a full-stack profile with a strong interest in backend development.',
        'My goal is clear: grow toward artificial intelligence engineering while keeping strong web development discipline, user experience, and delivery quality.',
      ],
    },
    skillsEyebrow: 'Skills',
    skillGroups: [
      {
        title: 'Frontend',
        text: 'Responsive, animated, and coherent interface creation.',
        tags: [
          { name: 'HTML', level: 80 },
          { name: 'CSS', level: 40 },
          { name: 'JavaScript', level: 58 },
          { name: 'React', level: 40 },
          { name: 'Bootstrap', level: 80 },
        ],
      },
      {
        title: 'Backend',
        text: 'Server foundations, databases, and application logic.',
        tags: [
          { name: 'PHP', level: 55 },
          { name: 'Laravel', level: 38 },
          { name: 'Python', level: 48 },
          { name: 'MySQL', level: 60 },
        ],
      },
      {
        title: 'Tools',
        text: 'A clean working environment to develop, test, and collaborate.',
        tags: [
          { name: 'Git', level: 60 },
          { name: 'GitHub', level: 70 },
          { name: 'VS Code', level: 75 },
          { name: 'Postman', level: 20 },
        ],
      },
    ],
    projectsHeading: {
      eyebrow: 'My projects',
      text: 'Web apps, interfaces, and academic projects',
    },
    projects: [
      {
        title: 'Online library - UIYA',
        description:
          'Academic platform designed to make resource access, search, reservations, and loan management easier through a clear interface.',
        image: 'projet-bibliotheque.png',
        technologies: ['React', 'CSS', 'Bootstrap', 'PHP', 'MySQL'],
        accent: 'Academic project',
        category: 'fullstack',
      },
      {
        title: 'Nonlinear equation solving',
        description:
          'Calculation interface for entering an equation, choosing a solving method, and viewing the results.',
        image: 'projet-equations.png',
        technologies: ['Python', 'NumPy', 'Matplotlib'],
        accent: 'Calculation project',
        category: 'data',
      },
      {
        title: 'Fleur Emotion',
        description:
          'Elegant and immersive floral showcase website built to highlight a brand through a polished, responsive, and animated interface.',
        image: 'photo_site_fleur.jpeg',
        technologies: ['CSS', 'React'],
        accent: 'Design project',
        category: 'fullstack',
      },
      {
        title: 'Authentication interface',
        description:
          'First full-stack authentication interface, created to learn backend basics and user management.',
        image: 'interface_de_connection.jpeg',
        technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
        accent: 'Foundation project',
        category: 'fullstack',
      },
    ],
    projectFilters: [
      { label: 'All', value: 'all' },
      { label: 'Full-stack', value: 'fullstack' },
      { label: 'Calculation', value: 'data' },
    ],
    timeline: [
      { label: 'Education', value: 'Software engineering - UIYA' },
      { label: 'Preference', value: 'Backend development' },
      { label: 'Vision', value: 'Web and artificial intelligence' },
      { label: 'Qualities', value: 'Curious and determined' },
    ],
    contact: {
      eyebrow: 'Contact',
      title: 'A project, internship, or collaboration in mind? Let us talk.',
      text: 'Available to learn, contribute, and turn an idea into a polished web experience.',
      emailAction: 'Write me',
      topAction: 'Back to top',
    },
    footerText: 'Copyright 2026 KOUADIO QMASSUA MONDESIRE. Personal portfolio.',
    themeLabels: {
      dark: 'Enable dark theme',
      light: 'Enable light theme',
    },
    languageLabel: 'Switch the site to French',
  },
}

export const frontendIcons = [
  { label: 'HTML', icon: <FaHtml5 /> },
  { label: 'CSS', icon: <FaCss3Alt /> },
  { label: 'JavaScript', icon: <FaJs /> },
  { label: 'React', icon: <FaReact /> },
  { label: 'Bootstrap', icon: <FaBootstrap /> },
]

export const backendIcons = [
  { label: 'PHP', icon: <FaPhp /> },
  { label: 'Laravel', icon: <FaLaravel /> },
  { label: 'Python', icon: <FaPython /> },
  { label: 'SQL', icon: <SiMysql /> },
]

export const socialLinks = [
  { label: 'TikTok', href: 'https://www.tiktok.com/@ququ_081?_r=1&_t=ZS-95TsRR1iGeL', icon: <FaTiktok /> },
  { label: 'WhatsApp', href: 'https://wa.me/2250797012751', icon: <FaWhatsapp /> },
  { label: 'Facebook', href: 'https://www.facebook.com/share/14dfLa7HJM5/', icon: <FaFacebook /> },
  { label: 'Instagram', href: 'https://www.instagram.com/mondesire081?igsh=b3ZraGdteHphM3U4', icon: <FaInstagram /> },
  { label: 'LinkedIn', href: '#', icon: <FaLinkedin /> },
  { label: 'GitHub', href: 'https://github.com/QMASSUADEV08', icon: <FaGithub /> },
  { label: 'Gmail', href: 'mailto:qmassuamondesirek@gmail.com', icon: <MdEmail /> },
]

export function getPortfolioData(language) {
  return translations[language] ?? translations.fr
}
