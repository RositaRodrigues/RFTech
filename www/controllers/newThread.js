angular.module('starter')
  .controller('NewThreadCtrl', function($scope, $rootScope, $stateParams) {

    $scope.input = {}
    $scope.userName = $rootScope.currentUser.name;

    $scope.postThreadAsAnonymous = function(postAsAnonymous) {
      var date = new Date();
      var min = date.getMinutes();
      var currentTime = date.getHours() + ':' + (min<10?'0'+min:min);
      var currentDate = date.getDate() +'/'+ (date.getMonth()+1) + '/' + date.getFullYear();
      var user = $rootScope.currentUser;
      var author = user.name;
      if (postAsAnonymous) {
        author = "Anonymous";
      }
      var newThread = {
        author: author,
        dateCreated: currentDate,
        description: $scope.input.description,
        timeCreated: currentTime,
        title: $scope.input.title,
        posts: 0,
        uid: user.uid
      }

      firebase.database().ref(user.university+'/forums').push(newThread);
    }
  });
