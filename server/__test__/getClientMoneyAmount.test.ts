/* eslint-disable max-len */
import supertest from 'supertest';

import { app } from '../app';
import { buildSeed } from '../database/seed';

beforeAll(() => buildSeed());

describe('Testing getTotalAmountOfMoney route for clients', () => {
  it('In the success path, it should return 200 status code.', (done) => {
    supertest(app)
      .get('/api/v1/client/money')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6IkthbWFsIEhhc3NhbiIsInJvbGUiOiJjbGllbnQiLCJpYXQiOjE2NzA0MzA1MjV9.g43RwJczntSutdM9B90V9ga1ujcl3ck0U28olNQwE40',
      ])
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(200);
        return done();
      });
  });

  it('In the success path, it should return 200 status code and the success message.', (done) => {
    supertest(app)
      .get('/api/v1/client/money')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6IkthbWFsIEhhc3NhbiIsInJvbGUiOiJjbGllbnQiLCJpYXQiOjE2NzA0MzA1MjV9.g43RwJczntSutdM9B90V9ga1ujcl3ck0U28olNQwE40',
      ])
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toBe('The amount of money has returned successfully!');
        return done();
      });
  });

  it('In the success path, it should return 200 status code and the data array in the body.', (done) => {
    supertest(app)
      .get('/api/v1/client/money')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6IkthbWFsIEhhc3NhbiIsInJvbGUiOiJjbGllbnQiLCJpYXQiOjE2NzA0MzA1MjV9.g43RwJczntSutdM9B90V9ga1ujcl3ck0U28olNQwE40',
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
      .get('/api/v1/client/money')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6IkthbWFsIEhhc3NhbiIsInJvbGUiOiJjbGllbnQiLCJpYXQiOjE2NzA0MzA1MjV9.g43RwJczntSutdM9B90V9ga1ujcl3ck0U28olNQwE40',
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
      .get('/api/v1/client/money')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTAsIm5hbWUiOiJub09uZSIsInJvbGUiOiJjbGllbnQiLCJpYXQiOjE2NzA0MjYyMzN9.CiFz0Mu5z7PFseFqrvIk7koqZuK_2Q_f0_PCSvNjgys',
      ])
      .expect(404)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toBe('The user you are searching for does not exist!');
        return done();
      });
  });
});
