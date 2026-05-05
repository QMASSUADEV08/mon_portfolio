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

export const navLinks = [
  { label: 'A propos', href: '#apropos' },
  { label: 'Competences', href: '#competences' },
  { label: 'Projets', href: '#projets' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: '02', label: 'ans d apprentissage' },
]

export const valueCards = [
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
]

export const skillGroups = [
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
]

export const projects = [
  {
    title: 'Bibliotheque en ligne - UIYA',
    description:
      "Plateforme academique pour faciliter l'acces aux ressources, la recherche, la reservation et la gestion des emprunts dans une interface claire.",
    image: 'projet1.png',
    technologies: ['React', 'CSS', 'Bootstrap', 'PHP', 'MySQL'],
    accent: 'Projet academique',
    category: 'fullstack',
    impact: 'Recherche rapide, parcours simple et gestion plus fluide des documents.',
  },
  {
    title: 'Resolution d equations non-lineaires',
    description:
      "Interface de calcul permettant d'entrer une equation, de choisir une methode de resolution et de visualiser les resultats.",
    image: 'Capture d\u0027\u00e9cran 2026-04-09 220818.png',
    technologies: ['Python', 'NumPy', 'Matplotlib'],
    accent: 'Projet de calcul',
    category: 'data',
    impact: 'Un outil clair pour transformer une notion mathematique en experience manipulable.',
  },
]

export const projectFilters = [
  { label: 'Tous', value: 'all' },
  { label: 'Full-stack', value: 'fullstack' },
  { label: 'Calcul', value: 'data' },
]

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

export const timeline = [
  { label: 'Formation', value: 'Genie logiciel - UIYA' },
  { label: 'Preference', value: 'Developpement backend' },
  { label: 'Vision', value: 'Web et intelligence artificielle' },
  { label: 'Qualites', value: 'Curieuse et determinée' },
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
