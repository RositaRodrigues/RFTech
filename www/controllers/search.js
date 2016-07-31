angular.module('starter')
  .controller('SearchCtrl', ['$scope', '$stateParams', 'universityLogin', 'Database', '$rootScope', function($scope, $stateParams, university, Database, $rootScope) {
    // Determine university from input email
    // loginData = university.getLoginData();
    university.getUniversity($rootScope.email).then(function(university) {
        $scope.university = university;
    });

    // Get courses for autocomplete
    $scope.courses = Database.getCourses();
  }]);
