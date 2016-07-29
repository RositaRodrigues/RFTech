angular.module('starter')
.controller('LoginCtrl', ['$scope', '$state', 'universityLogin', function($scope, $state, university) {

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

    // // Test console.log(s)
    // console.log('Doing login', $scope.loginData);
    // console.log('univEmail: ', $scope.loginData.univEmail);
    // console.log('univEmail split at @: ', emailStringArray);
    // console.log('University domain: ', univDomain);
    // console.log('University: ', $scope.university);
  };

}]);
