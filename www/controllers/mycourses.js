angular.module('starter')
  .controller('MyCoursesCtrl', function($scope, $rootScope, $stateParams) {

    var currentUser = $rootScope.currentUser;

    $scope.courses = [];
    firebase.database().ref(currentUser.university+'/mycourses/'+currentUser.uid).once('value').then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var courseID = childSnapshot.key;

        firebase.database().ref(currentUser.university+'/courses/'+courseID).once('value').then(function(grandChildSnapshot) {
            var course = grandChildSnapshot.val();
            course.ID = courseID;
            $scope.courses.push(course);
        });
      });
    });

    $scope.remove = function(course) {
      firebase.database().ref(currentUser.university+'/mycourses/'+currentUser.uid+'/'+course.ID).set(null);
      var index = $scope.courses.indexOf(course);
      if (index > -1) {
        $scope.courses.splice(index, 1);
      }
      window.alert("Removed!");
    }
  });
