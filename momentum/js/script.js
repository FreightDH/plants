function showTime() {
	const timeElement = document.querySelector('.content-body__time');
	const date = new Date();
	timeElement.textContent = date.toLocaleTimeString();
	setTimeout(showTime, 1000);

}

function showDate() {
	const days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	];
	const dateElement = document.querySelector('.content-body__date');
	const date = new Date();
	const options = { day: 'string', month: 'long', day: 'numeric', timeZone: 'UTC' };

	dateElement.textContent = days[date.getDay()] + ', ' + date.toLocaleDateString('en-En', options);
	setTimeout(showDate, 1000);
}

showTime();
showDate();