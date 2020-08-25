# Unit Testing 
These types of tests are designed to test small pieces of functionality in isolation - in modern JS applications these often map to modules/components and helper functions. Unit tests are usually the most common types of tests in JS applications.

The following is a basic example of a unit test:
```
const add = (x, y) => {
  return x + y;
}

const test = add(2, 2) === 4; // true

console.log('Expected to return true:', test) 

```

It tests a small piece of code(the unit), and verifies that it is doing exactly what it should be doing based on the conditions set in the `test` variable.