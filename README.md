# Mock external functions when unit testing with Supertest+Jest

[Supertest](https://www.npmjs.com/package/supertest) is great for integration tests but can be harder to use for unit tests. In this example, I was struggling to mock the `getData` function in the MyController class: I could mock the function easily enough in Jest, but the express app was not picking up the mock. 

My solution was to use dependency injection so that I could pass the mocked controller to the router - after I did this, my mocks were working inside the app.

`router.spec.ts` contains an integration test example, while `mock_router.spec.ts` contains my unit test with mocking.

## How to install and set up

Assuming you have npm installed:

```
git clone https://github.com/edpackard-work/jest-supertest-mocking.git
cd jest-supertest-mocking
npm install
```

To run the tests:

```
npm test
```

Note the console logs which show the mocked version does not hit the controller class.