/**
 * Operating Hours & Live Status Calculator for Milo's Cafe
 * Configured specifically for US Eastern Time (Morrisville, NC - America/New_York)
 */

export const CAFE_HOURS = [
  { dayIndex: 1, dayName: 'Monday', hours: '7:00 AM – 4:00 PM', open: 7.0, close: 16.0 },
  { dayIndex: 2, dayName: 'Tuesday', hours: '7:00 AM – 4:00 PM', open: 7.0, close: 16.0 },
  { dayIndex: 3, dayName: 'Wednesday', hours: '7:00 AM – 4:00 PM', open: 7.0, close: 16.0 },
  { dayIndex: 4, dayName: 'Thursday', hours: '7:00 AM – 4:00 PM', open: 7.0, close: 16.0 },
  { dayIndex: 5, dayName: 'Friday', hours: '7:00 AM – 5:00 PM', open: 7.0, close: 17.0 },
  { dayIndex: 6, dayName: 'Saturday', hours: '7:00 AM – 5:00 PM', open: 7.0, close: 17.0 },
  { dayIndex: 0, dayName: 'Sunday', hours: '8:30 AM – 3:30 PM', open: 8.5, close: 15.5 },
];

export const CAFE_CONTACT = {
  name: "Milo's Cafe",
  legalEntity: "Milo's European Cafe & Scratch Bakery LLC",
  address: '10119 Chapel Hill Rd',
  city: 'Morrisville',
  state: 'NC',
  zip: '27560',
  county: 'Wake County',
  region: 'Research Triangle (Raleigh-Durham-Cary)',
  fullAddress: '10119 Chapel Hill Rd, Morrisville, NC 27560',
  landmark: 'Historic converted gas station landmark on Chapel Hill Rd (Hwy 54) by the railroad crossing',
  phone: '+19194438000',
  phoneDisplay: '(919) 443-8000',
  instagram: '@milos_europeancafe',
  instagramUrl: 'https://instagram.com/milos_europeancafe',
  mapsUrl: 'https://maps.google.com/?q=10119+Chapel+Hill+Rd,+Morrisville,+NC+27560',
  timeZone: 'America/New_York',
  timeZoneLabel: 'ET (Eastern Time)',
  parking: 'Complimentary on-site guest parking lot adjacent to building',
  amenities: [
    'Complimentary High-Speed Guest Wi-Fi (RTP remote-work friendly)',
    'ADA Accessible Entrance & Seating',
    'Outdoor Dog-Friendly Sunny Patio',
    'Table-Side Torching Experience',
    'Takeout & Corporate Catering for RTP Offices'
  ],
  paymentsAccepted: [
    'Apple Pay',
    'Google Pay',
    'Visa',
    'Mastercard',
    'American Express',
    'Discover',
    'Contactless Tap to Pay'
  ]
};

/**
 * Calculates accurate open/closed status in US Eastern Time (Morrisville, NC)
 */
export function getCafeStatus() {
  try {
    const now = new Date();
    // Format to US Eastern Time parts
    const dtf = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/New_York',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    });

    const parts = dtf.formatToParts(now);
    const weekdayPart = parts.find(p => p.type === 'weekday')?.value;
    const hourPart = parseInt(parts.find(p => p.type === 'hour')?.value || '0', 10);
    const minutePart = parseInt(parts.find(p => p.type === 'minute')?.value || '0', 10);

    const weekdayMap = {
      Sun: 0,
      Mon: 1,
      Tue: 2,
      Wed: 3,
      Thu: 4,
      Fri: 5,
      Sat: 6
    };

    const day = weekdayMap[weekdayPart] !== undefined ? weekdayMap[weekdayPart] : now.getDay();
    const currentTime = hourPart + minutePart / 60;

    const todaySchedule = CAFE_HOURS.find(h => h.dayIndex === day);
    if (!todaySchedule) return { isOpen: false, text: 'Closed', day };

    if (currentTime >= todaySchedule.open && currentTime < todaySchedule.close) {
      const closeHours = Math.floor(todaySchedule.close);
      const closeMinutes = Math.round((todaySchedule.close - closeHours) * 60);
      const closeFormatted = `${closeHours > 12 ? closeHours - 12 : closeHours}:${closeMinutes === 0 ? '00' : closeMinutes} PM`;
      return {
        isOpen: true,
        text: `Open Now • Closes ${closeFormatted} ET`,
        todaySchedule,
        day,
        timeZoneNote: 'Morrisville, NC'
      };
    }

    let nextText = 'tomorrow at 7:00 AM ET';
    if (currentTime < todaySchedule.open) {
      const openHours = Math.floor(todaySchedule.open);
      const openMinutes = Math.round((todaySchedule.open - openHours) * 60);
      const ampm = openHours >= 12 ? 'PM' : 'AM';
      nextText = `today at ${openHours}:${openMinutes === 0 ? '00' : openMinutes} ${ampm} ET`;
    } else if (day === 6) {
      nextText = 'tomorrow at 8:30 AM ET';
    }

    return {
      isOpen: false,
      text: `Closed • Opens ${nextText}`,
      todaySchedule,
      day,
      timeZoneNote: 'Morrisville, NC'
    };
  } catch (err) {
    // Fallback if Intl fails
    return { isOpen: true, text: 'Open Today • Morrisville, NC', day: new Date().getDay() };
  }
}
