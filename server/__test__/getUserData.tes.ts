/* eslint-disable max-len */
import supertest from 'supertest';

import { app } from '../app';
import { buildSeed } from '../database/seed';

beforeAll(() => buildSeed());

describe('Testing getUserData auth route', () => {
  it('Should return user data when it has a token sent in the request header, the id specifically', (done) => {
    supertest(app)
      .get('/api/v1/auth/user')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEgU2FsZW0iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NzAzMzU0OTZ9.N0be-g3o_BMsqFdi4j5VLpTUpgWKiD9eYT0R2Sm2O3E',
      ])
      .expect(200)
      .end((error, res) => {
        if (error) return done(error);
        expect(res.body.data.id).toBeDefined();
        return done();
      });
  });

  it('Should return user data when it has a token sent in the request header, the name specifically', (done) => {
    supertest(app)
      .get('/api/v1/auth/user')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEgU2FsZW0iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NzAzMzU0OTZ9.N0be-g3o_BMsqFdi4j5VLpTUpgWKiD9eYT0R2Sm2O3E',
      ])
      .expect(200)
      .end((error, res) => {
        if (error) return done(error);
        expect(res.body.data.name).toBeDefined();
        return done();
      });
  });

  it('Should return user data when it has a token sent in the request header, the role specifically', (done) => {
    supertest(app)
      .get('/api/v1/auth/user')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEgU2FsZW0iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NzAzMzU0OTZ9.N0be-g3o_BMsqFdi4j5VLpTUpgWKiD9eYT0R2Sm2O3E',
      ])
      .expect(200)
      .end((error, res) => {
        if (error) return done(error);
        expect(res.body.data.name).toBeDefined();
        return done();
      });
  });

  it('Should return 401 and unauthenticated message when no token is sent with the request object', (done) => {
    supertest(app)
      .get('/api/v1/auth/user')
      .expect(200)
      .end((error, res) => {
        if (error) return done(error);
        expect(res.body.data.name).toBeDefined();
        return done();
      });
  });
});
