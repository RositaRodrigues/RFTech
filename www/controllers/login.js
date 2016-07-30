angular.module('starter')
.controller('LoginCtrl', ['$scope', '$state', 'universityLogin', '$http', function($scope, $state, university, $http) {

  // Form data for the login page pulled from 'universityLogin' factory
  $scope.loginData = university.getLoginData();

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    // TODO - check with firebase database whether user exists
    var userExists = true; // DEFAULT will be false initially, true for testing purposes

    // Routing to Search page
    if(userExists) {
      $state.go('app.search');
    } else {
      $scope.loginError = "Login error, try again."
    }
  };

}]);
