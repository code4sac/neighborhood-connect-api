//const express = require('express');

jest.mock('./server/controllers/priorityRouter', () => { return {}; });
jest.mock('./server/controllers/orgRouter', () => { return {}; });
jest.mock('./server/controllers/userRouter', () => { return {};});
jest.mock('./server/controllers/typeRouter', () => { return {};});
jest.mock('./server/controllers/actionsRouter', () => { return {};});
//jest.mock('morgan', () => jest.fn((req, res, next) => next()));

const app = require('./app')
// const request = require('request-promise');
const supertest = require('supertest')
const { JsonWebTokenError } = require('jsonwebtoken')
const request = supertest(app)
describe('Who am i', () => {
  let mockJwt = jest.fn();
  beforeEach(() => {
    
  })

  jest.mock('pg', () => {
    const mClient = {
      connect: jest.fn(),
      query: jest.fn(),
      end: jest.fn(),
    };
    return { Client: jest.fn(() => mClient) };
  });

  afterAll(async () => {
    await request.close();
  });
  /**
   *  Try http://jwt.io  and on the debugger page, payload
   *  {"iat": 1516239022, "name": "John Doe", "sub": "1234567890"} 
   * and specify "secret" in the HMAC256 sewcret field
   */ 
  
 const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.XbPfbIHMI6arZ3Y922BhjWgQzWXcXNrz0ogtVhfEd2o";
 it('responds with the user when queried', async done => {
    const response = await request.get('/whoami.json')
    .set('Cookie', ['jwt=' + token])
     
    expect(response.status).toBe(200);
    expect(response.name).toBe('John Doe!')
    done();
  })
})