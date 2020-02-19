'use strict';

/**
 * Create a sequence of length of x Array
 * @param {Array} x an array
 * @return {Array} an sequence of same length than x
 */

function sequenceAlongArray(x) {
  return x.map((e, i) => i + 1);
}

module.exports = sequenceAlongArray;
