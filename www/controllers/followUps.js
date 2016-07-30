angular.module('starter')
  .controller('FollowUpsCtrl', function($scope, $stateParams, Database) {
    $scope.courseCode = $stateParams.coursecode;
    $scope.courseTitle = $stateParams.coursetitle;
    $scope.academicYear = $stateParams.academicyear;
    var discussionID = $stateParams.ID;

    firebase.database().ref('discussions/'+$scope.courseCode+'/'+discussionID).once('value').then(function(snapshot) {
      $scope.discussion = snapshot.val();
    });

    $scope.followUps = [];
    firebase.database().ref('followUps/'+$scope.courseCode+'/'+discussionID).once('value').then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        $scope.followUps.push(childSnapshot.val());
      });
    });

    $scope.thumbsUp = function() {
      window.alert("Like!");
    };

    $scope.thumbsDown = function() {
      window.alert("Dislike!");
    };
  });
