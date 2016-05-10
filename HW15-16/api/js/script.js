



$(function(){
    var template = $('#userTpl').html();
    var newUsers = new users();
    var defaultOptions = {
        results: 5
    }

	$('#showUsers').on('click', function () {
	    event.preventDefault();
        //get data from inputs
	    var gender = $('#gender').val();
	    var amount = $('#results').val();

        //create object options
	    var options = {};
	    if (gender && gender != "Anybody") options.gender = gender;
	    if (amount) options.results = amount;
	    
        //fill page random users
	    newUsers.getData(options);
	});

    //create class users
	function users() {
	    //get users from site randomuser.me
	    this.getData = function (opt) {
	        $.ajax({
	            url: getUrl(opt),
	            dataType: 'json',
	            success: function (data) {
	                var content;
	                $('.usersContainer').empty();

	                data.results.forEach(function (item, i, arr) {
	                    var d = 0;
	                    content = tmpl(template, item);
	                    $('.usersContainer').append(content);
	                });
	            }
	        });
	    }

	    //create url for ajax request
	    function getUrl(userOptions) {
	        var result = 'https://randomuser.me/api/?';
	        var options = defaultOptions;
	        $.extend(options, userOptions);

	        for (var property in defaultOptions) {
	            if (defaultOptions.hasOwnProperty(property)) {
	                result += property + "=" + defaultOptions[property] + "&";
	            }
	        }
	        return result.slice(0, -1);
	    }
	}
	
});