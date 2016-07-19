angular.module('starter')
  .controller('DiscussionsCtrl', function($scope, $stateParams, Database) {
    $scope.courseCode = $stateParams.coursecode;
    $scope.courseTitle = $stateParams.coursetitle;
    $scope.academicYear = $stateParams.academicyear;

    $scope.discussions = Database.getDiscussions();
    console.log($scope.discussions[0].followUps.length);
    console.log($stateParams);
  });
