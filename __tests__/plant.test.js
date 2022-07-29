// const { response } = require('express');
const supertest = require ('supertest');
const { db } = require('../src/db');
const server = require('../src/server');
const request = supertest(server.app);

describe('Plant', () => {
  beforeEach(async () => {
    await db.sync();
  });

  it ('create a plant', async () => {
    let response = await request.post('/plant').send({
      name: 'strelitzia nicolai',
      color: 'green',
      size: 'medium',

    });
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      name: 'strelitzia nicolai',
      color: 'green',
      size: 'medium',
    });
  });

  it( 'gets a plant with their Id', async () => {
    let plantReq = await request.post('/plant').send({
      name: 'strelitzia nicolai',
      color: 'green',
      size: 'medium',
    });
    expect(plantReq.status).toBe(200);
    const newId = plantReq.body.id;
    let newRes = await request.get(`/plant/${newId}`);
    expect(newRes.status).toBe(200);
    expect(newRes.body).toMatchObject({
      id: newId,
      name: 'strelitzia nicolai',
      color: 'green',
      size: 'medium',
    });

    it ('update a plant with their id', async () => {

    });

    it ('deleted a plant', async () => {
      const newId = plantReq.body.id;
      const deletedPlant = await request.delete(newId);
      expect(deletedPlant.status).toBe(200);
    });




  });
});
