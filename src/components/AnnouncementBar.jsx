import React from 'react';
import { Trophy } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <aside className="announcement-bar" aria-label="Announcement">
      <span className="badge-trophy">
        <Trophy size={14} style={{ marginRight: 4 }} />
        The News &amp; Observer
      </span>
      Voted the <strong>"Best Sandwich Shop in the Triangle"</strong> • Scratch Focaccia Baked Fresh Daily
    </aside>
  );
}
