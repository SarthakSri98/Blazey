const async = require('async');
const Topic = require('../models/topicModel');
const Genre = require('../models/genreModel');

exports.getTopic = function(req,res,next){

    async.parallel({
        topics: (cb)=> Topic.find({'genre':req.params.id}).populate('genre').populate('subTopic').exec(cb)
  },(err,result)=>{
      if (err) { return next(err); }
      if (result.topics==null) { // No results.
          var err = new Error('author not found');
          err.status = 404;
          return next(err);
      }
      res.status(200).json({ title:"Topics detail" , topics:result.topics });
  });
}


exports.postTopic = function(req,res,next){
    
    const topic = new Topic({
         topicName : req.body.topicName
     });

     topic.save().then( createdTopic =>{
          res.status(200).json({
              message:"Topic posted succesfully",
              data:{
                  ...createdTopic,
                  _id:createdTopic._id
              }
          })
     })

}


exports.putTopic = function(req,res,next){
    
}


exports.deleteTopic = function(req,res,next){
    
}