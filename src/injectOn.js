(function (angular) {
  if(!angular) {
    throw new Error('Angular not found.');
  }

  var injectOn = ['$injector', function($injector) {
    return function(thisArg) {
      if(!thisArg.constructor) {
        throw new Error('Constructor method not found.');
      }
      return $injector.annotate(thisArg.constructor).map(function(name) {
        if(name !== 'injectOn' && name !== '$scope') {
          thisArg[name] = $injector.get(name);
        }
      });
    }
  }];

  angular.module('ngInjectOn', []).service('injectOn', injectOn);
})(angular);
