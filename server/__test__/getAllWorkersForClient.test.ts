/* eslint-disable max-len */
import supertest from 'supertest';

import { app } from '../app';
import { buildSeed } from '../database/seed';

beforeAll(() => buildSeed());

describe('Testing getAllWorkersForClient route', () => {
  it('In the success path, it should return 200 status code.', (done) => {
    supertest(app)
      .get('/api/v1/admin/client/2/workers')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEgU2FsZW0iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NzAzMzU0OTZ9.N0be-g3o_BMsqFdi4j5VLpTUpgWKiD9eYT0R2Sm2O3E',
      ])
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(200);
        return done();
      });
  });

  it('In the success path, it should return 200 status code and the success message.', (done) => {
    supertest(app)
      .get('/api/v1/admin/client/2/workers')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEgU2FsZW0iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NzAzMzU0OTZ9.N0be-g3o_BMsqFdi4j5VLpTUpgWKiD9eYT0R2Sm2O3E',
      ])
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toBe('The clients were returned successfully!');
        return done();
      });
  });

  it('In the success path, it should return 200 status code and the data array in the body.', (done) => {
    supertest(app)
      .get('/api/v1/admin/client/2/workers')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEgU2FsZW0iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NzAzMzU0OTZ9.N0be-g3o_BMsqFdi4j5VLpTUpgWKiD9eYT0R2Sm2O3E',
      ])
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(Array.isArray(res.body.data)).toBe(true);
        return done();
      });
  });

  it('In the success path, it should return 200 status code and the first object in the data array in the body.', (done) => {
    supertest(app)
      .get('/api/v1/admin/client/2/workers')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEgU2FsZW0iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NzAzMzU0OTZ9.N0be-g3o_BMsqFdi4j5VLpTUpgWKiD9eYT0R2Sm2O3E',
      ])
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(typeof res.body.data[0]).toBe('object');
        return done();
      });
  });

  it('In the failure path, it should return 404 status code and not found msg.', (done) => {
    supertest(app)
      .get('/api/v1/admin/client/30/workers')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEgU2FsZW0iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NzAzMzU0OTZ9.N0be-g3o_BMsqFdi4j5VLpTUpgWKiD9eYT0R2Sm2O3E',
      ])
      .expect(404)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toBe('The user you are searching for does not exist!');
        return done();
      });
  });
});
