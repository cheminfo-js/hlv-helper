
'use strict';

const transposeArray2d = require('../transposeArray2d.js');

describe('test transposeArray2d', () => {
  it('test length of transposed array', () => {
    let x = [[1, 2], [3, 4], [5, 6]];
    let y = transposeArray2d(x);
    expect(y).toHaveLength(2);
  });

  it('test transposed array', () => {
    let x = [[1, 2], [3, 4], [5, 6]];
    let y = transposeArray2d(x);
    expect(y).toStrictEqual([[1, 3, 5], [2, 4, 6]]);
  });
});
