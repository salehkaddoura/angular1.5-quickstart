;(function(angular, undefined) {
  'use strict';

  angular.module('A.home', [])
    .config(HomeConfigFn)
    .controller('HomeController', HomeControllerFn);

  function HomeConfigFn($stateProvider) {
    $stateProvider.state('home', {
      url: '/home',
      views: {
        '': {
          controller: 'HomeController',
          templateUrl: '/app/home/home.tpl.html'
        }
      }
    });
  }

  function HomeControllerFn($scope) {
    console.log('Home Controller');
  }
})(angular);