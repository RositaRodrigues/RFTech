angular.module('starter')
  .controller('CreateDiscussionCtrl', function($scope, $stateParams) {
    $scope.courseCode = $stateParams.coursecode;
    $scope.courseTitle = $stateParams.coursetitle;
    $scope.academicYear = $stateParams.academicyear;
  });
