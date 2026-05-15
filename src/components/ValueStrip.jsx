function ValueStrip({ valueCards }) {
  return (
    <section className="site-shell value-strip reveal reveal-delay-3" aria-label="Points forts">
      {valueCards.map((card, index) => (
        <article key={card.title} className="value-card" data-animate="fade-up" style={{ '--delay': `${index * 90}ms` }}>
          <span>0{index + 1}</span>
          <h3>{card.title}</h3>
          <p>{card.text}</p>
        </article>
      ))}
    </section>
  )
}

export default ValueStrip
