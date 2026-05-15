function SkillsSection({ eyebrow, skillGroups }) {
  return (
    <section className="site-shell reveal reveal-delay-4" id="competences">
      <div className="section-heading" data-animate="fade-up">
        <p className="eyebrow">{eyebrow}</p>
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
  )
}

export default SkillsSection
