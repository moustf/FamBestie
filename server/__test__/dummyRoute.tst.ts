/* eslint-disable no-undef */
import supertest from 'supertest';
import app from '../app';

describe('Testing if the dummy route works in this server setup', () => {
  test('This test is to ensure the server is working', (done) => {
    supertest(app)
      .get('/api/v1/dummy')
      .expect(200)
      .end((error, response) => {
        if (error) return done(error);
        expect(response.body.msg).toBe('The app is running correctly!');
        return done();
      });
  });
});
