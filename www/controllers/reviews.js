angular.module('starter')
  .controller('ReviewsCtrl', function($scope, $rootScope, $stateParams) {
    $scope.courseCode = $stateParams.coursecode;
    $scope.courseTitle = $stateParams.coursetitle;
    $scope.academicYear = $stateParams.academicyear;

    $scope.reviews = [];
    firebase.database().ref($rootScope.currentUser.university+'/reviews/'+$scope.courseCode).once('value').then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        $scope.reviews.push(childSnapshot.val());
      });
    });

    $scope.refresh = function() {
      $scope.reviews = [];
      firebase.database().ref($rootScope.currentUser.university+'/reviews/'+$scope.courseCode).once('value').then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          $scope.reviews.push(childSnapshot.val());
        });
      });
    }

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
