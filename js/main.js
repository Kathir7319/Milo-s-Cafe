/**
 * Milo's Cafe — Main Interactive JavaScript
 * Morrisville, NC
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initHeaderScroll();
  initLiveStatus();
  initMenuFilters();
  initGalleryLightbox();
  initContactForm();
  highlightActiveNav();
});

/* 1. Mobile Navigation Toggle */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('active');
    if (isOpen) {
      drawer.classList.remove('active');
      toggleBtn.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    } else {
      drawer.classList.add('active');
      toggleBtn.classList.add('active');
      toggleBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  });

  // Close drawer when clicking any link inside
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('active');
      toggleBtn.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

/* 2. Sticky Header Scroll Effect */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* 3. Live Cafe Open/Closed Status Calculator */
function initLiveStatus() {
  const statusElements = document.querySelectorAll('.live-cafe-status');
  if (!statusElements.length) return;

  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 1 = Monday, ... 6 = Saturday
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hours + minutes / 60;

  // Cafe Hours:
  // Mon (1) - Thu (4): 7:00 AM - 4:00 PM (7.0 - 16.0)
  // Fri (5) - Sat (6): 7:00 AM - 5:00 PM (7.0 - 17.0)
  // Sun (0): 8:30 AM - 3:30 PM (8.5 - 15.5)

  let isOpen = false;
  let closingTimeText = '';
  let openingTimeText = '';

  if (day >= 1 && day <= 4) {
    // Mon - Thu
    if (currentTime >= 7.0 && currentTime < 16.0) {
      isOpen = true;
      closingTimeText = '4:00 PM';
    } else if (currentTime < 7.0) {
      openingTimeText = 'today at 7:00 AM';
    } else {
      openingTimeText = day === 4 ? 'tomorrow at 7:00 AM' : 'tomorrow at 7:00 AM';
    }
  } else if (day === 5 || day === 6) {
    // Fri - Sat
    if (currentTime >= 7.0 && currentTime < 17.0) {
      isOpen = true;
      closingTimeText = '5:00 PM';
    } else if (currentTime < 7.0) {
      openingTimeText = 'today at 7:00 AM';
    } else {
      openingTimeText = day === 6 ? 'tomorrow at 8:30 AM' : 'tomorrow at 7:00 AM';
    }
  } else if (day === 0) {
    // Sunday
    if (currentTime >= 8.5 && currentTime < 15.5) {
      isOpen = true;
      closingTimeText = '3:30 PM';
    } else if (currentTime < 8.5) {
      openingTimeText = 'today at 8:30 AM';
    } else {
      openingTimeText = 'tomorrow at 7:00 AM';
    }
  }

  statusElements.forEach(el => {
    if (isOpen) {
      el.className = 'status-pill open live-cafe-status';
      el.innerHTML = `<span class="status-dot"></span> Open Now • Closes ${closingTimeText}`;
    } else {
      el.className = 'status-pill closed live-cafe-status';
      el.innerHTML = `<span class="status-dot"></span> Closed • Opens ${openingTimeText}`;
    }
  });

  // Highlight today's row in hours tables
  const rows = document.querySelectorAll('.hours-table tr[data-day]');
  rows.forEach(r => {
    const rowDay = parseInt(r.getAttribute('data-day'), 10);
    if (rowDay === day) {
      r.classList.add('today-row');
    }
  });
}

/* 4. Menu Category Tab Filters */
function initMenuFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const menuCards = document.querySelectorAll('.menu-item-card, .menu-horizontal-card');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      menuCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue || category.includes(filterValue)) {
          card.style.display = '';
          card.style.animation = 'fadeIn 0.3s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* 5. Gallery Lightbox Modal */
function initGalleryLightbox() {
  const galleryCards = document.querySelectorAll('.gallery-card');
  const modal = document.querySelector('.lightbox-modal');
  if (!modal || !galleryCards.length) return;

  const modalImg = modal.querySelector('.lightbox-img');
  const modalCaption = modal.querySelector('.lightbox-caption');
  const closeBtn = modal.querySelector('.lightbox-close');

  galleryCards.forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      const title = card.querySelector('.gallery-card-title')?.innerText || img.alt || '';
      
      modalImg.src = img.src;
      modalImg.alt = title;
      if (modalCaption) modalCaption.innerText = title;
      
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Gallery category tabs
  const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');
  if (galleryFilterBtns.length) {
    galleryFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        galleryFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');

        galleryCards.forEach(card => {
          const cat = card.getAttribute('data-category');
          if (filter === 'all' || cat === filter) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
}

/* 6. Interactive Contact Form */
function initContactForm() {
  const form = document.querySelector('#contactForm');
  const successBanner = document.querySelector('#formSuccessBanner');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;

    btn.innerHTML = 'Sending message...';
    btn.disabled = true;

    setTimeout(() => {
      if (successBanner) {
        successBanner.style.display = 'block';
        successBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      form.reset();
      btn.innerHTML = originalText;
      btn.disabled = false;
    }, 800);
  });
}

/* 7. Highlight Active Navigation Link */
function highlightActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .mobile-bottom-btn');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPath = href.split('/').pop();

    if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
      link.classList.add('active');
    }
  });
}
