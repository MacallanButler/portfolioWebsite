// ===========================
// Project Data
// ===========================
const projects = {
  1: {
    title: "Project One",
    image: "https://via.placeholder.com/600x400/2563eb/ffffff?text=Project+One",
    description: "This is a detailed description of Project One. Replace this with your actual project details, technologies used, and outcomes achieved.",
    link: "https://example.com"
  },
  2: {
    title: "Project Two",
    image: "https://via.placeholder.com/600x400/3b82f6/ffffff?text=Project+Two",
    description: "This is a detailed description of Project Two. Showcase your work, explain the problem you solved, and highlight your skills.",
    link: "https://example.com"
  },
  3: {
    title: "Project Three",
    image: "https://via.placeholder.com/600x400/60a5fa/ffffff?text=Project+Three",
    description: "This is a detailed description of Project Three. Include metrics, results, or any impressive details about your work.",
    link: "https://example.com"
  }
};

// ===========================
// DOM Elements
// ===========================
const card = document.getElementById('businessCard');
const pulseLeft = document.querySelector('.pulse-left');
const pulseRight = document.querySelector('.pulse-right');
const cardContent = document.getElementById('cardContent');
const welcomeMessage = document.querySelector('.welcome-message');
const projectDetails = document.getElementById('projectDetails');
const contactForm = document.getElementById('contactForm');
const contactBtn = document.getElementById('contactBtn');
const projectItems = document.querySelectorAll('.project-item');
const closeProjectBtn = document.getElementById('closeProject');
const closeContactBtn = document.getElementById('closeContact');
const contactFormElement = document.getElementById('contactFormElement');
const formMessage = document.getElementById('formMessage');

// ===========================
// Pulse Animation (6 second delay)
// ===========================
setTimeout(() => {
  pulseLeft.classList.add('active');
  pulseRight.classList.add('active');
}, 6000);

// ===========================
// Card Flip Logic
// ===========================
let isFlipped = false;

function flipCard(direction) {
  if (isFlipped) return; // Prevent flipping if already on back
  
  card.classList.remove('flip-left', 'flip-right');
  
  if (direction === 'left') {
    card.classList.add('flip-left');
  } else {
    card.classList.add('flip-right');
  }
  
  isFlipped = true;
  
  // Hide pulses after flip
  pulseLeft.classList.remove('active');
  pulseRight.classList.remove('active');
}

// Click zones for flipping
card.addEventListener('click', (e) => {
  if (isFlipped) return; // Only allow flipping on front side
  
  const rect = card.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const cardWidth = rect.width;
  
  if (clickX < cardWidth / 2) {
    flipCard('left');
  } else {
    flipCard('right');
  }
});

// ===========================
// Project Display Logic
// ===========================
projectItems.forEach(item => {
  item.addEventListener('click', () => {
    const projectId = item.getAttribute('data-project');
    const project = projects[projectId];
    
    // Hide welcome message
    welcomeMessage.style.display = 'none';
    contactForm.style.display = 'none';
    
    // Show project details
    document.getElementById('projectImage').src = project.image;
    document.getElementById('projectTitle').textContent = project.title;
    document.getElementById('projectDescription').textContent = project.description;
    document.getElementById('projectLink').href = project.link;
    
    projectDetails.style.display = 'block';
  });
});

// Close project details
closeProjectBtn.addEventListener('click', () => {
  projectDetails.style.display = 'none';
  welcomeMessage.style.display = 'flex';
});

// ===========================
// Contact Form Logic
// ===========================
contactBtn.addEventListener('click', () => {
  welcomeMessage.style.display = 'none';
  projectDetails.style.display = 'none';
  contactForm.style.display = 'block';
});

// Close contact form
closeContactBtn.addEventListener('click', () => {
  contactForm.style.display = 'none';
  welcomeMessage.style.display = 'flex';
});

// Handle form submission
contactFormElement.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(contactFormElement);
  
  try {
    const response = await fetch(contactFormElement.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      showFormMessage('Message sent successfully! I\'ll get back to you soon.', 'success');
      contactFormElement.reset();
    } else {
      showFormMessage('Oops! Something went wrong. Please try again.', 'error');
    }
  } catch (error) {
    showFormMessage('Oops! Something went wrong. Please try again.', 'error');
  }
});

function showFormMessage(message, type) {
  formMessage.textContent = message;
  formMessage.className = `form-message show ${type}`;
  
  setTimeout(() => {
    formMessage.classList.remove('show');
  }, 5000);
}