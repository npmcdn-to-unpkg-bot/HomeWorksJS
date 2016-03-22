
function testBuilder(testName, textButton) {
    var testName = testName;
    var textButton = textButton;
    var mainList = document.createElement('ul');
    var box = document.createElement('div');

    this.addQuestion = function (question, unswers) {
        var newQuestion = document.createElement('li');
        var unswersList = document.createElement('ul');
        var countNodes = mainList.childNodes.length;

        for (var i = 0; i < unswers.length; i++) {
            var newUnswer = document.createElement('li');
            var id = 'unswer' + countNodes.toString() + '-' + i.toString();

            var newLabel = document.createElement('label');
            newLabel.setAttribute("for", id);
            newLabel.innerHTML = unswers[i];

            var newCheckbox = document.createElement('input');
            newCheckbox.type = 'checkbox';
            newCheckbox.id = id;

            newUnswer.appendChild(newCheckbox);
            newUnswer.appendChild(newLabel);

            unswersList.appendChild(newUnswer);
        }

        newQuestion.innerHTML = question;
        newQuestion.appendChild(unswersList);

        mainList.appendChild(newQuestion);  
    }

    this.createTest = function(parent){
        var t = document.getElementsByTagName('body');
        var title = document.createElement('h1');
        title.innerHTML = testName;

        var button = document.createElement('input');
        button.type = 'button';
        button.value = textButton;

        box.appendChild(title);
        box.appendChild(mainList);
        box.appendChild(button);

        parent.appendChild(box);
    }

    this.addClassBox = function (className) {
        box.classList.add("testBox");
    }
}

var newTest = new testBuilder("Тест по программированию", "Проверить мои результаты");

var unswers = new Array("Вариант ответа 1", "Вариант ответа 2", "Вариант ответа 3");

newTest.addQuestion("Вопрос №1", unswers);
newTest.addQuestion("Вопрос №2", unswers);
newTest.addQuestion("Вопрос №3", unswers);

newTest.addClassBox('testBox');

newTest.createTest(document.getElementById('d1'));