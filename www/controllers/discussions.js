angular.module('starter')
  .controller('DiscussionsCtrl', function($scope, $stateParams, Database) {
    $scope.courseCode = $stateParams.coursecode;
    $scope.courseTitle = $stateParams.coursetitle;
    $scope.academicYear = $stateParams.academicyear;

    // $scope.discussions = Database.getDiscussions();
    // CODE TO FILL FIREBASE WITH DUMMY DATA
    // var updates = {}
    // var discussion1ID = firebase.database().ref('discussions/'+$scope.courseCode).push().key;
    // updates['discussions/'+$scope.courseCode+'/'+discussion1ID] = angular.copy(Database.getDiscussion1());
    // var followUpID1 = firebase.database().ref('discussions/'+$scope.courseCode+'/'+discussion1ID).push().key;
    // updates['followUps/'+$scope.courseCode+'/'+discussion1ID+'/'+followUpID1] = angular.copy(Database.getDummyFollowUp1Post1());
    //
    // var discussion2ID = firebase.database().ref('discussions/'+$scope.courseCode).push().key;
    // updates['discussions/'+$scope.courseCode+'/'+discussion2ID] = angular.copy(Database.getDiscussion2());
    // var followUpID2 = firebase.database().ref('discussions/'+$scope.courseCode+'/'+discussion2ID).push().key;
    // var followUpID3 = firebase.database().ref('discussions/'+$scope.courseCode+'/'+discussion2ID).push().key;
    // updates['followUps/'+$scope.courseCode+'/'+discussion2ID+'/'+followUpID2] = angular.copy(Database.getDummyFollowUp2Post1());
    // updates['followUps/'+$scope.courseCode+'/'+discussion2ID+'/'+followUpID3] = angular.copy(Database.getDummyFollowUp2Post2());
    //
    // firebase.database().ref().update(updates);

    $scope.discussions = [];
    firebase.database().ref('discussions/'+$scope.courseCode).once('value').then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var discussion = childSnapshot.val();
        discussion.ID = childSnapshot.key;

        $scope.discussions.push(discussion);
      });
    });


  });
