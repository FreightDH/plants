function burger() {
	$(document).ready(function() {
		$('.header-menu__icon').click(function (event) { 
			$('.header-menu__icon, .header-menu__menu').toggleClass('active');
			$('body').toggleClass('lock');
		});

		if ($('.header-menu__icon').css('display') === 'block') {
			$('.header-menu__menu').click(function (event) { 
				$('.header-menu__icon, .header-menu__menu').removeClass('active');
				$('body').removeClass('lock');
			});
		}
	});
}

function filter() {
	let btnArr = document.querySelectorAll('.btn--filter');
	let cardsArr = [].concat(
		document.getElementsByClassName('garden'), 
		document.getElementsByClassName('lawn'), 
		document.getElementsByClassName('planting')
	);
	
	$('.service-body-header-list__item').click(function (event) {  
		let i = $(this).data('filter');
		$(btnArr[i]).toggleClass('active');

		switch(i) {
			case 0: {
				if ($(btnArr[0]).hasClass('active')) {
					$(cardsArr[0]).removeClass('blur');
		
					if (!$(btnArr[1]).hasClass('active')) {
						$(cardsArr[1]).addClass('blur');
					} 
		
					if (!$(btnArr[2]).hasClass('active')) {
						$(cardsArr[2]).addClass('blur');
					} 
				} else {
					$(cardsArr[0]).removeClass('blur');
				}
				break;
			}
			case 1: {
				if ($(btnArr[1]).hasClass('active')) {
					$(cardsArr[1]).removeClass('blur');
		
					if (!$(btnArr[0]).hasClass('active')) {
						$(cardsArr[0]).addClass('blur');
					} 
		
					if (!$(btnArr[2]).hasClass('active')) {
						$(cardsArr[2]).addClass('blur');
					}
				} else {
					$(cardsArr[1]).addClass('blur');
				}
				break;
			}
			case 2: {
				if ($(btnArr[2]).hasClass('active')) {
					$(cardsArr[2]).removeClass('blur');
		
					if (!$(btnArr[0]).hasClass('active')) {
						$(cardsArr[0]).addClass('blur');
					} 
		
					if (!$(btnArr[1]).hasClass('active')) {
						$(cardsArr[1]).addClass('blur');
					} 
				} else {
					$(cardsArr[2]).addClass('blur');
				}
				break;
			}
		}

		let countActive = 0, countUnactive = 0;
		btnArr.forEach( (button) => $(button).hasClass('active') ? countActive++ : countUnactive++);
		if (countActive === btnArr.length || countUnactive === btnArr.length) {
			btnArr.forEach(button => $(button).removeClass('active'));
			cardsArr.forEach(card => $(card).removeClass('blur'));
		}
	});
}

function prices() {
	let btnArr = document.querySelectorAll('.prices-body-item-buttons__button');
	let cardArr = document.querySelectorAll('.prices-body-item-buttons-card');

	for (let button of btnArr) {
		$(button).click(function (event) {
			for (let c of cardArr) {
				$(c).removeClass('active');
			}

			for (let btn of btnArr) {
				$(btn).removeClass('active');
			}

			$(button).addClass('active');
			let card = this.nextElementSibling;

			if ($(button).hasClass('active')) {
				$(card).addClass('active');
			} else {
				$(card).removeClass('active');
			}

			$('.card__title').click(function (event) { 
				$(card).removeClass('active');
				$(button).removeClass('active');
			});
		});
	}
}

function contacts() {
	let cityObj = {
		'canandaigua': ['Canandaigua, NY', '+1 585 393 0001', '151 Charlotte Street', '15853930001'],
		'newyork': ['New York City', '+1 212 456 0002', '9 East 91st Street', '12124560002'],
		'yonkers': ['Yonkers, NY', '+1 914 678 0003', '511 Warburton Ave', '19146780003'],
		'sherrill': ['Sherrill, NY', '+1 315 908 0004', '14 WEST Noyes BLVD', '13159080004'],
	}
	let placeholder = document.querySelector('.contacts-body-list__placeholder');
	let city = document.querySelector('.card__city');
	let phone = document.querySelector('.card__phone');
	let adress = document.querySelector('.card__adress');
	let button = document.querySelector('.contacts-body-card__btn');

	$('.contacts-body-list').click(function (event) { // раскрытие списка
		$('.contacts-body-list').toggleClass('active');
		$('.contacts-body-list__placeholder').toggleClass('active');
		$('.contacts-body-list-options').toggleClass('active');

		if ($('.contacts-body-list').hasClass('active')) {
			$('.contacts-body-card').removeClass('active');
			$('.contacts__img').removeClass('active');
			placeholder.textContent = 'City';
		}
	});

	$('.contacts-body-list-options__option').click(function (event) { // отслеживание выбора города из списка
		let selected = $(this).data('value');
		$('.contacts-body-card').addClass('active');
		$('.contacts__img').addClass('active');
		
		placeholder.textContent = cityObj[selected][0]; // заполнение карточки
		city.textContent = cityObj[selected][0];
		phone.textContent = cityObj[selected][1];
		adress.textContent = cityObj[selected][2];
		button.href = 'tel:' + cityObj[selected][3];
	});

	if (window.screen.width < 993) {

	}
}

burger();
filter();
prices();
contacts();

console.log('1. При нажатии на кнопки: Gardens, Lawn, Planting происходит смена фокуса на услугах в разделе service (50/50)\n2. Accordion в секции prices, реализация 3-х выпадающих списков об услугах и ценах (50/50)\n3. В разделе contacts реализован select с выбором городов (25/25)\nИтого: 125 баллов')