define(
	'toDoListController',
	['jquery'],
	function($){
		return function toDoListController(model, view){
			var self = this;

			//add item to list
			view.controls.addButton.on('click', function(){
				var item = view.controls.value.val();
				var result = model.addItem(item);

				if(result == -1) view.showError("There was an error, please contact your administrator");
				else view.showItems(model.data);
			});

			//remove item from list by value
			view.controls.listBox.on('click', '.item-del', function(){
				var item = $(this).attr('data-itemValue');

				var result = model.removeItem(item);

				if(result == -1) view.showError("There was an error, please contact your administrator");
				else view.showItems(result);
			});

			//edit item from list by value
			view.controls.listBox.on('click', '.item-edit', function(){
				var item = $(this).attr('data-itemValue');
				var newItem = prompt("Inter new value:");

				if(newItem){
					var result = model.editItem(item, newItem);

					if(result == -1) view.showError("There was an error, please contact your administrator");
					else view.showItems(result);
				}
				else view.showError("You not enter value!");
			});

			self.showList = function(){
				view.showItems(model.data);
			}
		}
	}
	);