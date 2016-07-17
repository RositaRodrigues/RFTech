angular.module('starter')
.controller('ResultsCtrl', function($scope, Database) {
    $scope.add = add;
    $scope.courses = Database.getCourses();

    ////////
    function add() {
        window.alert("Added!");
    }
});
