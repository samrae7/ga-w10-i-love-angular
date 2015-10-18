angular.module('iHateAngular')
  .controller('PostController', PostController)

PostController.inject=['$http']

function PostController($http) {

  var self = this;
  self.all = [];
  self.addPost = addPost;
  self.newPost = {};
  self.getPosts = getPosts;
  self.sort = '-created';
  self.show_form = false;

  self.showForm = showForm;
  self.like = like;

  function like(id, likes) {
    console.log('likes', likes)
    $http
      .put('http://localhost:3000/posts/'+id, {'likes': likes + 1 }). 
        then(function(response){
          console.log(response)
          self.getPosts()
        })

  }

  function showForm(){
    self.show_form = self.show_form ? false : true
  }

  getPosts();

  function getPosts(){
    $http
      .get('http://localhost:3000/posts')
      .then(function(response){
        self.all = response.data;
    });
  }

  function addPost() {
    $http
      .post('http://localhost:3000/posts', self.newPost). 
        then(function(response){
          //if(err) console.log(err)
          //console.log(response)
          self.getPosts()
        })
  }

}