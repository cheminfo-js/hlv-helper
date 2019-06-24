'use strict';

const chroma = require(chroma);

function colorScale(vector, options) {
  var max = vector.reduce(function (a, b) {
    return Math.max(a, b);
  });

  var min = vector.reduce(function (a, b) {
    return Math.min(a, b);
  });
  if (!options.colors) {
    options.colors = ['blue', 'cyan', 'yellow', 'red'];
  }
  let colorScale = chroma
    .scale(options.colors)
    .domain([min, max]) // should it be min or zero?
    .mode('lch');
  return colorScale;
}

module.exports = colorScale;
