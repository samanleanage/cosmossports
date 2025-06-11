// Handle contact form submission (demo only, no backend)
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('form-message').textContent = 'Thank you! We’ll be in touch soon.';
  this.reset();
});