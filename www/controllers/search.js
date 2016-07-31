angular.module('starter')
  .controller('SearchCtrl', ['$scope', '$stateParams', 'universityLogin', 'Database', '$rootScope', function($scope, $stateParams, university, Database, $rootScope) {

    var currentUser = $rootScope.currentUser; // needed?

    $scope.university = currentUser.university;
    // Get courses for autocomplete
    $scope.courses = Database.getCourses();
  }]);
