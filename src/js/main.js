$(function() {
    $('.fancybox').fancybox();
    
    /*-------------------------------------------------*/
    /*  home-slider
    /*-------------------------------------------------*/
    // $('.home-slider__item .name span').each(function(){
    // 	$(this).closest('.text').show();
    // 	var ml = '-'+$(this).width() / 2 + 'px';
    // 	console.log(ml);
    // 	$(this).css({
    // 		position:'absolute',
    // 		left: '50%',
    // 		'margin-left': ml
    // 	})
    // 	$(this).closest('.text').hide();
    // });

    $('#hSlider').owlCarousel({
    	items: 1,
    	loop: true,
    	dots: false
    });



    $(window).load(function(){
    	if($('.home-slider__bottom').length && $('.home-slider').length){

		    while($('.home-slider').outerHeight() < $(window).height() - $('.header-top').outerHeight() && $('.home-slider__bottom').height() < 250){
		    	var currentHeight = $('.home-slider__bottom').height();
		    	$('.home-slider__bottom').height(currentHeight += 1);
		    }
		}
    });

    /*-------------------------------------------------*/
    /*  product-carousel
    /*-------------------------------------------------*/

    $('.product-carousel').each(function(){
    	var dots =  $(this).data('dots');
        var items = 4;
    	(dots == "undefined")? dots = true : null;

        if($(this).closest('[class*=-9]').length){
            items = 3;
        }
    	var thisSlider = $(this).owlCarousel({
	    	items: items,
	    	loop: true,
	    	margin: 28,
	    	dots: dots
	    });

	    $(this).closest('.section-carousel').find('.product-carousel__nav li').eq(0).click(function(){
	    	thisSlider.trigger('prev.owl.carousel');
	    	return false;
	    });

	    $(this).closest('.section-carousel').find('.product-carousel__nav li').eq(1).click(function(){
	    	thisSlider.trigger('next.owl.carousel');
	    	return false;
	    });
    });

    $(window).load(function(){
    	var tmpMaxHeight = [];
    	$('.client-carousel .owl-item').each(function(){
    		tmpMaxHeight.push($(this).height());
    	});
    	tmpMaxHeight = Math.max.apply(null, tmpMaxHeight);
    	$('.client-carousel .owl-item').each(function(){
    		$(this).css('line-height', tmpMaxHeight+'px')
    	});
	});

    /*-------------------------------------------------*/
    /*  filter
    /*-------------------------------------------------*/

    if($('.filter-category__body.toggle').length){
        $('.filter-category__body.toggle').each(function(){
            var btn = $('<button class="fa"></button>').click(function(){
                $(this).toggleClass('active');
                $(this).parent().siblings('.toggle').slideToggle(400);
                return false;
            });
            $(this).siblings('.filter-category__header').append(btn);
            if($(this).is('.close')){
                $(this).hide();
                $(this).siblings('.filter-category__header').find('button').addClass('active')
            }
        });
    }

    var filterSlider = $('#filterSlider'),
        filterSliderMinValue = filterSlider.data('min');
        filterSliderMaxValue = filterSlider.data('max');
        filterSliderMinInit = filterSlider.data('min-init');
        filterSliderMaxInit = filterSlider.data('max-init');
        filterSliderMin = $(filterSlider).closest('.filter-slider').find('.min'),
        filterSliderMax = $(filterSlider).closest('.filter-slider').find('.max');
    $(filterSlider).closest('.filter-slider').find('.min').val(filterSliderMinInit+' ₽');
    $(filterSlider).closest('.filter-slider').find('.max').val(filterSliderMaxInit+' ₽');

    $(filterSlider).slider({
        range: true,
        min: filterSliderMinValue,
        max: filterSliderMaxValue,
        values: [filterSliderMinInit,filterSliderMaxInit],
        slide: function(e, ui){
            $(filterSliderMin).val(ui.values[0] + ' ₽');
            $(filterSliderMax).val(ui.values[1] + ' ₽');
        },
        change: function(e, ui){
            $(filterSliderMin).val(ui.values[0] + ' ₽');
            $(filterSliderMax).val(ui.values[1] + ' ₽');
        }
    });

    /*-------------------------------------------------*/
    /*  catalog sort
    /*-------------------------------------------------*/
    $('.select-sort-js').styler();

    /*-------------------------------------------------*/
    /*  product
    /*-------------------------------------------------*/
    
    $('.product-preview').each(function(){
        var mainImage = $(this).find('.product-preview__image').find('img');
        $(this).find('ul').owlCarousel({
            items: 5,
            dots: false,
        });
        $(this).find('li').click(function(){
            var src = $(this).find('a').attr('href');
            $(mainImage).attr('src', src);
            return false;
        });
    });

    $('.product-info__count button').click(function(){
        var input = $(this).siblings('.num');
        if($(this).is('.plus')){
            $(input).val(+$(input).val()+1);
        }
        if($(this).is('.minus')){
            if($(input).val() != 0){
                $(input).val(+$(input).val()-1);
            }
        }
    });
    
});
