const { Plant } = require('../src/db');
const { movie } = require('../src/models/movie');

describe('movie', () => {
  it('logs via console.log', () => {
    jest.spyOn(console, 'log').mockImplementation();
    const req = { method: 'GET', url: '/' };
    const res = {};
    const next = () => {};

    movie(req, res, next);
    expect(console.log).toHaveBeenCalledWith('GET', '/');
  });
  it('calls next()', () => {
    const req = { method: 'GET', url: '/' };
    const res = {};
    const next = jest.fn();
    Plant(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});
