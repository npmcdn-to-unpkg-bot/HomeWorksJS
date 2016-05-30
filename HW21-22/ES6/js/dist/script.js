'use strict';

$(function () {

	//++++++++++++++++++++++++++ objects +++++++++++++++++++++++++
	//object item for test
	function testItem() {
		this.Question;
		this.RightUnswer;
		this.Unswers;
	}

	//object test
	function test(name, items) {
		var Name = name;
		var Items = items;
		var Button = $('<input type="button" value="Проверить мои результаты" id="result">');
		var testBox = $('.testBox');

		//add test to page
		this.showTest = function () {
			var itemsList = $('<ul></ul>');
			var i = 0;

			testBox.append('<h1>' + Name + '</h1>');

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = Items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var value = _step.value;


					var item = $('<li>' + value.Question + '</li>');
					var subList = $('<ul></ul>');
					var z = 0;

					var _iteratorNormalCompletion2 = true;
					var _didIteratorError2 = false;
					var _iteratorError2 = undefined;

					try {
						for (var _iterator2 = value.Unswers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
							var unswer = _step2.value;

							subList.append('<li><input type="radio" name="group' + i + '" id="unswer' + i + '-' + z + '"><label for="unswer' + i + '-' + z + '">' + unswer + '</label></li>');
							z++;
						}
					} catch (err) {
						_didIteratorError2 = true;
						_iteratorError2 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion2 && _iterator2.return) {
								_iterator2.return();
							}
						} finally {
							if (_didIteratorError2) {
								throw _iteratorError2;
							}
						}
					}

					item.append(subList);
					itemsList.append(item);

					i++;
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			testBox.append(itemsList);
			testBox.append(Button);
		};

		Button.on('click', function () {
			var userUnswers = testBox.find('input[type=radio]:checked').siblings('label');
			var maxTrueUnswers = items.length;
			var userTrueUnswers = 0;

			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				for (var _iterator3 = userUnswers[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var unswer = _step3.value;
					var _iteratorNormalCompletion4 = true;
					var _didIteratorError4 = false;
					var _iteratorError4 = undefined;

					try {
						for (var _iterator4 = Items[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
							var question = _step4.value;

							if ($(unswer).text() === question.RightUnswer) userTrueUnswers++;
						}
					} catch (err) {
						_didIteratorError4 = true;
						_iteratorError4 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion4 && _iterator4.return) {
								_iterator4.return();
							}
						} finally {
							if (_didIteratorError4) {
								throw _iteratorError4;
							}
						}
					}
				}
			} catch (err) {
				_didIteratorError3 = true;
				_iteratorError3 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion3 && _iterator3.return) {
						_iterator3.return();
					}
				} finally {
					if (_didIteratorError3) {
						throw _iteratorError3;
					}
				}
			}

			var overlay = $('<div class="modal-overlay"></div>');
			var modal = $('<div class="madal-dialog"><h2>' + userTrueUnswers + ' правильных ответов из ' + maxTrueUnswers + '</h2></div>');
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
	var item1 = new testItem();
	item1.Question = "Алгоритмы бывают";
	item1.RightUnswer = "однопроходные/двупроходные";
	item1.Unswers = ["однопроходные/двупроходные", "вперед-и-назад-проходые", "непроходимые"];

	var item2 = new testItem();
	item2.Question = "Алгоритм Евклида вычисляет";
	item2.RightUnswer = "наибольший общий делитель";
	item2.Unswers = ["площадь прямоугольника", "площадь равнобедренного треугольника", "наибольший общий делитель"];

	var item3 = new testItem();
	item3.Question = "Ленивые вычисления – это";
	item3.RightUnswer = "вычисления, которые откладывают на потом";
	item3.Unswers = ["вычисления, которые откладывают на потом", "вычисления в режиме отладки, которые осуществляются в замедленном темпе", "вычисления на низко производительных компьютерах"];

	var items = [item1, item2, item3];

	var Test = new test("Тест по программированию", items);
	Test.showTest();
});
