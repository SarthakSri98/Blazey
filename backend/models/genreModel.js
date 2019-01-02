var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Topic = require('./topicModel');
var subTopic = require('./subtopicModel');

const genreSchema = new Schema({
    genreName : { type:String },
    topic : [ { type: Schema.Types.ObjectId , ref:Topic } ]
})

module.exports = mongoose.model('Genre',genreSchema);