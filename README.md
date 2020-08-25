# Testing JavaScript
This repository contains a bunch of examples and explanations around the common types of testing;

- **Unit** - these types of tests are designed to test small pieces of functionality in isolated - in modern JS applications these often map to modules/components and helper functions. Unit tests are usually the most common types of tests in JS applications.
- **Integration** - these types of tests are intended to test how modules work not in isolation, but when they're combined together to perform a specific to task.
- **Acceptance/End-to-End/Functional** - these tests are designed to test the functionality of an entire piece of an app, i.e. they test a particular workflow and determine if the flow is robust - a good example of this is a checkout process. 

When an application utilises all of the above the stability of the application can be verified at all levels; the individual pieces, the pieces working together, and the entire application.


### Mocks
The idea of mocking is that the engineer mocks a particular piece of code that is provided by a dependency, thus allowing the engineer to test their code without having to worry about the third-party code; **an alternate implementation of a dependency controlled by the engineer(s) writing the test(s)**.


### Stubs 
The idea of stubs is very similar to mocks; you are replacing code from elsewhere in order to make your tests more predictable - stubs don't replace an entire dependency, instead the 'stub out' a particular piece of functionality from a dependency, replacing it with something that mimics the original functionality, but without needing to do something complex like say a call to the database

