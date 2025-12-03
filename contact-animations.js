// ============================
// Contact Page Header Gradient + Fade
// ============================

document.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('.contact .section-title');
  const subtitle = document.querySelector('.contact .section-subtitle');

  if (title) {
    title.classList.add('fadeInUpGradient');
  }

  if (subtitle) {
    // small delay for stagger effect
    setTimeout(() => {
      subtitle.classList.add('fadeInUpGradient');
    }, 300);
  }
});
