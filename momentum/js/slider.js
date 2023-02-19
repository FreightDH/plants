let randomInt = getRandomNum(1, 20);

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

function getSlideNext() {
	randomInt = randomInt < 20 ? randomInt += 1 : 1;
	setBackground();
}

function getSlidePrev() {
	randomInt = randomInt > 1 ? randomInt -= 1 : 20;
	setBackground();
}

function getRandomNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const slideNext = document.querySelector('.slider-icons__next');
const slidePrev = document.querySelector('.slider-icons__prev');
slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);