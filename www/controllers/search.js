angular.module('starter')
.controller('SearchCtrl', ['$scope', '$stateParams', 'universityLogin', '$rootScope', function($scope, $stateParams, university, $rootScope) {

  var currentUser = $rootScope.currentUser;
  $scope.university = currentUser.university;

  $scope.courses = [];
  firebase.database().ref(currentUser.university+'/courses').once('value').then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var course = childSnapshot.val();
      course.ID = childSnapshot.key;
      $scope.courses.push(course);
    });
  });

  $scope.add = function(course) {
    firebase.database().ref(currentUser.university+'/mycourses/'+currentUser.uid+'/'+course.ID).set(true);
    window.alert("Added!");
  }

}]);
