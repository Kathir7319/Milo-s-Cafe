import React from 'react';
import { Link } from 'react-router-dom';
import { CAFE_CONTACT, CAFE_HOURS } from '../data/hoursData';
import LiveStatusBadge from './LiveStatusBadge';
import { Instagram, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand */}
          <div className="footer-brand">
            <img src="/images/logo.jpg" alt="Milo's Cafe Logo" className="brand-logo-img" />
            <div className="brand-name">Milo’s Cafe</div>
            <div className="brand-tagline">European Cafe &amp; Scratch Bakery</div>
            <p className="footer-about-text">
              Where Colombian roots meet European cafe culture. Scratch-baked daily focaccia, specialty coffee, and authentic sweet &amp; savory crepes crafted with love in Morrisville, NC.
            </p>
            <div className="footer-social-links">
              <a href={CAFE_CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href={CAFE_CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Google Maps">
                <MapPin size={18} />
              </a>
              <a href={`tel:${CAFE_CONTACT.phone}`} className="social-btn" aria-label="Phone">
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">Our Story</Link></li>
              <li><Link to="/menu">Craft Menu</Link></li>
              <li><Link to="/gallery">The Vibe &amp; Photos</Link></li>
              <li><Link to="/contact">Location &amp; Directions</Link></li>
            </ul>
          </div>

          {/* Col 3: Hours of Operation */}
          <div>
            <h4 className="footer-col-title">Hours</h4>
            <div className="footer-hours-list">
              <div className="footer-hours-row">
                <span>Mon – Thu</span>
                <strong>7:00 AM – 4:00 PM</strong>
              </div>
              <div className="footer-hours-row">
                <span>Fri – Sat</span>
                <strong>7:00 AM – 5:00 PM</strong>
              </div>
              <div className="footer-hours-row">
                <span>Sunday</span>
                <strong>8:30 AM – 3:30 PM</strong>
              </div>
            </div>
            <div style={{ marginTop: 16 }}>
              <LiveStatusBadge />
            </div>
          </div>

          {/* Col 4: Location & Contact */}
          <div>
            <h4 className="footer-col-title">Visit Us</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <span className="footer-contact-icon">📍</span>
                <div>
                  <strong>10119 Chapel Hill Rd</strong><br />
                  Morrisville, NC 27560
                </div>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">📞</span>
                <div>
                  <a href={`tel:${CAFE_CONTACT.phone}`} style={{ color: '#FFFFFF', fontWeight: 700 }}>
                    {CAFE_CONTACT.phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">📸</span>
                <div>
                  <a href={CAFE_CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gold)' }}>
                    {CAFE_CONTACT.instagram}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            &copy; {new Date().getFullYear()} Milo’s Cafe. All rights reserved. Voted "Best Sandwich Shop in the Triangle".
          </div>
          <div>
            Crafted with love in Morrisville, North Carolina
          </div>
        </div>
      </div>
    </footer>
  );
}
