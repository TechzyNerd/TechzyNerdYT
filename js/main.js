// Smooth scroll when “View My Work” button is clicked
document.querySelector('.hero-btn').addEventListener('click', event => {
  event.preventDefault();
  const target = document.querySelector('#featured-projects');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
});
