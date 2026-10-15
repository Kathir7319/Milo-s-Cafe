import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import LiveStatusBadge from './LiveStatusBadge';
import { Phone, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileOpen(false);
    document.body.style.overflow = '';
  }, [location.pathname]);

  const toggleMobileNav = () => {
    setIsMobileOpen(prev => {
      const next = !prev;
      document.body.style.overflow = next ? 'hidden' : '';
      return next;
    });
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <Link to="/" className="brand-link" aria-label="Milo's Cafe Home">
            <img src="/images/logo.jpg" alt="Milo's Cafe Logo" className="brand-logo-img" />
            <div className="brand-text">
              <span className="brand-name">Milo’s Cafe</span>
              <span className="brand-tagline">European Cafe &amp; Bakery</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-menu" aria-label="Main Navigation">
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              About Us
            </NavLink>
            <NavLink to="/menu" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Menu
            </NavLink>
            <NavLink to="/gallery" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Gallery
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Location &amp; Hours
            </NavLink>
          </nav>

          {/* Actions */}
          <div className="header-actions">
            <LiveStatusBadge />
            <Link to="/menu" className="btn btn-primary btn-sm">
              View Menu
            </Link>
            <button
              className={`mobile-nav-toggle ${isMobileOpen ? 'active' : ''}`}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileOpen}
              onClick={toggleMobileNav}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${isMobileOpen ? 'active' : ''}`} role="dialog" aria-modal="true" aria-label="Mobile Navigation">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
          <LiveStatusBadge />
          <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>Morrisville, NC</span>
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column' }}>
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            About Us
          </NavLink>
          <NavLink to="/menu" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Menu Highlights
          </NavLink>
          <NavLink to="/gallery" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Photo Gallery
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Location, Hours &amp; Contact
          </NavLink>
        </nav>
        <div className="mobile-drawer-footer">
          <Link to="/menu" className="btn btn-primary" style={{ width: '100%' }}>
            View Full Menu
          </Link>
          <Link to="/contact" className="btn btn-outline" style={{ width: '100%' }}>
            Get Directions
          </Link>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', textAlign: 'center' }}>
            📍 10119 Chapel Hill Rd, Morrisville, NC<br />
            📞 <a href="tel:+19194438000" style={{ color: 'var(--color-terracotta)', fontWeight: 700 }}>(919) 443-8000</a>
          </p>
        </div>
      </div>
    </>
  );
}
