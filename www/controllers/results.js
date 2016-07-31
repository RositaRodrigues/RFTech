angular.module('starter')
.controller('ResultsCtrl', function($scope, $firebase, Database) {
    $scope.courses = Database.getCourses();
    $scope.course = $scope.courses[0]; // needed?
    $scope.add = function(course) {
        window.alert("Added!");
    }

    $scope.remove = function(course) {
        window.alert("Removed!");
    }

    $scope.isUserCourse = function(course) {
        return false;
    }
});
