function LanguageToggle({ language, label, onToggle }) {
  return (
    <button className="language-toggle" type="button" onClick={onToggle} aria-label={label} title={label}>
      {language.toUpperCase()}
    </button>
  )
}

export default LanguageToggle
