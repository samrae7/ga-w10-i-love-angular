angular.module('iHateAngular')
  .controller('PostController', PostController)

PostController.inject=['$http']

function PostController($http) {

  var self = this;
  self.all = [];
  self.addPost = addPost;
  self.newPost = {};
  self.getPosts = getPosts;
  self.order_by = '';

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