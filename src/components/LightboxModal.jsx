import React, { useEffect } from 'react';

export default function LightboxModal({ item, onClose }) {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="lightbox-modal active"
      role="dialog"
      aria-modal="true"
      aria-label="Image Preview"
      onClick={onClose}
    >
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" aria-label="Close image preview" onClick={onClose}>
          &times;
        </button>
        <img src={item.image} alt={item.title} className="lightbox-img" />
        <div className="lightbox-caption">
          <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: 4 }}>
            {item.title}
          </strong>
          {item.description && (
            <span style={{ fontSize: '0.9rem', opacity: 0.85 }}>{item.description}</span>
          )}
        </div>
      </div>
    </div>
  );
}
