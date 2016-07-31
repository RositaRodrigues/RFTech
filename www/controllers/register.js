angular.module('starter')
.controller('RegisterCtrl', function($scope, $ionicHistory, universityLogin, $rootScope, $state) {

  $scope.register = function(name, email, password) {
    console.log("Hello");
    console.log("name" + name);
    console.log("email" + email);
    console.log("password" + password);
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
      var user = firebase.auth().currentUser;
      console.log("Success");
      console.log(user);

      universityLogin.getUniversity(email).then(function(university) {
        var currentUser = {
          name: name,
          email: email,
          university: university,
          uid: user.uid
        };
        $rootScope.currentUser = currentUser;
        console.log("university in login is: " + university);
      });
      $ionicHistory.nextViewOptions({
         disableBack: true
      });
      $state.go('app.search');
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(error);
    });

  };

// .controller('RegisterCtrl', ['$scope', '$state', '$ionicSlideBoxDelegate', function($scope, $state, $ionicSlideBoxDelegate) {
//
//   $scope.slideHasChanged = function($index){
//     alert('slideHasChanged $index=' + $index);
//     if($index === 0){
//       // first box
//     }
//   };

})
