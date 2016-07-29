angular.module('starter')
  .controller('DiscussionCtrl', function($scope, $stateParams, Database) {
    $scope.courseCode = $stateParams.coursecode;
    $scope.courseTitle = $stateParams.coursetitle;
    $scope.academicYear = $stateParams.academicyear;

    $scope.followUps = [];
    firebase.database().ref('followUps/'+$scope.courseCode+'/'+$stateParams.ID).once('value').then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        console.log(childSnapshot.val());
        $scope.followUps.push(childSnapshot.val());
      });
    });

  });
