angular.module('starter')
.controller('InformationCtrl', function($scope, $stateParams, Database) {

   $scope.about = Database.getCourse($stateParams.coursecode).about;
   $scope.link = Database.getCourse($stateParams.coursecode).link;
  $scope.courseCode = $stateParams.coursecode;
  $scope.courseTitle = $stateParams.coursetitle;
  $scope.academicYear = $stateParams.academicyear;

  //$scope.discussions = Database.getDiscussions();
});
