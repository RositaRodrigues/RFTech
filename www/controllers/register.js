angular.module('starter')
.controller('RegisterCtrl', function($scope, $ionicHistory, universityLogin, $rootScope, $state) {

  $scope.register = function(name, email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
      var user = firebase.auth().currentUser;

      universityLogin.getUniversity(email).then(function(university) {
        var currentUser = {
          name: name,
          email: email,
          university: university,
          uid: user.uid
        };
        firebase.database().ref('users/'+user.uid).set(currentUser);
        $rootScope.currentUser = currentUser;

        $ionicHistory.nextViewOptions({
          disableBack: true
        });
        $state.go('app.search');
      });
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(error);
    });
  };
})
