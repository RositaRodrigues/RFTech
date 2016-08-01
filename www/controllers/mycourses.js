angular.module('starter')
  .controller('MyCoursesCtrl', function($scope, $stateParams) {

    $scope.courses = [];
    firebase.database().ref(currentUser.university+'/courses').once('value').then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var course = childSnapshot.val();
        $scope.courses.push(course);
      });
    });
    
    $scope.remove = function(course) {
        window.alert("Removed!");
    }
  });
