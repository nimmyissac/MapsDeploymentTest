var express = require('express');
var app = express();

app.use(express.static('styles'))
app.use(express.static('scripts'))
app.get('/', function(req, res) {
   console.log(__dirname);
   res.sendFile( __dirname + "/" + "index.html" );
});
app.get('/maps', function(req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
});
app.get('/calendar', function(req, res) {
   res.sendFile( __dirname + "/" + "index2.html" );
});
console.log('App is listening on 8000');
app.listen(8000);
