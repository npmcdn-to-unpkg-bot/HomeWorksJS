define(
	'toDoListView',
	['jquery'],
	function($){
		return function toDoListView(){
			var self = this;

			self.controls = {
					value: $('#item-value'),
					addButton: $('.item-add'),
					listBox: $('.item-list')
			}

			self.showItems = function(data){
				self.controls.listBox.empty();
				self.controls.value.val('');

				for(i=0; i<data.length; i++){
					self.controls.listBox.append('<li>' + data[i] + 
						'<i class="fa fa-trash-o fa-lg item-del" data-itemValue="' + data[i] + 
						'"></i><i class="fa fa-edit fa-lg item-edit" data-itemValue="' + data[i] + '"></i></li>');
				}
			}

			self.showError = function(error){
				alert(error);
			}
		}
	}
	);