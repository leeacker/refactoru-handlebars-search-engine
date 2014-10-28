var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var _ = require('underscore');

var searchData = require('./models/search-data.js');


var app = express();



app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.get('/search?', indexController.search);

var server = app.listen(9012, function() {
	console.log('Express server listening on port ' + server.address().port);
});
