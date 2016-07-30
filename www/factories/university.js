angular.module('starter')
.factory('universityLogin', ['$http', '$q', function($http, $q) {

  var loginData = {
    univEmail: '',
    password: ''
  };

  var deferred = $q.defer();
  $http.get('/json/universities.json').then(function(data) {
    deferred.resolve(data);
  });

  return {
    getLoginData: function() {
      return loginData;
    },
    getUniversity: function(univEmail) {
      var emailStringArray = univEmail.split("@");
      console.log("emailStringArray: ", emailStringArray);
      var domainStringLocation = emailStringArray.length - 1;
      console.log("domainStringLocation: ", domainStringLocation);
      var univDomain = emailStringArray[domainStringLocation];
      console.log("univDomain: ", univDomain);

      var promise = deferred.promise;
      var univDictionary = {};
      return promise.then(function(data) {
        universitiesObject = data.data;
        var rObj = {};
        var univDictionary = universitiesObject.forEach(function(obj) {
          rObj[obj["domain"]] = obj["name"];
        });
        return rObj;
        // console.log(univDictionary);
      }).then(function(univDictionary) {
        return univDictionary[univDomain];
      });
    }
  };

}])
