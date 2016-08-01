angular.module('starter')
  .controller('FollowUpsCtrl', function($scope, $rootScope, $stateParams) {
    $scope.courseCode = $stateParams.coursecode;
    $scope.courseTitle = $stateParams.coursetitle;
    $scope.academicYear = $stateParams.academicyear;
    var discussionID = $stateParams.ID;

    // Retrieve discussion and follow ups
    firebase.database().ref($rootScope.currentUser.university+'/discussions/'+$scope.courseCode+'/'+discussionID).once('value').then(function(snapshot) {
      $scope.discussion = snapshot.val();
      console.log($scope.discussion);
    });

    $scope.followUps = [];
    firebase.database().ref($rootScope.currentUser.university+'/followUps/'+$scope.courseCode+'/'+discussionID).once('value').then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        $scope.followUps.push(childSnapshot.val());
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

    $scope.thumbsUp = function() {
      window.alert("Like!");
    };

    $scope.thumbsDown = function() {
      window.alert("Dislike!");
    };
  });
