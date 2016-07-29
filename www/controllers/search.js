angular.module('starter')
  .controller('SearchCtrl', ['$scope', '$stateParams', 'universityLogin', function($scope, $stateParams, university) {
    // Determine university from input email
    loginData = university.getLoginData();
    university = university.getUniversity(loginData.univEmail);

    $scope.src = "/img/" + university + ".jpg";
    console.log('Search university: ', university);
    console.log('Image src: ', $scope.src);
  }]);
