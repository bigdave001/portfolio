'use strict';
function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(sectionId).classList.add('active');

  // Optional: close menu on mobile
  document.getElementById('navLinks').classList.remove('show');
}

function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('show');
}

// Modal functionality
document.addEventListener('DOMContentLoaded', function () {
  const openModalButtons = document.querySelectorAll('[data-modal-target]');
  const closeModalButtons = document.querySelectorAll('.close-button');
  const overlay = document.getElementById('overlay');

  openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal);
    });
  });
  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal');
      closeModal(modal);
    });
  });
  overlay.addEventListener('click', () => {
    document.querySelectorAll('.modal.active').forEach(modal => {
      closeModal(modal);
    });
  });

  function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
  }

  function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
  }

  // Gallery image scroll-in animation
  // Animate gallery images on scroll into view
  const galleryImages = document.querySelectorAll('.grid-container img');
  const animateGallery = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation =
          'galleryProfessionalPop 0.7s cubic-bezier(.68,-0.55,.27,1.55) forwards';
        entry.target.style.opacity = '1';
        observer.unobserve(entry.target);
      }
    });
  };
  const galleryObserver = new IntersectionObserver(animateGallery, {
    threshold: 0.4,
  });
  galleryImages.forEach(img => {
    galleryObserver.observe(img);
  });
});
