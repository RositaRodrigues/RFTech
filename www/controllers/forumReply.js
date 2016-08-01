angular.module('starter')
  .controller('ForumReplyCtrl', function($scope, $stateParams, Database) {

    var threadID = $stateParams.ID;
/*
    firebase.database().ref('forumReply/'+threadID).once('value').then(function(snapshot) {
      $scope.thread = snapshot.val();
    });

    $scope.forumReply = [];
    firebase.database().ref('forumReply/'+threadID).once('value').then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        $scope.forumReply.push(childSnapshot.val());
      });
    });
  */  
    $scope.thumbsUp = function() {
      window.alert("Like!");
    };

    $scope.thumbsDown = function() {
      window.alert("Dislike!");
    };
  });
