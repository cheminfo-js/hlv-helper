'use strict';

/**
 * Create a sequence of length of x Array
 * @param {Array} x an array
 * @return {Array} an sequence of same length than x
 */

function sequenceAlongArray(x) {
  let res = x.map((x, i) => i + 1);
  return res;
}

module.exports = sequenceAlongArray;
