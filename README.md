# Angular injectOn

Assigns DI parameters as class fields automatically. For Angular 1.x + ES6 classes.

### Installation

````
npm install angular-inject-on
````

### Using in a project

First, include the file:
````
ES5 (Browserify)
require('angular-inject-on');

ES6 (Module imports)
import 'angular-inject-on';

````

Next, add as your application's dependency:
````
module.angular('yourApp', [
  ...
  'ngInjectOn'
]);
````

Lastly, the actual usage:
````
class MyService {
  constructor($state, injectOn) {
    injectOn(this);
    console.log(this.$state); // $state is now available as class property
  }
}
