/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
import supertest from 'supertest';

import { app } from '../app';
import { buildSeed } from '../database/seed';

beforeAll(() => buildSeed());

describe('Testing the signup route.', () => {
  it('Testing the success path, the controller should return 201 stats code.', (done) => {
    supertest(app)
      .post('/api/v1/auth/signup')
      .send({
        name: 'mustafa1',
        email: 'mustafa1@gmail.com',
        password: 'Root@123',
        passwordConfirmation: 'Root@123',
        location: 'Gaza',
        phone: '0591234567',
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(201);
        return done();
      });
  });

  it('Testing the success path, the controller should return id of the record in the database.', (done) => {
    supertest(app)
      .post('/api/v1/auth/signup')
      .send({
        name: 'mustafa2',
        email: 'mustafa2@gmail.com',
        password: 'Root@123',
        passwordConfirmation: 'Root@123',
        location: 'Gaza',
        phone: '0591234567',
      })
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.data.id).toBeDefined();
        return done();
      });
  });

  it('Testing the success path, the controller should return name of the record in the database.', (done) => {
    supertest(app)
      .post('/api/v1/auth/signup')
      .send({
        name: 'mustafa3',
        email: 'mustafa3@gmail.com',
        password: 'Root@123',
        passwordConfirmation: 'Root@123',
        location: 'Gaza',
        phone: '0591234567',
      })
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.data.name).not.toBe(undefined);
        return done();
      });
  });

  it('Testing the success path, the controller should return role of the record in the database.', (done) => {
    supertest(app)
      .post('/api/v1/auth/signup')
      .send({
        name: 'mustafa4',
        email: 'mustafa4@gmail.com',
        password: 'Root@123',
        passwordConfirmation: 'Root@123',
        location: 'Gaza',
        phone: '0591234567',
      })
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.data.role).toBeDefined();
        return done();
      });
  });

  it('Testing the failure path, the controller should return that the email does already exist.', (done) => {
    supertest(app)
      .post('/api/v1/auth/signup')
      .send({
        name: 'mustafa4',
        email: 'mustafa3@gmail.com',
        password: 'Root@123',
        passwordConfirmation: 'Root@123',
        location: 'Gaza',
        phone: '0591234567',
      })
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toBe('The email does already exist!');
        return done();
      });
  });

  it('Testing the failure path, the controller should return that the user has entered an invalid data.', (done) => {
    supertest(app)
      .post('/api/v1/auth/signup')
      .send({
        name: 'mustafa4',
        email: 'mustafa5@gmail.com',
        password: 'Root',
        passwordConfirmation: 'Root',
        location: 'Gaza',
        phone: '0591234567',
      })
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toBe('The user has entered an invalid data!');
        return done();
      });
  });
});
