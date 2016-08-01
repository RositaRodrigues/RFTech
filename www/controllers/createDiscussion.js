angular.module('starter')
  .controller('CreateDiscussionCtrl', function($scope, $rootScope, $stateParams, $state) {
    $scope.courseCode = $stateParams.coursecode;
    $scope.courseTitle = $stateParams.coursetitle;
    $scope.academicYear = $stateParams.academicyear;

    $scope.input = {}
    $scope.userName = $rootScope.currentUser.name;

    $scope.postDiscussionAsAnonymous = function(postAsAnonymous) {
      var date = new Date();
      var min = date.getMinutes();
      var currentTime = date.getHours() + ':' + (min<10?'0'+min:min);
      var currentDate = date.getDate() +'/'+ (date.getMonth()+1) + '/' + date.getFullYear();
      var user = $rootScope.currentUser;
      var author = user.name;
      if (postAsAnonymous) {
        author = "Anonymous";
      }
      var newDiscussion = {
        author: author,
        dateCreated: currentDate,
        description: $scope.input.description,
        timeCreated: currentTime,
        title: $scope.input.title,
        posts: 0,
        uid: user.uid
      }

      firebase.database().ref(user.university+'/discussions/'+$scope.courseCode).push(newDiscussion);
      window.history.back();
    }
  });
