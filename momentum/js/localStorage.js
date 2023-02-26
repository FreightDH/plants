import { getWeather } from "./weather.js";
import state from "./settings.js";
import { getQuotes } from "./quote.js";
import { setBackground, setBackgroundAPI } from "./slider.js";

export function getLocalStorage() {
	const name = document.querySelector('.content-body-greeting__name');
	const city = document.querySelector('.weather__city');
	const toggleButton = document.querySelectorAll('.checkbox');
	const input = document.querySelector('.footer-body-settings-window-images__input');

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

	if (localStorage.getItem('photoSource')) {
		state.activePhotoSource = localStorage.getItem('photoSource');

		const git = document.querySelector('.git');
		const api = document.querySelector('.api');

		if (state.activePhotoSource === 'GIT') { 
			git.classList.add('active');  
			api.classList.remove('active'); 
			setBackground();
		} else {
			api.classList.add('active');
			git.classList.remove('active');
			input.classList.add('api')
			input.value = localStorage.getItem('imageTag');
			setBackgroundAPI();
		}
	}

	if (localStorage.getItem('city')) {
		city.value = localStorage.getItem('city');
		getWeather();
	}

	state.blocks.forEach( (block, index) => {
		if (localStorage.getItem(index)) {
			block.classList.add('disabled');
			toggleButton[index].removeAttribute('checked');
		}
	});
}

window.addEventListener('load', getLocalStorage);