const dateElement = document.getElementById("last-modification");
const temperatureElement = document.getElementById("temperature");
const windSpeedElement = document.getElementById("wind-speed");
const windChillElement = document.getElementById("wind-chill");

const temperature = 10;
const windSpeed = 5;
const tempMetric = '°C';
const windMetric = 'km/h'

dateElement.innerHTML = document.lastModified;
temperatureElement.innerHTML = `${temperature} ${tempMetric}`;
windSpeedElement.innerHTML = `${windSpeed} ${windMetric}`;
windChillElement.innerHTML = calculateWindChill(temperature, windSpeed, tempMetric, windMetric);

function calculateWindChill(t, v, tm, wm) {
    const viableTemp = (t <= 10 && tm.toUpperCase() == '°C') || (t <= 50 && tm.toUpperCase() == '°F');
    const viableWind = (v > 4.8 && wm == 'km/h') || (v > 3 && wm == 'mph')
    if (!viableTemp || !viableWind) {
        return 'N/A'
    }

    const windChill = 35.74 + 0.6215 * t - 35.75 * (v**0.16) + 0.4275 * t * (v**0.16);
    
    return `${windChill.toFixed(1)} ${tm}`
}