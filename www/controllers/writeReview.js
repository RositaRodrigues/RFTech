angular.module('starter')
  .controller('WriteReviewCtrl', function($scope, $rootScope, $stateParams) {
    $scope.courseCode = $stateParams.coursecode;
    $scope.courseTitle = $stateParams.coursetitle;
    $scope.academicYear = $stateParams.academicyear;

    $scope.input = {}

    $scope.postReview = function() {
      var date = new Date();
      var min = date.getMinutes();
      var currentTime = date.getHours() + ':' + (min<10?'0'+min:min);
      var currentDate = date.getDate() +'/'+ (date.getMonth()+1) + '/' + date.getFullYear();
      var user = $rootScope.currentUser;

      var newReview = {
        author: user.name,
        dateCreated: currentDate,
        comment: $scope.input.comment,
        timeCreated: currentTime,
        title: $scope.input.title,
        rating: $scope.input.rating,
        uid: user.uid
      }
      console.log(newReview);

      firebase.database().ref(user.university+'/reviews/'+$scope.courseCode).push(newReview);


    }
  })
