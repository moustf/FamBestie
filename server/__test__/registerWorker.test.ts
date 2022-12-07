/* eslint-disable max-len */
import supertest from 'supertest';

import { app } from '../app';
import { buildSeed } from '../database/seed';

beforeAll(() => buildSeed());

describe('Testing register worker route', () => {
  it('In the success path, it should return the 201 status code.', (done) => {
    supertest(app)
      .post('/api/v1/worker/register')
      .send({
        name: 'Mohammed',
        email: 'mohammed@gmail.com',
        gender: 'male',
        phone: '0590000000',
        location: 'Gaza',
        dateOfBirth: '2018-09-24',
        yearsOfExperience: 2,
        specialty: 'Trainer',
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(201);
        return done();
      });
  });

  it("In the success path, it should return 'The worker has registered successfully!' message.", (done) => {
    supertest(app)
      .post('/api/v1/worker/register')
      .send({
        name: 'Hameed',
        email: 'hameed@gmail.com',
        gender: 'male',
        phone: '0590000000',
        location: 'Gaza',
        dateOfBirth: '2018-09-24',
        yearsOfExperience: 2,
        specialty: 'Trainer',
      })
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toBe('The worker has registered successfully!');
        return done();
      });
  });

  it("In the success path, it should return worker's id.", (done) => {
    supertest(app)
      .post('/api/v1/worker/register')
      .send({
        name: 'Kamal',
        email: 'kamal@gmail.com',
        gender: 'male',
        phone: '0590000000',
        location: 'Gaza',
        dateOfBirth: '2018-09-24',
        yearsOfExperience: 2,
        specialty: 'Trainer',
      })
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.data.id).toBeDefined();
        return done();
      });
  });

  it("In the failure path, it should return 'The worker has entered an invalid data!' message.", (done) => {
    supertest(app)
      .post('/api/v1/worker/register')
      .send({
        name: 'Kamal',
        email: 'kamal',
        gender: 'male',
        phone: '0590000000',
        location: 'Gaza',
        dateOfBirth: '2018-09-24',
        yearsOfExperience: 2,
        specialty: 'Trainer',
      })
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toBe('The worker has entered an invalid data!');
        return done();
      });
  });

  it('In the failure path, it should return the 403 status code because the user already exists.', (done) => {
    supertest(app)
      .post('/api/v1/worker/register')
      .send({
        name: 'Mohammed',
        email: 'mohammed@gmail.com',
        gender: 'male',
        phone: '0590000000',
        location: 'Gaza',
        dateOfBirth: '2018-09-24',
        yearsOfExperience: 2,
        specialty: 'Trainer',
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(403);
        return done();
      });
  });
});
