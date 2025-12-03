// ============================
// Project Carousel Gradient + Fade Animations
// ============================

const projectMain = document.getElementById('projectMain');
const mainDesc = document.getElementById('mainProjectDesc');
const projectItems = document.querySelectorAll('.project-list-item');

let currentIndex = 0;

// Fade + slide animation helper
function animateDescription(descElement) {
  descElement.style.opacity = 0;
  descElement.classList.remove('fadeInUpGradient');

  // trigger reflow to restart animation
  void descElement.offsetWidth;

  descElement.classList.add('fadeInUpGradient');
}

// Function to show project with animation
function showProject(index) {
  projectMain.style.opacity = 0;

  setTimeout(() => {
    // Update image and description
    document.getElementById('mainProjectImg').src = projects[index].img;
    mainDesc.textContent = projects[index].desc;

    // Animate description
    animateDescription(mainDesc);

    // Update active class on project list
    projectItems.forEach(item => item.classList.remove('active'));
    projectItems[index].classList.add('active');

    projectMain.style.opacity = 1;
    currentIndex = index;
  }, 300);
}

// Event listeners for project list
projectItems.forEach(item => {
  item.addEventListener('click', () => {
    const index = parseInt(item.getAttribute('data-index'));
    showProject(index);
  });
});

// Auto-cycle
setInterval(() => {
  const nextIndex = (currentIndex + 1) % projects.length;
  showProject(nextIndex);
}, 8000);

// Swipe support
let touchStartX = 0, touchEndX = 0;
projectMain.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; });
projectMain.addEventListener('touchend', e => {
  touchEndX = e.changedTouches[0].screenX;
  if (touchEndX < touchStartX - 50) showProject((currentIndex + 1) % projects.length);
  if (touchEndX > touchStartX + 50) showProject((currentIndex - 1 + projects.length) % projects.length);
});
