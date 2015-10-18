var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PostSchema   = new Schema({
    name: String,
    author: {
      type: String,
      default: 'No author specified'
    },
    description: {
      type: String,
      default: 'No description provided'
    },
    url: String,
    imageURL: String,
    created: {
      type: Date,
      default: Date.now
    },
    likes: {
      type: Number,
      default: 0
    }
});

module.exports = mongoose.model('Post', PostSchema);