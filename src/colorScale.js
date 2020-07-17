'use strict';

/**
 * @param {Array} vector a vector to be colored (may be a range)
 * @param {Object} options an object with options (color)
 * @return {Function} a function
 */

const chroma = require('chroma-js');

let defaultOptions = { color: ['blue', 'cyan', 'yellow', 'red'] };

function colorScale(vector, options) {
  if (typeof vector[0] !== 'number') {
    throw new TypeError('colorScale only accepts arrays of number or a range');
  }

  options = Object.assign({}, defaultOptions, options);
  let max = vector.reduce(function (a, b) {
    return Math.max(a, b);
  });

  let min = vector.reduce(function (a, b) {
    return Math.min(a, b);
  });

  let colScale = chroma
    .scale(options.color)
    .domain([min, max]) // should it be min or zero?
    .mode('lch');
  return colScale;
}

module.exports = colorScale;
