import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CAFE_HOURS, CAFE_CONTACT } from '../data/hoursData';
import LiveStatusBadge from '../components/LiveStatusBadge';
import { MapPin, Phone, Instagram, Clock, Car, Wifi, CreditCard, Accessibility, Coffee } from 'lucide-react';

export default function Contact() {
  const currentDay = new Date().getDay();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'general',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        topic: 'general',
        message: ''
      });
    }, 800);
  };

  return (
    <main>
      {/* Page Hero Banner */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Location &amp; Hours</span>
          </div>
          <h1 className="page-hero-title">Location, Hours &amp; Contact</h1>
          <p className="page-hero-sub">
            Conveniently situated in Morrisville on Chapel Hill Rd (NC-54) in the heart of North Carolina's Research Triangle.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding" style={{ background: 'var(--color-white)' }}>
        <div className="container">
          <div className="contact-grid">
            
            {/* Col 1: Hours & Practical Info */}
            <div>
              <span className="eyebrow eyebrow-badge">Morrisville, North Carolina</span>
              <h2 style={{ fontSize: '2.5rem', marginBottom: 24 }}>Visiting Milo’s Cafe</h2>

              <div style={{ background: 'var(--color-cream)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: 36, marginBottom: 32 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                  <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', color: 'var(--color-espresso-900)' }}>
                    ⏰ Hours of Operation
                  </h3>
                  <LiveStatusBadge />
                </div>

                <table className="hours-table" style={{ fontSize: '0.95rem' }}>
                  <tbody>
                    {CAFE_HOURS.map(h => (
                      <tr key={h.dayName} className={h.dayIndex === currentDay ? 'today-row' : ''}>
                        <td><strong>{h.dayName}</strong></td>
                        <td>{h.hours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div style={{ marginTop: 20, fontSize: '0.8125rem', color: 'var(--color-text-muted)', borderTop: '1px solid var(--color-border)', paddingTop: 12 }}>
                  * Hours displayed in <strong>US Eastern Time (ET)</strong>. Kitchen serves fresh scratch focaccia and crepes until closing daily.
                </div>
              </div>

              {/* Landmark & Contact Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div className="hl-icon"><MapPin size={20} /></div>
                  <div>
                    <strong style={{ fontSize: '1.05rem', display: 'block', color: 'var(--color-espresso-900)' }}>
                      Address &amp; Landmark
                    </strong>
                    <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginTop: 4 }}>
                      {CAFE_CONTACT.address}<br />
                      {CAFE_CONTACT.city}, {CAFE_CONTACT.state} {CAFE_CONTACT.zip} ({CAFE_CONTACT.county})<br />
                      <span style={{ fontSize: '0.85rem', color: 'var(--color-gold-dark)', fontWeight: 600 }}>
                        {CAFE_CONTACT.landmark}
                      </span>
                    </p>
                    <a href={CAFE_CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm" style={{ marginTop: 10 }}>
                      Open in Google Maps →
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div className="hl-icon"><Phone size={20} /></div>
                  <div>
                    <strong style={{ fontSize: '1.05rem', display: 'block', color: 'var(--color-espresso-900)' }}>
                      Phone &amp; Orders
                    </strong>
                    <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginTop: 4 }}>
                      Call for carryout orders, questions, and corporate catering:
                    </p>
                    <a href={`tel:${CAFE_CONTACT.phone}`} style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-terracotta)', display: 'inline-block', marginTop: 4 }}>
                      {CAFE_CONTACT.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div className="hl-icon"><Instagram size={20} /></div>
                  <div>
                    <strong style={{ fontSize: '1.05rem', display: 'block', color: 'var(--color-espresso-900)' }}>
                      Instagram
                    </strong>
                    <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginTop: 4 }}>
                      Daily menu specials, bakery drops, and seasonal syrup reveals:
                    </p>
                    <a href={CAFE_CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-gold)', display: 'inline-block', marginTop: 4 }}>
                      {CAFE_CONTACT.instagram}
                    </a>
                  </div>
                </div>
              </div>

              {/* Guest Amenities & Payment Details */}
              <div style={{ marginTop: 36, padding: 24, background: 'var(--color-sand)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: 14, color: 'var(--color-espresso-900)' }}>
                  Guest Amenities &amp; Payments
                </h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <Car size={16} color="var(--color-terracotta)" />
                    <span><strong>Free On-Site Parking:</strong> Dedicated customer lot directly adjacent to cafe.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <Wifi size={16} color="var(--color-terracotta)" />
                    <span><strong>High-Speed Wi-Fi:</strong> Remote-work friendly for RTP &amp; tech corridor professionals.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <Accessibility size={16} color="var(--color-terracotta)" />
                    <span><strong>Accessibility:</strong> ADA compliant entrance, dining tables, and facilities.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <CreditCard size={16} color="var(--color-terracotta)" />
                    <span><strong>Payment Methods:</strong> Apple Pay, Google Pay, Tap-to-Pay, Visa, MC, Amex, Discover.</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Col 2: Catering & Contact Form */}
            <div>
              <div className="contact-card-box">
                <span className="eyebrow eyebrow-badge">Get in Touch</span>
                <h3 style={{ fontSize: '1.85rem', marginBottom: 12, fontFamily: 'var(--font-serif)', color: 'var(--color-espresso-900)' }}>
                  Send Us a Message
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: 24 }}>
                  Planning an RTP office lunch, catering order, or have dietary questions? Drop our family a note and we'll get right back to you.
                </p>

                {isSubmitted && (
                  <div className="form-success-banner" style={{ display: 'block' }}>
                    ✓ Thank you! Your message has been received. Our Morrisville team will reach out promptly.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      className="form-control"
                      placeholder="e.g. Maria Gonzalez"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="emailAddr" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      id="emailAddr"
                      className="form-control"
                      placeholder="maria@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phoneNum" className="form-label">Phone Number (US Mobile / Office)</label>
                    <input
                      type="tel"
                      id="phoneNum"
                      className="form-control"
                      placeholder="(919) 555-0123"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="inquiryType" className="form-label">Topic of Inquiry</label>
                    <select
                      id="inquiryType"
                      className="form-control"
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    >
                      <option value="general">General Question</option>
                      <option value="catering">Corporate / RTP Office Catering (Focaccia Platters &amp; Pastry Boxes)</option>
                      <option value="dietary">Dietary or Allergy Question (Nut-Free, Gluten-Friendly)</option>
                      <option value="feedback">Customer Experience / Feedback</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="msgBody" className="form-label">Your Message *</label>
                    <textarea
                      id="msgBody"
                      className="form-control"
                      placeholder="Tell us how we can help..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }} disabled={isSubmitting}>
                    {isSubmitting ? 'Sending message...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>

          </div>

          {/* Driving Directions from Triangle Hubs */}
          <div style={{ marginTop: 64, background: 'var(--color-cream)', padding: 40, borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)' }}>
            <h3 style={{ fontSize: '1.85rem', fontFamily: 'var(--font-serif)', marginBottom: 8, color: 'var(--color-espresso-900)' }}>
              Getting Here Across the Triangle
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: 24 }}>
              Located right on NC-54 (Chapel Hill Rd) with rapid access from all major Triangle arteries:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
              <div style={{ background: '#FFFFFF', padding: 24, borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
                <strong style={{ display: 'block', fontSize: '1rem', color: 'var(--color-espresso-900)', marginBottom: 6 }}>
                  From Cary &amp; Downtown Raleigh
                </strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  Take Chapel Hill Rd (NC-54 W) directly into Morrisville, or take I-40 W to exit 284A (Airport Blvd) then south to Chapel Hill Rd.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', padding: 24, borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
                <strong style={{ display: 'block', fontSize: '1rem', color: 'var(--color-espresso-900)', marginBottom: 6 }}>
                  From RTP &amp; Durham
                </strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  Head south on Davis Dr or take NC-54 E. Just minutes from major Research Triangle Park corporate campuses.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', padding: 24, borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
                <strong style={{ display: 'block', fontSize: '1rem', color: 'var(--color-espresso-900)', marginBottom: 6 }}>
                  From RDU International Airport
                </strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  Only 8 minutes away! Take Airport Blvd south to Chapel Hill Rd and turn right. Perfect pre-flight or post-landing coffee stop.
                </p>
              </div>
            </div>
          </div>

          {/* Full-Width Interactive Google Map */}
          <div style={{ marginTop: 48 }}>
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
              <h3 style={{ fontSize: '1.85rem', fontFamily: 'var(--font-serif)', marginBottom: 8 }}>Find Us on the Map</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>
                10119 Chapel Hill Rd, Morrisville, NC 27560 • Wake County, North Carolina
              </p>
            </div>
            <div style={{ height: 440, borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--color-border)' }}>
              <iframe
                title="Interactive map location for Milo's Cafe in Morrisville, NC"
                src="https://maps.google.com/maps?q=10119%20Chapel%20Hill%20Rd,%20Morrisville,%20NC%2027560&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
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
