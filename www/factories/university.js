angular.module('starter')
.factory('universityLogin', ['$http', function($http) {

  var loginData = {
    univEmail: '',
    password: ''
  };


  var univDictionary = {
    'ucl.ac.uk': 'UCL',
    'imperial.ac.uk': 'Imperial',
    'warwick.ac.uk': 'Warwick',
    'cam.ac.uk': 'Cambridge',
    'ox.ac.uk': 'Oxford',
    'bristol.ac.uk': 'Bristol',
    'harvard.edu': 'Harvard',
    'jhu.edu': 'JohnsHopkins'
  };

  return {
    getLoginData: function() {
      return loginData;
    },
    // Finding university through email domain
    getUniversity: function(univEmail) {
      var emailStringArray = univEmail.split("@");
      var domainStringLocation = emailStringArray.length - 1;
      var univDomain = emailStringArray[domainStringLocation];
      if(univDictionary[univDomain]!==null) {
        var university = univDictionary[univDomain];
      } else {
        var university = "Your university is not currently supported by our app. We hope to add you guys soon!";
      }
      return university;

      // var emailStringArray = univEmail.split("@");
      // // var emailStringArray = univEmail.split(univEmail[univEmail.indexOf("@")-1]);
      // console.log(univEmail[univEmail.indexOf("@")-1]);
      // var univDomain = emailStringArray[emailStringArray.length - 1];
      // console.log('univDomain: ', univDomain);
      // // var universityIndex = univDictionary.map(function(e) { return e.hello; }).indexOf(univDomain);
      // console.log('univDictionary: ', univDictionary);
    }
  };

}])
