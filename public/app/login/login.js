;(function(angular, undefined) {
  'use strict';

  angular
    .module('A.login', [])
    .config(LoginConfigFn)
    .controller('LoginController', LoginControllerFn);

  function LoginConfigFn($stateProvider) {
    $stateProvider.state('login', {
      url: '/login',
      title: 'Login',
      views: {
        '': {
          controller: 'LoginController',
          templateUrl: '/app/login/login.tpl.html'
        }
      }
    });
  }

  function LoginControllerFn($scope) {
    console.log('Login Controller');
  }
})(angular);