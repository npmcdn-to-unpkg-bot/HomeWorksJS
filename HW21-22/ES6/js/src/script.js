$(function () {

	//++++++++++++++++++++++++++ objects +++++++++++++++++++++++++
	//object item for test
	function testItem(){
		this.Question;
		this.RightUnswer;
		this.Unswers;
	}

	//object test
	function test(name, items){
		let Name = name;
		let Items = items;
		let Button = $('<input type="button" value="Проверить мои результаты" id="result">');
		let testBox = $('.testBox');

		//add test to page
		this.showTest = function(){
			let itemsList = $('<ul></ul>');
			let i=0;

			testBox.append(`<h1>${Name}</h1>`);

			for(let value of Items){
				
				

				let item = $(`<li>${value.Question}</li>`);
				let subList = $('<ul></ul>');
				let z = 0;

				for(let unswer of value.Unswers){
					subList.append(`<li><input type="radio" name="group${i}" id="unswer${i}-${z}"><label for="unswer${i}-${z}">${unswer}</label></li>`);
					z++;
				}

				item.append(subList);
				itemsList.append(item);

                i++;
			}

			testBox.append(itemsList);
			testBox.append(Button);
		}

		Button.on('click', function () {
            var userUnswers = testBox.find('input[type=radio]:checked').siblings('label');
            var maxTrueUnswers = items.length;
            var userTrueUnswers = 0;

            for(let unswer of userUnswers){
            	for(let question of Items){
            		if($(unswer).text() === question.RightUnswer) userTrueUnswers++;
            	}
            }

            var overlay = $('<div class="modal-overlay"></div>');
            var modal = $(`<div class="madal-dialog"><h2>${userTrueUnswers} правильных ответов из ${maxTrueUnswers}</h2></div>`)
            $('body').append(overlay).append(modal);
            
            overlay.one('click', hideModal);
            modal.one('click', hideModal);

            function hideModal() {
                overlay.remove();
                modal.remove();
                testBox.find('input[type=radio]:checked').prop('checked', false);
            }
        });
	}

	//+++++++++++++++++++++ create and initialization objects, start test +++++++++++++
	let item1 = new testItem();
	item1.Question = "Алгоритмы бывают";
	item1.RightUnswer = "однопроходные/двупроходные";
	item1.Unswers = ["однопроходные/двупроходные",
                    "вперед-и-назад-проходые",
                    "непроходимые"];

    let item2 = new testItem();
	item2.Question = "Алгоритм Евклида вычисляет";
	item2.RightUnswer = "наибольший общий делитель";
	item2.Unswers = ["площадь прямоугольника",
                    "площадь равнобедренного треугольника",
                    "наибольший общий делитель"];

    let item3 = new testItem();
	item3.Question = "Ленивые вычисления – это";
	item3.RightUnswer = "вычисления, которые откладывают на потом";
	item3.Unswers = ["вычисления, которые откладывают на потом",
                    "вычисления в режиме отладки, которые осуществляются в замедленном темпе",
                    "вычисления на низко производительных компьютерах"];


    let items = [item1, item2, item3];

	var Test = new test("Тест по программированию", items);
	Test.showTest();
});