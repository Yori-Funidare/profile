window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.bar > i').forEach((el, idx) => {
    const value = el.getAttribute('data-value') || 0;

    setTimeout(() => {
      el.style.width = value + '%';
    }, 150 * idx);
  });
});
