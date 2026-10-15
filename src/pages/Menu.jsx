import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MENU_ITEMS, MENU_CATEGORIES } from '../data/menuData';
import { CAFE_CONTACT } from '../data/hoursData';
import { ShoppingBag, Phone, MapPin } from 'lucide-react';

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const sandwiches = MENU_ITEMS.filter(i => i.category === 'sandwiches');
  const crepes = MENU_ITEMS.filter(i => i.category === 'crepes');
  const drinks = MENU_ITEMS.filter(i => i.category === 'coffee');

  return (
    <main>
      {/* Page Hero Banner */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Menu</span>
          </div>
          <h1 className="page-hero-title">Crafted from Scratch</h1>
          <p className="page-hero-sub">
            Served on our signature house-baked focaccia bread, hand-pulled espresso, and scratch-made sweet &amp; savory crepes.
          </p>
        </div>
      </section>

      {/* Table-Side Torching Spotlight */}
      <section style={{ background: '#241610', color: '#FFFFFF', padding: '24px 0', borderBottom: '2px solid var(--color-gold)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, textAlign: 'center', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '1.5rem' }}>🔥</span>
          <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-sand)' }}>
            Signature Experience: Melted Gruyère cheese is <strong>torched table-side</strong> over our famous schnitzel sandwich!
          </span>
          <span className="card-badge card-badge-award" style={{ fontSize: '0.72rem' }}>The News &amp; Observer Winner</span>
        </div>
      </section>

      {/* Quick Order Banner for US Customers */}
      <section style={{ background: 'var(--color-sand)', padding: '16px 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.9rem', color: 'var(--color-espresso-900)' }}>
            <ShoppingBag size={18} color="var(--color-terracotta)" />
            <span><strong>Dine-In, Takeout &amp; Office Catering</strong> available daily in Morrisville &amp; RTP.</span>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <a href={`tel:${CAFE_CONTACT.phone}`} className="btn btn-primary btn-sm">
              <Phone size={14} style={{ marginRight: 4 }} /> Order Pick-Up {CAFE_CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Menu Categories Section */}
      <section className="section-padding" style={{ background: 'var(--color-white)' }}>
        <div className="container">

          {/* Category Filter Pills */}
          <div className="menu-filter-nav" style={{ marginBottom: 56 }}>
            {MENU_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Section 1: Award-Winning Sandwiches */}
          {(selectedCategory === 'all' || selectedCategory === 'sandwiches') && (
            <div className="menu-category-section" id="sandwiches">
              <div className="category-header-wrap">
                <span className="category-icon">🏆</span>
                <div>
                  <h2 className="category-title">Award-Winning Sandwiches</h2>
                  <div style={{ fontSize: '0.95rem', color: 'var(--color-gold-dark)', fontWeight: 600, marginTop: 4 }}>
                    Served on our signature house-baked focaccia bread.
                  </div>
                </div>
                <span className="category-subtext">Baked Fresh Daily</span>
              </div>

              <div className="menu-list-grid">
                {sandwiches.map(item => (
                  <article key={item.id} className="menu-horizontal-card">
                    <img src={item.image} alt={item.name} className="menu-horizontal-img" />
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
                        <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-serif)', color: 'var(--color-espresso-900)' }}>
                          {item.name}
                        </h3>
                        {item.price && (
                          <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-terracotta)', marginLeft: 8 }}>
                            {item.price}
                          </span>
                        )}
                      </div>
                      <div style={{ marginBottom: 8 }}>
                        {item.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className={`dietary-tag ${
                              tag.type === 'award' ? 'tag-award' :
                              tag.type === 'veg' ? 'tag-veg' :
                              tag.type === 'scratch' ? 'tag-scratch' :
                              tag.type === 'fire' ? 'item-tag-fire' : 'tag-signature'
                            }`}
                          >
                            {tag.text}
                          </span>
                        ))}
                      </div>
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Section 2: Crepes & Bakery */}
          {(selectedCategory === 'all' || selectedCategory === 'crepes') && (
            <div className="menu-category-section" id="crepes" style={{ marginTop: selectedCategory === 'all' ? 48 : 0 }}>
              <div className="category-header-wrap">
                <span className="category-icon">🥞</span>
                <div>
                  <h2 className="category-title">Crepes &amp; Bakery</h2>
                  <div style={{ fontSize: '0.95rem', color: 'var(--color-gold-dark)', fontWeight: 600, marginTop: 4 }}>
                    Hand-spun crepes and scratch morning bakes.
                  </div>
                </div>
                <span className="category-subtext">Sweet &amp; Savory</span>
              </div>

              <div className="menu-list-grid">
                {crepes.map(item => (
                  <article key={item.id} className="menu-horizontal-card">
                    <img src={item.image} alt={item.name} className="menu-horizontal-img" />
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
                        <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-serif)', color: 'var(--color-espresso-900)' }}>
                          {item.name}
                        </h3>
                        {item.price && (
                          <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-terracotta)', marginLeft: 8 }}>
                            {item.price}
                          </span>
                        )}
                      </div>
                      <div style={{ marginBottom: 8 }}>
                        {item.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className={`dietary-tag ${
                              tag.type === 'award' ? 'tag-award' :
                              tag.type === 'veg' ? 'tag-veg' :
                              tag.type === 'scratch' ? 'tag-scratch' : 'tag-signature'
                            }`}
                          >
                            {tag.text}
                          </span>
                        ))}
                      </div>
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Section 3: Specialty Drinks */}
          {(selectedCategory === 'all' || selectedCategory === 'coffee') && (
            <div className="menu-category-section" id="coffee" style={{ marginTop: selectedCategory === 'all' ? 48 : 0 }}>
              <div className="category-header-wrap">
                <span className="category-icon">☕</span>
                <div>
                  <h2 className="category-title">Specialty Drinks</h2>
                  <div style={{ fontSize: '0.95rem', color: 'var(--color-gold-dark)', fontWeight: 600, marginTop: 4 }}>
                    Single-origin Colombian beans &amp; handcrafted house syrups.
                  </div>
                </div>
                <span className="category-subtext">Hot &amp; Iced</span>
              </div>

              <div className="menu-list-grid">
                {drinks.map(item => (
                  <article key={item.id} className="menu-horizontal-card">
                    <img src={item.image} alt={item.name} className="menu-horizontal-img" />
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
                        <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-serif)', color: 'var(--color-espresso-900)' }}>
                          {item.name}
                        </h3>
                        {item.price && (
                          <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-terracotta)', marginLeft: 8 }}>
                            {item.price}
                          </span>
                        )}
                      </div>
                      <div style={{ marginBottom: 8 }}>
                        {item.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className={`dietary-tag ${
                              tag.type === 'award' ? 'tag-award' :
                              tag.type === 'veg' ? 'tag-veg' :
                              tag.type === 'scratch' ? 'tag-scratch' : 'tag-signature'
                            }`}
                          >
                            {tag.text}
                          </span>
                        ))}
                      </div>
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* US Dietary, Allergen & Health Advisory Notice */}
          <div style={{ background: 'var(--color-sand)', padding: 32, borderRadius: 'var(--radius-lg)', marginTop: 56, border: '1px solid var(--color-border)' }}>
            <h4 style={{ fontSize: '1.15rem', marginBottom: 12, textAlign: 'center' }}>
              Allergy Information &amp; US Health Guidance
            </h4>
            <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', maxWidth: 840, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 10, lineHeight: 1.65 }}>
              <p>
                <strong>Nut-Free Pesto:</strong> Our signature house basil pesto is crafted completely nut-free so more of our guests can savor it safely.
              </p>
              <p>
                <strong>Dairy-Free &amp; Plant-Based Options:</strong> Oat milk and almond milk substitutions are readily available for all espresso drinks and matcha.
              </p>
              <p style={{ fontStyle: 'italic', fontSize: '0.8125rem', borderTop: '1px solid var(--color-border-light)', paddingTop: 10 }}>
                * Consumer Advisory: Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness. State and Wake County sales tax applies to all prepared foods and beverages.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: 48, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`tel:${CAFE_CONTACT.phone}`} className="btn btn-primary btn-lg">
              Call to Order Pick-Up: {CAFE_CONTACT.phoneDisplay}
            </a>
            <Link to="/contact" className="btn btn-outline btn-lg">
              Find Our Cafe &amp; Parking
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
