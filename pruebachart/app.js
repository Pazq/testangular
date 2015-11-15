var app = angular.module('plunker', ['chart.js']);

app.controller('MainCtrl', function($scope) {
  $scope.graph = {};
  $scope.graph.visible = true;


  $scope.graph.data = [[1, 2, 3, 4, 5, 6, 7, 8]];
  $scope.graph.labels = ['hoi', 'doei', 'hallo', 'hee', 'hoi', 'doei', 'hallo', 'hee'];
  $scope.graph.options = {
    animation: true
  };
  $scope.graph.series = ['Series']
  // $scope.graph.colours;
  $scope.graph.legend = true;



});

app.controller('2MainCtrl', function($scope) {
  $scope.graphb = {};
  $scope.graphb.visible = true;


  $scope.graphb.data = [[1, 2, 3, 4, 5, 6, 7, 8]];
  $scope.graphb.labels = ['hoi', 'doei', 'klk', 'hee', 'hoi', 'doei', 'hallo', 'hee'];
  $scope.graphb.options = {
    animation: true
  };
  $scope.graphb.series = ['Series']
  // $scope.graph.colours;
  $scope.graphb.legend = true;



});
app.controller('3MainCtrl', function($scope) {
  $scope.graphc = {};
  $scope.graphc.visible = true;

  $scope.graphc.data = [300, 500, 100];
  $scope.graphc.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.graphc.options = {
    animation: true
  };
  // $scope.graph.colours;


});

