import LanguageToggle from './LanguageToggle'
import ThemeToggle from './ThemeToggle'

function Header({ language, languageLabel, navLinks, theme, themeLabels, onToggleLanguage, onToggleTheme }) {
  return (
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

        <div className="topbar__actions">
          <LanguageToggle language={language} label={languageLabel} onToggle={onToggleLanguage} />
          <ThemeToggle theme={theme} labels={themeLabels} onToggle={onToggleTheme} />
        </div>
      </nav>
    </header>
  )
}

export default Header
