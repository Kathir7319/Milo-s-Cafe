import React, { useState, useEffect } from 'react';
import { getCafeStatus } from '../data/hoursData';

export default function LiveStatusBadge({ className = '' }) {
  const [status, setStatus] = useState(getCafeStatus());

  useEffect(() => {
    // Recalculate status every minute
    const interval = setInterval(() => {
      setStatus(getCafeStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`status-pill ${status.isOpen ? 'open' : 'closed'} ${className}`}>
      <span className="status-dot"></span>
      {status.text}
    </span>
  );
}
