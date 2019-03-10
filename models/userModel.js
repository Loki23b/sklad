var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;


var userSchema = new Schema({
    name: String,
    pass: String,
    isSudo: Boolean
}); 

userSchema.methods.generateHash = function(pass, callback) {
    bcrypt.hash(pass, 10).then(function(hash){
        console.log('new pass encrypted, hash: ' + hash);
        callback(hash);
    })
};

var Users = mongoose.model('Users', userSchema);

module.exports = Users;