const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Genre = require('./genreModel');
const SubTopic = require('./subtopicModel');


const topicSchema = new Schema({
   genre : { type: Schema.Types.ObjectId , ref:'Genre'  },
   topicName : { type: String },
   subTopic  : [{ type: Schema.Types.ObjectId , ref:'SubTopic'  }],
   isSubTopic : { type : Boolean },
   link : { type:String },
   linkCaption : { type: String },
   content : { type: String , max:3000 }
});

module.exports = mongoose.model('Topic',topicSchema);