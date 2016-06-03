define(
	'toDoListModel',
	['jquery'],
	function($){
			return function TodoListModel(){
				var self = this;

				self.data = new Array();

				self.addItem = function(newItem){
					if(!newItem){
						return -1;
					}

					self.data.push(newItem);

					return self.data;
				}

				self.removeItem = function(remItem){
					var index = self.data.indexOf(remItem);

					if(index === -1){
						return -1;
					}

					self.data.splice(index, 1);

					return self.data;
				}

				self.editItem = function(remItem, newItem){
					var index = self.data.indexOf(remItem);

					if(index === -1){
						return -1;
					}

					self.data[index] = newItem;

					return self.data;
				}
			}
	}
	);