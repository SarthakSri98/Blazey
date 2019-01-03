const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Genre = require('./genreModel');
const Topic = require('./topicModel');

const subTopicSchema = new Schema({
//    genreName : { type: Schema.Types.ObjectId , ref:Genre  },
   topicName : { type: Schema.Types.ObjectId , ref:'Topic' },
   subTopic  : [{ type: String}],
   isSubTopic : { type : Boolean },
   link : { type:String },
   linkCaption : { type: String },
   content : { type: String , max:3000 }

});

module.exports = mongoose.model('SubTopic',subTopicSchema);