let images = $('.slider img');
let btnLf = $('.btnLf');
let btnRt = $('.btnRt');
let imagesLength = images.length;
images.eq(imagesLength-1).addClass('slideLeft');

btnRt.click(function(){
	let slider = $('.slider img');
	let sl = $('.slider img.slideLeft');
	sl.removeClass('slideLeft');
	let sl1 = $('.slider img.slide1');
	let sl2 = $('.slider img.slide2');
	let sl3 = $('.slider img.slide3');
	sl1.removeClass('slide1');
	sl1.addClass('slideLeft');
	sl2.removeClass('slide2');
	sl2.addClass('slide1');
	sl3.removeClass('slide3');
	sl3.addClass('slide2');
	if(sl3.next().length>0){
	sl3.next().addClass('slide3');	
}else{
	slider.eq(0).addClass('slide3');
}
	let button = $(this);
	button.attr('disabled', true);
	setTimeout(function(){
		button.attr('disabled', false);
	},700);

});
btnLf.click(function(){
	let slider = $('.slider img');
	let sl = $('.slider img.slideLeft');
	let sl1 = $('.slider img.slide1');
	let sl2 = $('.slider img.slide2');
	let sl3 = $('.slider img.slide3');
	sl.removeClass('slideLeft');
	sl.addClass('slide1');
	sl1.removeClass('slide1');
	sl1.addClass('slide2');
	sl2.removeClass('slide2');
	sl2.addClass('slide3');
	sl3.removeClass('slide3');	
	if(sl.prev().length>0){
		sl.prev().addClass('slideLeft');
	}else{
		slider.eq(slider.length-1).addClass('slideLeft');
	}

	    let button = $(this);
	button.attr('disabled', true);
	setTimeout(function(){
		button.attr('disabled', false);
	},700);

});

