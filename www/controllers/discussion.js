angular.module('starter')
  .controller('DiscussionCtrl', function($scope, $stateParams, Database) {
    $scope.courseCode = $stateParams.coursecode;
    $scope.courseTitle = $stateParams.coursetitle;
    $scope.academicYear = $stateParams.academicyear;
    var index = $stateParams.index;

    $scope.discussion = Database.getDiscussions()[index];
    $scope.followUps = $scope.discussion.followUps;

  });
