angular.module('starter')
.controller('MenuCtrl', function($scope, $rootScope, $ionicModal, $timeout, $ionicHistory, $state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  $scope.$on('$ionicView.enter', function(e) {
    $scope.name = $rootScope.currentUser.name;
    $scope.email = $rootScope.currentUser.email;
  });


  $scope.logout = function() {
    firebase.auth().signOut().then(function() {
      $ionicHistory.nextViewOptions({
         disableBack: true
      });
      $state.go('app.login');
    }, function(error) {
      alert(error);
    });
  }

});
