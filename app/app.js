var express = require('express');
var app = express();

var path = require('path');
global.appRoot = path.resolve(__dirname);
global.appPublic = appRoot + '/dist/';
global.partialsDir = appRoot + '/views/partials/';
global.templatesDir = appRoot + '/views/templates/';

app.set('port', process.env.PORT || 8082);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(express.static(__dirname + '/dist'));
app.use(require('./routes/appRoute'));

console.log(global.appPublic);

var server = app.listen(app.get('port'), function(){
    console.log('listening on port ' + app.get('port'));
});

