angular.module('starter')
.controller('LoginCtrl', ['$scope', '$state', 'universityLogin', '$http', '$ionicHistory', function($scope, $state, university, $http, $ionicHistory) {

  $scope.login = function(email, password) {
    console.log("Hello");
    console.log(email);
    console.log(password);
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      var user = firebase.auth().currentUser;
      console.log("Success");
      console.log(user);

      $ionicHistory.nextViewOptions({
         disableBack: true
      });
      $state.go('app.search');
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(error);
    });
  };




  // // Form data for the login page pulled from 'universityLogin' factory
  // $scope.loginData = university.getLoginData();
  //
  // // Perform the login action when the user submits the login form
  // $scope.doLogin = function() {
  //   // TODO - check with firebase database whether user exists
  //   var userExists = true; // DEFAULT will be false initially, true for testing purposes
  //
  //   // Routing to Search page
  //   if(userExists) {
  //     $ionicHistory.nextViewOptions({
  //        disableBack: true
  //     });
  //     $state.go('app.search');
  //   } else {
  //     $scope.loginError = "Login error, try again."
  //   }
  // };

}])
