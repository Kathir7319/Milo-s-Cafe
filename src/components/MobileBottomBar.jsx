import React from 'react';
import { NavLink } from 'react-router-dom';
import { CAFE_CONTACT } from '../data/hoursData';
import { Phone, MapPin, Utensils, Instagram } from 'lucide-react';

export default function MobileBottomBar() {
  return (
    <aside className="mobile-bottom-bar" aria-label="Quick Actions">
      <div className="mobile-bottom-nav">
        <a href={`tel:${CAFE_CONTACT.phone}`} className="mobile-bottom-btn">
          <Phone size={18} className="btn-icon" />
          <span>Call</span>
        </a>
        <NavLink to="/contact" className={({ isActive }) => `mobile-bottom-btn ${isActive ? 'active' : ''}`}>
          <MapPin size={18} className="btn-icon" />
          <span>Directions</span>
        </NavLink>
        <NavLink to="/menu" className={({ isActive }) => `mobile-bottom-btn ${isActive ? 'active' : ''}`}>
          <Utensils size={18} className="btn-icon" />
          <span>Menu</span>
        </NavLink>
        <a href={CAFE_CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer" className="mobile-bottom-btn">
          <Instagram size={18} className="btn-icon" />
          <span>Instagram</span>
        </a>
      </div>
    </aside>
  );
}
