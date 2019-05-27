var config = require('./config');
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var signUpController = require('./controllers/signUpController');
var port = 3000;

//setting up mongo connection
mongoose.connect(config.dbUrl, { useNewUrlParser: true });
var db = mongoose.connection
//checking for mongo errors
db.on('error', console.error.bind
(console, 'connection error:'));
// we're connected!
db.once('open', function() {
    console.log('connection to DB successful');
  });

signUpController(app);
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.send('Hello world again');
})








app.listen(port);