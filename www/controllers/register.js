angular.module('starter')
.controller('RegisterCtrl', ['$scope', '$state', '$ionicSlideBoxDelegate', function($scope, $state, $ionicSlideBoxDelegate) {

  $scope.slideHasChanged = function($index){
    alert('slideHasChanged $index=' + $index);
    if($index === 0){
      // firs1t box
    }
  };

}])
