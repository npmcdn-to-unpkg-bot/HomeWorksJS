(function($) {
    $(function() {
        $('.jcarousel').jcarousel();

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
    });

    $('select').niceSelect();

    $('.myMenu ul li').mouseenter(function () {
        var t = $(this).find("ul").first();
        t.css({ 'visibility': 'visible', 'margin': 0, 'z-index': 50, });
        t.fadeTo("slow", 1);

    }).mouseleave(function () {
        var t = $(this).find("ul").first();
        t.animate({
            opacity: 0
        }, {
            duration: 100, complete: function () {
                t.css({ 'visibility': 'hidden' });
            }
        });
    });
})(jQuery);
