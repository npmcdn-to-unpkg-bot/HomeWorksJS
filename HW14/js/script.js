'use strict;'

$(function () {
    var t = {
        "Name": "Тест по программированию",
        "Questions": [
            {
                "Question": "Алгоритмы бывают",
                "RightUnswer": "однопроходные/двупроходные",
                "Unswers": ["однопроходные/двупроходные",
                    "вперед-и-назад-проходые",
                    "непроходимые"]
            },
            {
                "Question": "Алгоритм Евклида вычисляет",
                "RightUnswer": "наибольший общий делитель",
                "Unswers": ["площадь прямоугольника",
                    "площадь равнобедренного треугольника",
                    "наибольший общий делитель"]
            },
            {
                "Question": "Ленивые вычисления – это",
                "RightUnswer": "вычисления, которые откладывают на потом",
                "Unswers": ["вычисления, которые откладывают на потом",
                    "вычисления в режиме отладки, которые осуществляются в замедленном темпе",
                    "вычисления на низко производительных компьютерах"]
            }
        ]
    }

    localStorage.setItem('test', JSON.stringify(t));

    function startTest() {
        try {
            var testObj = JSON.parse(localStorage.getItem('test'));

            var testbox = $('#testBox');
            testbox.empty();

            var template = $('#template').html();
            var content = tmpl(template, testObj);
            testbox.append(content);

            $('#result').one('click', function () {
                var userUnswers = testbox.find('input[type=radio]:checked').siblings('label');
                var maxTrueUnswers = testObj.Questions.length;
                var userTrueUnswers = 0;

                for (var i = 0; i < maxTrueUnswers; i++) {
                    for (var z = 0; z < userUnswers.length; z++) {
                        if (testObj.Questions[i].RightUnswer === $(userUnswers[z]).text()) userTrueUnswers++;
                    }
                }

                var overlay = $('<div class="modal-overlay"></div>');
                var modal = $('<div class="madal-dialog"><h2>' + userTrueUnswers + " правильных ответов из " + maxTrueUnswers + '</h2></div>')

                $('body').append(overlay).append(modal);
                

                overlay.one('click', hideModal);
                modal.one('click', hideModal);

                function hideModal() {
                    overlay.remove();
                    modal.remove();
                    startTest();
                }
            });

        } catch (e) {
            alert("Ошибка на сервере, пропробуйте запрос выполнить позже");
        }
    }

    startTest();
    
});

