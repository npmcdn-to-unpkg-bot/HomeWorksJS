(function ($) {

    //work carousel
    $('.jcarousel').jcarousel();

    $('.jcarousel-pagination')
        .on('jcarouselpagination:active', 'a', function() {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function() {
            $(this).removeClass('active');
        })
        .jcarouselPagination();

    $('.jcarousel').jcarousel({
        animation: 'slow'
    });

    //work accordion
    $('.bannersPlace__item__header').on('click', function (e) {
        $(this).siblings('.bannersPlace__item__body').slideToggle()
			.parent().toggleClass('bannersPlace__item--active');
    });

    
})(jQuery);
