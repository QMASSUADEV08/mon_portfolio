import { useMemo, useState } from 'react'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import CustomCursor from './components/CustomCursor'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import ValueStrip from './components/ValueStrip'
import { backendIcons, frontendIcons, getPortfolioData, socialLinks } from './data/portfolioData'
import {
  useCustomCursor,
  usePageLoaded,
  usePortfolioLanguage,
  usePortfolioTheme,
  useRevealOnScroll,
} from './hooks/portfolioHooks'

function PagePortfolio() {
  const [activeFilter, setActiveFilter] = useState('all')
  const cursorRef = useCustomCursor()
  const pageLoaded = usePageLoaded()
  const { language, toggleLanguage } = usePortfolioLanguage()
  const { theme, toggleTheme } = usePortfolioTheme()
  const data = useMemo(() => getPortfolioData(language), [language])

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return data.projects
    }

    return data.projects.filter((project) => project.category === activeFilter)
  }, [activeFilter, data.projects])

  useRevealOnScroll(activeFilter)

  return (
    <div className={`portfolio-page ${pageLoaded ? 'page-loaded' : ''}`}>
      <div className="page-transition" aria-hidden="true" />
      <CustomCursor cursorRef={cursorRef} />

      <Header
        language={language}
        languageLabel={data.languageLabel}
        navLinks={data.navLinks}
        theme={theme}
        themeLabels={data.themeLabels}
        onToggleLanguage={toggleLanguage}
        onToggleTheme={toggleTheme}
      />
      <HeroSection
        backendIcons={backendIcons}
        frontendIcons={frontendIcons}
        pageLoaded={pageLoaded}
        stats={data.stats}
        text={data.hero}
      />
      <ValueStrip valueCards={data.valueCards} />
      <AboutSection text={data.about} timeline={data.timeline} />
      <SkillsSection eyebrow={data.skillsEyebrow} skillGroups={data.skillGroups} />
      <ProjectsSection
        activeFilter={activeFilter}
        filters={data.projectFilters}
        heading={data.projectsHeading}
        onFilterChange={setActiveFilter}
        projects={filteredProjects}
      />
      <ContactSection text={data.contact} />
      <Footer footerText={data.footerText} socialLinks={socialLinks} />
    </div>
  )
}

export default PagePortfolio
