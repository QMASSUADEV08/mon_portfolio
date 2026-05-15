import { FaMoon, FaSun } from 'react-icons/fa'

function ThemeToggle({ labels, theme, onToggle }) {
  const isLightTheme = theme === 'light'
  const label = isLightTheme ? labels.dark : labels.light

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={onToggle}
      aria-label={label}
      title={label}
    >
      {isLightTheme ? <FaMoon /> : <FaSun />}
    </button>
  )
}

export default ThemeToggle
