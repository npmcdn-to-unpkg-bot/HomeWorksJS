requirejs.config({
	paths:{
		'jquery': 'vendors/jquery'
	}
});

require(
	[
		'jquery',
		'toDoListModel',
		'toDoListView',
		'toDoListController'
	],
	function($, m, v, c){
		console.log('$', $);

		$(function(){
			var model = new m();
			var view = new v();
			var controller = new c(model, view);

			model.addItem("First f");
			model.addItem("Two f");
			controller.showList();
		});


	}
);



