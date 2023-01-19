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
		// if ($('.header-menu__icon').css('display') === 'block') {
		// 	$(document).on('click', '.header-menu__menu', function(event) {
		// 		if ($('.header-menu__icon').hasClass('active')) {
		// 			$('.header-menu__menu').removeClass('active');
		// 			$('.header-menu__icon').removeClass('active');
		// 			$('html, body').css('overflow', '');
		// 		}
		// 		else {
		// 			$('.header-menu__menu').addClass('active');
		// 			$('.header-menu__icon').addClass('active');
		// 			$('html, body').css('overflow', 'hidden');
		// 		}
		// 		return false;
		// 	});
		// }
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