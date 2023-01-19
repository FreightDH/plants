function burger() {
	$(document).ready(function() {
		$(document).on('click', '.header-menu__icon', function(event) {
			if ($('.header-menu__icon').hasClass('active')) {
				$('.header-menu__menu').removeClass('active');
				$('.header-menu__icon').removeClass('active');
				$('html, body').css('overflow', '');
			}
			else {
				$('.header-menu__menu').addClass('active');
				$('.header-menu__icon').addClass('active');
				$('html, body').css('overflow', 'hidden');
			}
			return false;
		}); 
	});
}

function burgerClose() {
	$(document).ready(function () {
		$(document).on('click', '.header-menu-list__link', function(event) {
			if ($('.header-menu__menu').hasClass('active')) {
				$('.header-menu__menu').removeClass('active');
				$('.header-menu__icon').removeClass('active');
				$('html, body').css('overflow', '');
			}
		});
		
		if ($('.header-menu__icon').css('display') === 'block') {
			$(document).on('click', '.header-menu__menu', function(event) {
				if ($('.header-menu__menu').hasClass('active')) {
					$('.header-menu__menu').removeClass('active');
					$('.header-menu__icon').removeClass('active');
					$('html, body').css('overflow', '');
				}
			});
		}
	});
}

burger();
burgerClose();

console.log('1. Вёрстка соответствует макету. Ширина экрана 768px. (24/24)\n2. Вёрстка соответствует макету. Ширина экрана 380px. (24/24)\n3. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. (15/15)\n4. На ширине экрана 380рх и меньше реализовано адаптивное меню. (22/22)\nИтого: 85 баллов')