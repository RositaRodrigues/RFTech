angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('SearchCtrl', function($scope) {
    $scope.add = add;
    $scope.courses = [
        {
            title: "Multivariable Calculus",
            code: "M2AA2",
            year: "2015-16"
        },
        {
          title: "Compilers",
          code: "CO221",
          year: "2014-15"
        },
        {
          title: "Software Engineering Design",
          code: "CO220",
          year: "2015-16"
        },
        {
          title: "Introduction to Artificial Intelligence",
          code: "CO231",
          year: "2014-15"
        },
        {
          title: "Statistics",
          code: "MJS2",
          year: "2014-15"
        },
        {
          title: "Operating Systems",
          code: "CO211",
          year: "2014-15"
        }
    ];

    ////////
    function add() {
        window.alert("Added");
    }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
