var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema({
    email:{type:String , unique:true },
    password:{type:String}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User',userSchema); //Post's P should always be uppercase
