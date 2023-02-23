import { getQuotes } from "./quote.js";
// SETTINGS OBJECT
const time = document.querySelector('.content-body__time');
const date = document.querySelector('.content-body__date');
const greeting = document.querySelector('.content-body-greeting');
const quote = document.querySelector('.footer-body-quote');
const weather = document.querySelector('.header-body-weather');
const audio = document.querySelector('.header-body-player');
const en = document.querySelector('.en');
const ru = document.querySelector('.ru');
const state = {
	blocks: [time, date, greeting, quote, weather, audio],
	language: [en, ru],
	activeLanguage: 'EN',
	photoSource: 'github',
};
export default state;
// --------------------------------------------------------------------
// SETTINGS TRANSLATION 
const options = document.querySelectorAll('.option__text');
const titles = document.querySelectorAll('.footer-body-settings-window-title');
const settingsOptionsObject = {
	'EN': ['Time', 'Date', 'Greeting', 'Quote', 'Weather', 'Audio'],
	'RU': ['Время', 'Дата', 'Приветствие', 'Цитата', 'Погода', 'Плеер'],
};
const titlesObject = {
	'EN': ['Show', 'Language'],
	'RU': ['Отображение', 'Язык'],
};

export function settingsOptions() {
	const language = state.activeLanguage;

	options.forEach( (option, index) => {
		option.textContent = settingsOptionsObject[language][index];
	});

	titles.forEach( (title, index) => {
		title.textContent = titlesObject[language][index];
	});

	
	setTimeout(settingsOptions, 1000);
}
// --------------------------------------------------------------------
// SETTINGS WINDOW
const settingsButton = document.querySelector('.footer-body-settings__button');
const settings = document.querySelector('.footer-body-settings-window');

settingsButton.addEventListener('click', () => {
	settings.classList.toggle('open');
	settingsButton.classList.toggle('active');
});

window.addEventListener('click', (event) => {
	const target = event.target;
	
	if (!target.closest('.footer-body-settings-window') && !target.closest('.footer-body-settings__button')) {
		settings.classList.remove('open');
		settingsButton.classList.remove('active');
	}
});
// --------------------------------------------------------------------
// SETTINGS TOGGLE SWITCHES
const toggleButton = document.querySelectorAll('.checkbox');

toggleButton.forEach(element => {
	element.addEventListener('click', function (event) {
		const value = event.target.dataset.value;
		state.blocks[value].classList.toggle('disabled');
	});
});
// --------------------------------------------------------------------
// SETTINGS LANGUAGE SWITCH
const language = document.querySelector('.footer-body-settings-window-language');

language.addEventListener('click', function (event) {
	const value = event.target.dataset.value;
	
	if (state.language.at(value - 1).classList.contains('active')) {
		state.language.at(value - 1).classList.remove('active');
		state.language[value].classList.add('active');
		state.activeLanguage = event.target.textContent;
	} else {
		state.language[value].classList.add('active');
		state.activeLanguage = event.target.textContent;
	}
	
	getQuotes(); // quote in the selected language
	localStorage.setItem('language', state.activeLanguage);
});
// --------------------------------------------------------------------