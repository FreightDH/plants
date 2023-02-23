import state from "./settings.js";

// WEATHER FROM API
const weatherIcon = document.querySelector('.weather__icon');
const temperature = document.querySelector('.weather-description__temperature');
const weatherDescription = document.querySelector('.weather-description__description');
const windSpeed = document.querySelector('.weather__wind'); 
const humidity = document.querySelector('.weather__humidity');
const error = document.querySelector('.weather__error');

export async function getWeather() {
	const language = state.activeLanguage;
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${language.toLowerCase()}&appid=241a6c975817c3a04916e8babb8a5626&units=metric`;
  	const res = await fetch(url);
  	
	if (!res.ok) {
		error.removeAttribute('hidden');
		error.textContent = `Error! '${city.value}' is not found!`;
		weatherIcon.className = '';
		temperature.textContent = '';
		weatherDescription.textContent = '';
		windSpeed.textContent = '';
		humidity.textContent = '';
		return;
	}

	const data = await res.json();

	error.setAttribute('hidden', '');
	weatherIcon.className = 'weather__icon owf';
	weatherIcon.classList.add(`owf-${data.weather[0].id}`);
	temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
	weatherDescription.textContent = data.weather[0].description;
	
	if (language === 'EN') {
		windSpeed.textContent = `Wind speed: ${data.wind.speed.toFixed(0)} m/s`;
		humidity.textContent = `Humidity: ${data.main.humidity}%`;
	} else {
		windSpeed.textContent = `Скорость ветра: ${data.wind.speed.toFixed(0)} m/s`;
		humidity.textContent = `Влажность: ${data.main.humidity}%`;
	}

	setTimeout(getWeather, 1000);
}

document.addEventListener('DOMContentLoaded', getWeather);
// --------------------------------------------------------------------
// CITY INPUT
const city = document.querySelector('.weather__city');

export function setCity(event) {
	if (event.code === 'Enter') {
		getWeather();
   	city.blur();
		localStorage.setItem('city', city.value);
  	}
}

city.addEventListener('keypress', setCity);
// --------------------------------------------------------------------