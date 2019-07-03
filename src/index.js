'use strict';

const createChart = require('./createChart');
const colorCoding = require('./colorCoding');
const sequenceAlongArray = require('./sequenceAlongArray');
const transposeArray2d = require('./transposeArray2d.js');

function five() {
  return 5;
}

module.exports = {
  five,
  createChart,
  colorCoding,
  sequenceAlongArray,
  transposeArray2d
};
