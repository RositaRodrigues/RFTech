angular.module('starter')

  .controller('SearchCtrl', ['$scope', '$stateParams', 'universityLogin', 'Database', '$rootScope', function($scope, $stateParams, university, Database, $rootScope) {
    // Determine university from input email
    loginData = university.getLoginData();
    university.getUniversity(loginData.univEmail).then(function(university) {
        $scope.university = university;
    });
// =======
//   .controller('SearchCtrl', ['$scope', '$stateParams', 'universityLogin', 'Database', '$rootScope', function($scope, $stateParams, university, Database, $rootScope) {
// >>>>>>> master

    var currentUser = $rootScope.currentUser; // needed?

    $scope.university = currentUser.university;
    // Get courses for autocomplete
    $scope.courses = Database.getCourses();
  }]);
