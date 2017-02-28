angular.module('home', [
  'ui.router'
])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('home', {
    url: '/home',
    views: {
      '': {
        controller: 'HomeCtrl',
        templateUrl: '/app/home/home.tpl.html'
      }  
    }
  });
}])

.controller('HomeCtrl', ['$scope', function($scope) {
  console.log('Home Controller');
}])
;