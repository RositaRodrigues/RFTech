angular.module('starter')
  .controller('ReviewsCtrl', function($scope, $stateParams, Database) {
    $scope.courseCode = $stateParams.coursecode;
    $scope.courseTitle = $stateParams.coursetitle;
    $scope.academicYear = $stateParams.academicyear;

    $scope.reviews = Database.getReviews();

    $scope.needsFullStar = function(number, rating) {
      return number <= rating;
    }

    $scope.needsHalfStar = function(number, rating) {
      return number - 0.5 <= rating && number > rating;
    }

    $scope.needsNoStar = function(number, rating) {
      return number > rating && number - 0.5 > rating;
    }
  });
