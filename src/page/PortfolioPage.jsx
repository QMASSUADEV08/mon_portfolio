import { useEffect, useMemo, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import {
  backendIcons,
  frontendIcons,
  navLinks,
  projectFilters,
  projects,
  skillGroups,
  socialLinks,
  stats,
  timeline,
  valueCards,
} from '../data/portfolioData'

function PortfolioPage() {
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false })
  const [pageLoaded, setPageLoaded] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'light')
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projects
    }

    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true)
    }, 120)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const animatedItems = document.querySelectorAll('[data-animate]')

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

    animatedItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [activeFilter])

  useEffect(() => {
    const hasMouse = window.matchMedia('(pointer: fine)').matches

    if (!hasMouse) {
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

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className={`portfolio-page ${pageLoaded ? 'page-loaded' : ''}`}>
      <div className="page-transition" aria-hidden="true" />
      <div
        className={`custom-cursor${cursor.visible ? ' is-visible' : ''}`}
        style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }}
        aria-hidden="true"
      />

      <header className="site-shell reveal reveal-delay-1">
        <nav className="topbar">
          <a className="brand-mark text-decoration-none" href="#accueil">
            <span className="brand-mark__dot" />
            <span>
              <strong>K.Mondesire</strong>
            </span>
          </a>

          <div className="topbar__links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-decoration-none">
                {link.label}
              </a>
            ))}
          </div>

          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Changer de theme">
            {theme === 'light' ? <FaMoon /> : <FaSun />}
            <span>{theme === 'light' ? 'Sombre' : 'Clair'}</span>
          </button>
        </nav>
      </header>

      <section className="site-shell hero-section reveal reveal-delay-2" id="accueil">
        <div className={`hero-copy hero-intro ${pageLoaded ? 'show' : ''}`} data-animate="slide-right">
          <p className="eyebrow">Developpeuse full-stack passionnee par le backend</p>

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

        <div className={`hero-visual hero-intro ${pageLoaded ? 'show' : ''}`} data-animate="slide-left">
          <div className="portrait-card">
            <img src="mee2.jpeg" alt="Portrait de KOUADIO QMASSUA MONDESIRE PHILOMENE" />
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

      <section className="site-shell value-strip reveal reveal-delay-3" aria-label="Points forts">
        {valueCards.map((card, index) => (
          <article key={card.title} className="value-card" data-animate="fade-up" style={{ '--delay': `${index * 90}ms` }}>
            <span>0{index + 1}</span>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
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
                Etudiante en deuxieme annee d'informatique, option genie logiciel a l'Universite Internationale de
                Yamoussoukro, je construis petit à petit un profil full-stack avec une affinite marquee pour le
                backend.
              </p>
              <p>
                Mon objectif est clair : evoluer vers l ingenierie en intelligence artificielle, sans perdre la rigueur
                du web, l'experience utilisateur et la qualite d'execution.
              </p>
            </div>
          </article>

          <article className="glass-card timeline-card" data-animate="slide-left">
            {timeline.map((item) => (
              <div key={item.label} className="timeline-row">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </article>
        </div>
      </section>

      <section className="site-shell reveal reveal-delay-4" id="competences">
        <div className="section-heading" data-animate="fade-up">
          <p className="eyebrow">Competences</p>
          <h2>Une base technique claire, lisible et orientee pratique.</h2>
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
              <div className="skill-bars">
                {group.tags.map((tag) => (
                  <div key={tag.name} className="skill-meter">
                    <div className="skill-meter__top">
                      <span>{tag.name}</span>
                      <strong>{tag.level}%</strong>
                    </div>
                    <div className="skill-meter__track" aria-label={`${tag.name} ${tag.level}%`}>
                      <span style={{ width: `${tag.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="site-shell reveal reveal-delay-5" id="projets">
        <div className="section-heading section-heading--split" data-animate="fade-up">
          <div>
            <p className="eyebrow">Projets</p>
            <h2>Des realisations qui melangent interface, logique applicative et intention claire.</h2>
          </div>

          <div className="filter-tabs" role="tablist" aria-label="Filtrer les projets">
            {projectFilters.map((filter) => (
              <button
                key={filter.value}
                className={activeFilter === filter.value ? 'is-active' : ''}
                type="button"
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
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
                <strong className="project-impact">{project.impact}</strong>

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
            <p>Disponible pour apprendre, contribuer et transformer une idee en experience web soignee.</p>
          </div>

          <div className="contact-actions">
            <a className="button button--primary text-decoration-none" href="mailto:qmassuamondesirek@gmail.com">
              M ecrire
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
            <a
              key={item.label}
              className="footer-social"
              href={item.href}
              aria-label={item.label}
              title={item.label}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              {item.icon}
            </a>
          ))}
        </div>
        <p>Copyright 2026 KOUADIO QMASSUA MONDESIRE. Portfolio personnel.</p>
      </footer>
    </div>
  )
}

export default PortfolioPage
