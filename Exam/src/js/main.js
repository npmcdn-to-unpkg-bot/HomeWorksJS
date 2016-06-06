(function ($) {
    jQuery.support.cors = true;


    //work carousel
    //$('.jcarousel').jcarousel();

    $('.jcarousel').jcarousel({
        animation: 'slow',
        wrap: 'circular'
    })
	.jcarouselAutoscroll({
		interval: 5000,
		target: '+=1',
		autostart: true
	});


    $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function () {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function () {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

    $('.jcarousel-control-next')
        .on('jcarouselcontrol:active', function () {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function () {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '+=1'
        });


    var $container = $('.grid');
    $container.imagesLoaded(function () {
        $container.masonry({
            gutter: '.gutter-sizer',
            percentPosition: true,
            columnWidth: '.grid-sizer',
            itemSelector: '.grid-item'
        });
        $(".grid-item").imagefill();
    });

    //add new images in grid by reqest
    function showImages(request) {
        var tiles = $('.grid-item');
        var boxImages = $('.grid');
        var urlImages = getUrl(request, tiles.length);

        $.ajax({
            //url: "https://pixabay.com/api/?key=2697797-1a8a67d7a49be3211cee137ac&response_group=image_details&per_page=" +
            //    tiles.length + "&q=red+flower",
            url: urlImages,
            dataType: 'json',
            success: function (data) {
                console.log("images", data);
                //console.log("tiles", tiles);
                if (data.total > 6) {
                    for (var i = 0; i < data.hits.length; i++) {
                        var item = $(tiles[i]);
                        var imageObj = data.hits[i];
                        var tags = imageObj.tags.split(",");

                        //add new image
                        item.find('img').attr('src', imageObj.webformatURL);
                        //add new word for image
                        item.find('p').text(tags[Math.floor(Math.random() * tags.length)]);
                    }

                    $(".grid-item").imagefill();
                }
                else {
                    alert("Not found images. Try another query.");
                }

                
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Error: " + textStatus);
                console.log(textStatus, errorThrown);
            }
        });


    }

    function getUrl(request, lengs) {
        var result = "https://pixabay.com/api/?key=2697797-1a8a67d7a49be3211cee137ac" +
            "&response_group=image_details";
        if (lengs) {
            result += "&per_page=" + lengs;
        }

        if (request) {
            result += "&q=" + request.split(' ').join('+');
        }

        return result;
    }

    showImages();

    $('#serchImages').on('click', function (e) {
        e.preventDefault();

        var inputQuery = $('#query');
        var queryStr = inputQuery.val();

        if (queryStr) {
            showImages(queryStr);
        }
        else {
            alert("Enter a search term");
        }
    });


})(jQuery);
