function Footer({ footerText, socialLinks }) {
  return (
    <footer className="site-shell footer-bar reveal reveal-delay-6">
      <div className="footer-socials" data-animate="fade-up">
        {socialLinks.map((item) => (
          <a
            key={item.label}
            className="footer-social"
            href={item.href}
            aria-label={item.label}
            title={item.label}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
          >
            {item.icon}
          </a>
        ))}
      </div>
      <p>{footerText}</p>
    </footer>
  )
}

export default Footer
