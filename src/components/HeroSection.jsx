function HeroSection({ backendIcons, frontendIcons, pageLoaded, stats, text }) {
  return (
    <section className="site-shell hero-section reveal reveal-delay-2" id="accueil">
      <div className={`hero-copy hero-intro ${pageLoaded ? 'show' : ''}`} data-animate="slide-right">
        <p className="eyebrow">{text.eyebrow}</p>

        <p className="hero-text">{text.text}</p>

        <div className="hero-actions">
          <a className="button button--primary text-decoration-none" href="#projets">
            {text.primaryAction}
          </a>
          <a className="button button--ghost text-decoration-none" href="#contact">
            {text.secondaryAction}
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
          <img src="photo-profil.jpeg" alt="Portrait de KOUADIO QMASSUA MONDESIRE PHILOMENE" />
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
  )
}

export default HeroSection
