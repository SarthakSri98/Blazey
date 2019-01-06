const async = require('async');
const Topic = require('../models/topicModel');
const Genre = require('../models/genreModel');
const mongoose = require('mongoose');
exports.getTopic = function(req,res,next){
    console.log('id from the url',mongoose.Types.ObjectId(req.query.id));
    async.parallel({
        topics: (cb)=> Topic.find({'genre':mongoose.Types.ObjectId(req.query.id)}).populate('genre').populate('subTopic').exec(cb)
  },(err,result)=>{
      console.log(result);
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
    console.log(req.body);
    const topic = new Topic({
         topicName : req.body.topicName,
         genre : mongoose.Types.ObjectId(req.params.id),
         isSubTopic : req.body.isSubTopic,
         linkData : req.body.linkData,
         content : req.body.content
    });


    
    
     topic.save().then( createdTopic =>{
          res.status(200).json({
              message:"Topic posted succesfully",
              topics:{
                  ...createdTopic,
                  _id:createdTopic._id
              }
          })
     })

     console.log(req.params.id);
    Genre.findOneAndUpdate({ _id: (req.params.id) },
    { $push: { 
        topics: topic._id
      } 
    },function (error, success) {
        if (error) {
            console.log('err',error);
        } else {
            console.log('success',success);
        }
    })
}


exports.putTopic = function(req,res,next){
    
}


exports.deleteTopic = function(req,res,next){
    
}