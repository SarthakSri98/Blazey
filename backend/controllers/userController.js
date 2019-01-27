var mongoose = require('mongoose');
var User = require('../models/userModel');
var bcrypt = require('bcrypt');


exports.login = function(req,res,next){
  console.log("login");     

}


exports.signup = function(req,res,next){
      
    bcrypt.hash(req.body.password,10)
    .then(hash => {
    const user = new User({
          email : req.body.email,
          password : hash
      })
    
    
    user.save().then(result=>{
        res.status(200).json({
            result:result,
            message:"New profile created succesfully"
        })
    }).catch(error=>{
        res.status(404).json({
            message:"There was an error :"+error
        })
    })
})
}