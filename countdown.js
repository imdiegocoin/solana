// Fecha objetivo (20 de diciembre del año actual)
const targetDate = new Date('December 20, 2024 20:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft > 0) {
        // Calcular días, horas, minutos y segundos
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Mostrar los valores en el HTML
        document.getElementById('days').innerText = days.toString().padStart(2, '0');
        document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
    } else {
        // Mostrar mensaje cuando el contador llegue a cero
        clearInterval(timerInterval);
        document.getElementById('countdown').innerHTML = "<h2>Presale has started!</h2>";
    }
}

// Actualizar el contador cada segundo
const timerInterval = setInterval(updateCountdown, 1000);

// Llamada inicial para evitar el retraso de 1 segundo
updateCountdown();
