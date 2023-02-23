import { getWeather } from "./weather.js";
import state from "./settings.js";
import { getQuotes } from "./quote.js";

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

	if (localStorage.getItem('language')) {
		state.activeLanguage = localStorage.getItem('language');
		getQuotes();
		
		const en = document.querySelector('.en');
		const ru = document.querySelector('.ru');
		if (state.activeLanguage === 'EN') { 
			en.classList.add('active');  
			ru.classList.remove('active'); 
		} else {
			ru.classList.add('active');
			en.classList.remove('active');
		}
	}
}

window.addEventListener('load', getLocalStorage);