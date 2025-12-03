// ============================
// Universal Gradient + Fade Animation
// ============================

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.fade-gradient');
  const delayElements = document.querySelectorAll('.fade-gradient-delay');

  elements.forEach(el => el.classList.add('fade-gradient'));
  
  delayElements.forEach(el => {
    setTimeout(() => {
      el.classList.add('fade-gradient');
    }, 300);
  });
});
