function ibg(){
	let ibg = document.querySelectorAll('.ibg');
	for(var i=0;i<ibg.length;i++){
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}

}
ibg();

$(document).ready(function(){
	$('.sliderFirst').slick({
		asNavFor:'.sliderSecond',
		rtl:true,
		variableWidth:true,
		arrows:false,
		touchThreshold:10,
		infinite:true,
		autoplay:true,
		autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover:false,
        pauseOnFocus:false,
		responsive:[{
			breakpoint:850,
			settings:{
				rtl:false
			}
		}]
	});
	$('.sliderSecond').slick({
		asNavFor:'.sliderFirst',
		infinite:true,
		variableWidth:true,
		arrows:false,
		touchThreshold:10
	});

	$('.popup-sliderImg').slick({
		arrows:false,
		dots:true
	});
	$('.popup-sliderText').slick({
		arrows:false,
	});
	$('.sliderText-dots .sliderText-dots__item').click(function() {
  var $this = $(this);
  $('.sliderText-dots__item').each(function(){
  	$(this).removeClass('active');
  })
  $this.addClass('active');
  $('.popup-sliderText').slick('slickGoTo', $this.data('index'))
});

	$('.popupClose').click(function(){
		$('.popup').each(function(){
			$(this).removeClass('active');
		})
	})
	$('.popup-bg').click(function(){
		$('.popup').each(function(){
			$(this).removeClass('active');
		})
	})
	$('#item1').click(function(){
		$('#popup1').addClass('active');
	})
	$('#item2').click(function(){
		$('#popup2').addClass('active');
	})
	$('#item3').click(function(){
		$('#popup3').addClass('active');
	})
	$('#item4').click(function(){
		$('#popup4').addClass('active');
	})
	$('#item5').click(function(){
		$('#popup5').addClass('active');
	})
	$('#item6').click(function(){
		$('#popup6').addClass('active');
	})
	$('#item7').click(function(){
		$('#popup7').addClass('active');
	})
	$('#item8').click(function(){
		$('#popup8').addClass('active');
	})
	$('#item9').click(function(){
		$('#popup9').addClass('active');
	})
	$('#item10').click(function(){
		$('#popup10').addClass('active');
	})
	$('#item11').click(function(){
		$('#popup11').addClass('active');
	})
	$('#item12').click(function(){
		$('#popup12').addClass('active');
	})
	$('#item13').click(function(){
		$('#popup13').addClass('active');
	})
	$('#item14').click(function(){
		$('#popup14').addClass('active');
	})
	$('#item15').click(function(){
		$('#popup15').addClass('active');
	})
	$('#item16').click(function(){
		$('#popup16').addClass('active');
	})
	
	

	let w = $(window).width();
	let menu = $('.header-body__list');
	let burgerBody = $('.burger-menu__body');
	let burgerBtn = $('.header-burger');
	let headLink = $('.header-link');
	burgerBtn.click(function(){
		$('.burger-menu').toggleClass('active');
		$('body').toggleClass('lock');
		$('.container').toggleClass('lock');
	})
	if(w<850){
		menu.appendTo(burgerBody);
		headLink.appendTo(burgerBody);
	}else{
		menu.insertAfter($('.header-body__logo'));
		headLink.insertAfter(burgerBtn);
	}
	
	

	let faqP = $('.faq-body__p');
	faqP.hide();
	let faqItem = $('.faq-body__item');
	faqItem.each(function(){
		$(this).click(function(){
			if($(this).find($('.faq-body__p')).css('display') == 'none'){
			faqP.hide(500);
			faqItem.each(function(){
				$(this).removeClass('active');
			})
			$(this).find($(".faq-body__p")).show(500);
			$(this).addClass('active');
		}else{
			faqP.hide(500);
			$(this).removeClass('active');
		}
		})
	})
})

$(window).resize(function(){
	let w = $(window).width();
	let menu = $('.header-body__list');
	let burgerBody = $('.burger-menu__body');
	let burgerBtn = $('.header-burger');
	let headLink = $('.header-link');
	burgerBtn.click(function(){
		$('.burger-menu').toggleClass('active');
		$('body').toggleClass('lock');
		$('.container').toggleClass('lock');
	})
	if(w<850){
		menu.appendTo(burgerBody);
		headLink.appendTo(burgerBody);
	}else{
		headLink.appendTo($('.link-ins'));
		menu.insertAfter($('.header-body__logo'));
	}
})