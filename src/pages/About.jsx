import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main>
      {/* Page Hero Banner */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </div>
          <h1 className="page-hero-title">Our Story: A Blend of Cultures</h1>
          <p className="page-hero-sub">
            Where Colombian coffee heritage, French culinary elegance, and heartfelt hospitality meet in Morrisville.
          </p>
        </div>
      </section>

      {/* Core Story Section */}
      <section className="section-padding" style={{ background: 'var(--color-white)' }}>
        <div className="container">
          <div className="about-story-grid">
            <div>
              <span className="eyebrow eyebrow-badge">Family-Owned &amp; Operated</span>
              <h2 style={{ fontSize: '2.75rem', marginBottom: 24 }}>Born From A Passion Project</h2>
              <div style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 20 }}>
                <p>
                  <strong>Milo’s Cafe is a family-owned and operated passion project.</strong> Our concept is born from a beautiful intersection of heritages—bringing together the rich, bold coffee traditions of Colombia and the elegant, comforting flavors of European and French-Algerian cafes.
                </p>
                <p>
                  We believe that great food takes time. That is why our doughs are kneaded by hand, our focaccia is baked fresh daily, and our sauces are crafted completely from scratch. We don't just want to feed our neighborhood; we want to give Morrisville a warm, welcoming community hub where every detail feels like home.
                </p>
                <p>
                  From the moment you step across our sunlit threshold, you are met with the aroma of hot espresso, fresh rosemary olive-oil focaccia, and the warm smiles of our family. Whether you're here for a quick morning pick-me-up or a leisurely afternoon lunch, you're family here.
                </p>
              </div>
              <div style={{ marginTop: 36, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link to="/menu" className="btn btn-primary">
                  Discover Our Menu
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Visit Our Cafe
                </Link>
              </div>
            </div>

            {/* Story Visual */}
            <div style={{ position: 'relative' }}>
              <img
                src="/images/interior-cozy.jpg"
                alt="Cozy sunlit dining room at Milo's Cafe"
                style={{ width: '100%', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xl)', border: '4px solid var(--color-cream)' }}
              />

              <div style={{
                position: 'absolute',
                bottom: -24,
                right: -20,
                background: 'var(--color-espresso-900)',
                color: '#FFFFFF',
                padding: '20px 28px',
                borderRadius: 'var(--radius-lg)',
                border: '2px solid var(--color-gold)',
                boxShadow: 'var(--shadow-lg)',
                textAlign: 'center'
              }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', fontWeight: 700, color: 'var(--color-gold)' }}>
                  100%
                </div>
                <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Scratch-Made Daily
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Heritage Cards */}
      <section className="section-padding" style={{ background: 'var(--color-sand)' }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow eyebrow-badge eyebrow-gold">The Heritages</span>
            <h2>A Trio of Culinary Traditions</h2>
            <p>Every recipe on our menu reflects a thoughtful celebration of these three distinct worlds.</p>
          </div>

          <div className="heritage-cards-grid">
            <div className="heritage-card">
              <span className="heritage-flag">🇨🇴</span>
              <h3>Colombian Coffee Roots</h3>
              <p>
                Colombia's volcanic soils and lush elevations produce some of the finest beans in the world. We honor this heritage with impeccably pulled single-origin roasts, signature house-made syrups, and the soulful ritual of morning coffee.
              </p>
            </div>

            <div className="heritage-card">
              <span className="heritage-flag">🥐</span>
              <h3>European Cafe Culture</h3>
              <p>
                Inspired by the slow cafes of Paris, Milan, and Vienna where guests linger with a book or conversation. We channel this spirit through our house-baked golden focaccia, hand-laminated croissants, and artisan sweet crepes.
              </p>
            </div>

            <div className="heritage-card">
              <span className="heritage-flag">🌿</span>
              <h3>French-Algerian Charm</h3>
              <p>
                A harmonious blend of delicate French technique and vibrant Mediterranean-North African warmth. Characterized by citrusy yuzu slaws, aromatic nut-free pestos, and generous table-side hospitality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Craft */}
      <section className="section-padding" style={{ background: 'var(--color-white)' }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow eyebrow-badge">Our Commitment</span>
            <h2>Why Great Food Takes Time</h2>
            <p>We believe in the integrity of scratch cooking—no shortcuts, no industrial pre-mixes.</p>
          </div>

          <div className="craft-pillars-grid">
            <div className="craft-pillar-card">
              <div className="craft-pillar-icon">🥣</div>
              <h4>Hand-Kneaded Doughs</h4>
              <p>Our doughs undergo careful fermentation and hand-kneading to develop deep flavor and that perfect airy, chewy crumb.</p>
            </div>

            <div className="craft-pillar-card">
              <div className="craft-pillar-icon">🍞</div>
              <h4>Focaccia Baked Daily</h4>
              <p>Infused with extra virgin olive oil, flaky sea salt, and fresh herbs, baked fresh in our ovens every single morning.</p>
            </div>

            <div className="craft-pillar-card">
              <div className="craft-pillar-icon">🔥</div>
              <h4>Table-Side Torching</h4>
              <p>A culinary spectacle that melts Gruyère cheese to bubbling, toasted perfection right at your table for an unforgettable bite.</p>
            </div>

            <div className="craft-pillar-card">
              <div className="craft-pillar-icon">❤️</div>
              <h4>Morrisville Community</h4>
              <p>A neighborhood haven where friendships blossom, books are read, and every visitor is greeted as a cherished friend.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Atmosphere Photo Mosaic */}
      <section className="section-padding" style={{ background: 'var(--color-cream)' }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow eyebrow-badge">The Atmosphere</span>
            <h2>A Space Designed to Make You Smile</h2>
            <p>Housed in a charming standalone converted building right along Chapel Hill Road.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            <img src="/images/interior-seating.jpg" alt="Cozy seating corner" style={{ width: '100%', height: 320, objectFit: 'cover', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }} />
            <img src="/images/counter.jpg" alt="Barista counter" style={{ width: '100%', height: 320, objectFit: 'cover', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }} />
            <img src="/images/interior-patio.jpg" alt="Outdoor patio dining" style={{ width: '100%', height: 320, objectFit: 'cover', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }} />
          </div>

          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/gallery" className="btn btn-outline btn-lg">
              Explore Full Photo Gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* Visit Us CTA Banner */}
      <section style={{ background: 'linear-gradient(135deg, #241610 0%, #3B2418 60%, #20130D 100%)', color: '#FFFFFF', padding: '72px 0', textAlign: 'center' }}>
        <div className="container container-narrow">
          <h2 style={{ color: '#FFFFFF', fontSize: '2.75rem', marginBottom: 16 }}>We Can’t Wait to Welcome You</h2>
          <p style={{ color: 'var(--color-sand)', fontSize: '1.15rem', marginBottom: 32 }}>
            10119 Chapel Hill Rd, Morrisville, NC • Open 7 Days a Week
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/menu" className="btn btn-gold btn-lg">Browse Our Menu</Link>
            <Link to="/contact" className="btn btn-white btn-lg">Get Directions</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
