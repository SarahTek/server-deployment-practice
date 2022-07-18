const { Plant } = require('../src/models/plant');

describe('Plant', () => {
  it('logs via console.log', () => {
    jest.spyOn(console, 'log').mockImplementation();
    const req = { method: 'GET', url: '/' };
    const res = {};
    const next = () => {};

    Plant(req, res, next);
    expect(console.log).toHaveBeenCalledWith('GET', '/');
  });
  it( 'calls', () => {
    const req = { method: 'GET', url: '/' };
    const res = {};
    const next = jest.fn();
    Plant(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});
