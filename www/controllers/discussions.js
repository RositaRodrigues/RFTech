angular.module('starter')
  .controller('DiscussionsCtrl', function($scope, $stateParams, Database) {
    $scope.courseCode = $stateParams.coursecode;
    $scope.courseTitle = $stateParams.coursetitle;
    $scope.academicYear = $stateParams.academicyear;

    $scope.discussions = Database.getDiscussions();
    // $scope.discussions = firebase.database().ref('discussions/');
  });
