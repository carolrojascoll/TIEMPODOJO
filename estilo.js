/* CAROLINA ROJAS COLLANTE */
function showAlert(city) {
    alert(`Cargando informe meteorológico para ${city}...`);
}

function acceptCookies() {
    document.getElementById('cookieBanner').style.display = 'none';
}

function convertTemperature() {
    const select = document.getElementById('tempSelect');
    const temps = document.querySelectorAll('.temp');
    const unit = select.value;
    
    temps.forEach(temp => {
        let [maxTemp, minTemp] = temp.textContent.split('/').map(t => parseInt(t));

        if (unit === 'F') {
            maxTemp = Math.round((maxTemp * 9/5) + 32);
            minTemp = Math.round((minTemp * 9/5) + 32);
        } else {
            maxTemp = Math.round((maxTemp - 32) * 5/9);
            minTemp = Math.round((minTemp - 32) * 5/9);
        }

        temp.innerHTML = `${maxTemp}° <span class="unit">${unit}</span> / ${minTemp}° <span class="unit">${unit}</span>`;
    });
}
