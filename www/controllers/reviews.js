angular.module('starter')
  .controller('ReviewsCtrl', function($scope, $rootScope, $stateParams, Database) {
    $scope.courseCode = $stateParams.coursecode;
    $scope.courseTitle = $stateParams.coursetitle;
    $scope.academicYear = $stateParams.academicyear;

    // CODE TO FILL FIREBASE WITH DUMMY DATA
    // firebase.database().ref('reviews/'+$scope.courseCode).push(angular.copy(Database.getReview1()));
    // firebase.database().ref('reviews/'+$scope.courseCode).push(angular.copy(Database.getReview2()));

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
