angular.module('starter')
  .controller('DiscussionsCtrl', function($scope, $rootScope, $stateParams) {
    $scope.courseCode = $stateParams.coursecode;
    $scope.courseTitle = $stateParams.coursetitle;
    $scope.academicYear = $stateParams.academicyear;

    $scope.discussions = [];
    firebase.database().ref($rootScope.currentUser.university+'/discussions/'+$scope.courseCode).once('value').then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var discussion = childSnapshot.val();
        discussion.ID = childSnapshot.key;
        $scope.discussions.push(discussion);
      });
    });
  });
