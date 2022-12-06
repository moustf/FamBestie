/* eslint-disable max-len */
/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
import supertest from 'supertest';

import { app } from '../app';
import { buildSeed } from '../database/seed';

beforeAll(() => buildSeed());

describe('Testing getAllJobs route', () => {
  it('In the success path, it should return 200 status code.', (done) => {
    supertest(app)
      .get('/api/v1/admin/jobs')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEgU2FsZW0iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NzAzMzU0OTZ9.N0be-g3o_BMsqFdi4j5VLpTUpgWKiD9eYT0R2Sm2O3E',
      ])
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(200);
        return done();
      });
  });

  it('In the success path, it should return 200 status code a message.', (done) => {
    supertest(app)
      .get('/api/v1/admin/jobs')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEgU2FsZW0iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NzAzMzU0OTZ9.N0be-g3o_BMsqFdi4j5VLpTUpgWKiD9eYT0R2Sm2O3E',
      ])
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toBe('The jobs and their related data has been returned successfully!');
        return done();
      });
  });

  it('In the success path, it should return 200 status code and the data array.', (done) => {
    supertest(app)
      .get('/api/v1/admin/jobs')
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

  it('In the success path, it should return 200 status code and an object in the data array.', (done) => {
    supertest(app)
      .get('/api/v1/admin/jobs')
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

  it('In the failure path, it should return 401 status and unauthorized message.', (done) => {
    supertest(app)
      .get('/api/v1/admin/jobs')
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
