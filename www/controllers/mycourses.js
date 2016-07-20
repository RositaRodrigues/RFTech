angular.module('starter')
  .controller('MyCoursesCtrl', function($scope, $stateParams, Database) {
    $scope.courses = Database.getCourses(); // in future, will be user's courses

    $scope.remove = function(course) {
        window.alert("Removed!");
    }
  });
