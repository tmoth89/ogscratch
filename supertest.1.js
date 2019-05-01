const request = require('supertest');
const fs = require('fs');
const path = require('path');

const testJsonFile = path.resolve(__dirname, '../server/db/markets.test.json');

const server = 'http://localhost:3000';

/**
 * Read the docs! https://www.npmjs.com/package/supertest
 */
describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      // Note that we return the evaluation of `request` here! It evaluates to
      // a promise, so Jest knows not to say this test passes until that
      // promise resolves. See https://jestjs.io/docs/en/asynchronous
      it('responds with 200 status and text/html content type', () => request(server)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200));
    });
  });

  // describe('/markets', () => {
  //   beforeAll((done) => {
  //     fs.writeFile(testJsonFile, JSON.stringify([
  //       {
  //         location: 'los angeles',
  //         cards: 8,
  //       },
  //       {
  //         location: 'venice',
  //         cards: 8,
  //       },
  //       {
  //         location: 'culver city',
  //         cards: 8,
  //       },
  //     ]), done);
  //   });

  //   afterAll((done) => {
  //     fs.writeFile(testJsonFile, JSON.stringify([]), done);
  //   });

  //   describe('GET', () => {
  //     it('responds with 200 status and application/json content type', () => request(server)
  //       .get('/markets')
  //       .expect('Content-Type', /application\/json/)
  //       .expect(200));

  //     // For this test, you'll need to inspect the body of the response and
  //     // ensure it contains the markets list. Check the markets.dev.json file
  //     // in the dev database to get an idea of what shape you're expecting.

  //     it('markets from "DB" json are in body of response', () => request(server)
  //       .get('/markets')
  //       .expect('Content-Type', /application\/json/)
  //       .expect((res) => {
  //         expect(res.body).toEqual([
  //           {
  //             location: 'los angeles',
  //             cards: 8,
  //           },
  //           {
  //             location: 'venice',
  //             cards: 8,
  //           },
  //           {
  //             location: 'culver city',
  //             cards: 8,
  //           },
  //         ]);
  //       })
  //       .expect(200));
  //   });

  //   describe('PUT', () => {
  //     it('responds with 200 status and application/json content type', () => request(server)
  //       .put('/markets')
  //       .send([{
  //         location: 'los angeles',
  //         cards: 8,
  //       },
  //       {
  //         location: 'venice',
  //         cards: 8,
  //       },
  //       {
  //         location: 'culver city',
  //         cards: 8,
  //       }])
  //       .expect('Content-Type', /application\/json/)
  //       .expect(200));

  //     it('responds with the updated market list', () => request(server)
  //       .put('/markets')
  //       .send([{
  //         location: 'los angeles',
  //         cards: 8,
  //       },
  //       {
  //         location: 'venice',
  //         cards: 8,
  //       },
  //       {
  //         location: 'culver city',
  //         cards: 8,
  //       }])
  //       .expect('Content-Type', /application\/json/)
  //       .expect([{
  //         location: 'los angeles',
  //         cards: 8,
  //       },
  //       {
  //         location: 'venice',
  //         cards: 8,
  //       },
  //       {
  //         location: 'culver city',
  //         cards: 8,
  //       }]));

  //     it('responds to invalid request with 400 status and error message in body', () => request(server)
  //       .put('/markets')
  //       .send('12345')
  //       .expect('Content-Type', /application\/json/)
  //       .expect(400)
  //       .expect((res) => {
  //         expect(res.body).toEqual({ error: 'Error: Market list must be an array, received object' });
  //       }));
  //   });
  // });
});
