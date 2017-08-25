# Treeshaking demo
This repository contains an example of treeshaking in action using webpack 2 and babel configured to not transpile es6 modules.

I've noticed some projects exporting their named exports like so:
```javascript
const foo;
const bar;

export default {
  foo,
  bar
};
```
The export can then be imported in a clean looking way like so
```javascript
import foobar from './foobar';

console.log(foobar.foo);
```

I propose that this is not the correct way to export components, as doing so creates a dynamic object that cannot be statically analyzed by webpack. If you use the foobar module in multiple locations of your application, but only use the foo constant, webpack cannot infer that bar is unused code and will bundle it with your application.

The following is a similar alternative, with only a small change in the syntax, that is statically analyzable and therefore treeshakeable:

```javascript
const foo;
const bar;

export { // notice the lack of default here
  foo,
  bar
};
```

To import the module:
```javascript
import * as foobar from './foobar';

console.log(foobar.foo);
```

Inside the repo is the resulting projects built bundle.js prettified. If you look at the bundle, you'll notice that the string `"Don't keep me, and you won't because I am treeshakeable"` is missing. The module handles it's exports in a statically analyzable way so webpack can safely remove the function entirely from the project.
