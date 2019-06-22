(function ($) {

	new fullpage('.home #et-boc', {
		sectionsColor: ['#999', '#888', '#777', '#666', '#555'],
		parallax: true,

		// Navigation
		slidesNavigation: true,
		navigation: true,
		navigationPosition: 'pagei-sideNav-style1',
		navigationTooltips: ['About me', 'Philosophy', 'Output', 'Contact', 'Instagram'],
	});


	$('.menu_about_me').on('click', function(){
		$('#fp-nav ul li:nth-of-type(1) a')[0].click();
	});
	$('.menu_philosophy').on('click', function(){
		$('#fp-nav ul li:nth-of-type(2) a')[0].click();
	});
	$('.menu_output').on('click', function(){
		$('#fp-nav ul li:nth-of-type(3) a')[0].click();
	});
	$('.scroll-down.contact, .menu_contact').on('click', function(){
		$('#fp-nav ul li:nth-of-type(4) a')[0].click();
	});
	$('.scroll-down.instagram').on('click', function(){
		$('#fp-nav ul li:nth-last-of-type(1) a')[0].click();
	});
})(jQuery);
