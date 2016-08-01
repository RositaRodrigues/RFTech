angular.module('starter')
  .controller('ForumCtrl', function($scope, $rootScope, $stateParams) {

    $scope.forums = [];
    firebase.database().ref($rootScope.currentUser.university+'/forums').once('value').then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var forum = childSnapshot.val();
        forum.ID = childSnapshot.key;
        $scope.forums.push(forum);
      });
    });

    $scope.refresh = function() {
      $scope.forums = [];
      firebase.database().ref($rootScope.currentUser.university+'/forums').once('value').then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var forum = childSnapshot.val();
          forum.ID = childSnapshot.key;
          $scope.forums.push(forum);
        });
      });
    }

});
