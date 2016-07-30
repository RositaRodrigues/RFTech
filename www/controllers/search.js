angular.module('starter')
  .controller('SearchCtrl', ['$scope', '$stateParams', 'universityLogin', 'Database', function($scope, $stateParams, university, Database) {
    // Determine university from input email
    loginData = university.getLoginData();
    university.getUniversity(loginData.univEmail).then(function(university) {
        $scope.university = university;
        $scope.$apply();
    });
    console.log($scope.university);
    // university = university.getUniversity(loginData.univEmail);
    // // Display university image depending on email from login page
    // $scope.src = "/img/" + university + ".jpg";

    $scope.courses = Database.getCourses();
  }]);
