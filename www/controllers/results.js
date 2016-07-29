angular.module('starter')
.controller('ResultsCtrl', function($scope, $firebase, Database) {
    $scope.courses = Database.getCourses();
    $scope.course = $scope.courses[0];
    $scope.add = function(course) {
      // firebase.database().ref('users').push({
      //   username: 'tester1',
      //   email: 'tester1@email.com'
      // });
      // var coursesKey = firebase.database().ref().child('courses').push().key;
      var updateData = {};
      // var postData = {
      //   name: "mult calc",
      //   academicyear: "2015-16",
      //   code: "m2aa2"
      // };
      //
        var course = $scope.course;
        var postData = {
          name: "intro to numerical analysis",
          academicyear: "2015-14",
          code: "m2aa3"
        };
        // use angular.copy() for referenced arrays eg Database.getCourses()[0] to remove $$hashKey.
        // updateData['courses/' + postData.code] = angular.copy(postData);
        // updateData['discussions/' + postData.code] = angular.copy(Database.getDiscussions());
        // firebase.database().ref().update(updateData);

        firebase.database().ref('discussions/').push(angular.copy(Database.getDiscussion1()));
        firebase.database().ref('discussions/').push(angular.copy(Database.getDiscussion2()));
        console.log(course);
        console.log("blaaaah");
        window.alert("Added!");
    }

    $scope.remove = function(course) {
        window.alert("Removed!");
    }

    $scope.isUserCourse = function(course) {
        return false;
    }
});
