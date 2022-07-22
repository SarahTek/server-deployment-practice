const supertest = require ('supertest');
const { db } = require('../src/db');
const server = require('../src/server');
const request = supertest(server.app);

describe('Movie', () => {
  beforeEach(async () => {
    await db.sync();
  });

  it ('create a movie', async () => {
    let response = await request.post ('./movie').send({
      nameOfMovie: 'House of Cards',
      typeOfMovie: 'Politics and Drama',
      releaseDate: new Date(2016),
    });
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      nameOfMovie: 'House of Cards',
      typeOfMovie: 'Politics and Drama',
      releaseDate: new Date(2016),
    });
  });


  it( 'gets a movie with their Id', async () => {
    let MovieReq = await request.post('/movie').send({
      nameOfMovie: 'House of Cards',
      typeOfMovie: 'Politics and Drama',
      releaseDate: 2016,
    });
    expect(MovieReq.status).toBe(200);
    const newId = MovieReq.body.id;
    let newRes = await request.get(`/movie/${newId}`);
    expect(newRes.status).toBe(200);
    expect(newRes.body).toMatchObject({
      id: newId,
      nameOfMovie: 'House of Cards',
      typeOfMovie: 'Politics and Drama',
      releaseDate: new Date(2016),
    });



  });
});
