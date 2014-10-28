$(document).on('ready', function(){

	// compile handlebars template
	var resultsTemplate = Handlebars.compile($('#search-results-tmp').html());

	// submit handler for search form 
	$('#search-form').on('submit', function(e){
		// prevent page from refreshing
		e.preventDefault();
		// pull search term from input
		var searchTerm = $('#search-input').val();
		// clear search field
		$('#search-input').val('');
		// prepare object to send to server
		var sendObject = {
			term: searchTerm
		};
		// send get request to server to access search controller function
		$.get('/search', sendObject, function(dataResults){

			// create new element from handlebars template function and append to page (clear any current data from UL first)
			var template = resultsTemplate(dataResults);
			$('#results').empty().append(template);

		});

	});

});