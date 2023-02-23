import state from "./settings.js";

const quote = document.querySelector('.footer-body-quote__text');
const author = document.querySelector('.footer-body-quote__author');
const changeQuote = document.querySelector('.footer-body__change');

let flag = false;
let randomNum;

export async function getQuotes() {  
	const language = state.activeLanguage;
	const quotes = 'data.json';
	const res = await fetch(quotes);
	const data = await res.json(); 
	const min = 0, max = data.length;

	if (!flag) {
		randomNum = Math.floor(Math.random() * (max - min)) + min; 
		flag = true;
	}
	randomNum = getRandomNum(min, max, randomNum);

	if (language === 'EN') {
		quote.textContent = data[randomNum].text[0];
		author.textContent = data[randomNum].author[0];
	} else {
		quote.textContent = data[randomNum].text[1];
		author.textContent = data[randomNum].author[1];
	}
}

changeQuote.addEventListener('click', getQuotes);

function getRandomNum(min, max, prevNum) {
	let result;
	
	do {
		result = Math.floor(Math.random() * (max - min)) + min;
	} while (result === prevNum);
	
	return result;
}