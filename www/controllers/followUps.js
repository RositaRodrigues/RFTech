angular.module('starter')
  .controller('FollowUpsCtrl', function($scope, $rootScope, $stateParams) {
    $scope.courseCode = $stateParams.coursecode;
    $scope.courseTitle = $stateParams.coursetitle;
    $scope.academicYear = $stateParams.academicyear;
    var discussionID = $stateParams.ID;

    // Retrieve discussion and follow ups
    firebase.database().ref($rootScope.currentUser.university+'/discussions/'+$scope.courseCode+'/'+discussionID).once('value').then(function(snapshot) {
      $scope.discussion = snapshot.val();
    });

    $scope.followUps = [];
    firebase.database().ref($rootScope.currentUser.university+'/followUps/'+$scope.courseCode+'/'+discussionID).once('value').then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var followUp = childSnapshot.val();
        followUp.ID = childSnapshot.key;
        $scope.followUps.push(followUp);
      });
    });

    // Post follow up
    $scope.input = {}
    $scope.userName = $rootScope.currentUser.name;

    $scope.postFollowUpAsAnonymous = function(postAsAnonymous) {
      var date = new Date();
      var min = date.getMinutes();
      var currentTime = date.getHours() + ':' + (min<10?'0'+min:min);
      var currentDate = date.getDate() +'/'+ (date.getMonth()+1) + '/' + date.getFullYear();
      var user = $rootScope.currentUser;
      var author = user.name;
      if (postAsAnonymous) {
        author = "Anonymous";
      }
      var newFollowUp = {
        author: author,
        comment: $scope.input.comment,
        dateCreated: currentDate,
        downVotes: 0,
        timeCreated: currentTime,
        uid: user.uid,
        upVotes: 0
      }

      firebase.database().ref(user.university+'/followUps/'+$scope.courseCode+'/'+discussionID).push(newFollowUp);
      $scope.followUps.push(newFollowUp);

      $scope.discussion.posts++;
      var newPosts = $scope.discussion.posts;
      firebase.database().ref($rootScope.currentUser.university+'/discussions/'+$scope.courseCode+'/'+discussionID+'/').update({posts: newPosts});
    }

    $scope.thumbsUp = function(followUp) {
      firebase.database().ref($rootScope.currentUser.university+'/followUps/'+$scope.courseCode+'/'+discussionID+'/'+followUp.ID).once('value').then(function(snapshot) {
        var newVote = snapshot.val().upVotes + 1;
        firebase.database().ref($rootScope.currentUser.university+'/followUps/'+$scope.courseCode+'/'+discussionID+'/'+followUp.ID+'/').update({upVotes: newVote});
        followUp.upVotes++;
      });

      window.alert("Like!");
    };

    $scope.thumbsDown = function(followUp) {
      firebase.database().ref($rootScope.currentUser.university+'/followUps/'+$scope.courseCode+'/'+discussionID+'/'+followUp.ID).once('value').then(function(snapshot) {
      var newVote = snapshot.val().downVotes + 1;
      firebase.database().ref($rootScope.currentUser.university+'/followUps/'+$scope.courseCode+'/'+discussionID+'/'+followUp.ID+'/').update({downVotes: newVote});
      followUp.downVotes++;
    });

      window.alert("Dislike!");
    };
  });
