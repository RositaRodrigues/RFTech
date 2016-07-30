angular.module('starter')
  .controller('SearchCtrl', ['$scope', '$stateParams', 'universityLogin', 'Database', function($scope, $stateParams, university, Database) {
    // Determine university from input email
    loginData = university.getLoginData();
    university.getUniversity(loginData.univEmail).then(function(university) {
        $scope.university = university;
        $scope.$apply();
    });

    // Get courses for autocomplete
    $scope.courses = Database.getCourses();
  }]);
