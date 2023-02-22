const settingsButton = document.querySelector('.footer-body-settings__button');
const settings = document.querySelector('.footer-body-settings-window');

export function checkbox() {

}


settingsButton.addEventListener('click', () => {
	settings.classList.toggle('open');
	settingsButton.classList.toggle('active');
});

window.addEventListener('click', (event) => {
	const target = e.target;
	if (!target.closest('.footer-body-settings-window') && !target.closest('.footer-body-settings__button')) {
		settings.classList.remove('open');
		settingsButton.classList.remove('active');
	}
});