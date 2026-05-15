function ContactSection({ text }) {
  return (
    <section className="site-shell reveal reveal-delay-6" id="contact">
      <div className="contact-banner" data-animate="fade-up">
        <div>
          <p className="eyebrow">{text.eyebrow}</p>
          <h2>{text.title}</h2>
          <p>{text.text}</p>
        </div>

        <div className="contact-actions">
          <a className="button button--primary text-decoration-none" href="mailto:qmassuamondesirek@gmail.com">
            {text.emailAction}
          </a>
          <a className="button button--ghost text-decoration-none" href="#accueil">
            {text.topAction}
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
