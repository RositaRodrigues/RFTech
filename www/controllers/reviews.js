angular.module('starter')
  .controller('ReviewsCtrl', function($scope, $stateParams, Database) {
    $scope.courseCode = $stateParams.coursecode;
    $scope.courseTitle = $stateParams.coursetitle;
    $scope.academicYear = $stateParams.academicyear;

    var reviews = [];
    // $scope.reviews = Database.getReviews();
    firebase.database().ref('reviews/'+$scope.courseCode).push(angular.copy(Database.getReview1()));
    firebase.database().ref('reviews/'+$scope.courseCode).push(angular.copy(Database.getReview2()));

    firebase.database().ref('reviews/'+$scope.courseCode).once('value').then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        console.log(childSnapshot.val());
        reviews.push(childSnapshot.val());
      });
    });
    $scope.reviews = reviews;
    console.log(reviews);
    // firebase.database().ref('reviews/'+$scope.courseCode).on('child_added', function(data) {
    //   console.log(data.val());
    // });
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
