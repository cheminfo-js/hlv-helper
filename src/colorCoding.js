'use strict';

function colorCoding(vector, colorScale) {
  let color = vector.map((x) => colorScale(x));
  return color;
}

module.exports = colorCoding;
