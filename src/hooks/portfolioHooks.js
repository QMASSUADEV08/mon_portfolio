import { useEffect, useRef, useState } from 'react'

const THEME_STORAGE_KEY = 'portfolio-theme'
const LANGUAGE_STORAGE_KEY = 'portfolio-language'

export function usePageLoaded(delay = 120) {
  const [pageLoaded, setPageLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return pageLoaded
}

export function usePortfolioTheme() {
  const [theme, setTheme] = useState(() => localStorage.getItem(THEME_STORAGE_KEY) || 'light')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  }

  return { theme, toggleTheme }
}

export function usePortfolioLanguage() {
  const [language, setLanguage] = useState(() => localStorage.getItem(LANGUAGE_STORAGE_KEY) || 'fr')

  useEffect(() => {
    document.documentElement.lang = language
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === 'fr' ? 'en' : 'fr'))
  }

  return { language, toggleLanguage }
}

export function useRevealOnScroll(refreshKey) {
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
  }, [refreshKey])
}

export function useCustomCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const hasMouse = window.matchMedia('(pointer: fine)').matches

    if (!hasMouse) {
      return undefined
    }

    const handleMove = (event) => {
      const cursorElement = cursorRef.current

      if (!cursorElement) {
        return
      }

      cursorElement.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`
      cursorElement.classList.add('is-visible')
    }

    const handleLeave = () => {
      cursorRef.current?.classList.remove('is-visible')
    }

    window.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseleave', handleLeave)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return cursorRef
}
