document.addEventListener("DOMContentLoaded", () => {
  const viewWorkButton = document.querySelector('.btn-primary');
  if (viewWorkButton) {
    viewWorkButton.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
    });
  }
});
