export function showTime() {
	const date = new Date();
	const timeElement = document.querySelector('.content-body__time');

	timeElement.textContent = date.toLocaleTimeString();
	setTimeout(showTime, 1000);
}

export function showDate() {
	const days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	];
	const date = new Date();
	const options = { month: 'long', day: 'numeric'};
	const dateElement = document.querySelector('.content-body__date');

	dateElement.textContent = days[date.getDay()] + ', ' + date.toLocaleDateString('en-US', options);
	setTimeout(showDate, 1000);
}

export function showGreeting() {
	const timeOfDay = ['night', 'morning', 'afternoon', 'evening'];
	const date = new Date();
	const hours = date.getHours();
	const greeting = document.querySelector('.content-body-greeting__text');
	const nameWrapper = document.querySelector('.content-body-greeting__name');

	greeting.textContent = `Good ${timeOfDay[Math.floor(hours / 6)]}, `

	nameWrapper.addEventListener('click', () => {
		const name = prompt('Enter your name.');
		
		nameWrapper.textContent = `${name.slice(0, 10)}.`;
		nameWrapper.classList.add('entered');
		
		localStorage.setItem('name', nameWrapper.textContent);
	});

	setTimeout(showGreeting, 3600000);
}