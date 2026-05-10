function updateClock() {
    try {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        const timeString = `${hours}:${minutes}:${seconds} WIB`;
        const clockElement = document.getElementById('realtime-clock');
        
        if (clockElement) {
            clockElement.textContent = timeString;
        }
    } catch (err) {
        console.error("Clock Error:", err);
    }
}

document.addEventListener('DOMContentLoaded', () => {

    updateClock(); 
    setInterval(updateClock, 1000);

    const bars = document.querySelectorAll('.bar > i');
    bars.forEach((el) => {
        const val = el.getAttribute('data-value');

        setTimeout(() => { 
            el.style.width = val + '%'; 
        }, 300);
    });


    const headers = document.querySelectorAll('.proj-header');
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const parent = header.parentElement;
            parent.classList.toggle('active');
        });
    });
});
          
