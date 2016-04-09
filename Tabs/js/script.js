$(function () {

    //************tabs**************************
    var tabLinks = $('#tabs ul.tabNavigation a');
    var tabContainers = $('#tabs > div');

    tabContainers.hide().filter(':first').show();

    $(tabLinks).on('click', function () {
        tabContainers.hide();
        tabContainers.filter(this.hash).show();
        tabLinks.removeClass('selected');
        $(this).addClass('selected');
    });

    tabLinks.filter(':first').click();


    //**********tooltip**************************
    
    //initalize all tooltips
    $('.elementTip').each(function (i, val) {
        var elem = $(val);
        var text = elem.attr('data-toolTipText');
        var toolTip = elem.siblings('.tooltip');

        toolTip.html("<p>" + text + "</p>");
        toolTip.css({
            "left": elem.width(),
            "top": -elem.height()/2
        });
    });


    $('.elementTip').mouseover(function (e) {
        var elem = $(e.target);
        var toolTip = elem.siblings('.tooltip');

        toolTip.show(300);
    }).mouseleave(function (e) {
        var elem = $(e.target);
        var toolTip = elem.siblings('.tooltip');

        toolTip.hide(300);
    });

    $('.showAllTooltips').on('click', function (e) {
        e.preventDefault();
        $('.tooltip').show(300);
    });
});
