angular.module('starter')
.controller('SearchCtrl', ['$scope', '$stateParams', 'universityLogin', '$rootScope', function($scope, $stateParams, university, $rootScope) {

  var currentUser = $rootScope.currentUser;
  $scope.university = currentUser.university;


  $scope.$on('$ionicView.enter', function(e) {
    $scope.courses = [];
    firebase.database().ref(currentUser.university+'/courses').once('value').then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var course = childSnapshot.val();
        course.ID = childSnapshot.key;
        firebase.database().ref(currentUser.university+'/mycourses/'+currentUser.uid+'/'+course.ID).once('value').then(function(snapshot) {
          course.isMyCourse = snapshot.val();
          console.log(course.ID);
          console.log(course.isMyCourse);
        });
        $scope.courses.push(course);
      });
    });
  });


  $scope.add = function(course) {
    firebase.database().ref(currentUser.university+'/mycourses/'+currentUser.uid+'/'+course.ID).set(true);
    course.isMyCourse = true;
    window.alert("Added!");
  }

  $scope.remove = function(course) {
    firebase.database().ref(currentUser.university+'/mycourses/'+currentUser.uid+'/'+course.ID).set(null);
    course.isMyCourse = false;
    window.alert("Removed!");
  }

  function isMyCourse(courseID) {
    firebase.database().ref(currentUser.university+'/mycourses/'+currentUser.uid+'/'+courseID).once('value').then(function(snapshot) {
      console.log(snapshot.val())
      return snapshot.val();
    });
  }

}]);
