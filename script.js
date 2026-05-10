const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.textContent = navLinks.classList.contains('active') ? '×' : '☰';
});

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuToggle.textContent = '☰';
  });
});

const revealElements = document.querySelectorAll('.section-reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

revealElements.forEach((element) => observer.observe(element));

const form = document.querySelector('.booking-form');
const message = document.querySelector('.form-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  message.textContent = 'Thank you! This demo reservation is ready to connect.';
  form.reset();
});
