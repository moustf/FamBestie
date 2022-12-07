/* eslint-disable max-len */
import supertest from 'supertest';

import { app } from '../app';
import { buildSeed } from '../database/seed';

beforeAll(() => buildSeed());

describe('Testing get all workers for admin route', () => {
  it('In the success path, it should return 200 status code.', (done) => {
    supertest(app)
      .get('/api/v1/admin/workers')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEgU2FsZW0iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NzAzMzU0OTZ9.N0be-g3o_BMsqFdi4j5VLpTUpgWKiD9eYT0R2Sm2O3E',
      ])
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(200);
        return done();
      });
  });

  it('In the success path, it should return 200 status code and returned successfully message.', (done) => {
    supertest(app)
      .get('/api/v1/admin/workers')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEgU2FsZW0iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NzAzMzU0OTZ9.N0be-g3o_BMsqFdi4j5VLpTUpgWKiD9eYT0R2Sm2O3E',
      ])
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toBe('Workers returned successfully!');
        return done();
      });
  });

  it('In the success path, it should return 200 status code and the data.', (done) => {
    supertest(app)
      .get('/api/v1/admin/workers')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEgU2FsZW0iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NzAzMzU0OTZ9.N0be-g3o_BMsqFdi4j5VLpTUpgWKiD9eYT0R2Sm2O3E',
      ])
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.data).toBeDefined();
        return done();
      });
  });

  it('In the failure path, it should return 401 status code and unauthorized! message.', (done) => {
    supertest(app)
      .get('/api/v1/admin/workers')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IkhhbmkgSWJyYWhpbSIsInJvbGUiOiJjbGllbnQiLCJpYXQiOjE2NzAzMzc4NjZ9.FikBp-nbm7YvlrDNzee2lHZ1sdRW_CJJyHXJ_2q64_g',
      ])
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toBe('Unauthorized!');
        return done();
      });
  });
});
