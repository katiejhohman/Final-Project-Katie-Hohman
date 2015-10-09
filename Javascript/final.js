$(document).ready(function() {
	//Var for scrolling nav bar
	var  mn = $(".main-nav");
	    mns = "main-nav-scrolled";
	    hdr = $('header').height();

	//Array of Background Imagaes
	var images = ['../images/benny.jpeg', '../images/fettucine.jpeg', '../images/gnocchi.jpeg', '../images/mussels.jpeg', '../images/waffle.jpeg', '../images/pancake.jpeg', '../images/toast.jpg', '../images/porkchop.jpg', '../images/salad2.jpeg', '../images/cakes.jpg']

	//Nav Bar Scrolling
	$(window).scroll(function() {
	  if( $(this).scrollTop() > hdr ) {
	    mn.addClass(mns);
	  } else {
	    mn.removeClass(mns);
	  }
	});

	//Smooth Scrolling from nav bar
	$(".scroll-link").click(function(event) {
		event.preventDefault();
		var link = $(event.currentTarget);
		var scrollTo = link.attr('href');
	    $('html, body').animate({
	        scrollTop: $(scrollTo).offset().top
	    }, 1000);
	});


	//Displays random header image
	$('.header-image').css({'background-image': 'url(images/' + images[Math.floor(Math.random() *      images.length)] + ')'
	
	});



	//Single Platform
	var options = {};
    options['PrimaryBackgroundColor'] = '#d9d9d9';
    options['MenuDescBackgroundColor'] = '#d9d9d9';
    options['SectionTitleBackgroundColor'] = '#f1f1f1';
    options['SectionDescBackgroundColor'] = '#f1f1f1';
    options['ItemBackgroundColor'] = '#ffffff';
    options['PrimaryFontFamily'] = 'Roboto';
    options['BaseFontSize'] = '15px';
    options['FontCasing'] = 'Default';
    options['PrimaryFontColor'] = '#000000';
    options['MenuDescFontColor'] = '#000000';
    options['SectionTitleFontColor'] = '#555555';
    options['SectionDescFontColor'] = '#555555';
    options['ItemTitleFontColor'] = '#555555';
    options['FeedbackFontColor'] = '#555555';
    options['ItemDescFontColor'] = '#555555';
    options['ItemPriceFontColor'] = '#555555';
    options['HideDisplayOptionPhotos'] = 'true';
    options['HideDisplayOptionDisclaimer'] = 'true';
    options['MenuTemplate'] = '2';
    //options['MenuDropDownBackgroundColor'] = '#f1f1f1';
    options['MenuIframe'] = 'false';
    new BusinessView("the-hi-life", "menusContainer", options);
});