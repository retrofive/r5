// Floating sparkle particles for extra glam
const layer = document.getElementById('sparkleLayer');

function spawnSparkle() {
  const s = document.createElement('div');
  const size = Math.random() * 4 + 2;
  s.style.position = 'absolute';
  s.style.left = Math.random() * 100 + 'vw';
  s.style.top = '100vh';
  s.style.width = size + 'px';
  s.style.height = size + 'px';
  s.style.borderRadius = '50%';
  s.style.background = Math.random() > 0.5 ? '#ffd166' : '#ff9ed8';
  s.style.opacity = Math.random() * 0.6 + 0.4;
  s.style.filter = 'blur(0.5px)';
  s.style.pointerEvents = 'none';
  layer.appendChild(s);

  const duration = Math.random() * 6000 + 6000;
  const drift = (Math.random() - 0.5) * 100;

  s.animate(
    [
      { transform: 'translate(0, 0)', opacity: s.style.opacity },
      { transform: `translate(${drift}px, -110vh)`, opacity: 0 }
    ],
    { duration, easing: 'linear' }
  ).onfinish = () => s.remove();
}

setInterval(spawnSparkle, 350);

// Fade sections in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('section').forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = 'translateY(30px)';
  sec.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  observer.observe(sec);
});
