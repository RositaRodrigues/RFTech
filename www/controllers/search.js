angular.module('starter')
  .controller('SearchCtrl', ['$scope', '$stateParams', 'universityLogin', 'Database', '$rootScope', function($scope, $stateParams, university, Database, $rootScope) {
    // Determine university from input email
    // loginData = university.getLoginData();
    // university.getUniversity($rootScope.email).then(function(university) {
    //     $scope.university = university;
    //
    // });
    var currentUser = $rootScope.currentUser;
    console.log("currentUser.name is: " + $rootScope.currentUser.name);
    console.log("currentUser.email is: " + $rootScope.currentUser.email);
    console.log("currentUser.uni is: " + $rootScope.currentUser.university);
    console.log("currentUser.uid is: " + $rootScope.currentUser.uid);

    $scope.university = currentUser.university;
    // Get courses for autocomplete
    $scope.courses = Database.getCourses();
  }]);
