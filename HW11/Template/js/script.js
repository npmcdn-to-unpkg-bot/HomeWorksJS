$(function () {
    var template = $('#resume').html();
    console.log(template);
    var cand1 = {
        name: 'Иванов Иван Иваныч',
        position: 'Кулинарных дел мастер',
        phone: '+380509998877',
        motives: ['Печь пирожки надоело', 'Хочу бесплатный чай с печеньками'],
        pathToFoto: 'img/cook.jpg'
    };

    var cand2 = {
        name: 'Васильев Василий Васильевич',
        position: 'Безработный весельчак',
        phone: '+380506665544',
        motives: ['Надоело веселиться', 'Деньги закончились', 'Хочу макбук как у преподавателя'],
        pathToFoto: 'img/foto.jpg'
    };

    $('button').on('click', function (e) {
        $('.content').empty();
        var content;
        var id = e.target.id;

        switch (id) {
            case "candidate1": content = tmpl(template, cand1);
                break
            case "candidate2": content = tmpl(template, cand2);
                break
        }

        $('.content').append(content);
    });

    

});


