(function ($) {

    $.fn.carousel = function (options) {
        var test = this;

        var defaults = {
            width: 600,
            height: 300,
            speed: 500
        }

        var settings = $.extend(defaults, options);

        var counter = 0;
        var items = this.find('.carousel-element');
        var leftUIEl = this.find('.carousel-arrow-left');
        var rightUIEl = this.find('.carousel-arrow-right');
        var elementsList = this.find('.carousel-list');
        var maxCircle = items.length;

        leftUIEl.css({ marginTop: settings.height / 2 - 20 });
        rightUIEl.css({ marginTop: settings.height / 2 - 20 });

        this.find('.carousel-hider').css({
            width: settings.width
        });

        //set background all <li>
        items.each(function (i, elem) {
            var $elem = $(elem);
            var pathToImage = $elem.attr('data-image-path');
            var boxImage = $('<div style="background-image: url(' + pathToImage + ');"></div>');
            $elem.append(boxImage);
        });

        items.find('div').css({
            width: settings.width,
            height: settings.height
        });

        leftUIEl.click(function () {
            var currentLeftValue = elementsList.css('margin-left');
            currentLeftValue = parseInt(currentLeftValue);
            if (counter > 0) {
                counter -= 1;
                currentLeftValue += defaults.width;
                elementsList.animate({
                    marginLeft: currentLeftValue
                }, defaults.speed );
            }
        });

        rightUIEl.click(function () {
            var currentLeftValue = elementsList.css('margin-left');
            currentLeftValue = parseInt(currentLeftValue);
            if (counter < maxCircle-1) {
                counter += 1;
                currentLeftValue -= defaults.width;
                elementsList.animate({
                    marginLeft: currentLeftValue
                }, defaults.speed);
            }
        });

        return this;
    }

})(jQuery);
