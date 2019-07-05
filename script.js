let images = $('.slider img');
let btnLf = $('.btnLf');
let btnRt = $('.btnRt');
let imagesLength = images.length;
	for(let i=3;i<imagesLength;i++){
		if(i!==imagesLength-1){
			images.eq(i).addClass('slideRight')
		}else{
			images.eq(i).addClass('slideLeft');
		}
	
}

btnRt.click(function(){
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

});
btnLf.click(function(){
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
			images.eq(i).addClass('slide4');
		}else if(imgClass==='slideRight'){
			images.eq(i).removeClass('slideRight');
			images.eq(i).addClass('slideLeft');
			
		}
	}

});
