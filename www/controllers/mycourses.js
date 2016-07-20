angular.module('starter')
  .controller('MyCoursesCtrl', function($scope, $stateParams, Database) {
    $scope.remove = remove;
    $scope.courses = Database.getCourses(); // in future, will be user's courses

    ////////
    function remove(course) {
        window.alert("Removed!");
    }
  });
