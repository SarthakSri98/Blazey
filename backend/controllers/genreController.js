const async = require('async');
const Genre = require('../models/genreModel');

exports.getGenre = function(req,res,next){

 nJwt.verify(req.body.token, 'the_good_the_bad_and_the_uchihas', function (err, token) {

   if(err)
   {
       return res.status(400).json({
           message : "user not authorised",
           authorised : false
       })
   } 
   Genre.find().exec((err,result)=>{
    console.log(result);
       res.status(200).json({
           message:'Data is retrieved succesfully',
           data : result,
           authorised : true
       })
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
                  _id:createdGenre._id,
                  authorised : true
              }
          })
     })

}


exports.putGenre = function(req,res,next){
    
}


exports.deleteGenre = function(req,res,next){
       
       Genre.deleteOne({ _id:req.params.idG ,  }).then(result=>{
           console.log(result);
       });
       res.status(200).json({
           message:'genre deleted succesfully',
           authorised : true
       }).catch(err=>{
           message:"There was some error"
           authorised : false
       })

}