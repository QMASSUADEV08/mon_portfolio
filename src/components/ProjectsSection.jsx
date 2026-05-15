function ProjectsSection({ activeFilter, filters, heading, onFilterChange, projects }) {
  return (
    <section className="site-shell reveal reveal-delay-5" id="projets">
      <div className="projects-board" data-animate="fade-up">
        <aside className="projects-board__rail" aria-label="Filtrer les projets">
          {filters.map((filter) => (
            <button
              key={filter.value}
              className={activeFilter === filter.value ? 'is-active' : ''}
              type="button"
              onClick={() => onFilterChange(filter.value)}
              title={filter.label}
              aria-label={filter.label}
            >
              {filter.label.slice(0, 1)}
            </button>
          ))}
        </aside>

        <div className="projects-board__content">
          <div className="projects-board__heading">
            <p className="eyebrow">{heading.eyebrow}</p>
            <span>{heading.text}</span>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="project-showcase"
                data-animate="fade-up"
                style={{ '--delay': `${index * 120}ms` }}
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
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
