import { useEffect, useState } from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact,FaBootstrap, FaPhp, FaLaravel, FaPython,FaTiktok } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md"; 

const navLinks = [
  { label: 'A propos', href: '#apropos' },
  { label: 'Competences', href: '#competences' },
  { label: 'Projets', href: '#projets' },
  { label: 'Contact', href: '#contact' },
]

const stats = [
  { value: '02+', label: 'annees de progression ' },
]

const skillGroups = [
  {
    title: 'Frontend',
    tags: [
      { name: 'HTML', level: '90%' },
      { name: 'CSS', level: '40%' },
      { name: 'JavaScript', level: '50%' },
      { name: 'React', level: '40%' },
      { name: 'Bootstrap', level: '86%' },
    ],
  },
  {
    title: 'Backend',
    tags: [
      { name: 'PHP', level: '50%' },
      { name: 'Laravel', level: '30%' },
      { name: 'Python', level: '40%' },
      { name: 'mySQL', level: '70%' },
    ],
  },
  {
    title: 'Outils de developpement',
    tags: [
      { name: 'Git', level: '70%' },
      { name: 'GitHub', level: '83%' },
      { name: 'VS Code', level: '80%' },
      { name: 'Postman', level: '30%' },
    ],
  },
]

const projects = [
  {
    title: 'Bibliotheque en ligne - UIYA',
    description:
      "Une plateforme pour faciliter l'accès aux ressources academiques, avec recherche, reservation et gestion des emprunts dans une interface claire.",
    image: "projet1.png",
    technologies: ['React', 'CSS', 'Bootstrap', 'PHP', 'mySQL'],
    accent: 'Projet academique',
  },
  {
    title: "Resolution d'equations non-lineaires",
    description:
      "un interface simple pour faciliter le calcul des equations non-linéaire. L'utilisateur peut entrer une equation, choisir une methode de resolution et obtenir.",
    image: "Capture d'écran 2026-04-09 220818.png",
    technologies: ['Python', 'NumPy', 'Matplotlib'],
    accent: 'Projet de calcul',
  },
]


const frontendIcons = [
  { label: 'HTML', icon: <FaHtml5 /> },
  { label: 'CSS', icon: <FaCss3Alt /> },
  { label: 'JavaScript', icon: <FaJs /> },
  { label: 'React', icon: <FaReact /> },
  { label: 'Bootstrap', icon: <FaBootstrap /> },
]
const backendIcons = [
  { label: 'PHP', icon: <FaPhp /> },
  { label: 'Laravel', icon: <FaLaravel /> },
  { label: 'Python', icon: <FaPython /> },
  { label: 'SQL', icon: <SiMysql /> },
]


const socialLinks = [
  { label: 'TikTok', href: 'https://www.tiktok.com/@ququ_081?_r=1&_t=ZS-95TsRR1iGeL', icon: <FaTiktok /> },
  { label: 'WhatsApp', href: 'https://wa.me/2250797012751', icon: <FaWhatsapp /> },
  { label: 'Facebook', href: 'https://www.facebook.com/share/14dfLa7HJM5/', icon: <FaFacebook /> },
  { label: 'Instagram', href: 'https://www.instagram.com/mondesire081?igsh=b3ZraGdteHphM3U4', icon: <FaInstagram /> },
  { label: 'LinkedIn', href: '#', icon: <FaLinkedin /> },
  { label: 'GitHub', href: 'https://github.com/QMASSUADEV08', icon: <FaGithub /> },
  { label: 'Gmail', href: 'mailto:qmassuamondesirek@gmail.com', icon: <MdEmail /> },
]

function PortfolioPage() {
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false })

  useEffect(() => {
    const items = document.querySelectorAll('[data-animate]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    )

    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches

    if (!finePointer) {
      return undefined
    }

    const handleMove = (event) => {
      setCursor({ x: event.clientX, y: event.clientY, visible: true })
    }

    const handleLeave = () => {
      setCursor((current) => ({ ...current, visible: false }))
    }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseout', handleLeave)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseout', handleLeave)
    }
  }, [])

  return (
    <div className="portfolio-page">
      <div
        className={`custom-cursor${cursor.visible ? ' is-visible' : ''}`}
        style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }}
        aria-hidden="true"
      />
      <header className="site-shell reveal reveal-delay-1">
        <nav className="topbar">
          <a className="brand-mark" href="#accueil">
            <span className="brand-mark__dot" />
            <span>
              <strong>K.Mondesire</strong>
              
            </span>
          </a>

          <div className="topbar__links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className='text-decoration-none'>
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section className="site-shell hero-section reveal reveal-delay-2" id="accueil">
        <div className="hero-copy" data-animate="slide-right">
          <p className="eyebrow">Developpeuse full-stack passionnée par le backend</p>
    
          <p className="hero-text">
            Je suis KOUADIO QMASSUA MONDESIRE PHILOMENE, futur developpeuse backend et ingenieur IA.
          </p>

          <div className="hero-actions">
            <a className="button button--primary text-decoration-none" href="#projets">
              Voir mes projets
            </a>
            <a className="button button--ghost text-decoration-none" href="#contact">
              Me contacter
            </a>
          </div>

          <div className="hero-stats">
            {stats.map((stat) => (
              <article key={stat.label} className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="hero-visual" data-animate="slide-left">
          <div className="portrait-card">

            <img src="mee2.jpeg" alt="#" />
          </div>

          <div className="floating-note floating-note--top tech-orbit">
            <span>Frontend</span>
            <div className="tech-orbit__icons">
              {frontendIcons.map((icon) => (
                <div key={icon.label} className="tech-bubble" aria-label={icon.label} title={icon.label}>
                  {icon.icon}
                </div>
              ))}
            </div>
          </div>

          <div className="floating-note floating-note--bottom tech-orbit">
            <span>Backend</span>
            <div className="tech-orbit__icons">
              {backendIcons.map((icon) => (
                <div key={icon.label} className="tech-bubble" aria-label={icon.label} title={icon.label}>
                  {icon.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="site-shell section-grid reveal reveal-delay-3" id="apropos">
        <div className="section-heading" data-animate="fade-up">
          <p className="eyebrow">A propos de moi</p>
        </div>

        <div className="about-layout">
          <article className="glass-card about-card" data-animate="slide-right">
            <img src="mee1.jpeg" alt="Photo de presentation" />
            <div>
              <p>
                Etudiante en deuxieme annee d'informatique option genie
                logiciel à l'Universite Internationale de Yamoussoukro, je
                construis progressivement un profil full-stack avec une affinite
                marquee pour le backend.
              </p>
              <p>
                Mon objectif est clair: evoluer vers l'ingenierie en
                intelligence artificielle, sans perdre la rigueur du web,
                l'experience utilisateur et la qualite d'execution.
              </p>
            </div>
          </article>

          <article className="glass-card timeline-card" data-animate="slide-left">
            <div className="timeline-row">
              <span>Formation</span>
              <strong>Genie logiciel - UIYA</strong>
            </div>
            <div className="timeline-row">
              <span>Preference</span>
              <strong>Developpement backend</strong>
            </div>
           
          </article>
        </div>
      </section>

      <section className="site-shell reveal reveal-delay-4" id="competences">
        <div className="section-heading" data-animate="fade-up">
          <p className="eyebrow">Competences</p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article
              key={group.title}
              className="skill-panel"
              data-animate="fade-up"
              style={{ '--delay': `${index * 120}ms` }}
            >
              <p className="skill-panel__label">{group.title}</p>
              <h3>{group.text}</h3>
              <div className="chip-list">
                {group.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className="skill-chip"
                    data-level={tag.level}
                    aria-label={`${tag.name} ${tag.level}`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="site-shell reveal reveal-delay-5" id="projets">
        <div className="section-heading" data-animate="fade-up">
          <p className="eyebrow">Projets</p>
          <h2>Des realisations qui melangent interface, logique applicative et intention claire.</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="project-showcase"
              data-animate={index % 2 === 0 ? 'slide-right' : 'slide-left'}
              style={{ '--delay': `${index * 140}ms` }}
            >
              <div className="project-showcase__media">
                <img src={project.image} className="project-img" alt={project.title} />
              </div>

              <div className="project-showcase__body">
                <span className="project-accent">{project.accent}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="chip-list">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="site-shell reveal reveal-delay-6" id="contact">
        <div className="contact-banner" data-animate="fade-up">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Un projet, un stage ou une collaboration en tete ? Parlons-en.</h2>
          </div>

          <div className="contact-actions">
            <a className="button button--primary" href="mailto:qmassuamondesirek@gmail.com">
              qmassuamondesirek@gmail.com
            </a>
            <a className="button button--ghost text-decoration-none" href="#accueil">
              Retour en haut
            </a>
          </div>
        </div>
      </section>

      <footer className="site-shell footer-bar reveal reveal-delay-6">
        <div className="footer-socials" data-animate="fade-up">
          {socialLinks.map((item) => (
            <a key={item.label} className="footer-social" href={item.href} aria-label={item.label} title={item.label}>
              {item.icon}
            </a>
          ))}
        </div>
        <p>© 2026 KOUADIO QMASSUA MONDESIRE. Portfolio personnel.</p>
      </footer>
    </div>
  )
}

export default PortfolioPage