'use strict';

/**
 * Project the dataset into the PCA space
 * @param {Array} array a 2d array to transpose
 * @return {Object} a tranposed array
 */

function transposeArray2d(array) {
  return array[0].map((col, i) => array.map((row) => row[i]));
}

module.exports = transposeArray2d;
