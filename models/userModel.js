var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;


var userSchema = new Schema({
    name: String,
    pass: String,
    isSudo: Boolean
}); 

userSchema.methods.generateHash = function(pass) {
    return bcrypt.hash(pass, 10, function(err, hash){
        if (err) throw err;
        else console.log('new pass encrypted');
    });
}

var Users = mongoose.model('Users', userSchema);

module.exports = Users;