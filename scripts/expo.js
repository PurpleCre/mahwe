// Countdown Timer
const countdown = document.getElementById('countdown');
const eventDate = new Date('2025-11-10T09:00:00').getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// Registration Form Submission (Dummy handler)
document.getElementById('registration-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for registering!');
});