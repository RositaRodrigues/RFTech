angular.module('starter')
  .controller('ForumReplyCtrl', function($scope, $rootScope, $stateParams) {
    var forumID = $stateParams.forumID;

    // Retrieve discussion and follow ups
    firebase.database().ref($rootScope.currentUser.university+'/forums/'+forumID).once('value').then(function(snapshot) {
      $scope.forum = snapshot.val();
    });

    $scope.replies = [];
    firebase.database().ref($rootScope.currentUser.university+'/forumReplies/'+forumID).once('value').then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var reply = childSnapshot.val();
        reply.ID = childSnapshot.key;
        $scope.replies.push(reply);
      });
    });

    // Post follow up
    $scope.input = {}
    $scope.userName = $rootScope.currentUser.name;

    $scope.postReplyAsAnonymous = function(postAsAnonymous) {
      var date = new Date();
      var min = date.getMinutes();
      var currentTime = date.getHours() + ':' + (min<10?'0'+min:min);
      var currentDate = date.getDate() +'/'+ (date.getMonth()+1) + '/' + date.getFullYear();
      var user = $rootScope.currentUser;
      var author = user.name;
      if (postAsAnonymous) {
        author = "Anonymous";
      }
      var newReply = {
        author: author,
        comment: $scope.input.comment,
        dateCreated: currentDate,
        downVotes: 0,
        timeCreated: currentTime,
        uid: user.uid,
        upVotes: 0
      }

      firebase.database().ref(user.university+'/forumReplies/'+forumID).push(newReply);
      $scope.replies.push(newReply);

      $scope.forum.posts++;
      var newPosts = $scope.forum.posts;
      firebase.database().ref($rootScope.currentUser.university+'/forums/'+forumID+'/').update({posts: newPosts});
    }

    $scope.thumbsUp = function(reply) {
      firebase.database().ref($rootScope.currentUser.university+'/forumReplies/'+forumID+'/'+reply.ID).once('value').then(function(snapshot) {
        var newVote = snapshot.val().upVotes + 1;
        firebase.database().ref($rootScope.currentUser.university+'/forumReplies/'+forumID+'/'+reply.ID+'/').update({upVotes: newVote});
        followUp.upVotes++;
      });

      window.alert("Like!");
    };

    $scope.thumbsDown = function(reply) {

      firebase.database().ref($rootScope.currentUser.university+'/forumReplies/'+forumID+'/'+reply.ID).once('value').then(function(snapshot) {
        var newVote = snapshot.val().downVotes + 1;
        firebase.database().ref($rootScope.currentUser.university+'/forumReplies/'+forumID+'/'+reply.ID+'/').update({upVotes: newVote});
        followUp.downVotes++;
      });

      window.alert("Dislike!");
    };
  });
