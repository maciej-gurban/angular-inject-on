// Implementation
class Ctrl {
  constructor($scope, injectOn) {
    injectOn(this);
  }
};
class Foo {
  constructor(injectOn, Bar) {
    injectOn(this);
  }
};
class Bar {};

angular.module('ngInjectTest', [
    'ngInjectOn'
  ])
  .controller('Ctrl', Ctrl)
  .service('Foo', Foo)
  .service('Bar', Bar);

// Unit tests
describe('ngInject test', function () {
  beforeEach(angular.mock.module('ngInjectTest'));

  let Foo, Bar, Ctrl;
  beforeEach(inject(function(_Foo_, _Bar_, $controller, $rootScope) {
    Foo = _Foo_;
    Bar = _Bar_;
    Ctrl = $controller('Ctrl', {
      $scope: $rootScope.$new()
    });
  }));
  describe('Service', function () {
    it('should assign dependencies as class properties', function () {
      expect(Foo.Bar).toBeDefined();
      expect(Foo.Bar).toBe(Bar);
    });
  });
  describe('Controller', function () {
    it('should not attempt to assign $scope as a class property', function () {
      expect(Ctrl).toBeDefined();
      expect(Ctrl.$scope).not.toBeDefined();
    });
  });
  describe('injectOn', function () {
    it('should not assign itself as a class property', function () {
      expect(Foo).toBeDefined();
      expect(Foo.injectOn).not.toBeDefined();
    });
  });
});
