function burger() {
	$(document).ready(function() {
		$('.header-menu__icon, .header-menu-list__link').click(function (event) { 
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

	console.log(cardsArr);

	$('.service-body-header-list__item').click(function (event) { 
		let i = $(this).data('filter');
		$(btnArr[i]).toggleClass('active');
		
		switch(i) {
			case 0: {
				break;
			}
			case 1: {
				break;
			}
			case 2: {
				break;
			}
		}
	});
}

function contacts() {
	let cityObj = {
		'canandaigua': ['Canandaigua, NY', '+1 585 393 0001', '151 Charlotte Street'],
		'newyork': ['New York City', '+1 212 456 0002', '9 East 91st Street'],
		'yonkers': ['Yonkers, NY', '+1 914 678 0003', '511 Warburton Ave'],
		'sherrill': ['Sherrill, NY', '+1 315 908 0004', '14 WEST Noyes BLVD'],
	}
	let placeholder = document.querySelector('.contacts-body-list__placeholder');
	let city = document.querySelector('.card__city');
	let phone = document.querySelector('.card__phone');
	let adress = document.querySelector('.card__adress');

	$('.contacts-body-list').click(function (event) { 
		$('.contacts-body-list').toggleClass('active');
		$('.contacts-body-list__placeholder').toggleClass('active');
		$('.contacts-body-list-options').toggleClass('active');

		if ($('.contacts-body-list').hasClass('active')) {
			$('.contacts-body-card').css('display', 'none');
		}
	});

	$('.contacts-body-list-options__option').click(function (event) { 
		let selected = $(this).data('value');
		$('.contacts-body-card').css('display', 'flex');		
		
		placeholder.textContent = cityObj[selected][0];
		city.textContent = cityObj[selected][0];
		phone.textContent = cityObj[selected][1];
		adress.textContent = cityObj[selected][2];

		// адаптив 
		// добавить телефон в ссылку 
	});
}

burger();
filter();
contacts();
// console.log('1. Вёрстка соответствует макету. Ширина экрана 768px. (24/24)\n2. Вёрстка соответствует макету. Ширина экрана 380px. (24/24)\n3. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. (15/15)\n4. На ширине экрана 380рх и меньше реализовано адаптивное меню. (22/22)\nИтого: 85 баллов')