;(function(angular, undefined) {
  'use strict';

  angular.module('A', ['ui.router', 'A.login', 'A.home'])
    .config(ConfigFn)
    .controller('CoreController', CoreControllerFn);

    function ConfigFn($stateProvider, $locationProvider) {
      $stateProvider.state('core', {
        url: '/',
        controller: 'CoreController',
        templateUrl: '/app/core.tpl.html',
      });

      $locationProvider.html5Mode(true);
    }

    function CoreControllerFn($scope, $state) {
      console.log('CoreController Loaded');
      // $state.go('home');
    }
})(angular);