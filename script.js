// Carrusel
let index = 0;
const slides = document.querySelectorAll('.carousel-item');

document.getElementById('nextBtn').onclick = () => {
  index = (index + 1) % slides.length;
  updateCarousel();
};
document.getElementById('prevBtn').onclick = () => {
  index = (index - 1 + slides.length) % slides.length;
  updateCarousel();
};
function updateCarousel() {
  const offset = -index * 100;
  document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

// Menú responsive
document.querySelector('.menu-toggle').onclick = () => {
  document.querySelector('.nav-links').classList.toggle('active');
};

// ScrollReveal
ScrollReveal().reveal('.section-title, .card, .testimonio, form, .mapa-container, .calendario', {
  delay: 100,
  distance: '40px',
  duration: 1000,
  origin: 'bottom',
  reset: false
});

// Botón scroll arriba
window.addEventListener('scroll', () => {
  const scrollBtn = document.querySelector('.scroll-top');
  scrollBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
  // Parallax
  document.querySelectorAll('.parallax img').forEach(img => {
    img.style.transform = `translateY(${window.scrollY * 0.3}px)`;
  });
});
