function AboutSection({ text, timeline }) {
  return (
    <section className="site-shell section-grid reveal reveal-delay-3" id="apropos">
      <div className="section-heading" data-animate="fade-up">
        <p className="eyebrow">{text.eyebrow}</p>
      </div>

      <div className="about-layout">
        <article className="glass-card about-card" data-animate="slide-right">
          <img src="photo-apropos.jpeg" alt="Photo de presentation" />
          <div>
            {text.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
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
  )
}

export default AboutSection
