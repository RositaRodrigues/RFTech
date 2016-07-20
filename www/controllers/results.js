angular.module('starter')
.controller('ResultsCtrl', function($scope, Database) {
    $scope.courses = Database.getCourses();

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
