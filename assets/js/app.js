/**
 * app.js — Main Application Logic
 * airseen1 Portfolio
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  console.log('airseen1 portfolio loaded');
  
  // Initialize Lucide SVG Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // --- Creative Section Filter Logic ---
  const filterButtons = document.querySelectorAll('.filter-btn');
  const creativeItems = document.querySelectorAll('.creative-item');

  if (filterButtons.length && creativeItems.length) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        // Update active class on filter buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Show/Hide gallery items
        creativeItems.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            item.classList.remove('hidden');
          } else {
            item.classList.add('hidden');
          }
        });
      });
    });
  }

  // --- Lightbox Modal Logic ---
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.querySelector('.lightbox-close');
  const galleryTriggers = document.querySelectorAll('.gallery-trigger');

  if (lightbox && lightboxImg && lightboxCaption && galleryTriggers.length) {
    galleryTriggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const img = trigger.querySelector('.creative-img');
        const title = trigger.querySelector('.creative-title').textContent;
        const category = trigger.querySelector('.creative-category').textContent;

        if (img) {
          lightboxImg.src = img.src;
          lightboxImg.alt = img.alt;
          lightboxCaption.textContent = `${category} — ${title}`;
          lightbox.classList.remove('modal-hidden');
          
          // Disable scroll on body when modal is open
          document.body.style.overflow = 'hidden';
        }
      });
    });

    const closeLightbox = () => {
      lightbox.classList.add('modal-hidden');
      document.body.style.overflow = '';
      // Reset source
      lightboxImg.src = '';
    };

    // Close on click close button
    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }

    // Close on click outside content image
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    // Close on ESC key press
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !lightbox.classList.contains('modal-hidden')) {
        closeLightbox();
      }
    });
  }
});
