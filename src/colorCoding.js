'use strict';

/**
 * get an array of color codes
 * @param {Array} vector an array to be colored
 * @param {function} options options object (color)
 * @return {Array} an array of same length as vector with color codes
 */

const colorScale = require('./colorScale.js');

const defaultOptions = { color: ['red', 'blue'] };

function colorCoding(vector, options) {
  options = Object.assign({}, defaultOptions, options);
  let cs = colorScale(vector, { color: options.color });
  let color = vector.map((x) => cs(x).toString());
  return color;
}

module.exports = colorCoding;
