var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var cors = require('cors');

var mongoose   = require('mongoose');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



var port = process.env.PORT || 3000; 
var router = express.Router();  

var Post     = require('./models/post'); 

app.use(cors());

mongoose.connect('mongodb://localhost/i_hate_angular');

//middleware
router.use(function(req, res, next) {
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});



//GET ALL POSTS
router.route('/posts')

  .get(function(req, res) {
      Post.find(function(err, posts) {
        if (err) res.send(err);
        res.json(posts);
      })
  });



//CREATE POST
router.route('/posts')

  .post(function(req, res) {
      
      var post = new Post();
      post.name = req.body.name;      

      post.save(function(err) {
          if (err)
              res.send(err);

          res.json({ message: 'Post created!' });
      });
      
  });

//GET A SINGLE POST

router.route('/posts/:id')
  .get(function (req, res) {
    Post.findById(req.params.id, function(err,post){
      if (err) res.send(err)
      res.json(post)
    })
  })


//====================
app.use('/', router);

// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);