/**
 * Manauna Technology - Official Corporate Website Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll('.nav-link, .nav-btn').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // Smooth scroll for internal page anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});

/**
 * Handle Contact Form Submission
 */
function handleContactSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('fullName').value;
  const email = document.getElementById('emailAddress').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  const feedback = document.getElementById('formFeedback');
  const submitBtn = document.getElementById('submitBtn');

  if (!feedback) return;

  // Visual submission feedback
  submitBtn.disabled = true;
  submitBtn.textContent = 'Submitting...';

  setTimeout(() => {
    feedback.className = 'form-feedback success';
    feedback.innerHTML = `
      <strong>Thank you, ${escapeHtml(name)}!</strong><br>
      Your inquiry regarding <em>${escapeHtml(subject)}</em> has been received. Our operations team will respond to <strong>${escapeHtml(email)}</strong> within 24–48 business hours.<br>
      <small>Direct escalation: <a href="mailto:support@manaunatechnology.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}">Click here to open in your default mail app</a>.</small>
    `;

    submitBtn.disabled = false;
    submitBtn.textContent = 'Message Sent';
    event.target.reset();
  }, 600);
}

function escapeHtml(string) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(string));
  return div.innerHTML;
}
