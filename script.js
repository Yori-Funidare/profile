function updateClock() {
  const now = new Date();
  const options = { timeZone: 'Asia/Jakarta', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const timeString = new Intl.DateTimeFormat('id-ID', options).format(now);
  document.getElementById('realtime-clock').textContent = `${timeString} WIB`;
}

window.addEventListener('DOMContentLoaded', () => {
  setInterval(updateClock, 1000);
  updateClock();

  document.querySelectorAll('.bar > i').forEach((el) => {
    const val = el.getAttribute('data-value');
    setTimeout(() => { el.style.width = val + '%'; }, 500);
  });
  
  document.querySelectorAll('.proj-header').forEach(header => {
    header.addEventListener('click', () => {
      const parent = header.parentElement;
      parent.classList.toggle('active');
    });
  });
});
