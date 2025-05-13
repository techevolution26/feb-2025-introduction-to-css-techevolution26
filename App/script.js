
document.addEventListener('DOMContentLoaded', () => {
  // Apply persisted animation speed preference
  const msg = document.getElementById('pref-msg');
  function applySpeed(speed) {
    let duration;
    switch (speed) {
      case 'fast':   duration = '0.5s'; break;
      case 'slow':   duration = '2s';   break;
      default:       duration = '1s';   break;
    }
    document.documentElement.style.setProperty('--anim-duration', duration);
    msg.textContent = `Animation speed set to “${speed}” (${duration})`;
  }

  // Load from localStorage (if any)
  const saved = localStorage.getItem('animSpeed');
  if (saved) applySpeed(saved);

  // 2. Wire up preference buttons
  document.querySelectorAll('[data-speed]').forEach(btn => {
    btn.addEventListener('click', () => {
      const speed = btn.dataset.speed;
      localStorage.setItem('animSpeed', speed);
      applySpeed(speed);
    });
  });

  // Trigger an example animation on page elements
  const header = document.querySelector('.header-title');
  header.addEventListener('click', () => {
    header.classList.add('animate-pulse');
    // remove the class after one cycle for retrigger
    setTimeout(() => header.classList.remove('animate-pulse'),
               parseFloat(getComputedStyle(document.documentElement)
                          .getPropertyValue('--anim-duration')) * 1000
    );
  });

  //(Bonus) Toggle dark mode persisted
  const darkToggle = document.createElement('button');
  darkToggle.textContent = 'Toggle Dark Mode';
  darkToggle.className = 'btn btn-secondary';
  document.querySelector('footer .container').appendChild(darkToggle);

  function applyDark(isDark) {
    document.body.classList.toggle('dark-mode', isDark);
    localStorage.setItem('darkMode', isDark);
  }

  const darkSaved = localStorage.getItem('darkMode') === 'true';
  applyDark(darkSaved);

  darkToggle.addEventListener('click', () => {
    const now = !document.body.classList.contains('dark-mode');
    applyDark(now);
  });
});
