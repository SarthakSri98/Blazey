const async = require('async');
const mongoose = require('mongoose');
const Topic = require('../models/topicModel');
const Genre = require('../models/genreModel');
const SubTopic = require('../models/subtopicModel');

exports.getSubTopic = function(req,res)
{
    console.log('id1',req.query.id1);

      async.parallel({
         topic : cb=>Topic.findById(mongoose.Types.ObjectId(req.query.id1)).exec(cb),
         subtopic : cb=> { SubTopic.find({ 'topicName':mongoose.Types.ObjectId(req.query.id1) }).populate('genreName').populate('topicName').exec(cb) }   
     },(err,result)=>{
         console.log(result);
         if(err) console.log(err);
         else
         {
             res.status(200).json({
                 message: "subtopic had been recieved succesfully",
                 subtopics:result.subtopic,
                 topic: result.topic.topicName
             })
         }
     })
}

exports.postSubTopic = function(req,res)
{

    

    const subtopic = new SubTopic({
        genreName : req.params.id,
        topicName : req.params.idA,
        subTopic : req.body.subTopic,
        linkData : req.body.linkData,
        content :  req.body.content
    })

    subtopic.save().then( createdSubTopic=>{
        res.status(200).json({
            message:"subtopic data posted succesfully",
            data:{
                ...createdSubTopic,
                _id: createdSubTopic._id
            }
        })
    })
    console.log('id',req.params);
    Topic.findOneAndUpdate(
    { _id:req.params.id },
    { 
     $push: 
     {
         subTopics : subtopic._id
     }
    },
    function(err,success)
    {
         if(err) console.log(err);
         else
         console.log(success);
     })    

}