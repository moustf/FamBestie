/* eslint-disable max-len */
import supertest from 'supertest';

import { app } from '../app';
import { buildSeed } from '../database/seed';

beforeAll(() => buildSeed());

describe('Testing logout route', () => {
  it('Should parse the token from the browser when sent with the request.', (done) => {
    supertest(app)
      .post('/api/v1/auth/logout')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic3R1ZGVudCIsIm5hbWUiOiJKb2huIERvZSIsImlkIjoxNTE2MjM5MDIyfQ.ivV7KczMBPLI6JBiY7oAXlcfPuaTVNtd71aTrtgZa8A',
      ])
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.header).not.toHaveProperty('token');
        return done();
      });
  });
});
