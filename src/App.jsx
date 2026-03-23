import './App.css'

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <p className="eyebrow">Morongo Basin Ambulance</p>
        <nav className="topnav" aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#community">Community</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="section-label">Serving the Morongo Basin</p>
            <h1>Emergency and non-emergency care with a cleaner modern web experience.</h1>
            <p className="hero-text">
              This rebuild will keep the recognizable MBA identity while improving
              clarity, layout, and mobile usability.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#services">
                Explore Services
              </a>
              <a className="button button-secondary" href="#contact">
                Contact MBA
              </a>
            </div>
          </div>

          <div className="hero-card">
            <p className="card-label">Project Focus</p>
            <ul>
              <li>Keep brand colors</li>
              <li>Clean up structure and spacing</li>
              <li>Make mobile layouts feel intentional</li>
              <li>Rebuild page-by-page in React</li>
            </ul>
          </div>
        </section>

        <section className="section-grid" id="services">
          <article className="feature-card">
            <p className="section-label">01</p>
            <h2>Ambulance Services</h2>
            <p>
              We can reorganize service content into clearer cards and stronger
              calls to action.
            </p>
          </article>

          <article className="feature-card">
            <p className="section-label">02</p>
            <h2>Community Impact</h2>
            <p>
              The community story can become more visual and easier to scan on
              both desktop and mobile.
            </p>
          </article>

          <article className="feature-card">
            <p className="section-label">03</p>
            <h2>Contact and Support</h2>
            <p>
              We can make contact, donations, and support actions easier to find
              and simpler to use.
            </p>
          </article>
        </section>

        <section className="content-band" id="community">
          <div>
            <p className="section-label">Next Build Step</p>
            <h2>Start with the homepage and lock in the visual system first.</h2>
          </div>
          <p>
            Once the homepage layout, color palette, typography, and spacing feel
            right, the rest of the site gets much easier to build consistently.
          </p>
        </section>
      </main>

      <footer className="footer" id="contact">
        <p>MB Ambulance website rebuild in progress.</p>
        <p>React + Vite starter ready for development.</p>
      </footer>
    </div>
  )
}

export default App
