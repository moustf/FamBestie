import supertest from 'supertest';

import { app } from '../app';
import { buildSeed } from '../database/seed';

beforeAll(() => buildSeed());

describe('Testing doesEmailExist route', () => {
  it('In the success case, the route should return 202, accepted status code.', (done) => {
    supertest(app)
      .get('/api/v1/user/check?email=sayed@gmail.com')
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(202);
        return done();
      });
  });

  it('In the success case, the route should return a message that tells that the user does not exist.', (done) => {
    supertest(app)
      .get('/api/v1/user/check?email=sayed@gmail.com')
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toBe('The user does not exist, you can create an account!');
        return done();
      });
  });

  it('In the success case, the route should return a message that tells that the user does not exist with status code.', (done) => {
    supertest(app)
      .get('/api/v1/user/check?email=sayed@gmail.com')
      .expect(202)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toBe('The user does not exist, you can create an account!');
        return done();
      });
  });

  it('In the failure case, the route should return 302, found status code.', (done) => {
    supertest(app)
      .get('/api/v1/user/check?email=mustafa@gmail.com')
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(302);
        return done();
      });
  });

  it('In the success case, the route should return a message that tells that the user does already exist.', (done) => {
    supertest(app)
      .get('/api/v1/user/check?email=mustafa@gmail.com')
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toBe('The user does already exist!');
        return done();
      });
  });
});
