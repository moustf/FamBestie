import supertest from 'supertest';

import { app } from '../app';
import { buildSeed } from '../database/seed';

beforeAll(() => buildSeed());

describe('Testing login route', () => {
  it("In the success path, it should return 200 status code if the user's email and password are matching", (done) => {
    supertest(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'hani@gmail.com',
        password: 'Client@123',
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(200);
        return done();
      });
  });

  it("In the success path, it should return an id in the data if the user's email and password are matching", (done) => {
    supertest(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'hani@gmail.com',
        password: 'Client@123',
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.data.id).toBeDefined();
        return done();
      });
  });

  it("In the success path, it should return a name in the data if the user's email and password are matching", (done) => {
    supertest(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'hani@gmail.com',
        password: 'Client@123',
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.data.name).not.toBe(undefined);
        return done();
      });
  });

  it("In the success path, it should return a role in the data if the user's email and password are matching", (done) => {
    supertest(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'hani@gmail.com',
        password: 'Client@123',
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.data.role).not.toBe(undefined);
        return done();
      });
  });

  it("In the failure path, it should return an invalid password if the user's password does not match the criteria", (done) => {
    supertest(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'sami@gmail.com',
        password: 'Client',
      })
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).not.toBe('Invalid email or password!');
        return done();
      });
  });

  it("In the failure path, it should return an invalid email if the user's email does not match the criteria", (done) => {
    supertest(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'sami@gmail',
        password: 'Client@123',
      })
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toBe('Invalid email or password!');
        return done();
      });
  });

  it("In the failure path, it should return a wrong password if the user's password does not match the one in the DB", (done) => {
    supertest(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'sami@gmail.com',
        password: 'Client@567',
      })
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).not.toBe('Wrong password!');
        return done();
      });
  });
});
