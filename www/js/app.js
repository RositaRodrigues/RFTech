// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'firebase'])

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
  .state('app.register', {
    url: '/register',
    views: {
      'menuContent': {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      }
    }
  })
  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      }
    }
  })
  .state('app.coursemenu', {
    url: '/course=:coursecode&title=:coursetitle&year=:academicyear/coursemenu',
    views: {
      'menuContent': {
        templateUrl: 'views/coursemenu.html',
        controller: 'CourseMenuCtrl'
      }
    }
  })
  .state('app.createDiscussion', {
    url: '/course=:coursecode&title=:coursetitle&year=:academicyear/createDiscussion',
    views: {
      'menuContent': {
        templateUrl: 'views/createDiscussion.html',
        controller: 'CreateDiscussionCtrl'
      }
    }
  })
  .state('app.followUps', {
    url: '/course=:coursecode&title=:coursetitle&year=:academicyear/discussion=:ID',
    views: {
      'menuContent': {
        templateUrl: 'views/followUps.html',
        controller: 'FollowUpsCtrl'
      }
    }
  })
  .state('app.discussions', {
    url: '/course=:coursecode&title=:coursetitle&year=:academicyear/discussions',
    views: {
      'menuContent': {
        templateUrl: 'views/discussions.html',
        controller: 'DiscussionsCtrl'
      }
    }
  })
  .state('app.forum', {
    url: '/forum',
    views: {
      'menuContent': {
        templateUrl: 'views/forum.html',
        controller: 'ForumCtrl'
      }
    }
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

  .state('app.newThread', {
    url: '/newThread',
    views: {
      'menuContent': {
        templateUrl: 'views/newThread.html',
        controller: 'NewThreadCtrl'
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
  .state('app.reviews', {
    url: '/course=:coursecode&title=:coursetitle&year=:academicyear/reviews',
    views: {
      'menuContent': {
        templateUrl: 'views/reviews.html',
        controller: 'ReviewsCtrl'
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
    .state('app.writeReview', {
    url: '/course=:coursecode&title=:coursetitle&year=:academicyear/writeReview',
    views: {
      'menuContent': {
        templateUrl: 'views/writeAReview.html',
        controller: 'WriteReviewCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
