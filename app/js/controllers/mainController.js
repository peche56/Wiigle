angular.module('app')
    .controller('MainController', function($scope, $http) {
        /* Here is your main controller */

        $scope.query = "";
        $scope.goSearch = function() {

$http.get("http://api.giphy.com/v1/gifs/search?q="+ $scope.query +"&api_key=dc6zaTOxFJmzC ")
.then(function(response) {
  $scope.gif = response.data.data;
  console.log($scope.gif);
  // $scope.result = angular.fromJson(response.data);
});

        };
    });
