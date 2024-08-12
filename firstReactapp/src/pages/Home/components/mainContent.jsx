
export default function MainContent() {
  return (
    <div className="main-content">
    <h2>Our Services</h2>
    <div className="service-item">
      <h3>Classic Haircuts</h3>
      <p>
        From timeless classics to trendy cuts, we offer haircuts that suit
        your style and personality.
      </p>
      <img src="haircut.png" alt="haircutm" />
      <img src="haircut2.png" alt="haircut2" />
      <img src="haircut3.png" alt="haircut3" />
    </div>
    <div className="service-item">
      <h3>Precision Shaves</h3>
      <p>
        Enjoy a traditional shave with high-quality products and techniques
        that leave your skin smooth and refreshed.
      </p>
    </div>
    <div className="service-item">
      <h3>Beard Grooming</h3>
      <p>
        Maintain your beard with our expert grooming services, including
        trims, shaping, and care tips.
      </p>
      <img src="beard.jpg" alt="beard" />
    </div>
    <div className="service-item">
      <h3>Coloring & Treatments</h3>
      <p>
        Add a touch of color or treat your hair to rejuvenating treatments
        for a fresh, vibrant look.
      </p>
    </div>
  </div>
  )
}
