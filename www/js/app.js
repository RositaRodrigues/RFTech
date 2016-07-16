// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic']) // remove starter.controllers?

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'views/menu.html',
    controller: 'MenuCtrl'
  })
  .state('app.mycourses', {
    url: '/mycourses',
    views: {
      'menuContent': {
        templateUrl: 'views/mycourses.html',
        controller: 'MyCoursesCtrl'
      }
    }
  })
  .state('app.myfavourites', {
    url: '/myfavourites',
    views: {
      'menuContent': {
        templateUrl: 'views/myfavourites.html',
        controller: 'MyFavouritesCtrl'
      }
    }
  })
  .state('app.myprofile', {
    url: '/myprofile',
    views: {
      'menuContent': {
        templateUrl: 'views/myprofile.html',
        controller: 'MyProfileCtrl'
      }
    }
  })
  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'views/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
  .state('app.playlists', {
    url: '/playlists',
    views: {
      'menuContent': {
        templateUrl: 'views/playlists.html',
        controller: 'PlaylistsCtrl'
      }
    }
  })
  .state('app.results', {
    url: '/results',
    views: {
      'menuContent': {
        templateUrl: 'views/results.html',
        controller: 'ResultsCtrl'
      }
    }
  })
  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      }
    }
  })
  .state('app.settings', {
    url: '/settings',
    views: {
      'menuContent': {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/results');
});
