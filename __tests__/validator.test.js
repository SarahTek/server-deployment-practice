'use strict';

const {validator} = require('../src/middleware/validator');
describe('validator', () => {
  it('calls next()', () => {
    const req = { method: 'GET', url: '/person', params: {name: 'Sarah'} };
    const res = {};
    const next = jest.fn();
    validator(req, res, next);

    // Assetion
    expect(next).toHaveBeenCalled();
  });
})
