const settingsButton = document.querySelector('.footer-body-settings__button');
const settings = document.querySelector('.footer-body-settings-window');
const toggleButton = document.querySelectorAll('.checkbox');

const time = document.querySelector('.content-body__time');
const date = document.querySelector('.content-body__date');
const greeting = document.querySelector('.content-body-greeting');
const quote = document.querySelector('.footer-body-quote');
const weather = document.querySelector('.header-body-weather');
const audio = document.querySelector('.header-body-player');
const language = document.querySelector('.footer-body-settings-window-language');
const en = document.querySelector('.en');
const ru = document.querySelector('.ru');

const state = {
	blocks: [time, date, greeting, quote, weather, audio],
	language: [en, ru],
	photoSource: 'github',
}

export function checkbox() {

}

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

toggleButton.forEach(element => {
	element.addEventListener('click', function (event) {
		const value = event.target.dataset.value;
		state.blocks[value].classList.toggle('disabled');
	})
})

language.addEventListener('click', function (event) {
	const value = event.target.dataset.value;
	
	if (state.language.at(value - 1).classList.contains('active')) {
		state.language.at(value - 1).classList.remove('active')
		state.language[value].classList.add('active');
	}

	state.language[value].classList.add('active');
})