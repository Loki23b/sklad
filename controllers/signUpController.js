var Users = require('../models').userModel;
var bodyParser = require('body-parser');



module.exports = function(app) {

    app.use(bodyParser.json());

    app.post('/signup', function(req, res) {
        console.log('incoming post request');
        
        var newUser = new Users({
            name: req.body.name,
            isSudo: req.body.isSudo
        });

        newUser.generateHash(req.body.pass, function(hash) {
            newUser.pass = hash;
            newUser.save(function(err) {
                if (err) throw err;
                res.send('Success');
            });
            
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