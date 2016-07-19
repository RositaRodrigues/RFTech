angular.module('starter')
  .controller('MyCoursesCtrl', function($scope, $stateParams, Database) {
    $scope.remove = remove;
    $scope.courses = Database.getCourses();

    ////////
    function remove(course) {
        window.alert("Removed!");
    }
  });
