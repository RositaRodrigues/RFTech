angular.module('starter')
.controller('LoginCtrl', ['$scope', '$state', 'universityLogin', '$http', '$ionicHistory', '$rootScope', function($scope, $state, university, $http, $ionicHistory, $rootScope) {

  $scope.login = function(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      var user = firebase.auth().currentUser;

      firebase.database().ref('users/'+user.uid).once('value').then(function(snapshot) {
        $rootScope.currentUser = snapshot.val();
        console.log(snapshot.val());
        $ionicHistory.nextViewOptions({
          disableBack: true
        });
        $state.go('app.search');
      });

    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(error);
    });
  };

}])
