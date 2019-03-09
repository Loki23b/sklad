var express = require('express');
var app = express();

var port = 3000;

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.send('Hello world');
})








app.listen(port);