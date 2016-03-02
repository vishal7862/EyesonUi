angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.eyesOn', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/eyesOn.html',
        controller: 'eyesOnCtrl'
      }
    }
  })

  .state('menu.invited', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/invited.html',
        controller: 'invitedCtrl'
      }
    }
  })

  .state('menu.watchedBy', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/watchedBy.html',
        controller: 'watchedByCtrl'
      }
    }
  })

  .state('menu.notifications', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/notifications.html',
        controller: 'notificationsCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('signUp', {
    url: '/page4',
    templateUrl: 'templates/signUp.html',
    controller: 'signUpCtrl'
  })

  .state('verification', {
    url: '/page8',
    templateUrl: 'templates/verification.html',
    controller: 'verificationCtrl'
  })

  .state('username', {
    url: '/page12',
    templateUrl: 'templates/username.html',
    controller: 'usernameCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});