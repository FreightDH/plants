import { getWeather } from "./weather.js";

export function getLocalStorage() {
	const name = document.querySelector('.content-body-greeting__name');
	const city = document.querySelector('.weather__city');

	if (localStorage.getItem('name')) {
		name.textContent = localStorage.getItem('name');
	  	name.classList.add('entered');
	}

	if (localStorage.getItem('city')) {
		city.value = localStorage.getItem('city');
		getWeather();
	}
}

window.addEventListener('load', getLocalStorage);