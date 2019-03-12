const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Genre = require('./genreModel');
const SubTopic = require('./subtopicModel');


const topicSchema = new Schema({
   genre : { type: Schema.Types.ObjectId , ref:'Genre'  },
   topicName : { type: String, max: 50 },
   subTopics  : [{ type: Schema.Types.ObjectId , ref:'SubTopic'  }],
   isSubTopic : { type : Boolean },
   linkData : [{ link:String , linkCaption : String }],
   imageData : [{ imageLink:String , imageDesc: String }],
   content : { type: String , max:3000  , min:0}
});

module.exports = mongoose.model('Topic',topicSchema);