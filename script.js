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
	    let button = $(this);
		
	button.attr('disabled', true);
	setTimeout(function(){
		button.attr('disabled', false);
	},700);

});

////test
let testLf = $('.testLf');
let testRt = $('.testRt');
testLf.click(function(){
	let button = $(this);
		for(let i=0;i<imagesLength;i++){
		let imgClass = images.eq(i).attr('class');
		if(imgClass==='slideLeft'){
			images.eq(i).removeClass('slideLeft');
			images.eq(i).addClass('slide1');
		}else if(imgClass==='slide1'){
			images.eq(i).removeClass('slide1');
			images.eq(i).addClass('slide2');
		}else if(imgClass==='slide2'){
			images.eq(i).removeClass('slide2');
			images.eq(i).addClass('slide3');
		}else if(imgClass==='slide3'){
			images.eq(i).removeClass('slide3');
			images.eq(i).addClass('slideRight');
		}else if(imgClass==='slideRight'){
			images.eq(i).removeClass('slideRight');
			images.eq(i).addClass('slideLeft');
			
		}
	}
	button.attr('disabled', true);
	setTimeout(function(){
		button.attr('disabled', false);
	},700);
});
testRt.click(function(){
	let button = $(this);

	for(let i=0;i<imagesLength;i++){
		let imgClass = images.eq(i).attr('class');
		if(imgClass==='slideLeft'){
			images.eq(i).removeClass('slideLeft');
			images.eq(i).addClass('slideRight');
		}else if(imgClass==='slide1'){
			images.eq(i).removeClass('slide1');
			images.eq(i).addClass('slideLeft');
		}else if(imgClass==='slide2'){
			images.eq(i).removeClass('slide2');
			images.eq(i).addClass('slide1');
		}else if(imgClass==='slide3'){
			images.eq(i).removeClass('slide3');
			images.eq(i).addClass('slide2');
		}else if(imgClass==='slideRight'){
			images.eq(i).removeClass('slideRight');
			images.eq(i).addClass('slide3');
			
		}
	}
	button.attr('disabled', true);
	setTimeout(function(){
		button.attr('disabled', false);
	},700);


});