import { useState } from 'react'

const menuItems = [
  { name: 'Cinnamon Oat Latte', category: 'Espresso', price: 6.5, note: 'Double espresso, steamed oat milk, and toasted cinnamon.', label: 'House favorite', icon: '☕' },
  { name: 'Cold Brew Tonic', category: 'Cold coffee', price: 5.9, note: '18-hour cold brew, sparkling tonic, and a twist of orange.', label: 'Bright & bold', icon: '◉' },
  { name: 'Honey Almond Cappuccino', category: 'Espresso', price: 6.2, note: 'Velvety milk, wildflower honey, and roasted almond.', label: 'Barista pick', icon: '☕' },
  { name: 'Vanilla Bean Flat White', category: 'Espresso', price: 5.8, note: 'Rich espresso finished with soft vanilla-bean microfoam.', label: 'A modern classic', icon: '☕' },
  { name: 'Maple Sea-Salt Cookie', category: 'Bakery', price: 3.8, note: 'Brown butter, real maple, and a little flaky sea salt.', label: 'Baked this morning', icon: '✳' },
  { name: 'Almond Croissant', category: 'Bakery', price: 4.5, note: 'Buttery, flaky layers filled with almond frangipane.', label: 'Small-batch bake', icon: '✳' },
]

const categories = ['All', 'Espresso', 'Cold coffee', 'Bakery']
const reviews = [
  { name: 'Amara J.', text: 'The coffee is rich, balanced, and beautifully prepared. The whole place feels warm and intentional.' },
  { name: 'Marcus T.', text: 'Perfect for a work session or a slow morning. Their cold brew is honestly the best in town.' },
  { name: 'Sofia L.', text: 'Every cup feels crafted with care, and the almond croissant is incredible.' },
]

function App() {
  const [category, setCategory] = useState('All')
  const [cartCount, setCartCount] = useState(0)
  const [notice, setNotice] = useState('')
  const filteredItems = category === 'All' ? menuItems : menuItems.filter((item) => item.category === category)

  function addToOrder(item) {
    setCartCount((count) => count + 1)
    setNotice(`${item.name} added to your order`)
    window.setTimeout(() => setNotice(''), 2600)
  }

  return (
    <div className="site-shell">
      <div className="announcement">GOOD THINGS BREW HERE <span>—</span> OPEN DAILY, 7 AM–8 PM</div>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Brewed Culture home">
          <span className="brand-mark" aria-hidden="true">bc</span>
          <span className="brand-name">brewed culture<small>COFFEE HOUSE</small></span>
        </a>
        <nav className="nav" aria-label="Main navigation">
          <a href="#menu">Menu</a><a href="#story">Our story</a><a href="#reviews">Kind words</a><a href="#visit">Find us</a>
        </nav>
        <a className="order-link" href="#menu">Your order <span className="cart-count">{cartCount}</span></a>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> A neighborhood coffee ritual</p>
            <h1>Make room<br />for <em>good</em> coffee.</h1>
            <p className="hero-description">Thoughtfully sourced beans, made by hand and served without the hurry. Your favorite little pause in the day.</p>
            <div className="hero-actions"><a className="button button-dark" href="#menu">Explore the menu <span aria-hidden="true">↗</span></a><a className="text-link" href="#story">Get to know us <span aria-hidden="true">↓</span></a></div>
            <div className="hero-note"><span className="rating-stars">★★★★★</span><span>4.9 from our lovely locals</span></div>
          </div>
          <div className="hero-art" role="img" aria-label="Illustration of a freshly made cup of coffee">
            <div className="sun-disc" /><span className="art-caption art-caption-top">SLOW MORNINGS<br />START HERE</span>
            <div className="coffee-beans bean-one" /><div className="coffee-beans bean-two" /><div className="coffee-beans bean-three" />
            <div className="cup-shadow" /><div className="hero-cup"><div className="coffee-surface" /><div className="cup-logo">bc</div><div className="cup-handle" /></div>
            <div className="steam steam-one" /><div className="steam steam-two" /><div className="steam steam-three" />
            <span className="art-caption art-caption-bottom">POURED WITH<br />A LITTLE MORE CARE</span>
          </div>
          <div className="hero-bottom"><span>GOOD BEANS. GOOD PEOPLE. GOOD DAYS.</span><a href="#menu">SCROLL TO SAVOR <span>↓</span></a></div>
        </section>

        <section className="values-strip" aria-label="Our values"><p>Small batch, always</p><span>✳</span><p>Ethically sourced</p><span>✳</span><p>Made with intention</p><span>✳</span><p>Best enjoyed slowly</p></section>

        <section id="menu" className="menu-section section-wrap">
          <div className="section-heading"><div><p className="eyebrow">A few good things</p><h2>Made for your <em>usual.</em></h2></div><p className="section-intro">A little something for your everyday, and something new for when you're feeling curious.</p></div>
          <div className="category-tabs" role="group" aria-label="Filter menu by category">
            {categories.map((item) => <button key={item} className={category === item ? 'category-tab active' : 'category-tab'} onClick={() => setCategory(item)} aria-pressed={category === item}>{item}</button>)}
          </div>
          <div className="menu-grid">
            {filteredItems.map((item) => <article className="menu-card" key={item.name}>
              <div className="menu-art" aria-hidden="true"><span>{item.icon}</span><small>{item.label}</small></div>
              <div className="menu-card-body"><div className="menu-title-row"><h3>{item.name}</h3><span className="price">${item.price.toFixed(2)}</span></div><p>{item.note}</p><button className="add-button" onClick={() => addToOrder(item)}>Add to order <span aria-hidden="true">+</span></button></div>
            </article>)}
          </div>
          <p className="menu-footnote">Made with care. Ask us about dairy-free milk and seasonal specials.</p>
        </section>

        <section id="story" className="story-section">
          <div className="story-art" aria-label="Illustrated coffee plant and coffee cup"><div className="story-sun" /><div className="plant-stem" /><div className="leaf leaf-a" /><div className="leaf leaf-b" /><div className="leaf leaf-c" /><div className="story-mug"><span>bc</span></div><span className="story-stamp">GROWN WITH<br/>GOOD INTENTIONS</span></div>
          <div className="story-copy"><p className="eyebrow">A little about us</p><h2>Not just a coffee.<br /><em>A place to land.</em></h2><p>We started Brewed Culture with a simple thought: the everyday deserves a little more care. So we find farmers who love their craft, roast in small batches, and make every cup like it matters — because it does.</p><p>Come by for your morning ritual, stay for the familiar faces. There's always room at the table.</p><a className="text-link story-link" href="#visit">Come say hello <span>↗</span></a></div>
        </section>

        <section id="reviews" className="reviews-section section-wrap"><div className="section-heading"><div><p className="eyebrow">Don't just take our word</p><h2>Notes from the <em>neighborhood.</em></h2></div><span className="review-score">4.9 <span>★★★★★</span><small>LOCAL LOVE, EVERY DAY</small></span></div><div className="review-grid">{reviews.map((review) => <article className="review-card" key={review.name}><span className="review-stars">★★★★★</span><p>“{review.text}”</p><h3>{review.name}</h3><small>REGULAR AROUND HERE</small></article>)}</div></section>

        <section id="visit" className="visit-section"><div className="visit-content"><p className="eyebrow">Your table's waiting</p><h2>Come on in.<br /><em>Stay a while.</em></h2><p>Good coffee, warm hellos, and a seat by the window. We saved you one.</p><div className="visit-details"><div><small>FIND OUR LITTLE CORNER</small><p>128 Willow Street, Downtown</p></div><div><small>WHEN THE DOORS ARE OPEN</small><p>Every day, 7:00 am – 8:00 pm</p></div></div><a className="button button-light" href="https://maps.google.com/?q=128+Willow+Street" target="_blank" rel="noreferrer">Get directions <span>↗</span></a></div><div className="visit-art" aria-hidden="true"><div className="visit-circle"><span>GOOD<br/>COFFEE<br/><i>good days</i></span></div><div className="visit-spark spark-one">✳</div><div className="visit-spark spark-two">✳</div></div></section>
      </main>

      <footer className="footer"><a className="brand footer-brand" href="#home"><span className="brand-mark">bc</span><span className="brand-name">brewed culture<small>COFFEE HOUSE</small></span></a><p>Made slowly, with love. © {new Date().getFullYear()} Brewed Culture.</p><a className="back-top" href="#home">Back to top ↑</a></footer>
      {notice && <div className="toast" role="status">{notice}</div>}
    </div>
  )
}

export default App
