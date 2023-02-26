import state from "./settings.js";
// GET RANDOM NUMBER
let randomInt = getRandomNum(1, 20);

function getRandomNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
// --------------------------------------------------------------------
// SET BACKGROUND
export function setBackground() {  
	const img = new Image();
	const timeOfDay = ['night', 'morning', 'afternoon', 'evening'];
	const date = new Date();
	const hours = date.getHours();
	
	let bgNum = randomInt < 10 ? randomInt.toString().padStart(2, '0') : randomInt;
	
	img.src = `https://raw.githubusercontent.com/FreightDH/momentum-images/main/images/${timeOfDay[Math.floor(hours / 6)]}/${bgNum}.webp`;
	img.onload = () => {      
	  document.body.style.backgroundImage = `url('${img.src}')`;
	}; 
}

const input = document.querySelector('.footer-body-settings-window-images__input');
export async function setBackgroundAPI() {
	const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${input.value}&client_id=fLx2muEM1pQMY1fROF63UCd7atnjMFnyqjt8441dgwU`;
	const res = await fetch(url);
	const data = await res.json();
	const img = new Image();

	img.src = data.urls.regular;
	img.onload = () => {
		document.body.style.backgroundImage = `url('${img.src}')`;
	}
}


export function setImage(event) {
	if (event.code === 'Enter') {
		setBackgroundAPI();
   	input.blur();
		localStorage.setItem('imageTag', input.value);
  	}
}

input.addEventListener('keypress', setImage);
// --------------------------------------------------------------------
// SLIDER FUNCTIONS
const slideNext = document.querySelector('.slider-icons__next');
const slidePrev = document.querySelector('.slider-icons__prev');

function getSlideNext() {
	randomInt = randomInt < 20 ? randomInt += 1 : 1;
	setBackground();
}

function getSlidePrev() {
	randomInt = randomInt > 1 ? randomInt -= 1 : 20;
	setBackground();
}

slideNext.addEventListener('click', () => {
	state.activePhotoSource === 'GIT' ? getSlideNext() : setBackgroundAPI();
});

slidePrev.addEventListener('click', () => {
	state.activePhotoSource === 'GIT' ? getSlidePrev() : setBackgroundAPI();
});
// --------------------------------------------------------------------