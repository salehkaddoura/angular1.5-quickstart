angular.module('core', [
  'ui.router',
  'home'
])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('core', {
    url: '',
    controller: 'CoreCtrl',
    templateUrl: '/app/core.tpl.html'
  });
}])

.run(function() {
  console.log('Welcome to core.js');
})

.controller('CoreCtrl', ['$scope', '$state', function($scope, $state) {
  $state.go('home');
}])
;





