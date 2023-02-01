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

	$('.service-body-header-list__item').click(function (event) { 
		let i = $(this).data('filter');
		$(btnArr[i]).toggleClass('active');
		
		switch(i) {
			case 0: $(cardsArr[1]).toggleClass('blur'); $(cardsArr[2]).toggleClass('blur'); break;
			case 1: $(cardsArr[0]).toggleClass('blur'); $(cardsArr[2]).toggleClass('blur'); break; 
			case 2: $(cardsArr[0]).toggleClass('blur'); $(cardsArr[1]).toggleClass('blur'); break;
		}
	});
}

burger();
filter();

// console.log('1. Вёрстка соответствует макету. Ширина экрана 768px. (24/24)\n2. Вёрстка соответствует макету. Ширина экрана 380px. (24/24)\n3. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. (15/15)\n4. На ширине экрана 380рх и меньше реализовано адаптивное меню. (22/22)\nИтого: 85 баллов')