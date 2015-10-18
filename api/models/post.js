var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PostSchema   = new Schema({
    name: String,
    author: String,
    description: String,
    url: String,
    imageURL: String,
    created: {
      type: Date,
      default: Date.now
    },
});

module.exports = mongoose.model('Post', PostSchema);