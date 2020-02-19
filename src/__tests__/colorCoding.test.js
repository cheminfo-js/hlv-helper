'use strict';

const colorCoding = require('../colorCoding.js');

describe('test colorCoding', () => {
  it('test colorCoding to be an array', () => {
    let x = [1, 2];
    let cc = colorCoding(x, { color: ['red', 'blue'] });
    expect(cc[0]).toBe('#ff0000');
    expect(cc[1]).toBe('#0000ff');
  });
});
