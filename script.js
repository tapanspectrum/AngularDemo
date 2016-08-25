// Code goes here
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
});
app.controller('myApiCtrl', function($scope, $http) {
  
  var onUserComplete = function(response){
    $scope.user = response.data;
  };
  var onError = function(reason){
    $scope.error = "could not able to fetch data";
  }
    
    $http.get("https://api.github.com/users/robconery")
    .then(onUserComplete, onError);
    $scope.message= "get data from api!";
    
});


app.controller('customersCtrl', function($scope, $http) {
    $http.get("http://www.w3schools.com/angular/customers.php")
    .then(function (response) {$scope.names = response.data.records;});
});