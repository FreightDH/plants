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
		const unsplash = document.querySelector('.unsplash');
		const flickr = document.querySelector('.flickr');

		if (state.activePhotoSource === 'Git') { 
			git.classList.add('active');  
			unsplash.classList.remove('active'); 
			flickr.classList.remove('active'); 
			setBackground();
		} else if (state.activePhotoSource === 'Unsplash'){
			unsplash.classList.add('active');
			git.classList.remove('active');
			flickr.classList.remove('active'); 
			input.classList.add('api')
			input.value = localStorage.getItem('imageTag');
			setBackgroundAPI();
		} else {
			flickr.classList.add('active');
			git.classList.remove('active');
			unsplash.classList.remove('active'); 
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