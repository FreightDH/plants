const quote = document.querySelector('.footer-body-quote__text');
const author = document.querySelector('.footer-body-quote__author');
const reload = document.querySelector('.footer-body__change');
let flag = false;
let randomNum;

export async function getQuotes() {  
	const quotes = 'data.json';
	const res = await fetch(quotes);
	const data = await res.json(); 
	const min = 0, max = data.length;

	if (!flag) {
		randomNum = Math.floor(Math.random() * (max - min)) + min; 
		flag = true;
	}
	randomNum = getRandomNum(min, max, randomNum);

	quote.textContent = data[randomNum].text;
	author.textContent = data[randomNum].author;
}

reload.addEventListener('click', getQuotes);

function getRandomNum(min, max, prevNum) {
	let result;
	
	do {
		result = Math.floor(Math.random() * (max - min)) + min;
	} while (result === prevNum);
	
	return result;
}