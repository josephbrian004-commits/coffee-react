const menuItems = [
  {
    name: 'Cinnamon Oat Latte',
    price: '$6.50',
    description: 'Espresso, oat milk, roasted cinnamon, and a silky finish.',
    tag: 'Best Seller',
  },
  {
    name: 'Cold Brew Tonic',
    price: '$5.90',
    description: 'Slow-steeped cold brew with sparkling tonic and orange peel.',
    tag: 'Fresh',
  },
  {
    name: 'Honey Almond Cappuccino',
    price: '$6.20',
    description: 'Smooth almond notes layered with soft floral honey.',
    tag: 'Signature',
  },
  {
    name: 'Vanilla Bean Flat White',
    price: '$5.80',
    description: 'Balanced espresso and creamy vanilla bean foam.',
    tag: 'Classic',
  },
]

const features = [
  'Single-origin beans',
  'Handcrafted every morning',
  'Fresh pastries daily',
  'Cozy neighborhood vibe',
]

const reviews = [
  {
    name: 'Amara J.',
    text: 'The coffee is rich, balanced, and beautifully prepared. The whole place feels warm and intentional.',
  },
  {
    name: 'Marcus T.',
    text: 'Perfect for work sessions or quiet mornings. Their cold brew is honestly the best in town.',
  },
  {
    name: 'Sofia L.',
    text: 'Every cup feels crafted with care. Plus the pastry selection is incredible.',
  },
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">B</span>
          <span>Brewed Culture</span>
        </div>

        <nav className="nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#reviews">Reviews</a>
          <a href="#visit">Visit</a>
        </nav>

        <button className="nav-button">Book a Table</button>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Roasted fresh • served slow</p>
            <h1>Good coffee, better moments.</h1>
            <p className="lead">
              We craft warm, intentional coffee experiences with small-batch beans,
              artisan flavors, and a table waiting for your next conversation.
            </p>

            <div className="hero-actions">
              <button className="primary-btn">Order Now</button>
              <button className="secondary-btn">Explore Menu</button>
            </div>

            <div className="hero-stats">
              <div>
                <strong>8+</strong>
                <span>Years brewing</span>
              </div>
              <div>
                <strong>4.9/5</strong>
                <span>Customer rating</span>
              </div>
              <div>
                <strong>1,200+</strong>
                <span>Daily cups</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="coffee-card">
              <div className="cup"></div>
              <div className="steam steam-1"></div>
              <div className="steam steam-2"></div>
              <div className="steam steam-3"></div>
            </div>
          </div>
        </section>

        <section className="highlights" aria-label="Coffee highlights">
          {features.map((feature, index) => (
            <div key={index} className="highlight">
              <span className="dot"></span>
              {feature}
            </div>
          ))}
        </section>

        <section id="menu" className="menu-section">
          <div className="section-heading">
            <p className="eyebrow">Our favorites</p>
            <h2>Curated coffee, crafted daily.</h2>
          </div>

          <div className="menu-grid">
            {menuItems.map((item) => (
              <article key={item.name} className="menu-card">
                <div className="menu-top">
                  <span className="tag">{item.tag}</span>
                  <span className="price">{item.price}</span>
                </div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <button className="small-btn">Add to Order</button>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="story-section">
          <div className="story-image" aria-hidden="true">
            <div className="image-frame"></div>
          </div>

          <div className="story-content">
            <p className="eyebrow">Why we exist</p>
            <h2>Made for the slow, beautiful part of the day.</h2>
            <p>
              Brewed Culture began with a simple idea: coffee should feel like a
              ritual, not a rush. We source carefully, roast thoughtfully, and serve
              with warmth that turns everyday breaks into memorable moments.
            </p>
            <ul>
              <li>Ethically sourced beans</li>
              <li>Seasonal specialty drinks</li>
              <li>Community-first atmosphere</li>
            </ul>
          </div>
        </section>

        <section id="reviews" className="reviews-section">
          <div className="section-heading">
            <p className="eyebrow">Loved by locals</p>
            <h2>People keep coming back for the vibe.</h2>
          </div>

          <div className="review-grid">
            {reviews.map((review) => (
              <div key={review.name} className="review-card">
                <div className="stars">★★★★★</div>
                <p>{review.text}</p>
                <h4>{review.name}</h4>
              </div>
            ))}
          </div>
        </section>

        <section id="visit" className="visit-section">
          <div className="visit-card">
            <div>
              <p className="eyebrow">Visit us</p>
              <h2>Settle in, sip slowly, stay awhile.</h2>
            </div>

            <div className="visit-details">
              <p>128 Willow Street, Downtown</p>
              <p>Open daily • 7:00 AM – 8:00 PM</p>
              <button className="primary-btn">Reserve a Spot</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="brand">
          <span className="brand-mark">B</span>
          <span>Brewed Culture</span>
        </div>
        <p>© 2026 Brewed Culture. Crafted with care.</p>
      </footer>
    </div>
  )
}

export default App
