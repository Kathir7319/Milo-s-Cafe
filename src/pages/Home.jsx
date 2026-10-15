import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MENU_ITEMS, MENU_CATEGORIES } from '../data/menuData';
import { CAFE_HOURS, CAFE_CONTACT } from '../data/hoursData';
import LiveStatusBadge from '../components/LiveStatusBadge';
import { Star, Flame, Coffee, Sparkles, Award, ArrowRight, Check } from 'lucide-react';

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = activeFilter === 'all'
    ? MENU_ITEMS.filter(item => item.highlight)
    : MENU_ITEMS.filter(item => item.category === activeFilter);

  const currentDay = new Date().getDay();

  return (
    <main>
      {/* 1. Hero Section */}
      <section className="hero-section" aria-label="Hero Section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge-award">
                <Star size={16} className="award-star" fill="#F5A623" />
                <span>Voted Best Sandwich Shop in the Triangle</span>
              </div>
              <h1 className="hero-title">
                Where Colombian Roots Meet <span className="highlight-terracotta">European Cafe Culture.</span>
              </h1>
              <p className="hero-subheadline">
                Welcome to Milo’s Cafe—home of the Triangle’s best scratch-made focaccia sandwiches, specialty coffee, and authentic crepes. Crafted with love in Morrisville, NC.
              </p>
              <div className="hero-ctas">
                <Link to="/menu" className="btn btn-primary btn-lg">
                  View Our Menu
                </Link>
                <Link to="/contact" className="btn btn-outline btn-lg">
                  Get Directions
                </Link>
              </div>
              <div className="hero-trust-row">
                <div className="trust-item">
                  <span className="trust-icon">🍞</span>
                  <span>Scratch-Made Focaccia</span>
                </div>
                <div className="trust-item">
                  <span className="trust-icon">🔥</span>
                  <span>Torched Table-Side</span>
                </div>
                <div className="trust-item">
                  <span className="trust-icon">☕</span>
                  <span>Specialty Coffee</span>
                </div>
              </div>
            </div>

            {/* Hero Visual Composition */}
            <div className="hero-visual">
              <div className="hero-image-stack">
                <img
                  src="/images/schnitzel-sandwich.jpg"
                  alt="Milo's Famous Chicken Schnitzel Sandwich on House-Baked Focaccia"
                  className="hero-img-main"
                />

                {/* Floating Top Badge */}
                <div className="hero-floating-badge-top">
                  <div className="badge-number">#1</div>
                  <div className="badge-label">Triangle Favorite</div>
                </div>

                {/* Floating Bottom Card */}
                <div className="hero-floating-card">
                  <div className="floating-icon-wrap">🔥</div>
                  <div>
                    <div className="floating-card-title">Torched Table-Side</div>
                    <div className="floating-card-desc">Gruyère melted over crispy schnitzel &amp; yuzu slaw</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Welcome / Introduction Section */}
      <section className="welcome-section section-padding" aria-label="Welcome Introduction">
        <div className="container">
          <div className="welcome-grid">
            {/* Collage Media */}
            <div className="welcome-media">
              <div className="welcome-img-grid">
                <div className="welcome-img-col">
                  <img
                    src="/images/interior-cozy.jpg"
                    alt="Sunlit seating area at Milo's Cafe"
                    className="welcome-img welcome-img-lg"
                  />
                </div>
                <div className="welcome-img-col" style={{ marginTop: 32 }}>
                  <img
                    src="/images/classic-espresso.jpg"
                    alt="Specialty latte art at Milo's Cafe"
                    className="welcome-img welcome-img-sm"
                  />
                  <img
                    src="/images/exterior.jpg"
                    alt="Charming standalone building of Milo's Cafe"
                    className="welcome-img welcome-img-sm"
                  />
                </div>
              </div>
              <div className="welcome-stamp">
                <span>Crafted With Love</span>
                <strong>MORRISVILLE</strong>
                <span>Est. 2023</span>
              </div>
            </div>

            {/* Welcome Text */}
            <div className="welcome-content">
              <span className="eyebrow eyebrow-badge">Welcome to Milo’s</span>
              <h2>Experience the Triangle's Best Sandwich Shop</h2>
              <p className="welcome-body">
                Step into our cozy, sunlit escape right in the heart of Morrisville. At Milo’s Cafe, we blend European charm with vibrant Colombian and French-Algerian influences to bring you an unforgettable culinary experience. Whether you're fueling up with a morning espresso, enjoying a table-side torched sandwich, or relaxing with a sweet crepe, you’re family here.
              </p>

              <div className="culture-pill-row">
                <span className="culture-pill">🇨🇴 Colombian Heritage Coffee</span>
                <span className="culture-pill">🥐 European Bistro Charm</span>
                <span className="culture-pill">🌿 French-Algerian Flavors</span>
              </div>

              <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
                <Link to="/about" className="btn btn-outline">
                  Read Our Full Story <ArrowRight size={16} style={{ marginLeft: 4 }} />
                </Link>
                <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
                  "A warm, welcoming community hub where every detail feels like home."
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Highlights (3-Column Features / Cards) */}
      <section className="highlights-section section-padding" aria-label="Cafe Highlights">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow eyebrow-badge eyebrow-gold">What Sets Us Apart</span>
            <h2>The Highlights</h2>
            <p>Handcrafted quality, artisanal ingredients, and an inviting space made for lingering.</p>
          </div>

          <div className="highlights-grid">
            {/* Feature 1 */}
            <article className="highlight-card">
              <div className="card-image-wrap">
                <img src="/images/schnitzel-torched.jpg" alt="Table-side torched sandwich on scratch-made focaccia" />
                <span className="card-badge card-badge-award">The News &amp; Observer</span>
              </div>
              <div className="card-body">
                <div className="card-icon-title">
                  <div className="card-icon">🏆</div>
                  <h3 className="card-title">Award-Winning Eats</h3>
                </div>
                <p className="card-text">
                  Voted the "Best Sandwich Shop in the Triangle" by The News &amp; Observer. Our signature sandwiches are served on house-baked, scratch-made focaccia.
                </p>
                <Link to="/menu" className="card-footer-link">
                  Explore Sandwiches &amp; Eats →
                </Link>
              </div>
            </article>

            {/* Feature 2 */}
            <article className="highlight-card">
              <div className="card-image-wrap">
                <img src="/images/cortado.jpg" alt="Specialty cortado espresso coffee at Milo's Cafe" />
                <span className="card-badge">Single-Origin &amp; Seasonal</span>
              </div>
              <div className="card-body">
                <div className="card-icon-title">
                  <div className="card-icon">☕</div>
                  <h3 className="card-title">Specialty Coffee</h3>
                </div>
                <p className="card-text">
                  Perfectly pulled espresso drinks, seasonal lattes, and premium beans selected to elevate your daily routine. Handcrafted syrups made right in-house.
                </p>
                <Link to="/menu" className="card-footer-link">
                  Discover Coffee Drinks →
                </Link>
              </div>
            </article>

            {/* Feature 3 */}
            <article className="highlight-card">
              <div className="card-image-wrap">
                <img src="/images/interior-seating.jpg" alt="Cozy Pinterest-worthy seating corners at Milo's Cafe" />
                <span className="card-badge">Morrisville Landmark</span>
              </div>
              <div className="card-body">
                <div className="card-icon-title">
                  <div className="card-icon">🌿</div>
                  <h3 className="card-title">A Vibe of Our Own</h3>
                </div>
                <p className="card-text">
                  A bright, Pinterest-worthy standalone cafe designed for catching up with friends, solo reading, or savoring a slow morning.
                </p>
                <Link to="/gallery" className="card-footer-link">
                  See The Space &amp; Vibe →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 4. Menu Highlights Preview (Interactive React Tab Filter) */}
      <section className="menu-preview-section section-padding" aria-label="Menu Highlights Preview">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow eyebrow-badge">Crafted from Scratch</span>
            <h2>Signature House Specialties</h2>
            <p>Every dough kneaded by hand, every focaccia baked daily, every sauce created from scratch.</p>
          </div>

          <div className="menu-filter-nav" role="tablist">
            {MENU_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="menu-items-grid">
            {filteredItems.map(item => (
              <div key={item.id} className="menu-item-card">
                <div className="item-img-wrap">
                  <img src={item.image} alt={item.name} />
                  {item.tags?.find(t => t.type === 'fire') && (
                    <span className="item-tag item-tag-fire">🔥 Torched Table-Side</span>
                  )}
                </div>
                <div className="item-details">
                  <div className="item-header">
                    <h3 className="item-title">{item.name}</h3>
                  </div>
                  <div className="item-subtext-focaccia">🍞 {item.subtext}</div>
                  <p className="item-desc">{item.description}</p>
                  <div className="item-footer">
                    <span className="item-category-label">
                      {item.category === 'sandwiches' ? 'Focaccia Bar' : item.category === 'crepes' ? 'Creperie' : 'Specialty Brew'}
                    </span>
                    <Link to="/menu" style={{ fontWeight: 700, color: 'var(--color-terracotta)', fontSize: '0.85rem' }}>
                      View in Menu →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 56 }}>
            <Link to="/menu" className="btn btn-primary btn-lg">
              View Our Complete Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Heritage & Craft Banner */}
      <section className="story-banner-section" aria-label="Our Craft and Heritage">
        <div className="container">
          <div className="story-banner-grid">
            <div className="story-banner-content">
              <span className="eyebrow eyebrow-badge eyebrow-gold">The Passion Project</span>
              <h2>A Blend of Heritages, <span className="highlight-gold">Crafted with Heart.</span></h2>
              <p>
                Milo’s Cafe is a family-owned passion project born from a beautiful intersection of heritages—bringing together the rich, bold coffee traditions of Colombia and the comforting flavors of European and French-Algerian cafes.
              </p>

              <div className="story-values-list">
                <div className="story-value-item">
                  <div className="value-check-icon"><Check size={14} /></div>
                  <div>
                    <div className="value-title">Doughs Kneaded by Hand</div>
                    <div className="value-desc">No shortcuts or premixes. We believe that truly transcendent food takes time, patience, and love.</div>
                  </div>
                </div>
                <div className="story-value-item">
                  <div className="value-check-icon"><Check size={14} /></div>
                  <div>
                    <div className="value-title">Scratch Sauces &amp; Syrups</div>
                    <div className="value-desc">From our table-side torched mayo to seasonal brown sugar reductions, all crafted in our kitchen.</div>
                  </div>
                </div>
                <div className="story-value-item">
                  <div className="value-check-icon"><Check size={14} /></div>
                  <div>
                    <div className="value-title">Morrisville Community Hub</div>
                    <div className="value-desc">We don’t just want to feed our neighborhood; we want every guest to walk in and feel like family.</div>
                  </div>
                </div>
              </div>

              <Link to="/about" className="btn btn-gold btn-lg">
                Learn More About Our Story
              </Link>
            </div>

            <div className="story-banner-visual">
              <img src="/images/quiet-morning.jpg" alt="Sunlit morning scene inside Milo's Cafe" className="story-banner-img" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Press & Customer Praise */}
      <section className="press-section section-padding" aria-label="Customer Reviews and Press">
        <div className="container">
          <div className="press-quote-box">
            <div className="quote-mark">“</div>
            <p className="quote-text">
              “Voted the Best Sandwich Shop in the Triangle. The focaccia is baked fresh daily and the schnitzel sandwich torched table-side is simply unmatched.”
            </p>
            <div className="quote-attribution">— The News &amp; Observer</div>
            <div className="quote-sub-attr">Triangle Community Choice Awards</div>
          </div>

          <div className="reviews-grid">
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-body">
                "The chicken schnitzel sandwich on fresh focaccia is out of this world! Having the gruyere torched table-side makes it such a fun and mouthwatering experience. Best cafe in Morrisville by a mile."
              </p>
              <div className="reviewer-name">Sarah M.</div>
              <div className="reviewer-source">Morrisville Local • Google Review</div>
            </div>

            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-body">
                "Such a Pinterest-worthy gem! The interior has the warmest European energy, the plants, the sunshine, and the coffee is authentic Colombian quality. My go-to Saturday morning reading sanctuary."
              </p>
              <div className="reviewer-name">David K.</div>
              <div className="reviewer-source">Cary Resident • Google Review</div>
            </div>

            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-body">
                "The sweet crepes with fresh berries and house sauce are melt-in-your-mouth perfection. You can taste the genuine scratch-made craft in every single bite. Don't skip the seasonal lattes!"
              </p>
              <div className="reviewer-name">Elena R.</div>
              <div className="reviewer-source">Food &amp; Beverage Critic • Triangle Eats</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Instagram & Cafe Vibe Showcase */}
      <section className="vibe-section section-padding" aria-label="Instagram Gallery">
        <div className="container">
          <span className="eyebrow eyebrow-badge">Join Our Community</span>
          <h2>A Vibe of Our Own</h2>
          <p>Follow along with our daily bakes, latte art, and cozy cafe moments.</p>
          <a href={CAFE_CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer" className="insta-handle">
            📸 {CAFE_CONTACT.instagram}
          </a>

          <div className="vibe-gallery-grid">
            <Link to="/gallery" className="vibe-item" aria-label="View gallery photo">
              <img src="/images/interior-cozy.jpg" alt="Cozy seating corner" />
              <div className="vibe-overlay"><span>☕</span></div>
            </Link>
            <Link to="/gallery" className="vibe-item" aria-label="View gallery photo">
              <img src="/images/schnitzel-sandwich.jpg" alt="Torched Schnitzel sandwich" />
              <div className="vibe-overlay"><span>🏆</span></div>
            </Link>
            <Link to="/gallery" className="vibe-item" aria-label="View gallery photo">
              <img src="/images/authentic-crepes.jpg" alt="Authentic Sweet Crepes" />
              <div className="vibe-overlay"><span>🥞</span></div>
            </Link>
            <Link to="/gallery" className="vibe-item" aria-label="View gallery photo">
              <img src="/images/interior-patio.jpg" alt="Sunny outdoor patio area" />
              <div className="vibe-overlay"><span>☀️</span></div>
            </Link>
            <Link to="/gallery" className="vibe-item" aria-label="View gallery photo">
              <img src="/images/classic-espresso.jpg" alt="Espresso drink latte art" />
              <div className="vibe-overlay"><span>🌿</span></div>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Hours & Location Banner */}
      <section className="hours-location-banner section-padding" aria-label="Hours and Location">
        <div className="container">
          <div className="hl-banner-grid">
            <div className="hl-info-card">
              <span className="eyebrow eyebrow-badge">Plan Your Visit</span>
              <h2 className="hl-title">Come On By — You’re Family Here</h2>

              <div className="hl-row">
                <div className="hl-icon">📍</div>
                <div className="hl-details">
                  <strong>Our Address</strong>
                  <span>{CAFE_CONTACT.address}</span>
                  <div style={{ marginTop: 4 }}>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--color-gold-dark)', fontWeight: 600 }}>
                      {CAFE_CONTACT.landmark}
                    </span>
                  </div>
                </div>
              </div>

              <div className="hl-row">
                <div className="hl-icon">📞</div>
                <div className="hl-details">
                  <strong>Telephone</strong>
                  <a href={`tel:${CAFE_CONTACT.phone}`} style={{ color: 'var(--color-terracotta)', fontWeight: 700 }}>
                    {CAFE_CONTACT.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="hl-row">
                <div className="hl-icon">⏰</div>
                <div className="hl-details" style={{ width: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <strong>Hours of Operation</strong>
                    <LiveStatusBadge />
                  </div>
                  <table className="hours-table">
                    <tbody>
                      {CAFE_HOURS.map(h => (
                        <tr key={h.dayName} className={h.dayIndex === currentDay ? 'today-row' : ''}>
                          <td>{h.dayName}</td>
                          <td>{h.hours}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div style={{ marginTop: 24, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary">
                  Get Directions
                </Link>
                <Link to="/menu" className="btn btn-outline">
                  Explore Menu
                </Link>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="hl-map-card">
              <iframe
                title="Google Map location of Milo's Cafe in Morrisville, NC"
                src="https://maps.google.com/maps?q=10119%20Chapel%20Hill%20Rd,%20Morrisville,%20NC%2027560&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
