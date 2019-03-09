var Users = require('../models').userModel;
var bodyParser = require('body-parser');



module.exports = function(app) {

    app.use(bodyParser.json());

    app.post('/signup', function(req, res) {
        console.log('incoming post request');
        
        var newUser = Users({
            name: req.body.name,
            pass: req.body.pass,
            isSudo: req.body.isSudo
        });

        newUser.save(function(err) {
            if (err) throw err;
            res.send('Success');
        });
        
    });

    app.delete('/signup', function(req, res){
        Users.findOneAndDelete(req.body.id, function(err) {
            if (err) throw err;
            res.send('Success');
            console.log('deleting user' + req.body.id);
        })
        

    })
};