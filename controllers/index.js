var searchData = require('../models/search-data.js');
var _ = require('underscore');
// create reference for 'programming' object in data-set
var programmingLang = searchData.programming;
// create two arrays, one of names of programming languages, the other of the desc objects. Indices will match up
var searchArray = [];
var searchObject = _.map(programmingLang, function(value, key, list){
			searchArray.push(key);
			return value = value;
});


var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	search: function(req, res){
		// pull search term from query
		var query = req.query.term;
		// find the language that matches the search term
		var relevantIndex = searchArray.filter(function(value, index){
			return value.toLowerCase() === query.toLowerCase();
		});
		// find the index of the item in the names array
		var index = searchArray.indexOf(relevantIndex[0]);
		if(index === -1){
			res.send({result: null});
		}
		// create an object that contains the name of the language and the description
		var returnObject = {
			langName: searchArray[index],
			langDesc: searchObject[index].desc
		};
		// send the object to the client
		res.send(returnObject);
		
	}
};

module.exports = indexController;