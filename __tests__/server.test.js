// Assertion - check to see if something is what we expect

// expect(true).toBe(true); // SGTM
// expect(3).toBe(5); // ?? sus

// test organization - describe, it
//   describe groups tests
//   it is a single test case
// test setup

const supertest = require('supertest');
const server = require('../src/server');
const request = supertest(server.app);

describe('Node Server', () => {
  it('says hello world', async () => {
    // set up the test so it can do a thing
    // Prepare the server
    // (see above)

    // perform an action, that does the thing
    // request the / route
    const response = await request.get('/'); // The response is a promise

    // assert or expect the result of the action
    // expect the / route to respond with hello
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, World');
  });

  it('returns some data', async () => {
    const response = await request.get('/data');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      name: 'Sarah',
      role: 'student',
    });
  });

  it('should return a 404 bad route', async () => {
    const response = await request.get('/makeError');
    expect(response.status).toBe(404);
  });

  it('should respond 500 on an error', async () => {
    const response = await request.get('/serverError');
    expect(response.status).toBe(500);
  });

//   it('knows about person', async () => {
//     let response = await request.get('/person/name');
//     expect(response.status).toBe(200);
//     expect(response.body.name).toEqual({
//        name: "Sarah",

//   });
});
