angular.module('starter')
.controller('LoginCtrl', function($scope, $state) {

  var univDictionary = {
    'ucl.ac.uk': 'UCL',
    'imperial.ac.uk': 'Imperial',
    'warwick.ac.uk': 'Warwick',
    'cam.ac.uk': 'Cambridge',
    'ox.ac.uk': 'Oxford',
    'bristol.ac.uk': 'Bristol'
  };

  // Form data for the login page
  $scope.loginData = {
    univEmail: '',
    password: ''
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function(emailStringArray) {

    // TODO - check with firebase database whether user exists
    var userExists = false; // DEFAULT will be false initially, true for testing purposes

    // Finding domain
    emailStringArray = $scope.loginData.univEmail.split("@");
    var domainStringLocation = emailStringArray.length - 1;
    var univDomain = emailStringArray[domainStringLocation];
    if(univDictionary[univDomain]!==null) {
      $scope.university = univDictionary[univDomain];
    } else {
      $scope.university = "Your university is not currently supported by our app. We hope to add you guys soon!";
    }

    // Routing to Search page
    if(userExists) {
      $state.go('app.search');
    } else {
      $scope.loginError = "Login error bitch, try again."
    }

    // Test console.log(s)
    console.log('Doing login', $scope.loginData);
    console.log('univEmail: ', $scope.loginData.univEmail);
    console.log('univEmail split at @: ', emailStringArray);
    console.log('University domain: ', univDomain);
    console.log('University: ', $scope.university);
  };

});
