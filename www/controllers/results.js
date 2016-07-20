angular.module('starter')
.controller('ResultsCtrl', function($scope, Database) {
    $scope.courses = Database.getCourses();

    $scope.add = function(course) {
        window.alert("Added!");
    }
});
