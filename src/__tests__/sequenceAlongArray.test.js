'use strict';

const sequenceAlongArray = require('../sequenceAlongArray.js');

describe('test sequenceAlongArray', () => {
  it('test length sequence along an array', () => {
    let x = [1, 2, 3];
    let y = sequenceAlongArray(x);
    expect(y).toHaveLength(3);
  });

  it('test sequence along an array', () => {
    let x = [1, 2, 3];
    let y = sequenceAlongArray(x);
    expect(y).toStrictEqual(x);
  });
});
