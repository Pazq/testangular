/**
 * Created by pascual on 12/11/15.
 */

var app = angular.module("MyFirstApp",[])

app.controller("FirstController", function($scope,$http){
   $scope.posts = [];
    $scope.newPost ={};
    $http.get("http://jsonplaceholder.typicode.com/posts")

        .success(function(data){
        console.log(data);
        $scope.posts = data;
    })
        .error(function(err){
    });

    $scope.addPost = function(){
        $http.post("http://jsonplaceholder.typicode.com/posts",{
            title: $scope.newPost.title,
            body: $scope.newPost.body,
            userId: 1
        })
        .success(function(data,status,headers,config){

            $scope.posts.push($scope.newPost);
            console.log(data);
            $scope.newPost={};

        })
            .error(function (error,status,headers,config) {
                console.log(error);
            });

    }
});