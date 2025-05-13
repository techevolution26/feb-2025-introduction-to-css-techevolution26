// 🧙‍♂️ Wrap everything to avoid globals
document.addEventListener('DOMContentLoaded', () => {

  // 1. EVENT HANDLING
  // Button click
  document.getElementById('clickBtn')
    .addEventListener('click', () => alert('Button clicked!'));

  // Hover effects
  const hoverBtn = document.getElementById('hoverBtn');
  hoverBtn.addEventListener('mouseenter', () => hoverBtn.textContent = '👀 Hey!');
  hoverBtn.addEventListener('mouseleave', () => hoverBtn.textContent = 'Hover Over Me!');

  // Keypress detection
  document.getElementById('keyInput')
    .addEventListener('keypress', e => console.log(`You pressed: ${e.key}`));

  // Secret action: double-click or long-press
  const secretBtn = document.getElementById('secretBtn');
  secretBtn.addEventListener('dblclick', () => secretBtn.textContent = '🤫 Double-clicked!');
  let pressTimer;
  secretBtn.addEventListener('mousedown', () => {
    pressTimer = setTimeout(() => secretBtn.textContent = '🤫 Long-pressed!', 800);
  });
  secretBtn.addEventListener('mouseup', () => clearTimeout(pressTimer));


  // 2. INTERACTIVE ELEMENTS

  // Color-change button
  document.getElementById('colorBtn')
    .addEventListener('click', e => e.target.style.backgroundColor = 
      `hsl(${Math.random()*360}, 70%, 80%)`);

  // Simple slideshow
  let current = 0;
  const slides = document.querySelectorAll('.slide');
  function showSlide(idx) {
    slides.forEach((s,i) => s.classList.toggle('visible', i===idx));
  }
  document.getElementById('prev')
    .addEventListener('click', () => showSlide(current = (current+slides.length-1)%slides.length));
  document.getElementById('next')
    .addEventListener('click', () => showSlide(current = (current+1)%slides.length));

  // Tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');
    });
  });

  // Accordion
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const body = header.nextElementSibling;
      const isOpen = body.style.display === 'block';
      document.querySelectorAll('.accordion-body').forEach(b => b.style.display = 'none');
      body.style.display = isOpen ? 'none' : 'block';
    });
  });


  // 3. FORM VALIDATION
  const form = document.getElementById('signupForm');
  const fields = ['name','email','password'];

  // Real-time feedback
  fields.forEach(id => {
    const input = document.getElementById(id);
    const err   = input.nextElementSibling;
    input.addEventListener('input', () => {
      if (input.validity.valid) err.textContent = '';
      else if (input.validity.valueMissing) err.textContent = 'This field is required';
      else if (input.validity.typeMismatch) err.textContent = 'Invalid format';
      else if (input.validity.tooShort) err.textContent = `At least ${input.minLength} chars`;
    });
  });

  // On submit
  form.addEventListener('submit', e => {
    let valid = true;
    fields.forEach(id => {
      const input = document.getElementById(id);
      const err   = input.nextElementSibling;
      if (!input.checkValidity()) {
        valid = false;
        err.textContent = err.textContent || 'Please fix this field';
      }
    });
    if (!valid) e.preventDefault();
    else alert('Form submitted successfully!');
  });

});
