import state from "./settings.js";

// TIME
const timeElement = document.querySelector('.content-body__time');

export function showTime() {
	const date = new Date();
	timeElement.textContent = date.toLocaleTimeString();
	setTimeout(showTime, 1000);
}
// --------------------------------------------------------------------
// DATE
const dateElement = document.querySelector('.content-body__date');
const options = { month: 'long', day: 'numeric'};
const days = {
	'EN': [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	], 
	'RU': [
		'Воскресенье',
		'Понедельник',
		'Вторник',
		'Среда',
		'Четверг',
		'Пятница',
		'Суббота'
	]
};
const timeOfDay = {
	'EN': ['night', 'morning', 'afternoon', 'evening'],
	'RU': ['ночи', 'утро', 'день', 'вечер'],
};

export function showDate() {
	const date = new Date();
	const language = state.activeLanguage;

	if (language === 'EN')
		dateElement.textContent = days[language][date.getDay()] + ', ' + date.toLocaleDateString('en-US', options);
	else 
		dateElement.textContent = days[language][date.getDay()] + ', ' + date.toLocaleDateString('ru-RU', options);
	setTimeout(showDate, 1000);
}
// --------------------------------------------------------------------
// GREETING
const greeting = document.querySelector('.content-body-greeting__text');
const nameWrapper = document.querySelector('.content-body-greeting__name');

export function showGreeting() {
	const date = new Date();
	const hours = date.getHours();
	const language = state.activeLanguage;
	const index = Math.floor(hours / 6);

	if (language === 'EN') {
		greeting.textContent = `Good ${timeOfDay[language][index]},`;
	} else {
		switch (index) {
			case 0: greeting.textContent = `Доброй ${timeOfDay[language][index]},`;
			case 1: greeting.textContent = `Доброе ${timeOfDay[language][index]},`;
			default: greeting.textContent = `Добрый ${timeOfDay[language][index]},`;
		}
	}
	
	setTimeout(showGreeting, 1000);
}

nameWrapper.addEventListener('click', () => {
	const language = state.activeLanguage;
	const name = language === 'EN' ? prompt('Enter your name.') : prompt('Введите ваше имя.');
	
	nameWrapper.textContent = `${name.slice(0, 10)}.`;
	nameWrapper.classList.add('entered');
	
	localStorage.setItem('name', nameWrapper.textContent);
});
// --------------------------------------------------------------------