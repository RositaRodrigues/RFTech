angular.module('starter')
  .controller('WriteReviewCtrl', function($scope, $rootScope, $stateParams) {
    $scope.courseCode = $stateParams.coursecode;
    $scope.courseTitle = $stateParams.coursetitle;
    $scope.academicYear = $stateParams.academicyear;

    $scope.input = {}
    $scope.userName = $rootScope.currentUser.name;

    $scope.postReviewAsAnonymous = function(postAsAnonymous) {
      var date = new Date();
      var min = date.getMinutes();
      var currentTime = date.getHours() + ':' + (min<10?'0'+min:min);
      var currentDate = date.getDate() +'/'+ (date.getMonth()+1) + '/' + date.getFullYear();
      var user = $rootScope.currentUser;
      var author = user.name;
      if (postAsAnonymous) {
        author = "Anonymous";
      }
      var newReview = {
        author: author,
        dateCreated: currentDate,
        comment: $scope.input.comment,
        timeCreated: currentTime,
        title: $scope.input.title,
        rating: $scope.input.rating,
        uid: user.uid
      }

      firebase.database().ref(user.university+'/reviews/'+$scope.courseCode).push(newReview);
      window.history.back();
    }
  })
