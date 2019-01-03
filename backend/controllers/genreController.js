const async = require('async');
const Genre = require('../models/genreModel');

exports.getGenre = function(req,res,next){
   Genre.find().exec((err,result)=>{
    console.log(result);
       res.status(200).json({
           message:'Data is retrieved succesfully',
           data : result,
       })
   })
}


exports.postGenre = function(req,res,next){
    
    const genre = new Genre({
         genreName : req.body.genreName
     });

     genre.save().then( createdGenre =>{
          res.status(200).json({
              message:"Genre posted succesfully",
              data:{
                  ...createdGenre,
                  _id:createdGenre._id
              }
          })
     })

}


exports.putGenre = function(req,res,next){
    
}


exports.deleteGenre = function(req,res,next){
    
}