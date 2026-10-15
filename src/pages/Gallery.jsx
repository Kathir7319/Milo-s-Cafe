import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GALLERY_ITEMS } from '../data/galleryData';
import { CAFE_CONTACT } from '../data/hoursData';
import LightboxModal from '../components/LightboxModal';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filteredPhotos = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  return (
    <main>
      {/* Page Hero Banner */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Gallery</span>
          </div>
          <h1 className="page-hero-title">A Vibe of Our Own</h1>
          <p className="page-hero-sub">
            A bright, Pinterest-worthy standalone cafe designed for catching up with friends, solo reading, or savoring a slow morning.
          </p>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="section-padding" style={{ background: 'var(--color-white)' }}>
        <div className="container">
          {/* Filter Bar */}
          <div className="gallery-filter-bar">
            <button
              className={`filter-btn gallery-filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Photos
            </button>
            <button
              className={`filter-btn gallery-filter-btn ${activeFilter === 'food' ? 'active' : ''}`}
              onClick={() => setActiveFilter('food')}
            >
              Award-Winning Eats
            </button>
            <button
              className={`filter-btn gallery-filter-btn ${activeFilter === 'drinks' ? 'active' : ''}`}
              onClick={() => setActiveFilter('drinks')}
            >
              Specialty Drinks
            </button>
            <button
              className={`filter-btn gallery-filter-btn ${activeFilter === 'space' ? 'active' : ''}`}
              onClick={() => setActiveFilter('space')}
            >
              Cafe Space &amp; Patio
            </button>
          </div>

          {/* Grid */}
          <div className="gallery-grid">
            {filteredPhotos.map(photo => (
              <div
                key={photo.id}
                className="gallery-card"
                onClick={() => setSelectedPhoto(photo)}
                tabIndex={0}
                role="button"
                aria-label={`View photo of ${photo.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedPhoto(photo);
                  }
                }}
              >
                <img src={photo.image} alt={photo.title} />
                <div className="gallery-card-overlay">
                  <span className="gallery-card-cat">{photo.categoryLabel}</span>
                  <h3 className="gallery-card-title">{photo.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Instagram Banner */}
          <div style={{ marginTop: 64, textAlign: 'center', background: 'var(--color-sand)', padding: 48, borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)' }}>
            <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: 12 }}>📸</span>
            <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', marginBottom: 8 }}>Tag Your Photos With #MilosCafe</h3>
            <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', maxWidth: 600, margin: '0 auto 24px' }}>
              We love seeing your slow mornings, favorite sandwiches, and sunny table photos. Follow and tag us on Instagram:
            </p>
            <a href={CAFE_CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
              Follow {CAFE_CONTACT.instagram} →
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />
    </main>
  );
}
