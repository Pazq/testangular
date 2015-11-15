/**
 * Created by pascual on 15/11/15.
 */


var app = angular.module("appprob", [])

app.controller("nControllr", function ($scope, $http) {
    $scope.posts = [];
    $scope.newPost = {};

    $scope.addPost = function () {
        $http(
            {
                url: 'http://netstatspucmm.com:8000/api/accounts/login',
                method:'POST',

                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                data: {
                    user: $scope.newPost.user,
                    pwr: $scope.newPost.pwr
                },
                dataType: "text"


            })
            .success(function (data, status, headers, config) {
                console.log(data);
                $scope.posts.push(data);


            })
            .error(function (error, status, headers, config) {
                console.log("error");
            });

    }
});