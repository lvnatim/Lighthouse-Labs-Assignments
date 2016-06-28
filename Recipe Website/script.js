$(document).ready(function(){

var hidden = false
var currentImage = $('.instruction-image:first-child')
var next = currentImage.next()

	$('td').click(function(){

		$(this).toggleClass('td-clicked')

	});

	$('#rightbutton').click(function(){

		currentImage.fadeOut(300);

		if (currentImage.next().length === 0) {

			currentImage = $('.instruction-image:first-child');

			currentImage.fadeIn(300);

		} else {

			currentImage = currentImage.next();

			currentImage.fadeIn(300);

		};
		
	});

	$('#leftbutton').click(function(){

		currentImage.fadeOut(300);

		if (currentImage.prev().length === 0) {

			currentImage = $('.instruction-image:last-child');

			currentImage.fadeIn(300);

		} else {

			currentImage = currentImage.prev();

			currentImage.fadeIn(300);

		};
		
	});

	$('#hide').click(function(){

		if(hidden === false) {

			$('img').hide();

			hidden = true;

		} else {

			$('img').show();

			hidden = false

		}

	})

})